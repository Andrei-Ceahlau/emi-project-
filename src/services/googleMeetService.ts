import { Webinar, WebinarRegistration } from '../types/webinar';

export interface GoogleMeetLink {
  id: string;
  title: string;
  startTime: string;
  duration: number; // în minute
  joinUrl: string;
  meetingId: string;
  passcode?: string;
}

export interface GoogleMeetSettings {
  title: string;
  startTime: string;
  duration: number;
  description?: string;
  attendees?: string[];
  sendNotifications?: boolean;
}

class GoogleMeetService {
  constructor() {
    // Variabilele vor fi folosite când se va integra cu Google Calendar API
    // this.apiKey = import.meta.env.VITE_GOOGLE_API_KEY || '';
    // this.calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID || 'primary';
  }

  /**
   * Creează un link Google Meet pentru webinar
   */
  async createMeetLink(webinar: Webinar): Promise<GoogleMeetLink> {
    try {
      // Simulare creare link Google Meet
      // În producție, aici ar fi integrarea cu Google Calendar API
      const meetingId = this.generateMeetingId();
      const joinUrl = `https://meet.google.com/${meetingId}`;
      
      const meetLink: GoogleMeetLink = {
        id: `meet_${webinar.id}`,
        title: webinar.title,
        startTime: `${webinar.date}T${webinar.time}:00`,
        duration: this.parseDuration(webinar.duration),
        joinUrl,
        meetingId,
        passcode: this.generatePasscode()
      };

      // Salvează link-ul în webinar
      await this.updateWebinarWithMeetLink(webinar.id, meetLink);

      return meetLink;
    } catch (error) {
      console.error('Eroare la crearea link-ului Google Meet:', error);
      throw new Error('Nu s-a putut crea link-ul pentru webinar');
    }
  }

  /**
   * Generează un ID de meeting unic
   */
  private generateMeetingId(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 3; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result += '-';
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result += '-';
    for (let i = 0; i < 3; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Generează un cod de acces pentru meeting
   */
  private generatePasscode(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  /**
   * Parsează durata din string în minute
   */
  private parseDuration(duration: string): number {
    const match = duration.match(/(\d+)\s*(h|min)/i);
    if (match) {
      const value = parseInt(match[1]);
      const unit = match[2].toLowerCase();
      return unit === 'h' ? value * 60 : value;
    }
    return 60; // default 1 oră
  }

  /**
   * Actualizează webinar-ul cu link-ul Google Meet
   */
  private async updateWebinarWithMeetLink(webinarId: string, meetLink: GoogleMeetLink): Promise<void> {
    // În producție, aici ar fi actualizarea în baza de date
    console.log(`Webinar ${webinarId} actualizat cu link Google Meet:`, meetLink.joinUrl);
  }

  /**
   * Creează un eveniment în Google Calendar cu Google Meet
   */
  async createCalendarEvent(webinar: Webinar, meetLink: GoogleMeetLink): Promise<void> {
    try {
      const event = {
        summary: webinar.title,
        description: webinar.description,
        start: {
          dateTime: meetLink.startTime,
          timeZone: 'Europe/Bucharest'
        },
        end: {
          dateTime: this.addMinutes(meetLink.startTime, meetLink.duration),
          timeZone: 'Europe/Bucharest'
        },
        conferenceData: {
          createRequest: {
            requestId: `meet_${webinar.id}`,
            conferenceSolutionKey: {
              type: 'hangoutsMeet'
            }
          }
        },
        attendees: [], // Se vor adăuga participanții înscriși
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 }, // 24h înainte
            { method: 'popup', minutes: 60 } // 1h înainte
          ]
        }
      };

      // În producție, aici ar fi apelul către Google Calendar API
      console.log('Eveniment Google Calendar creat:', event);
    } catch (error) {
      console.error('Eroare la crearea evenimentului în calendar:', error);
    }
  }

  /**
   * Adaugă minute la o dată
   */
  private addMinutes(dateTime: string, minutes: number): string {
    const date = new Date(dateTime);
    date.setMinutes(date.getMinutes() + minutes);
    return date.toISOString();
  }

  /**
   * Generează link-uri Google Meet pentru toate webinarele viitoare
   */
  async generateMeetLinksForUpcomingWebinars(webinars: Webinar[]): Promise<Webinar[]> {
    const upcomingWebinars = webinars.filter(w => w.status === 'upcoming');
    
    for (const webinar of upcomingWebinars) {
      if (!webinar.zoomLink) { // Dacă nu are deja un link
        try {
          const meetLink = await this.createMeetLink(webinar);
          webinar.zoomLink = meetLink.joinUrl; // Folosim zoomLink pentru Google Meet
          
          // Creează evenimentul în calendar
          await this.createCalendarEvent(webinar, meetLink);
        } catch (error) {
          console.error(`Eroare la generarea link-ului pentru webinar ${webinar.id}:`, error);
        }
      }
    }

    return webinars;
  }

  /**
   * Trimite link-ul Google Meet participanților
   */
  async sendMeetLinkToParticipants(webinar: Webinar, participants: WebinarRegistration[]): Promise<void> {
    if (!webinar.zoomLink) {
      throw new Error('Webinar-ul nu are un link Google Meet');
    }

    // Trimite email cu link-ul către toți participanții
    for (const participant of participants) {
      try {
        await this.sendMeetLinkEmail(participant, webinar);
      } catch (error) {
        console.error(`Eroare la trimiterea link-ului către ${participant.email}:`, error);
      }
    }
  }

  /**
   * Trimite email cu link-ul Google Meet
   */
  private async sendMeetLinkEmail(participant: WebinarRegistration, webinar: Webinar): Promise<void> {
    const emailData = {
      type: 'link',
      data: {
        name: participant.name,
        email: participant.email,
        webinarTitle: webinar.title,
        webinarLink: webinar.zoomLink,
        meetingId: this.extractMeetingId(webinar.zoomLink || ''),
        startTime: webinar.time,
        date: webinar.date
      }
    };

    // Folosește funcția Netlify existentă pentru trimiterea email-urilor
    const response = await fetch('/.netlify/functions/send-webinar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      throw new Error('Eroare la trimiterea email-ului cu link-ul Google Meet');
    }
  }

  /**
   * Extrage ID-ul meeting-ului din URL
   */
  private extractMeetingId(url: string): string {
    const match = url.match(/meet\.google\.com\/([a-z-]+)/);
    return match ? match[1] : '';
  }

  /**
   * Verifică dacă un link Google Meet este valid
   */
  async validateMeetLink(meetLink: string): Promise<boolean> {
    try {
      // Verifică formatul URL-ului Google Meet
      const meetUrlPattern = /^https:\/\/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/;
      return meetUrlPattern.test(meetLink);
    } catch {
      return false;
    }
  }
}

export const googleMeetService = new GoogleMeetService(); 