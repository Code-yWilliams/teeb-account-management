---
name: update-site
description: >-
  Use whenever the user wants to change, add, fix, or remove anything a visitor
  sees on the website — a headline, a stat, a bullet, a project, a link, contact
  info, wording, or a whole section. Walks through the safe edit → preview →
  publish flow for this content-driven site. Triggers on "update my site",
  "change the…", "fix the wording", "add a project", "my email changed",
  "the stats are wrong", and similar.
---

# Updating this website

This site is built so that **the words are data and the design is code**. Almost
every change a visitor would notice is a change to **one file**: `content/content.json`.
You rarely need to touch anything else. Follow this flow every time.

## 1. Understand the change first

If the request is vague or subjective ("make the hero punchier", "update my
experience", "add my new job"), **stop and get specific first** — use the
`be-specific` skill. Don't guess at copy. Copy on a résumé site has to be exact
and truthful.

## 2. Find the right place

Everything on the page maps to a key in `content/content.json`:

| On the page…            | In `content/content.json`…              |
| ----------------------- | --------------------------------------- |
| Browser tab / SEO       | `site.title`, `site.description`        |
| Top-left status line    | `nav`, `hero.availability`              |
| Big headline            | `hero.headline`, `hero.headlineEmphasis`|
| Sidebar name/stats      | `profile.name`, `profile.title`, `profile.stats` |
| "About" paragraphs      | `about.paragraphs`, `about.quote`       |
| The number band         | `statsBand`                             |
| "What I do" columns     | `what.columns[].items[]`                |
| Work history            | `experience.items[]` (each has `bullets`) |
| Project case studies    | `projects.cards[]` (Situation/Action/Result + metric) |
| Brands / industries     | `brands`                                |
| Tools & systems         | `tools.groups[]`                        |
| Contact + links         | `contact`, `contact.links[]`            |
| Footer                  | `footer`                                |

Decide *where* a change belongs with the `content-vs-design` skill. If it's a
design/layout/color change (not words), that's `src/` — read `design-guardrails`
first.

## 3. Make the edit (content only)

- Edit the field in `content/content.json`. That's it — no HTML, no `src/`.
- `&` is fine in the JSON (write `Retention & Renewals`); it's escaped for you.
- **Do not** put HTML tags in the JSON — they'd show up as literal text.

## 4. Preview locally before publishing

```bash
npm run preview
# → open http://localhost:4321/
```

Look at the actual change on the page. Check desktop and a narrow (mobile) width.

## 5. Publish

Publishing = committing and pushing to `main`. A GitHub Action rebuilds and
deploys to GitHub Pages automatically (usually live within ~1–2 minutes).

```bash
git add content/content.json
git commit -m "Update <what changed>"
git push
```

**Only push when the user has approved the change** — pushing publishes to the
live site.

## Guardrails (do not violate)

- **Truthful only.** This is a real person's résumé. Never invent employers,
  titles, tools, dates, or metrics. If a request needs a credential she doesn't
  have, say so and ask — don't fabricate.
- **Keep the metric format.** Stats like `$15M+`, `20+`, `~3x`, `$2M`, `2x`
  animate by counting up. Keep them as `prefix + number + suffix` (e.g. `$2M`,
  `~3x`, `10+`), or the animation breaks.
- **Match the voice.** Confident, concrete, plain-spoken. Short declaratives. No
  buzzword soup. Read the surrounding copy before writing new lines.
