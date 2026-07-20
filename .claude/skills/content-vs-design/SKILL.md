---
name: content-vs-design
description: >-
  Use to decide WHERE a change belongs before making it — the words and data in
  content/content.json, versus the design and markup in src/. Enforces the rule
  that copy edits never touch src/, and design edits happen once in a shared
  place. Trigger whenever you're about to open a file to make a change and want
  to be sure you're opening the right one.
---

# Content vs. design: where does this change go?

This site deliberately splits into two layers. Keeping them separate is what
lets the words and the look evolve independently — and it's what keeps a simple
copy edit from ever breaking the layout.

## The two layers

**CONTENT — the words and data.** Lives in `content/content.json`.
Everything a visitor *reads*: headlines, paragraphs, bullets, stat numbers,
project stories, tool names, links, contact info. This is data. Editing it can
never break the design.

**DESIGN — the code.** Lives in `src/`:
- `src/template.js` — the HTML structure / markup (what wraps the content)
- `src/styles.css` — all styling (color, type, spacing, layout)
- `src/main.js` — interactions (nav, scroll reveals, the count-up animation)

Changing `src/` changes the *look and structure of every part of the page at
once*. It's powerful and easy to get subtly wrong — treat it with care and read
the `design-guardrails` skill first.

## How to decide (fast)

Ask: *"Is the visitor reading this, or seeing it?"*

- **Reading it** (the actual words/numbers/links) → `content/content.json`.
- **Seeing it** (color, font, size, spacing, a new kind of section, animation)
  → `src/`.

Examples:
- "Fix a typo in the About text" → content.
- "Change my job title" → content (`profile.title`, `hero`, etc.).
- "Add a project" → content (`projects.cards[]`).
- "Make the headline navy instead of black" → design (`src/styles.css`).
- "Add a testimonials section that doesn't exist yet" → design (new markup in
  `src/template.js` + styles) **and** content (the testimonial data). New
  *shapes* of content need a code change; new *instances* of an existing shape
  don't.

## Two hard rules

1. **A copy change must never require editing `src/`.** If you find yourself
   editing `src/template.js` to change a word, stop — the word belongs in
   `content/content.json`.
2. **No HTML in the JSON.** Content is escaped, so `<b>bold</b>` would render as
   literal text. Write plain text; `&` is fine (it's escaped for you).

After you've placed the change correctly, follow `update-site` to preview and
publish.
