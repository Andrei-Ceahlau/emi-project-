export interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  maxParticipants: number;
  currentParticipants: number;
  zoomLink?: string;
  status: 'upcoming' | 'live' | 'completed';
  topics: string[];
}

export interface WebinarRegistration {
  id: string;
  webinarId: string;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  reminderSent: boolean;
  linkSent: boolean;
}

export interface EmailTemplate {
  id: string;
  type: 'registration_confirmation' | 'reminder' | 'link_sent';
  subject: string;
  body: string;
} 