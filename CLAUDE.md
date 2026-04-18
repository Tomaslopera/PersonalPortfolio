# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

No build tool or package manager. Serve the files with any static server:

```bash
python3 -m http.server 8080   # then open http://localhost:8080
npx serve .                   # alternative
# VS Code Live Server extension also works
```

No tests exist. No lint tooling.

## Architecture

Vanilla HTML/CSS/JS portfolio — no framework, no bundler, no npm.

**Pages:** `index.html` · `projects.html` · `experience.html` · `education.html`

**Shared files loaded by every page (in this order):**
1. `styles.css` — global design tokens, nav, footer, buttons, chips, animations, and all shared utilities
2. `data.js` — single `DATA` const object containing *all* portfolio content (bio, stats, stack, projects, experience, education, certifications)
3. `nav.js` — IIFE that injects the `<nav>` and `<footer>` into the DOM; also defines the global `initReveal()` function

**Page rendering pattern:**
Each HTML file has an inline `<script>` at the bottom that:
1. Populates DOM elements by ID using `DATA.*`
2. Calls `initReveal()` after all dynamic content is in the DOM

`initReveal()` uses `IntersectionObserver` to add `.in-view` to elements with `.reveal` as they scroll into view. It **must** be called after injecting content — calling it too early means newly added `.reveal` elements won't be observed.

**Page-specific styles** live in a `<style>` block inside each HTML file's `<head>`, not in `styles.css`.

## Design System

Defined as CSS custom properties in `styles.css`:

- `--white` / `--off` / `--light` / `--mid` / `--border` — neutral backgrounds/borders (warm off-white palette)
- `--text` / `--muted` / `--faint` — text hierarchy
- `--accent` (#1A7A6E teal) — section labels and eyebrows
- Color pairs: `--blue` / `--blue-mid` / `--blue-light`, `--teal-mid`, `--purple-mid`, `--amber-mid`, `--coral-mid`, `--green-mid`, `--pink-mid` — used for category dots, chip accent bars, and hover states

Typography: **DM Serif Display** (headings/display), **DM Sans** (body), **JetBrains Mono** (code/mono). Loaded from Google Fonts in each HTML `<head>`.

## Content Updates

**All content lives in `data.js`.** To add or edit projects, experience entries, education, certifications, or personal info — edit only `data.js`. The HTML files read from `DATA` at runtime and never contain content directly.

The `DATA.cvPath` field controls whether a "Download CV" button appears in the nav — set to `null` to hide it or provide a filename relative to the HTML files.

## Key Conventions

- Nav and footer are injected by `nav.js`, not written in HTML — do not add them to HTML files manually
- Active nav link is determined by `location.pathname` comparison in `nav.js`
- Category colors for project cards reference CSS variables from `styles.css` (e.g. `var(--blue-mid)`)
- Reveal animation: add class `reveal` to an element and optionally `style="transition-delay: Xs"` for staggered entrance; `.in-view` is added by `initReveal()`
