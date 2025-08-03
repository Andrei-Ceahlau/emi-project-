// Script pentru automatizarea email-urilor pentru webinare
// Acest script poate fi rulat ca un cron job sau task scheduler

const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Configurare email (în producție, folosește variabile de mediu)
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
};

// Template-uri pentru email-uri
const emailTemplates = {
  registration_confirmation: {
    subject: 'Confirmare înscriere webinar: {{webinarTitle}}',
    body: `
      Bună {{name}}!
      
      Înscrierea ta la webinar-ul "{{webinarTitle}}" a fost confirmată cu succes!
      
      Detalii webinar:
      - Data: {{webinarDate}}
      - Ora: {{webinarTime}}
      - Durată: {{webinarDuration}}
      
      Vei primi:
      - Un reminder cu 24h înainte de webinar
      - Link-ul pentru participare cu 1h înainte
      - Materiale suplimentare după webinar
      
      Mulțumim pentru interesul acordat!
      Echipa Forever Living România
    `
  },
  
  reminder_24h: {
    subject: 'Reminder: Webinar "{{webinarTitle}}" mâine!',
    body: `
      Bună {{name}}!
      
      Te reamintim că mâine, {{webinarDate}} la {{webinarTime}}, 
      va avea loc webinar-ul "{{webinarTitle}}".
      
      Pregătiri pentru webinar:
      - Asigură-te că ai o conexiune stabilă la internet
      - Testează microfonul și camera (opțional)
      - Pregătește întrebările tale
      
      Vei primi link-ul pentru participare cu 1h înainte de începerea webinar-ului.
      
      Ne vedem mâine!
      Echipa Forever Living România
    `
  },
  
  link_sent: {
    subject: 'Link webinar: "{{webinarTitle}}" - începe în 1h!',
    body: `
      Bună {{name}}!
      
      Webinar-ul "{{webinarTitle}}" începe în 1h!
      
      Link pentru participare: {{webinarLink}}
      
      Instrucțiuni:
      1. Apasă pe link-ul de mai sus
      2. Introdu numele tău
      3. Așteaptă să fii adăugat în sala de conferințe
      
      Dacă întâmpini probleme, contactează-ne la: support@forever-living.ro
      
      Ne vedem în webinar!
      Echipa Forever Living România
    `
  },
  
  follow_up: {
    subject: 'Mulțumim pentru participarea la webinar!',
    body: `
      Bună {{name}}!
      
      Mulțumim pentru participarea la webinar-ul "{{webinarTitle}}"!
      
      Materiale suplimentare:
      - Prezentarea webinar-ului: {{presentationLink}}
      - Ghid practic: {{guideLink}}
      - Înregistrarea webinar-ului: {{recordingLink}}
      
      Produse recomandate:
      {{productRecommendations}}
      
      Următorul webinar: "{{nextWebinarTitle}}" - {{nextWebinarDate}}
      
      Pentru întrebări suplimentare, suntem aici să te ajutăm!
      Echipa Forever Living România
    `
  }
};

class EmailAutomationService {
  constructor() {
    this.transporter = nodemailer.createTransporter(emailConfig);
  }

  // Trimite email
  async sendEmail(to, subject, body) {
    try {
      const mailOptions = {
        from: emailConfig.auth.user,
        to: to,
        subject: subject,
        html: body
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`Email trimis cu succes către ${to}:`, result.messageId);
      return result;
    } catch (error) {
      console.error(`Eroare la trimiterea email-ului către ${to}:`, error);
      throw error;
    }
  }

  // Procesează template-ul de email
  processTemplate(template, data) {
    let processedTemplate = template;
    
    Object.keys(data).forEach(key => {
      const placeholder = `{{${key}}}`;
      processedTemplate = processedTemplate.replace(new RegExp(placeholder, 'g'), data[key]);
    });
    
    return processedTemplate;
  }

  // Trimite email de confirmare înscriere
  async sendRegistrationConfirmation(registration, webinar) {
    const template = emailTemplates.registration_confirmation;
    const data = {
      name: registration.name,
      webinarTitle: webinar.title,
      webinarDate: webinar.date,
      webinarTime: webinar.time,
      webinarDuration: webinar.duration
    };

    const subject = this.processTemplate(template.subject, data);
    const body = this.processTemplate(template.body, data);

    await this.sendEmail(registration.email, subject, body);
  }

  // Trimite reminder cu 24h înainte
  async sendReminder24h(registration, webinar) {
    const template = emailTemplates.reminder_24h;
    const data = {
      name: registration.name,
      webinarTitle: webinar.title,
      webinarDate: webinar.date,
      webinarTime: webinar.time
    };

    const subject = this.processTemplate(template.subject, data);
    const body = this.processTemplate(template.body, data);

    await this.sendEmail(registration.email, subject, body);
  }

  // Trimite link-ul cu 1h înainte
  async sendWebinarLink(registration, webinar) {
    const template = emailTemplates.link_sent;
    const data = {
      name: registration.name,
      webinarTitle: webinar.title,
      webinarLink: webinar.zoomLink || 'https://zoom.us/j/123456789'
    };

    const subject = this.processTemplate(template.subject, data);
    const body = this.processTemplate(template.body, data);

    await this.sendEmail(registration.email, subject, body);
  }

  // Trimite follow-up după webinar
  async sendFollowUp(registration, webinar) {
    const template = emailTemplates.follow_up;
    const data = {
      name: registration.name,
      webinarTitle: webinar.title,
      presentationLink: 'https://drive.google.com/presentation/...',
      guideLink: 'https://drive.google.com/document/...',
      recordingLink: 'https://youtube.com/watch?v=...',
      productRecommendations: `
        - Aloe Vera Gel: 125 RON
        - Forever Bee Pollen: 85 RON
        - Aloe Propolis Creme: 95 RON
      `,
      nextWebinarTitle: 'Nutriția optimă pentru energie',
      nextWebinarDate: '1 Februarie 2024'
    };

    const subject = this.processTemplate(template.subject, data);
    const body = this.processTemplate(template.body, data);

    await this.sendEmail(registration.email, subject, body);
  }
}

// Programare automată pentru trimiterea email-urilor
class WebinarEmailScheduler {
  constructor() {
    this.emailService = new EmailAutomationService();
  }

  // Programează reminder-ul cu 24h înainte
  scheduleReminder24h(registration, webinar) {
    const webinarDate = new Date(webinar.date + 'T' + webinar.time);
    const reminderDate = new Date(webinarDate.getTime() - 24 * 60 * 60 * 1000);
    
    // Programează task-ul
    const cronExpression = this.dateToCron(reminderDate);
    
    cron.schedule(cronExpression, async () => {
      try {
        await this.emailService.sendReminder24h(registration, webinar);
        console.log(`Reminder trimis pentru ${registration.email}`);
      } catch (error) {
        console.error(`Eroare la trimiterea reminder-ului:`, error);
      }
    });
  }

  // Programează trimiterea link-ului cu 1h înainte
  scheduleLinkDelivery(registration, webinar) {
    const webinarDate = new Date(webinar.date + 'T' + webinar.time);
    const linkDate = new Date(webinarDate.getTime() - 60 * 60 * 1000);
    
    const cronExpression = this.dateToCron(linkDate);
    
    cron.schedule(cronExpression, async () => {
      try {
        await this.emailService.sendWebinarLink(registration, webinar);
        console.log(`Link trimis pentru ${registration.email}`);
      } catch (error) {
        console.error(`Eroare la trimiterea link-ului:`, error);
      }
    });
  }

  // Convertește data în expresie cron
  dateToCron(date) {
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const dayOfWeek = date.getDay();
    
    return `${minutes} ${hours} ${day} ${month} ${dayOfWeek}`;
  }
}

// Export pentru utilizare în aplicație
module.exports = {
  EmailAutomationService,
  WebinarEmailScheduler
};

// Exemplu de utilizare
if (require.main === module) {
  const scheduler = new WebinarEmailScheduler();
  
  // Exemplu de programare pentru un webinar
  const sampleWebinar = {
    title: 'Detoxifierea naturală cu Aloe Vera',
    date: '2024-01-25',
    time: '19:00',
    duration: '90 minute'
  };
  
  const sampleRegistration = {
    name: 'Ana Popescu',
    email: 'ana@exemplu.com',
    phone: '0722123456'
  };
  
  // Programează email-urile
  scheduler.scheduleReminder24h(sampleRegistration, sampleWebinar);
  scheduler.scheduleLinkDelivery(sampleRegistration, sampleWebinar);
  
  console.log('Programările pentru email-uri au fost configurate!');
} 