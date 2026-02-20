# Eungi Hong Portfolio (v4)

Personal portfolio website built with React, TypeScript, and Vite.

## Overview

This portfolio highlights:

- Professional profile and software engineering focus
- Work experience and technical skill stack
- Selected projects with external links (prototype, pitch deck, publication, demo)
- Contact information and Binu user survey call-to-action

## Pages

- Home (`/`)
  - Intro and featured Binu section
  - External links + featured image
- About (`/about`)
  - Skills, work experience, and “Why Choose Me” section
- Projects (`/projects`)
  - Data-driven project cards from `src/data/projects.ts`
  - Link buttons rendered from each project's `links` array
- Contact (`/contact`)
  - Email, LinkedIn, phone, and Binu user survey link

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- CSS (single stylesheet: `src/index.css`)

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start local dev server
- `npm run build` — type-check and build production files into `dist/`
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Editing Content

- Project cards and project links:
  - `src/data/projects.ts`
- Work experience:
  - `src/data/workExperience.ts`
- Page content:
  - `src/pages/HomePage.tsx`
  - `src/pages/AboutPage.tsx`
  - `src/pages/ProjectsPage.tsx`
  - `src/pages/ContactPage.tsx`

## Deploy

This is a static Vite app, so deploy to any static host.

### Option A: Vercel (recommended)

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Use:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

### Option B: Netlify

1. Connect your repo in Netlify.
2. Use:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy.

## SPA Routing Note (Important)

Because this app uses `BrowserRouter`, direct refreshes on routes like `/projects` can return 404 on some hosts unless rewrite rules are configured.

- Vercel: add a rewrite to route all paths to `/index.html`
- Netlify: add a `_redirects` file with:

```txt
/* /index.html 200
```

## License

This project is for personal portfolio use.
