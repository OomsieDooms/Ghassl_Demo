# Ghassel – Premium Mobile Car Wash Landing Page

A demo landing page for **Ghassel** (غسّل), a premium on-demand mobile car wash service based in Saudi Arabia.

Built with **Next.js 14+** (App Router), **TypeScript**, and **Tailwind CSS**. Features a high-performance scrollytelling engine powered by a 298-frame image sequence at 60fps.

## Features

- 🎬 **Scrollytelling Hero** — canvas-based 298-frame image sequence driven by native scroll
- 🌍 **Full RTL/LTR support** — Arabic (right-to-left) and English (left-to-right) with a dropdown language switcher
- 🎨 **Premium design** — glassmorphic navbar, animated overlays, dark footer, CTA download banner
- 📱 **App Store & Google Play CTAs** — real Ghassel branding assets
- 🔗 **Social links** — X (`@ghasslapp`) and YouTube (`@ghassl`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** Place the 298 hero frame images (`1.jpg` – `298.jpg`) inside `public/hero-sequence/` before running.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Noto Sans Arabic, Outfit |
| Animation | requestAnimationFrame (native) |

## Deploy

Deploy instantly to [Vercel](https://vercel.com/new) — zero configuration needed for Next.js.
