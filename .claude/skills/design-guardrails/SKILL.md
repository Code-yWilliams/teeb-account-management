---
name: design-guardrails
description: >-
  Use before any visual or layout change — colors, fonts, spacing, a new
  section, moving things around, "make it look nicer", "change the color
  scheme", "it feels dated". Protects the site's existing design system and
  applies solid frontend-design judgment so changes stay consistent, tasteful,
  and accessible instead of piecemeal.
---

# Design guardrails

Design changes live in `src/` and affect the **whole page at once**. This site
already has a deliberate, cohesive design system. Your job is to change it
*within that system*, not to bolt on one-off tweaks that make it look patched.
When a request is subjective ("make it pop", "modernize it"), get specific first
with `be-specific`.

## The existing system (respect it)

- **Type:** `Fraunces` (a serif) for display/headlines, `Inter` for body/UI.
  Two families, used consistently. Don't introduce a third font.
- **Palette:** warm off-whites/creams for light sections, a deep navy family
  (`#12426A`, `#1e3a54`, `#163050`) for the dark sections, and a small set of
  blue accents. It reads calm and editorial. New colors should come *from this
  palette*, not a random new hue.
- **Rhythm:** each section is a small "eyebrow" label + a serif section title +
  content, alternating light and dark backgrounds. Keep that cadence.
- **Motion:** content reveals on scroll with a gentle stagger; key numbers
  count up. It's subtle on purpose. All of it respects
  `prefers-reduced-motion` — keep that respect.
- **Responsive:** there's a real mobile layout with a burger nav. Every change
  must be checked at a narrow width, not just desktop.

## Principles for good changes

1. **Restraint beats novelty.** The site's strength is that it's clean and
   consistent. Fewer, more deliberate changes read as more premium than many
   small flourishes.
2. **Reuse tokens, don't invent.** Match existing colors, spacing steps, font
   sizes, and radii already in `src/styles.css`. If you need a value, look for
   one that already exists first.
3. **Hierarchy is the point.** Size, weight, and space should make the eye move
   in the right order. If everything is emphasized, nothing is.
4. **Change it once, everywhere.** Because `src/` is shared, make the change in
   the right rule so it applies uniformly — don't override one instance inline.
5. **Accessibility is non-negotiable.** Keep strong text/background contrast,
   readable sizes, and keyboard/focus behavior intact.

## Hard rules

- **Don't sprinkle inline styles or one-off colors** to force a look. Put it in
  `src/styles.css` so the system stays coherent.
- **Keep the count-up metric format.** Stats render as `prefix + number +
  suffix` (e.g. `$2M`, `~3x`, `10+`). Don't change that shape or the animation
  breaks.
- **Never change words here.** Words live in `content/content.json` — see
  `content-vs-design`.
- **Always preview both widths before publishing:** `npm run preview` →
  `http://localhost:4321/`, then resize the window narrow.

## A good workflow for bigger design asks

Understand → propose → preview → apply. For anything beyond a small tweak,
describe the change (or 2–3 options) and how it fits the existing system, get a
thumbs-up, make it in `src/styles.css`/`src/template.js`, preview at desktop and
mobile, then publish with the `update-site` flow.
