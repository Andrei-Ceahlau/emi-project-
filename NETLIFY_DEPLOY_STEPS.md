# Deploy Netlify cu Email-uri Funcționale - Forever Living

## 🚀 Pasul 1: Deploy pe Netlify

### 1. Mergi la [Netlify](https://netlify.com/)
### 2. Apasă "New site from Git"
### 3. Conectează la GitHub
### 4. Selectează repository-ul: `Andrei-Ceahlau/emi-project-`
### 5. Setări deploy:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** (lasă gol)

## ⚙️ Pasul 2: Configurare Email-uri

### 1. Configurează Gmail:
   - Activează 2 factori în [Google Account](https://myaccount.google.com/)
   - Generează App Password pentru "Forever Living"
   - Copiază parola de 16 caractere

### 2. Setează variabilele în Netlify:
   - Mergi la Site settings → Environment variables
   - Adaugă:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

## 🧪 Pasul 3: Testare

### 1. Site-ul este live pe Netlify
### 2. Mergi la secțiunea "Webinare"
### 3. Completează formularul de înscriere
### 4. Verifică email-ul de confirmare

## 📧 Ce va funcționa:

### Email-uri automate:
1. **Confirmare înscriere** - imediat după înscriere
2. **Reminder 24h** - cu 24h înainte de webinar
3. **Link Google Meet** - cu 1h înainte de webinar

### Funcționalități:
- ✅ Formulare de înscriere
- ✅ Email-uri automate
- ✅ Conformitate GDPR
- ✅ Link-uri Google Meet
- ✅ Reminder-uri

## 🔧 Troubleshooting:

### Dacă email-urile nu se trimit:
1. Verifică variabilele de mediu în Netlify
2. Verifică că App Password este corect
3. Verifică log-urile în Netlify Functions
4. Testează cu un email valid

### Dacă site-ul nu se încarcă:
1. Verifică build-ul în Netlify
2. Verifică că repository-ul este conectat corect
3. Verifică că build command este `npm run build`

## 📞 Suport:
- **Email:** support@forever-living.ro
- **Telefon:** +40 21 123 4567 