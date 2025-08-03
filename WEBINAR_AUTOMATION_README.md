# Sistem de Automatizare Webinare - Forever Living România

## Descriere

Acest sistem permite automatizarea completă a procesului de înscriere la webinare și trimiterea email-urilor de confirmare, reminder-uri și link-uri pentru participare.

## Funcționalități

### ✅ Implementate
- [x] Formular de înscriere la webinar cu validare
- [x] Sistem de gestionare webinare (CRUD)
- [x] Email-uri automate de confirmare
- [x] Programare reminder-uri (24h înainte)
- [x] Programare trimitere link-uri (1h înainte)
- [x] Template-uri email personalizabile
- [x] Interfață utilizator modernă și responsivă

### 🔄 În dezvoltare
- [ ] Integrare cu servicii email reale (SendGrid, Mailgun)
- [ ] Dashboard admin pentru gestionarea webinarelor
- [ ] Integrare cu Zoom API pentru link-uri automate
- [ ] Sistem de notificări SMS
- [ ] Analytics și rapoarte participare

## Structura Proiectului

```
src/
├── components/
│   └── WebinarRegistration.tsx    # Componenta de înscriere
├── services/
│   └── webinarService.ts          # Serviciu pentru gestionarea webinarelor
├── types/
│   └── webinar.ts                 # Tipuri TypeScript
└── App.tsx                        # Componenta principală

scripts/
└── emailAutomation.js             # Script pentru automatizarea email-urilor
```

## Instalare și Configurare

### 1. Dependențe necesare

```bash
# Pentru frontend (React)
npm install lucide-react

# Pentru backend (Node.js)
npm install nodemailer node-cron
```

### 2. Configurare variabile de mediu

Creează un fișier `.env` în rădăcina proiectului:

```env
# Configurare email
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Configurare Zoom (opțional)
ZOOM_API_KEY=your-zoom-api-key
ZOOM_API_SECRET=your-zoom-api-secret

# Configurare baza de date (opțional)
DATABASE_URL=your-database-url
```

### 3. Configurare Gmail pentru email-uri automate

1. Activează autentificarea cu 2 factori în contul Gmail
2. Generează o parolă de aplicație:
   - Mergi la Setări Google Account
   - Securitate → Parole de aplicație
   - Generează o parolă pentru "Mail"
3. Folosește această parolă în `EMAIL_PASS`

## Utilizare

### 1. Înscriere la webinar

Utilizatorii pot înscrie la webinar prin:
- Completarea formularului cu nume, email și telefon
- Validare automată a datelor
- Confirmare imediată prin email

### 2. Email-uri automate

Sistemul trimite automat:

1. **Email de confirmare** (imediat după înscriere)
2. **Reminder cu 24h înainte** de webinar
3. **Link-ul pentru participare** cu 1h înainte
4. **Follow-up după webinar** cu materiale suplimentare

### 3. Programare automată

```javascript
// Exemplu de programare
const scheduler = new WebinarEmailScheduler();

scheduler.scheduleReminder24h(registration, webinar);
scheduler.scheduleLinkDelivery(registration, webinar);
```

## Template-uri Email

### 1. Confirmare înscriere
```
Subiect: Confirmare înscriere webinar: {{webinarTitle}}

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
```

### 2. Reminder 24h
```
Subiect: Reminder: Webinar "{{webinarTitle}}" mâine!

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
```

### 3. Link pentru participare
```
Subiect: Link webinar: "{{webinarTitle}}" - începe în 1h!

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
```

## Integrare cu Servicii Externe

### 1. SendGrid (Recomandat pentru producție)

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'recipient@example.com',
  from: 'noreply@forever-living.ro',
  subject: 'Confirmare webinar',
  html: '<p>Conținut email</p>',
};

sgMail.send(msg);
```

### 2. Zoom API

```javascript
const Zoom = require('zoomapi');

const zoom = new Zoom({
  apiKey: process.env.ZOOM_API_KEY,
  apiSecret: process.env.ZOOM_API_SECRET
});

// Creează o întâlnire Zoom
const meeting = await zoom.meeting.create({
  topic: webinar.title,
  type: 2, // Scheduled meeting
  start_time: webinar.date + 'T' + webinar.time,
  duration: 90
});
```

### 3. Baza de date (PostgreSQL/MongoDB)

```javascript
// Exemplu cu PostgreSQL
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Salvează înscrierea
const query = `
  INSERT INTO webinar_registrations 
  (webinar_id, name, email, phone, status) 
  VALUES ($1, $2, $3, $4, $5)
`;
await pool.query(query, [webinarId, name, email, phone, 'confirmed']);
```

## Deployment

### 1. Frontend (Vercel/Netlify)

```bash
# Build pentru producție
npm run build

# Deploy pe Vercel
vercel --prod
```

### 2. Backend (Heroku/DigitalOcean)

```bash
# Creează Procfile
echo "web: node scripts/emailAutomation.js" > Procfile

# Deploy pe Heroku
heroku create
git push heroku main
```

### 3. Cron Jobs

Pentru a rula scripturile automate:

```bash
# Adaugă în crontab
0 */6 * * * /usr/bin/node /path/to/scripts/emailAutomation.js
```

## Monitorizare și Analytics

### 1. Log-uri

```javascript
// Log-uri pentru monitorizare
console.log(`[${new Date().toISOString()}] Email trimis: ${email}`);
console.log(`[${new Date().toISOString()}] Înscriere nouă: ${registration.email}`);
```

### 2. Metrici importante

- Numărul de înscrieri per webinar
- Rata de deschidere email-uri
- Rata de participare la webinar
- Conversii după webinar

## Securitate

### 1. Validare date

```javascript
// Validare email
const emailRegex = /\S+@\S+\.\S+/;
if (!emailRegex.test(email)) {
  throw new Error('Email invalid');
}

// Validare telefon
const phoneRegex = /^(\+40|0)[0-9]{9}$/;
if (!phoneRegex.test(phone)) {
  throw new Error('Telefon invalid');
}
```

### 2. Rate limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute
  max: 5 // maxim 5 înscrieri per IP
});
```

## Suport și Mentenanță

### Contact
- Email: support@forever-living.ro
- Telefon: +40 21 123 4567

### Backup și Recuperare
- Backup zilnic al bazei de date
- Backup săptămânal al template-urilor email
- Monitorizare continuă a serviciilor

## Roadmap

### Versiunea 2.0
- [ ] Integrare cu CRM
- [ ] Sistem de notificări push
- [ ] Analytics avansat
- [ ] Integrare cu calendar-uri

### Versiunea 3.0
- [ ] AI pentru personalizarea conținutului
- [ ] Sistem de recomandări
- [ ] Integrare cu rețelele sociale
- [ ] Aplicație mobilă

---

**Notă**: Acest sistem este proiectat pentru a fi scalabil și ușor de întreținut. Pentru întrebări suplimentare sau suport tehnic, contactează echipa de dezvoltare. 