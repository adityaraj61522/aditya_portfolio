# Aditya Raj — Portfolio

A high-gloss, animated personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Dark glassmorphism theme, scroll-reveal animations, a downloadable résumé, and a contact form that emails you directly.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build for production:

```bash
npm run build && npm start
```

---

## ⚙️ Before you go live — 3 things to personalize

All content lives in one file: [`src/lib/data.ts`](src/lib/data.ts).

### 1. Contact form → get emailed on every message (required)

The form uses [Web3Forms](https://web3forms.com) (free, no backend).

1. Go to **https://web3forms.com**, enter the email address where you want to receive messages, and you'll get an **Access Key** in your inbox.
2. Add it either way:
   - **Recommended:** create a file `.env.local` in the project root:
     ```
     NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
     ```
   - **Or** paste it directly into `WEB3FORMS_ACCESS_KEY` at the bottom of `src/lib/data.ts`.
3. Restart `npm run dev`.

Until a key is set, the form shows a friendly "not configured yet" message instead of sending.

### 2. Your links (recommended)

In `src/lib/data.ts`, update the `profile` object:

- `linkedin` — your LinkedIn URL (currently a placeholder)
- `github` — your GitHub URL (currently a placeholder)

And in the `projects` array, replace the `github: "#"` / `demo: "#"` placeholders with your real repo and live-demo URLs.

### 3. Your résumé PDF

The download button serves `public/Aditya_Raj_Resume.pdf`. To update it, replace that file (keep the same name), or change `profile.resumeUrl` if you rename it.

---

## Deploy (free) on Vercel

1. Push this folder to a GitHub repo.
2. Import it at **https://vercel.com/new**.
3. Add the environment variable `NEXT_PUBLIC_WEB3FORMS_KEY` in the Vercel project settings.
4. Deploy. Every push auto-deploys.

---

## Project structure

```
src/
  app/
    layout.tsx        # metadata, fonts
    page.tsx          # assembles all sections
    globals.css       # design tokens + glossy theme utilities
  components/         # Navbar, Hero, Stats, About, Skills, Experience, Projects, Contact, Footer
  lib/
    data.ts           # ← ALL your content lives here
    motion.ts         # shared easing
public/
  Aditya_Raj_Resume.pdf
```
