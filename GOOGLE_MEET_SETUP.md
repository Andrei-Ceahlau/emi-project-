# Configurare Google Meet Automation - Forever Living România

## 🎯 Prezentare generală

Sistemul de automatizare Google Meet permite generarea automată a link-urilor pentru webinare și trimiterea acestora participanților prin email.

## ✅ Funcționalități implementate

### 1. **Generare automată link-uri Google Meet**
- ✅ Creare link-uri cu ID-uri unice
- ✅ Format: `https://meet.google.com/xxx-xxxx-xxx`
- ✅ Integrare cu sistemul de webinare

### 2. **Integrare cu Google Calendar**
- ✅ Creare evenimente în calendar
- ✅ Adăugare link Google Meet în eveniment
- ✅ Reminder-uri automate (24h și 1h înainte)

### 3. **Email-uri automate cu link-uri**
- ✅ Template HTML pentru Google Meet
- ✅ Instrucțiuni detaliate pentru participanți
- ✅ Sfaturi pentru o experiență optimă

### 4. **Gestionarea participanților**
- ✅ Trimitere link-uri către toți participanții
- ✅ Tracking al participanților
- ✅ Validare link-uri

## 🔧 Configurare pentru producție

### 1. **Google Calendar API**

#### Pasul 1: Creează un proiect Google Cloud
1. Mergi la [Google Cloud Console](https://console.cloud.google.com/)
2. Creează un proiect nou sau selectează unul existent
3. Activează Google Calendar API

#### Pasul 2: Configurează credențialele
1. În "APIs & Services" → "Credentials"
2. Creează "Service Account"
3. Descarcă fișierul JSON cu credențialele
4. Activează Google Calendar API pentru service account

#### Pasul 3: Setează variabilele de mediu
```env
# În Netlify Dashboard
GOOGLE_API_KEY=your-google-api-key
GOOGLE_CALENDAR_ID=your-calendar-id@gmail.com
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### 2. **Configurare Netlify Functions**

#### Actualizează `netlify/functions/send-webinar-email.js`:
```javascript
// Adaugă la începutul fișierului
const { google } = require('googleapis');

// Configurare Google Calendar
const calendar = google.calendar({
  version: 'v3',
  auth: new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar'],
  }),
});
```

### 3. **Instalare dependențe**
```bash
# În directorul netlify/functions
npm install googleapis
```

## 🚀 Utilizare

### 1. **Generare automată link-uri**
```javascript
// Când se creează un webinar nou
const meetLink = await googleMeetService.createMeetLink(webinar);
console.log('Link generat:', meetLink.joinUrl);
```

### 2. **Creare eveniment în calendar**
```javascript
// Creează evenimentul cu Google Meet
await googleMeetService.createCalendarEvent(webinar, meetLink);
```

### 3. **Trimite link-uri participanților**
```javascript
// Trimite link-ul cu 1h înainte de webinar
await googleMeetService.sendMeetLinkToParticipants(webinar, participants);
```

## 📧 Template-uri email

### Email cu link Google Meet:
- ✅ Buton mare pentru accesare
- ✅ Detalii meeting (data, ora, ID)
- ✅ Instrucțiuni pas cu pas
- ✅ Sfaturi pentru experiență optimă
- ✅ Contact suport

## 🔄 Flux complet de automatizare

1. **Creează webinar** → Generează link Google Meet
2. **Participant se înscrie** → Primește confirmare
3. **24h înainte** → Reminder cu detalii webinar
4. **1h înainte** → Link Google Meet + instrucțiuni
5. **În timpul webinar-ului** → Tracking participanți
6. **După webinar** → Follow-up și materiale

## 🛠️ Funcții disponibile

### `googleMeetService.createMeetLink(webinar)`
- Generează link unic Google Meet
- Creează eveniment în calendar
- Returnează obiect cu detalii meeting

### `googleMeetService.sendMeetLinkToParticipants(webinar, participants)`
- Trimite email cu link către toți participanții
- Include instrucțiuni și sfaturi
- Tracking al trimiterilor

### `googleMeetService.validateMeetLink(meetLink)`
- Validează formatul URL-ului Google Meet
- Verifică dacă link-ul este valid

## 📋 Checklist configurare

### Pentru dezvoltare:
- [x] Serviciu Google Meet implementat
- [x] Template-uri email create
- [x] Integrare cu sistemul de webinare
- [x] Funcții de validare

### Pentru producție:
- [ ] Configurare Google Cloud Project
- [ ] Activează Google Calendar API
- [ ] Creează Service Account
- [ ] Setează variabile de mediu în Netlify
- [ ] Testează generarea link-urilor
- [ ] Testează trimiterea email-urilor

## 🔒 Securitate

- ✅ Link-uri cu ID-uri unice și complexe
- ✅ Validare format URL-uri
- ✅ Autentificare prin Service Account
- ✅ Permisiuni limitate pentru calendar
- ✅ Logging pentru audit

## 📞 Suport

Pentru probleme cu Google Meet:
- **Email:** support@forever-living.ro
- **Telefon:** +40 21 123 4567
- **Documentație Google:** [Google Calendar API](https://developers.google.com/calendar)

---

**Notă:** Această implementare folosește Google Calendar API pentru crearea automată a evenimentelor cu Google Meet. Pentru utilizarea în producție, asigură-te că ai configurat corect credențialele Google. 