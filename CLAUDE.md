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

**This is a single-page site.** Everything (hero, about, experience, projects, education, showcase) lives in one `index.html`, in that scroll order, as `<section id="...">` blocks. Navigation is anchor-based (`#about`, `#experience`, `#projects`, `#education`) with scrollspy, not multi-page routing — the trailing `#showcase` section is reachable from the footer only, not the main nav. `styles.css`, `data.js`, and `nav.js` are referenced by **absolute path** (`/styles.css`, not `styles.css`) — keep it that way if new assets are added.

> Historical note: an earlier version of this site had separate `/projects`, `/experience`, `/education` pages. It was deliberately collapsed into one page (inspired by the single-page, anchor-nav layout of sites like gazijarin.com) to read as one continuous flow instead of boxed, disconnected sections. If `projects/`, `experience/`, or `education/` directories still exist in the tree, they are leftover and unused — safe to delete; nothing links to them.

**Shared files loaded by `index.html` (in this order):**
1. `styles.css` — global design tokens, nav, footer, buttons, chips, section-header pattern, animations, and all shared utilities
2. `data.js` — single `DATA` const object containing *all* portfolio content (bio, stats, stack, projects, work experience, academic history, education, certifications)
3. `nav.js` — IIFE that injects the `<nav>` and `<footer>` into the DOM, wires up the mobile drawer, runs a scrollspy `IntersectionObserver` that toggles `.active` on the nav link matching the section in view, and defines the global `initReveal()` function

**Page rendering pattern:**
The inline `<script>` at the bottom of `index.html`:
1. Populates DOM elements by ID using `DATA.*`
2. Calls `initReveal()` after all dynamic content is in the DOM

`initReveal()` uses `IntersectionObserver` to add `.in-view` to elements with `.reveal` as they scroll into view. It **must** be called after injecting content — calling it too early means newly added `.reveal` elements won't be observed.

**Section-specific styles** live in the `<style>` block inside `index.html`'s `<head>`, not in `styles.css`. `styles.css` only holds primitives reused across multiple sections (nav, footer, buttons, chips, `.content`/`.section-header` layout, `.tri-list`).

## Design System

Defined as CSS custom properties in `styles.css` — a dark "terminal" navy/green palette:

- `--bg` / `--bg-deep` / `--off` / `--light` / `--mid` / `--border` — navy depth scale (page bg → nav/footer → elevated panels → borders)
- `--white` / `--text` / `--muted` / `--faint` — text hierarchy (brightest heading color → body → secondary → dim)
- `--accent` (`#64ffda` bright green) / `--accent-dim` — the single interactive accent: links, hover states, focus rings, section-title `/` prefix, tab indicators
- Color pairs: `--blue` / `--blue-mid` / `--blue-light`, `--teal-mid`, `--purple-mid`, `--amber-mid`, `--coral-mid`, `--green-mid`, `--pink-mid` — used for category labels/dots on stack and project cards

Typography: **JetBrains Mono** (all headings/display text, bold) + **Inter** (body text). Loaded from Google Fonts in `index.html`'s `<head>`. Everything leans mono/code-flavored on purpose — section headers read as `/ about`, buttons read as `$ View Projects`, eyebrows read as `// comments` — don't reintroduce a serif/display font.

**Section header pattern** (`.section-header` + `.section-rule` + `.section-title`): every major section opens with `/ title ─────` (title in accent-prefixed bold mono, a thin rule filling the remaining width, optionally a trailing `.section-link` like "View all on GitHub →"). Reuse this, don't invent a new per-section heading style.

**No boxed/alternating-background sections.** The whole page shares the same `--bg` background; sections are separated by whitespace (`.content` wrapper, `padding: 5.5rem 1.5rem`, `max-width: 880px`, centered) and the section-header rule, not by card containers or background-color blocks. Cards (project cards) are one intentional exception.

**The `#showcase` section is the other intentional exception**, and goes further: it's a deliberately different design language, not just a boxed card. Skills, Academic Experience, and Certifications — previously three separate flowing sections — were merged into one bordered "window" widget (`.showcase-window`) with a plain titlebar (tabs labeled `skills` / `academic experience` / `certifications` — no macOS-style traffic-light dots, that was tried and explicitly rejected) and three panels that slide horizontally via tab clicks, prev/next arrow buttons, swipe, or arrow keys, with a progress bar at the bottom. Don't apply this card/carousel treatment to any other section — it exists specifically because these three content types felt disjointed as standalone sections and benefit from being framed as one distinct, self-contained "panel" instead. Each `.showcase-panel` has a `max-height` (560px desktop / 440px mobile) with `overflow-y: auto`, so a longer panel (e.g. Academic Experience) scrolls internally instead of growing the whole page — don't remove that cap even if a panel's content grows.

## Content Updates

**All content lives in `data.js`.** To add or edit projects, experience entries, education, certifications, or personal info — edit only `data.js`. `index.html` reads from `DATA` at runtime and never contains content directly.

- The nav (desktop) and drawer (mobile) both render a row of social icon links — GitHub, LinkedIn, Mail, WhatsApp — built in `nav.js` from `DATA.github`, `DATA.linkedin`, `DATA.email`, `DATA.whatsapp`. There's no CV download button; this was removed in favor of direct contact links.
- `DATA.projects[].featured: true` controls which projects render in the on-page grid — the rest are reachable via the "View all on GitHub" link next to the Projects section header, not an internal page. Keep this to a handful (~6–8) spanning different categories; don't flip it to show everything, that's the density the single-page redesign was explicitly trying to avoid.
- `DATA.work[]` drives the Experience tabs (one tab per company, most recent first); `w.bullets` renders as the `▹`-marked list inside the active tab panel.
- `DATA.skills[]`, `DATA.academic[]` (hackathons/research), and `DATA.certifications[]` each render into one panel of the `#showcase` carousel (skills grid / academic timeline / certification cards) — see the `SHOWCASE_PANELS` array in `index.html`'s inline script. `a.badgeStyle` ("winner"/"runner") drives the accent-bar and badge color on academic entries; `c.color` sets a certification card's top accent stripe.
- `DATA.skills[]` order is deliberate: "Software Engineer" leads, ahead of Data Engineering / AI Engineer / Cloud Engineer — the intended primary identity is software engineer first, with data/AI/cloud as specializations. Don't reorder without the user's intent to re-prioritize that framing. "AI Engineer" and "Cloud Engineer" are intentional labels (not "Data Science" / "AWS & Cloud") — keep that phrasing if editing.

## Key Conventions

- Nav and footer are injected by `nav.js`, not written in HTML — do not add them to HTML files manually
- Nav links are anchors to section ids on the same page (`#hero`, `#about`, `#experience`, `#projects`, `#education`); active state comes from the scrollspy observer in `nav.js`, not from `location.pathname`
- Category colors for project/stack items reference CSS variables from `styles.css` (e.g. `var(--blue-mid)`)
- Reveal animation: add class `reveal` to an element and optionally `style="transition-delay: Xs"` for staggered entrance; `.in-view` is added by `initReveal()`
- Bulleted lists (experience bullets, education focus tags, certifications) use `.tri-list` for the `▹` marker — don't use plain `<ul>` default bullets
