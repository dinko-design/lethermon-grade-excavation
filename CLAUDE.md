# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Lethermon Grade Excavations, a local excavation contractor in Bradenton/Sarasota, FL. Originally generated from a Figma Make design. The site targets builders, developers, and property owners needing excavation services.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server
- `npm run build` — production build

No test runner or linter is configured.

## Architecture

**Stack:** React 18, Vite, Tailwind CSS v4, React Router v7, shadcn/ui components

**Path alias:** `@` maps to `./src` (configured in `vite.config.ts`)

**Entry flow:** `index.html` → `src/main.tsx` → `src/app/App.tsx` → `src/app/routes.ts` (React Router `createBrowserRouter`)

**Layout:** `src/app/components/Layout.tsx` wraps all routes with `Header`, `Footer`, scroll-to-top, and JSON-LD schema markup.

**Routing:** All routes defined in `src/app/routes.ts` as flat children of the Layout route. Service pages live under `services/` path prefix, service area detail pages use `:slug` params.

**Key directories:**
- `src/app/components/` — page components and shared components (Header, Footer, StarRating, VideoPlaceholder, ServicePageTemplate)
- `src/app/components/ui/` — shadcn/ui primitives (button, card, dialog, etc.)
- `src/app/components/services/` — individual service page components
- `src/app/components/figma/` — Figma-specific helpers (ImageWithFallback)
- `src/app/components/data.ts` — centralized data store (images, reviews, service areas, blog posts, press releases, job listings)
- `src/styles/` — CSS entry point (`index.css` imports `fonts.css`, `tailwind.css`, `theme.css`)
- `src/assets/` — static images (PNG files with hash names)
- `src/imports/` — reference documents (target audience analysis)

**Styling:**
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (not PostCSS)
- Design tokens defined as CSS custom properties in `src/styles/theme.css` (earthy palette: primary `#5C4A1E`, accent `#C4956A`, background `#FAFAF8`)
- Fonts: Outfit (headings), Inter (body) loaded from Google Fonts
- Custom CSS utilities in `theme.css`: `.noise-overlay`, `.grit-top`/`.grit-bottom`, `.vignette` for texture effects
- shadcn/ui utility function `cn()` in `src/app/components/ui/utils.ts`

**Vite config notes:**
- React and Tailwind plugins are both required — do not remove either
- SVG and CSV files configured as raw asset imports; never add `.css`, `.tsx`, or `.ts` to `assetsInclude`

## Guidelines

- The `guidelines/Guidelines.md` file is a template for Figma Make AI rules — currently has no active custom rules
- Business context and target audience research is in `src/imports/lethermon-target-audience.txt`
