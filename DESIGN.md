# NeuGynesis — Design System

Every step of the build follows this file. If a component disagrees with it, the component is wrong.

---

## 1. Brand

- **Logo files**
  - `public/logo.png`: full lockup (mark + wordmark), cropped from the original `logo.jpg`.
  - `public/logo-mark.png`: mark only. Used for the favicon and compact spots.
  - Both have a white background. Use them only on light surfaces (`--bg`, `--surface`). On the deep indigo band, use the `Logo` component's `tone="light"` (mark on a white disc + typeset wordmark).
- **Name split:** **"Neu"** in deep indigo (neuro), **"Gynesis"** in magenta-rose (women's health). When we typeset the name, keep this split.
- **Mark:** neural dots and lines (brain) on the left, flowing curves, a mother-and-child silhouette and leaves (woman, growth) on the right.
- **Specialty toggle:** the page has two modes. Neuro = indigo theme, Women's = magenta theme.

## 2. Colour

All colours are CSS variables in `src/index.css` and exposed to Tailwind as utilities (`bg-accent`, `text-ink`, `border-line`, etc.).

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FCFAFD` | Page background (soft white) |
| `--surface` | `#FFFFFF` | Cards, alternate sections |
| `--ink` | `#1A1838` | Headings, body text |
| `--muted` | `#5E5B73` | Secondary text |
| `--line` | `#ECE7F0` | Hairlines, borders |
| `--brand-indigo` | `#24206B` | Brand |
| `--brand-plum` | `#6B1E7A` | Brand (gradient midpoint) |
| `--brand-magenta` | `#B8185C` | Brand |
| `--band` | `#16124A` | Deep indigo full-width band |
| `--band-berry` | `#3A0D33` | Deep berry band (women's lane privacy band only) |
| `--emergency` | `#C2410C` | **Stroke / emergency elements only** |
| `--whatsapp` | `#25D366` | **WhatsApp buttons only** |

**Theme tokens** change with `data-specialty` on `<html>`:

| Token | Neuro | Women's |
|---|---|---|
| `--accent` | `#24206B` | `#B8185C` |
| `--accent-strong` | `#16124A` | `#8C1247` |
| `--accent-soft` | `#ECEBF7` | `#FBE9F0` |

- The theme switches with `data-specialty="neuro|womens"` on the root element. The accent tokens are registered with `@property`, so they fade over **400ms** instead of snapping.
- **Signature gradient** (`--brand-gradient`: indigo → plum → magenta) is an accent only. Use it for hero key words, the main shared CTA, and thin divider lines. Nowhere else.

## 3. Typography

One family: **Outfit** (Google Fonts, weights 300/400/500/600/700, `display=swap`). Tailwind tokens `font-heading` and `font-body` both point to Outfit with a system sans-serif fallback; `font-sans`/`font-serif` are aliased to it so no other face can load. Outfit has no italic: never use `italic`.

- **Headings:** weight 600 (`font-semibold`), letter-spacing -0.02em to -0.03em, line-height 1.05–1.15. Display sizes (hero H1, Approach statement) use 500.
- **Body:** weight 400, 16px minimum on mobile (17px desktop), line-height 1.6. Secondary text uses `text-muted`.
- **Eyebrows:** weight 500, 12px, uppercase, letter-spacing 0.12em. One line on mobile: hide secondary parts (e.g. "· Dr. Name") below `sm` rather than let them wrap.
- **Buttons:** weight 600, sentence case, never all-caps.

**Type scale.** Use only these sizes:

| Token / class | Mobile → Tablet → Desktop | Use |
|---|---|---|
| `text-display` | 34px → 48px → 60px | Hero H1 (max 4 lines on mobile) and the Approach statement |
| `text-title` | 30px → 48px | Lane titles, doctor name, the pull-quote |
| `text-h2` | 30px → 36px → 40px | Section titles |
| `text-h3` | 22px → 24px → 26px | Sub-section / card titles |
| `text-h4` | 18px → 19px | Small headings, list titles |
| `text-lead` | 18px → 20px | Intro paragraphs |
| `text-base` | 16px → 17px | Body |
| `text-sm` | 15px | Meta, captions, form hints, list items |
| `text-eyebrow` | 12px | Eyebrow labels only (uppercase, tracked) |
| `text-numeral` | 44px → 56px | Large decorative step numbers (aria-hidden) |

Max line length for body copy: about 68 characters (`max-w-prose`). No arbitrary `text-[…]` sizes in components.

**Numbering.** Page sections are `01`–`06`. Blocks inside a lane are sub-numbered `1.1`, `1.2`… (both lanes live in section 01). Show a section label once, not on every block.

## 4. Layout and spacing

- **8px spacing scale.** Tailwind units in multiples of 2 (`2, 4, 6, 8, 12, 16, 24` → 8px…96px). Odd steps (5, 7, 9) are not used. Half-steps (`1.5`, `2.5`, `3.5`) only for fine adjustments inside small components.
- **Container:** `.container-x`, max 1200px, side padding 16px (mobile) → 24px → 32px.
- **Section padding:** `.section-y`, 64px mobile → 96px desktop.
- **Mobile-first.** Must work perfectly at **360px** wide. No horizontal scroll, ever.
- **Grid:** 12 columns on desktop. Prefer uneven splits (5/7, 4/8, 7/5).

## 5. Photography

- Real photographs only (Unsplash / Pexels), Indian people and settings where possible, natural light. No AI images, illustrations, 3D renders, glowing brains or screen-pointing poses.
- All paths, sizes, crop positions and alt text live in `src/data/images.js`; files in `public/images/stock/`, credits in `CREDITS.md`.
- Use `Photo` (content images) or `DoctorPhoto` (arched doctor frames). Fixed aspect ratio, `object-cover`, explicit width/height, card radius, hairline border. No overlays, shadows or filters. `loading="lazy"` except above the fold.

## 6. Shape, shadow, motion

- **Radius:** cards `16px` (`rounded-card`). Buttons, chips and toggles are **fully rounded (pill)**, everywhere. Doctor photo frames have an **arched top** (`rounded-t-full`) and a small bottom radius. Inputs `12px` (`rounded-input`). Women's lane soft panels `28px` (`rounded-soft`), plus one large curved corner on the fertility lead block. No other radii.
- **Shadows:** soft, low and indigo-tinted (`shadow-soft`). Prefer `1px` `--line` borders and hairline rules. No glow, no glassmorphism, no neon.
- **Motion:** gentle fade/slide-up (≤ 24px, 0.5–0.7s, ease-out) on first view, once. Subtle hover states (colour, 2px lift at most). No bounce, spin or parallax. Respect `prefers-reduced-motion`: framer-motion uses `MotionConfig reducedMotion="user"`, and CSS transitions are disabled under that media query.

## 7. Anti-"AI-generated" rules (strict)

1. **Vary section layouts.** The "3 cards with an icon on top" grid appears **at most twice** on the page. Mix editorial two-column layouts, numbered lists, typographic lists with hairline dividers, timelines, tables, one large pull-quote, and split image/text blocks.
2. **Left-align most headings and text.** Centre only rarely (one short statement). Never repeat "centred heading + centred paragraph + card grid" down the page.
3. **Asymmetry.** Uneven column splits, offset elements, occasional overlap (e.g. a photo frame overlapping a coloured band).
4. **Gradients sparingly.** Only for the hero key words, the main shared CTA and thin dividers. Most surfaces are flat.
5. **No glassmorphism, glowing shadows or neon.**
6. **Icons only where they aid scanning.** Not on every list item or every card. Phone and WhatsApp buttons carry their icon (recognition); Book, Submit and Directions buttons do not (exception: the mobile bottom bar, where all three items carry an icon, like a tab bar).
7. **Vary section backgrounds** for rhythm: `--bg`, `--surface`, `--accent-soft` tint, and at least one deep indigo (`--band`) full-width band with light text.
8. **Editorial details:** section numbering ("01 — Neurosciences"), small-caps labels, hairline dividers, generous white space, real hierarchy.
9. **Copy:** no emoji. Banned words: *transform, unlock, seamless, cutting-edge, state-of-the-art, world-class, best, No. 1, guaranteed, 100% success*. Microcopy is plain, warm and specific.
10. **Quiet motion** (see §5).
11. **Radius with intent** (see §5). Not everything maximally rounded.
12. **Logo motifs as faint background only** (opacity ≤ 0.5): neural dot-and-line patterns in neuro areas; soft curves and small leaves in women's areas.

## 8. Content and compliance (medical advertising, India)

- Use content from `clinic-content.md` faithfully, via `src/data/*.js`. Replace "[Clinic Name]" with **NeuGynesis**.
- Never add medical claims, success rates, statistics, testimonials, reviews or before/after content not in the file.
- British/Indian spelling: Gynaecology, Fertilisation, Haemorrhage, Specialities.
- The full disclaimer appears in the footer, unabridged.

## 9. Conversion

- **Main actions:** Call, WhatsApp, Book Appointment. A CTA must be reachable within one scroll from anywhere on the page (sticky header CTA on desktop, sticky bottom bar on mobile, plus inline CTAs).
- **WhatsApp links always carry a context-specific pre-filled message** (use `waLink(message)` from `src/config/clinic.js`).
- **Button hierarchy:**
  - `primary`: solid accent (follows the specialty theme)
  - `gradient`: brand gradient, **only for the shared main CTA**
  - `secondary`: outline
  - `whatsapp`: green `#25D366`
- Clicking "Book" from a specialty or concern calls `goToBooking(doctor, concern)` so the form arrives pre-filled.

## 10. Accessibility

- One `h1` (hero). Headings never skip a level; accordions take `headingLevel` to fit where they sit.
- Tap targets at least **44×44px** on mobile, including text links that stand alone (use `min-h-11`).
- Focus rings: 2px accent outline; on the deep bands and footer the ring switches to white.
- Contrast: WCAG AA in both themes. Faint decorative numerals are `aria-hidden` and still at least 3:1.
- Skip link to `#main`. Mobile menu traps focus and closes on Escape.
- Images below the fold: `loading="lazy"` and `decoding="async"`.

## 11. Code conventions

- Contact details live only in `src/config/clinic.js`.
- Copy lives only in `src/data/` (`shared.js`, `neuro.js`, `womens.js`). Components never hard-code medical text.
- Specialty state: `useSpecialty()` from `src/context/SpecialtyContext.jsx`. URL hash `#neuro` / `#fertility`.
- Doctor photos: drop `public/images/dr-dinesh.jpg` / `public/images/dr-shobhna.jpg`. `DoctorPhoto` falls back to initials if they're missing.
