# Test Email-uri Local - Forever Living

## 🎯 Configurare pentru test local

### 1. Creează fișierul `.env.local` în rădăcina proiectului:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 2. Înlocuiește cu datele tale:
- `your-gmail@gmail.com` = adresa ta de Gmail
- `your-16-character-app-password` = parola de 16 caractere generată din Google Account

## 🧪 Testare locală

### Pasul 1: Verifică că serverul rulează
```bash
npm run dev
# Ar trebui să vezi: http://localhost:5174/
```

### Pasul 2: Testează înscrierea la webinar
1. Mergi la `http://localhost:5174/`
2. Scroll jos la secțiunea "Webinare"
3. Completează formularul de înscriere:
   - Nume: Test User
   - Email: adresa ta de email
   - Telefon: 0722123456
4. Bifează consimțământul GDPR
5. Apasă "Înscrie-te la webinar"

### Pasul 3: Verifică email-ul
1. Verifică inbox-ul tău
2. Ar trebui să primești email cu:
   - Confirmare înscriere
   - Detalii webinar
   - Informații despre reminder-uri

## 🔧 Troubleshooting

### Dacă nu primești email:
1. Verifică că `.env.local` există și are datele corecte
2. Verifică că App Password este corect
3. Verifică că Gmail nu blochează aplicațiile
4. Verifică console-ul browser-ului pentru erori

### Dacă primești erori:
- Verifică că ai activat 2 factori în Gmail
- Verifică că App Password este de 16 caractere
- Încearcă să generezi un nou App Password

## 📧 Email-uri care vor fi trimise:

1. **Confirmare înscriere** - imediat după înscriere
2. **Reminder 24h** - cu 24h înainte de webinar  
3. **Link Google Meet** - cu 1h înainte de webinar

## 🚀 Următorul pas:

După ce confirmi că email-urile funcționează local, vom:
1. Deploy pe Netlify
2. Configura variabilele de mediu pe Netlify
3. Testa pe producție 