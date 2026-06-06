# 🚀 Ho Jun Hong - Personal Portfolio Website

A high-end, modern, and multilingual personal portfolio website built with **Astro.js** and **Tailwind CSS**. Designed for senior-level aesthetic appeal with full i18n support for **English (EN)**, **Chinese (ZH)**, and **Vietnamese (VI)**.

![Astro](https://img.shields.io/badge/Astro-4.0+-blue?style=flat-square) ![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8?style=flat-square) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

## ✨ Premium Features

### 🎨 Modern Designer Aesthetics
- **Grid Background Pattern**: Subtle dot-matrix texture for a professional developer tool feel.
- **Glassmorphism**: Ultra-refined card textures using `backdrop-blur-xl` and fine-tuned borders.
- **Asymmetric Layouts**: Dynamic 1x1 profile image design with hard shadows and floating animations.
- **Typography & Spacing**: Enhanced breathing room and letter-spacing for a clean, hand-crafted look.

### 🌍 Multilingual i18n Core
- **Deep Localization**: All UI elements, including buttons, form placeholders, and footer, are 100% localized.
- **Dynamic Routing**: Automatic redirection based on language codes (`/`, `/zh/`, `/vi/`).
- **Vietnamese Optimization**: Custom line-height and padding logic to prevent diacritic clipping.

### 🛠 Technical Excellence
- **EmailJS Integration**: Pure frontend asynchronous contact form with real-time status feedback.
- **Smart Navigation**: Intersection Observer-based active link tracking with smooth scroll.
- **Dark/Light Mode**: Seamless theme switching with system preference persistence.

## 📁 Featured Projects (MasterCV Alignment)

### 1. SmartSpend AI (Financial Management)
- **Architecture**: Modular backend with Java 21 & Spring Boot 3.2.
- **Key Modules**: Real-time spending analysis, OCR integration, and predictive budgeting.
- **Quality**: 85%+ Test Coverage using JUnit 5, Mockito, and JaCoCo.

### 2. Hotel Management System
- **Security**: Robust RBAC implementation with Spring Security.
- **Persistence**: Optimized MySQL schema with H2 for integration testing.
- **Architecture**: Domain-driven design with strict DTO validation.

### 3. Fashion E-Commerce Platform
- **Integration**: Full-stack assembly with React and Spring Boot.
- **Performance**: High-speed search and catalog indexing.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/              # Premium assets (profile.jpg)
│   └── admin/               # Decap CMS configuration
├── src/
│   ├── components/          # Reusable Astro components (Navbar, ContactForm)
│   ├── content/cv/          # JSON data sources aligned with MasterCV
│   ├── i18n/                # Localization logic and dictionaries
│   ├── layouts/             # Master Layout.astro with symmetric footer
│   ├── pages/               # Routing and dynamic pages
│   └── styles/              # global.css with premium animations
└── ...config files
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛡️ Security & Email Integration

The project uses a high-security backend proxy pattern for email communication. No API keys are exposed to the client-side JavaScript.

### 1. Environment Variables
Create a `.env` file in the root directory (refer to `.env.example`):
```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

### 2. EmailJS Template Matrix
When creating your **Email Template** in the EmailJS dashboard, use the following variable names in the double curly braces to match the backend API:

| Field | Template Variable | Description |
| :--- | :--- | :--- |
| **Sender Name** | `{{from_name}}` | Captured from the 'Name' input field |
| **Reply To** | `{{reply_to}}` | Captured from the 'Email' input field |
| **Subject** | `{{subject}}` | Captured from the 'Subject' input field |
| **Message** | `{{message}}` | The main body of the inquiry |

### 3. Backend Proxy
All requests are routed through `src/pages/api/send-email.ts`, which securely fetches the EmailJS REST API using server-side environment variables.

## 🌐 Deployment
Optimized for **Netlify** or **Vercel**. Ensure you add the environment variables listed above in your deployment dashboard (Settings > Environment Variables).

---
© 2026 Ho Jun Hong. Built with Astro, Tailwind CSS, and ❤️
