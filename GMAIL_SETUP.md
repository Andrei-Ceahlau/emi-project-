# Configurare Gmail pentru Email-uri Automate - Forever Living

## 🎯 Pași pentru configurarea Gmail

### Pasul 1: Activează autentificarea cu 2 factori
1. Mergi la [Google Account](https://myaccount.google.com/)
2. Securitate → Autentificare cu 2 factori
3. Activează autentificarea cu 2 factori

### Pasul 2: Generează App Password
1. În Google Account → Securitate
2. "App passwords" (sub 2 factori)
3. Selectează "Mail" și "Other (Custom name)"
4. Nume: "Forever Living Webinar"
5. Copiază parola generată (16 caractere)

### Pasul 3: Setează variabilele în Netlify
În Netlify Dashboard → Site settings → Environment variables:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## 📧 Testare email-uri

### Test local:
```bash
# În directorul proiectului
npm run dev
```

### Test pe Netlify:
1. Deploy site-ul pe Netlify
2. Înscrie-te la un webinar
3. Verifică email-ul de confirmare

## 🔧 Verificare funcționare

### Email-uri care vor fi trimise:
1. **Confirmare înscriere** - imediat după înscriere
2. **Reminder 24h** - cu 24h înainte de webinar
3. **Link Google Meet** - cu 1h înainte de webinar

### Conținut email-uri:
- ✅ Detalii webinar (data, ora, durată)
- ✅ Link Google Meet cu instrucțiuni
- ✅ Sfaturi pentru participare
- ✅ Contact suport

## 🚨 Troubleshooting

### Dacă email-urile nu se trimit:
1. Verifică variabilele de mediu în Netlify
2. Verifică că App Password este corect
3. Verifică log-urile în Netlify Functions
4. Testează cu un email valid

### Dacă primești erori:
- Verifică că Gmail permite "less secure apps"
- Verifică că nu ai blocat aplicațiile
- Încearcă să generezi un nou App Password

## 📞 Suport

Pentru probleme cu email-urile:
- **Email:** support@forever-living.ro
- **Telefon:** +40 21 123 4567 