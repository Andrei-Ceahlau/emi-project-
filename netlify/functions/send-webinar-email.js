const nodemailer = require('nodemailer');

// Configurare email (folosește variabile de mediu)
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Template-uri pentru email-uri
const emailTemplates = {
  confirmation: (data) => ({
    subject: `Confirmare înscriere webinar: ${data.webinarTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">Confirmare înscriere webinar</h2>
        <p>Bună ${data.name}!</p>
        <p>Înscrierea ta la webinar-ul <strong>"${data.webinarTitle}"</strong> a fost confirmată cu succes!</p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Detalii webinar:</h3>
          <ul>
            <li><strong>Data:</strong> ${data.webinarDate}</li>
            <li><strong>Ora:</strong> ${data.webinarTime}</li>
            <li><strong>Durată:</strong> ${data.webinarDuration}</li>
          </ul>
        </div>
        
        <p><strong>Vei primi:</strong></p>
        <ul>
          <li>Un reminder cu 24h înainte de webinar</li>
          <li>Link-ul pentru participare cu 1h înainte</li>
          <li>Materiale suplimentare după webinar</li>
        </ul>
        
        <p>Mulțumim pentru interesul acordat!</p>
        <p>Echipa Forever Living România</p>
      </div>
    `
  }),
  
  reminder: (data) => ({
    subject: `Reminder: Webinar "${data.webinarTitle}" mâine!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626;">Reminder webinar</h2>
        <p>Bună ${data.name}!</p>
        <p>Te reamintim că mâine, <strong>${data.webinarDate} la ${data.webinarTime}</strong>, 
        va avea loc webinar-ul <strong>"${data.webinarTitle}"</strong>.</p>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Pregătiri pentru webinar:</h3>
          <ul>
            <li>Asigură-te că ai o conexiune stabilă la internet</li>
            <li>Testează microfonul și camera (opțional)</li>
            <li>Pregătește întrebările tale</li>
          </ul>
        </div>
        
        <p>Vei primi link-ul pentru participare cu 1h înainte de începerea webinar-ului.</p>
        <p>Ne vedem mâine!</p>
        <p>Echipa Forever Living România</p>
      </div>
    `
  }),
  
  link: (data) => ({
    subject: `Link Google Meet: "${data.webinarTitle}" - începe în 1h!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Link pentru Google Meet</h2>
        <p>Bună ${data.name}!</p>
        <p>Webinar-ul <strong>"${data.webinarTitle}"</strong> începe în 1h!</p>
        
        <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <a href="${data.webinarLink}" 
             style="background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
            ACCESEAZĂ GOOGLE MEET
          </a>
        </div>
        
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3>Detalii meeting:</h3>
          <p><strong>Data:</strong> ${data.date}</p>
          <p><strong>Ora:</strong> ${data.startTime}</p>
          <p><strong>Meeting ID:</strong> ${data.meetingId}</p>
        </div>
        
        <h3>Instrucțiuni pentru Google Meet:</h3>
        <ol>
          <li>Apasă pe butonul "ACCESEAZĂ GOOGLE MEET"</li>
          <li>Dacă nu ai cont Google, poți participa ca invitat</li>
          <li>Introdu numele tău când ești solicitat</li>
          <li>Așteaptă să fii adăugat în sala de conferințe</li>
          <li>Testează microfonul și camera înainte de începerea webinar-ului</li>
        </ol>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4>💡 Sfaturi pentru o experiență optimă:</h4>
          <ul>
            <li>Folosește un browser modern (Chrome, Firefox, Safari)</li>
            <li>Asigură-te că ai o conexiune stabilă la internet</li>
            <li>Închide aplicațiile care consumă multă bandă</li>
            <li>Folosește căști pentru o calitate audio mai bună</li>
          </ul>
        </div>
        
        <p>Dacă întâmpini probleme, contactează-ne la: <strong>support@forever-living.ro</strong></p>
        <p>Ne vedem în Google Meet!</p>
        <p>Echipa Forever Living România</p>
      </div>
    `
  })
};

exports.handler = async (event, context) => {
  // Permite CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Parse request body
    const { type, data } = JSON.parse(event.body);
    
    // Validează datele
    if (!type || !data) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Tip și date sunt obligatorii' })
      };
    }

    // Generează template-ul de email
    let emailContent;
    switch (type) {
      case 'confirmation':
        emailContent = emailTemplates.confirmation(data);
        break;
      case 'reminder':
        emailContent = emailTemplates.reminder(data);
        break;
      case 'link':
        emailContent = emailTemplates.link(data);
        break;
      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Tip de email invalid' })
        };
    }

    // Trimite email-ul
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: emailContent.subject,
      html: emailContent.html
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email trimis cu succes' 
      })
    };

  } catch (error) {
    console.error('Eroare la trimiterea email-ului:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Eroare la trimiterea email-ului',
        details: error.message 
      })
    };
  }
}; 