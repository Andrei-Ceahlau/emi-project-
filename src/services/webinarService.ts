import { Webinar, WebinarRegistration } from '../types/webinar';
import { googleMeetService } from './googleMeetService';

// Simulare API - în producție ar fi endpoint-uri reale
class WebinarService {
  private webinars: Webinar[] = [
    {
      id: '1',
      title: 'Detoxifierea naturală cu Aloe Vera',
      description: 'Învață cum să detoxifici organismul în mod natural folosind puterea aloe vera.',
      date: '2024-01-25',
      time: '19:00',
      duration: '90 minute',
      maxParticipants: 100,
      currentParticipants: 45,
      status: 'upcoming',
      topics: ['Detoxifiere naturală', 'Beneficii aloe vera', 'Programe de curățare']
    },
    {
      id: '2',
      title: 'Nutriția optimă pentru energie',
      description: 'Descoperă cum să îți optimizezi nutriția pentru energie maximă.',
      date: '2024-02-01',
      time: '19:00',
      duration: '90 minute',
      maxParticipants: 100,
      currentParticipants: 23,
      status: 'upcoming',
      topics: ['Nutriție optimă', 'Suplimente naturale', 'Energie și vitalitate']
    },
    {
      id: '3',
      title: 'Îngrijirea naturală a pielii',
      description: 'Secretele unei piele sănătoase și radiente cu produse naturale.',
      date: '2024-02-08',
      time: '19:00',
      duration: '90 minute',
      maxParticipants: 100,
      currentParticipants: 67,
      status: 'upcoming',
      topics: ['Îngrijirea pielii', 'Produse naturale', 'Anti-aging natural']
    }
  ];

  private registrations: WebinarRegistration[] = [];

  // Obține toate webinarele
  async getWebinars(): Promise<Webinar[]> {
    // Simulare delay API
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.webinars.filter(w => w.status === 'upcoming');
  }

  // Obține un webinar specific
  async getWebinar(id: string): Promise<Webinar | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.webinars.find(w => w.id === id) || null;
  }

  // Înscriere la webinar
  async registerForWebinar(webinarId: string, registration: {
    name: string;
    email: string;
    phone: string;
  }): Promise<WebinarRegistration> {
    const webinar = this.webinars.find(w => w.id === webinarId);
    if (!webinar) {
      throw new Error('Webinar-ul nu a fost găsit');
    }

    if (webinar.currentParticipants >= webinar.maxParticipants) {
      throw new Error('Webinar-ul este complet');
    }

    // Verifică dacă utilizatorul este deja înscris
    const existingRegistration = this.registrations.find(
      r => r.webinarId === webinarId && r.email === registration.email
    );
    if (existingRegistration) {
      throw new Error('Ești deja înscris la acest webinar');
    }

    const newRegistration: WebinarRegistration = {
      id: Date.now().toString(),
      webinarId,
      name: registration.name,
      email: registration.email,
      phone: registration.phone,
      registrationDate: new Date().toISOString(),
      status: 'confirmed',
      reminderSent: false,
      linkSent: false
    };

    this.registrations.push(newRegistration);
    
    // Actualizează numărul de participanți
    webinar.currentParticipants++;

    // Trimite email-ul de confirmare prin Netlify Function
    await this.sendConfirmationEmail(newRegistration, webinar);

    return newRegistration;
  }

  // Trimite email de confirmare prin Netlify Function
  private async sendConfirmationEmail(registration: WebinarRegistration, webinar: Webinar): Promise<void> {
    try {
      const response = await fetch('/.netlify/functions/send-webinar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'confirmation',
          data: {
            name: registration.name,
            email: registration.email,
            webinarTitle: webinar.title,
            webinarDate: webinar.date,
            webinarTime: webinar.time,
            webinarDuration: webinar.duration
          }
        })
      });

      if (!response.ok) {
        throw new Error('Eroare la trimiterea email-ului');
      }

      console.log('Email de confirmare trimis cu succes');
    } catch (error) {
      console.error('Eroare la trimiterea email-ului:', error);
      // Nu aruncăm eroarea pentru a nu întrerupe înscrierea
    }
  }

  // Programează trimiterea reminder-ului (24h înainte)
  async scheduleReminder(registration: WebinarRegistration): Promise<void> {
    const webinar = this.webinars.find(w => w.id === registration.webinarId);
    if (!webinar) return;

    const webinarDate = new Date(webinar.date + 'T' + webinar.time);
    const reminderDate = new Date(webinarDate.getTime() - 24 * 60 * 60 * 1000); // 24h înainte

    // Aici ar fi logica pentru programarea unui cron job sau task
    console.log(`Reminder programat pentru ${registration.email} la ${reminderDate}`);
  }

  // Programează trimiterea link-ului (1h înainte)
  async scheduleLinkDelivery(registration: WebinarRegistration): Promise<void> {
    const webinar = this.webinars.find(w => w.id === registration.webinarId);
    if (!webinar) return;

    const webinarDate = new Date(webinar.date + 'T' + webinar.time);
    const linkDate = new Date(webinarDate.getTime() - 60 * 60 * 1000); // 1h înainte

    // Generează link Google Meet dacă nu există
    if (!webinar.zoomLink) {
      try {
        await googleMeetService.createMeetLink(webinar);
      } catch (error) {
        console.error('Eroare la generarea link-ului Google Meet:', error);
      }
    }

    console.log(`Link programat pentru ${registration.email} la ${linkDate}`);
  }

  // Obține înscrierile pentru un webinar
  async getRegistrations(webinarId: string): Promise<WebinarRegistration[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.registrations.filter(r => r.webinarId === webinarId);
  }

  // Anulează înscrierea
  async cancelRegistration(registrationId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const registration = this.registrations.find(r => r.id === registrationId);
    if (!registration) {
      throw new Error('Înscrierea nu a fost găsită');
    }

    registration.status = 'cancelled';
    
    // Actualizează numărul de participanți
    const webinar = this.webinars.find(w => w.id === registration.webinarId);
    if (webinar) {
      webinar.currentParticipants--;
    }
  }
}

export const webinarService = new WebinarService(); 