## Project Summary
A professional medical/healthcare landing page for Dr. Willmer Obregón, an Internal Medicine specialist in Medellín. The site primarily focuses on non-surgical treatments for knee pain (viscosupplementation with hyaluronic acid) and general internal medicine, providing a clean, trustworthy, and modern patient experience.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Lucide React (Icons)
- TypeScript

## Architecture
- `src/app/page.tsx`: Main entry point assembling the sections.
- `src/components/sections/`: Modular React components (Hero, Benefits, Services, Viscosuplementacion, Experience, FAQ, CTA, Footer, Header).
- `src/app/globals.css`: Global styles including custom medical theme variables and Tailwind base styles.

## User Preferences
- Focused on the homepage implementation.
- Clean medical aesthetic with teal/ocean blue accent color (#1080A0).
- Information reinforced specifically for viscosupplementation for knee osteoarthritis.
- Contact phones: +57 305 397 9628 (Primary), +57 301 150 5174, +57 300 989 5852.
- Official emails: tuinternistafavorito@gmail.com, tuinternistaresponde@gmail.com.
- Copyright attribution: 2026 LocalRank (https://localrank.com.co/).

## Project Guidelines
- Use functional components with TypeScript.
- Maintain a consistent medical theme with rounded corners (rounded-3xl, rounded-[2rem]) and ample whitespace.
- Interactivity in sections (like FAQ accordions or Footer scroll-to-top) requires `"use client";`.
- Use relative URLs for client-side API calls.

## SEO & Production Rules
- H1 único por página: `<h1>{{primary_keyword}} en {{city}} - {{brand}}</h1>`. Keyword al inicio para CTR SERP.
- Jerarquía H2/H3: H2 para secciones principales, H3 para subsecciones. No saltar niveles; semántica estricta.
- Meta Title: `<title>{{primary_keyword}} | {{brand}} {{city}}</title>`. 50-60 chars, keyword a la izquierda.
- Meta Description: `<meta name="description" content="{{summary con CTA + keywords locales}}">`. ~150 chars.
- Meta Robots: `<meta name="robots" content="index, follow">`.
- Imágenes ALT: Todo `<img>` con `alt="{{descriptivo + keyword local}}"`. Width/Height definidos.
- Responsive: `<meta name="viewport" content="width=device-width, initial-scale=1">`. Mobile-first Tailwind.
- Regla global: "Siempre genera SEO on-page completo antes de UI. Verifica jerarquía headings, metas y ALTs en preview."

## Common Patterns
- Section components are stored in `src/components/sections/`.
- Use `lucide-react` for icons.
- Use `cn` utility for conditional class merging.
