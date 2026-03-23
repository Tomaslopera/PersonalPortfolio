# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

No tests exist in this project.

## Architecture

Single-page React 19 application built with Vite 7, deployed on Netlify at `https://tomasloperaportfolio.netlify.app/`.

**Entry point:** `index.html` → `src/main.jsx` → `src/App.jsx`

**Routing (React Router v7):**
- `/` — Home (about + technologies overview)
- `/skills` — Skills list
- `/projects` — Filterable project cards grid
- `/education` — Education, languages, certifications
- `/experience` — Defined but the Navbar link is commented out

**Key conventions:**
- Each page in `src/pages/` has a co-located CSS file (e.g., `Home.jsx` + `Home.css`)
- Each component in `src/components/` has a co-located CSS file
- All content (projects, education, certifications, experience entries) is hardcoded as JS arrays/objects directly inside the page components — there is no external data file or API
- `src/assets/` holds all static images: photos, SVG icons, project screenshots, skill/tech logos

**Note:** `@tsparticles/react` and `@tsparticles/engine` are installed as dependencies but are not currently used in any source file.