# Eungi Hong Portfolio (v4)

Personal portfolio website built with React, TypeScript, and Vite.

## Stack

- React
- TypeScript
- Vite
- React Router

## Run Locally

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build (`dist/`)
- `npm run preview` — preview build
- `npm run lint` — lint code

## Edit Content

- Projects: `src/data/projects.ts`
- Work experience: `src/data/workExperience.ts`
- Pages: `src/pages/*`

## Deploy

- Build command: `npm run build`
- Output directory: `dist`
- Works well on Vercel or Netlify

For Netlify + React Router, add `public/_redirects`:

```txt
/* /index.html 200
```
