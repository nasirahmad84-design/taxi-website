# Deployment Guide: Taxi Bad Homburg Website

Diese Anleitung erklärt, wie Sie diese Website auf Ihrer eigenen Domain live verwenden können.

## Option 1: Next.js Deployment (Empfohlen)

### Schritt 1: Code Export
1. Kopieren Sie alle Dateien aus diesem Figma Make Projekt
2. Erstellen Sie ein neues Next.js Projekt:
```bash
npx create-next-app@latest taxi-website --typescript --tailwind --eslint
cd taxi-website
```

### Schritt 2: Abhängigkeiten installieren
```bash
npm install lucide-react
npm install @radix-ui/react-*  # Für ShadCN komponenten
```

### Schritt 3: Dateien übertragen
- Kopieren Sie alle Komponenten in den `/components` Ordner
- Ersetzen Sie `/app/page.tsx` mit dem Inhalt von `/App.tsx`
- Kopieren Sie `/styles/globals.css` nach `/app/globals.css`

### Schritt 4: Bilder und Assets
- Laden Sie alle Bilder von Unsplash lokal herunter
- Speichern Sie sie im `/public` Ordner
- Ersetzen Sie alle `https://images.unsplash.com/...` URLs mit `/bild-name.jpg`
- Logo: Speichern Sie das Logo als `/public/logo.png`

### Schritt 5: Google Places API (Optional)
Für echte Google Maps Autocomplete:
1. Erstellen Sie ein Google Cloud Projekt
2. Aktivieren Sie die Places API
3. Erstellen Sie einen API Key
4. Fügen Sie den API Key in `.env.local` hinzu:
```
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=ihr-api-key
```

### Schritt 6: Build & Deploy
```bash
npm run build
```

**Deployment Optionen:**
- **Vercel** (empfohlen für Next.js): `vercel --prod`
- **Netlify**: Drag & Drop des `/out` Ordners
- **AWS S3 + CloudFront**
- **Eigener Server** mit Node.js

## Option 2: Statische Website (Einfacher)

### Schritt 1: React Build erstellen
```bash
npx create-react-app taxi-website --template typescript
cd taxi-website
npm install lucide-react
```

### Schritt 2: Code anpassen
- Entfernen Sie alle `'use client'` Direktiven
- Ersetzen Sie `ImageWithFallback` durch normale `<img>` Tags
- Kopieren Sie alle Komponenten

### Schritt 3: Build erstellen
```bash
npm run build
```

### Schritt 4: Upload zu Hosting
Upload des `/build` Ordners zu:
- **Netlify**: Drag & Drop
- **GitHub Pages**
- **Firebase Hosting**
- **Shared Hosting** (cPanel, etc.)

## Option 3: WordPress Integration

### Schritt 1: Custom Theme erstellen
- Konvertieren Sie React Komponenten zu PHP
- Nutzen Sie WordPress Hooks für Buchungsformular
- Integrieren Sie mit Contact Form 7 oder WPForms

### Schritt 2: Block Theme (Gutenberg)
- Erstellen Sie Custom Blocks aus den Komponenten
- Nutzen Sie das WordPress Block Editor System

## Wichtige Anpassungen für Live-Website

### 1. Telefonnummern
Ersetzen Sie alle `+49 (0) 6172 / 123-456` mit Ihrer echten Nummer.

### 2. Kontaktdaten
In `/components/Footer.tsx`:
- Adresse anpassen
- E-Mail anpassen
- Impressum/Datenschutz Links

### 3. Buchungsformular
Verbinden Sie das Formular mit:
- Ihrem E-Mail Service (EmailJS, Formspree)
- Einer Datenbank (Supabase, Firebase)
- Ihrer bestehenden Buchungssoftware

### 4. Google Analytics
Fügen Sie Tracking Code hinzu:
```javascript
// In _app.tsx oder layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
```

### 5. SEO Optimierung
- Meta Tags für jede Seite
- Sitemap generieren
- Schema.org Markup für lokales Geschäft
- robots.txt

### 6. Performance
- Bilder optimieren (WebP Format)
- Lazy Loading implementieren
- CDN verwenden

## Domain Setup

### 1. Domain kaufen
Bei Anbietern wie:
- Namecheap
- GoDaddy  
- IONOS
- Strato

### 2. DNS Setup
Pointing Sie Ihre Domain auf:
- Vercel: Automatisch über Dashboard
- Netlify: Automatisch über Dashboard
- Eigener Server: A-Record auf Server IP

### 3. SSL Zertifikat
Die meisten modernen Hosting-Anbieter bieten kostenloses SSL (Let's Encrypt).

## Kosten Übersicht

**Kostenlos:**
- Vercel (Hobby Plan)
- Netlify (Starter Plan)
- GitHub Pages

**Kostenpflichtig:**
- Domain: ~12€/Jahr
- Premium Hosting: 5-20€/Monat
- Google Places API: Nach Nutzung

## Support & Wartung

- Regelmäßige Updates der Abhängigkeiten
- Backup der Website
- Monitoring der Verfügbarkeit
- Performance Überwachung

Brauchen Sie Hilfe bei einem dieser Schritte? Kontaktieren Sie einen Webentwickler oder nutzen Sie die Dokumentation der jeweiligen Plattform.