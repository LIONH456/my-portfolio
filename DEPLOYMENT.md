# 🚀 Deployment Guide

This document outlines the steps to deploy the Ho Jun Hong Portfolio to production environments.

## Netlify (Recommended)
1. **Connect GitHub**: Select your repository on Netlify.
2. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. **Environment Variables**:
   - Ensure `public/admin/config.yml` is correctly pointing to your repo for Decap CMS.
4. **Deploy**: Trigger the initial deploy. Netlify will automatically handle subsequent pushes.

## Vercel
1. **Import Project**: Select the repo in Vercel dashboard.
2. **Auto-Detection**: Vercel will detect Astro. Confirm the default settings.
3. **Deploy**: Click Deploy. Your site will be live at a `.vercel.app` subdomain.

## Custom Domain
- Add your domain in the platform's settings.
- Update your DNS records (A and CNAME) as provided by Netlify/Vercel.

## Environment Variables
Both Netlify and Vercel require you to set the following Environment Variables in their respective dashboards to enable the secure contact form:
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`

## EmailJS Setup
Before deploying, ensure you have set up your EmailJS account and template:
1. Create a **Service** (e.g., Gmail).
2. Create a **Template** using variables `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, and `{{message}}`.
3. Do NOT hardcode these in the source code; use the platform's Environment Variables settings.

---
© 2026 Ho Jun Hong.
