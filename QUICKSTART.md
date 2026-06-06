# 🎯 Quick Start Guide

Get your professional portfolio up and running in minutes.

## 1. Installation
```bash
npm install
```

## 2. Development
```bash
npm run dev
```
Access at: `http://localhost:3000` (Dynamic routes for `/zh` and `/vi`).

## 3. Data Synchronization
Update your information in `src/content/cv/`:
- `en.json`: Primary data source (English).
- `zh.json`: Chinese localization.
- `vi.json`: Vietnamese localization.

## 4. Visual Assets
Replace `public/assets/profile.jpg` with your professional 1x1 square photo.

## 5. Contact Form (EmailJS Security)
1. Sign up at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service and a Template.
3. Configure your environment variables in `.env` (use `.env.example` as a template).
4. Use the **Template Matrix** in `README.md` to configure your EmailJS dashboard variables.

## 6. Build & Deploy
```bash
npm run build
```
Connect your GitHub repo to Netlify or Vercel. **Crucial**: Add your `EMAILJS_*` keys in the provider's Environment Variables settings.

---
© 2026 Ho Jun Hong.
