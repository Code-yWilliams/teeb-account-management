# CLAUDE.md — Christina Sookhoo · Account-Management site

This repo is **one portfolio website**: Christina Sookhoo's customer success /
account-management site, deployed to GitHub Pages (custom domain
`csm.christinasookhoo.com`).

> There is a sibling site — the **marketing** version — in a *separate* repo.
> This repo does **not** control it. A change here affects only the
> account-management site. It's the same real person and history, reframed for
> customer-success / account-management roles (retention, renewals, account
> ownership). (If you're working in the parent `teeb/` workspace that contains
> both, its `which-site` skill helps decide where a change goes.)

## The one rule that matters

**To change what the site *says*, edit `content/content.json`. Nothing else.**

Every headline, bullet, stat, project story, tool, and link lives in that one
JSON file. You should almost never touch `src/` for a copy request — only for a
*design, layout, or markup* change.

## Layout

```
content/content.json   ← all the words + data for THIS site (edit this)
src/                    ← the code (design + structure) — edit rarely
  template.js           ← renders content.json → index.html
  styles.css            ← all styling
  main.js               ← nav, scroll reveals, count-up animations
  assets/images/        ← christina.png, etc.
scripts/
  build.js              ← content + template → dist/
  preview.js            ← local static server
.github/workflows/
  deploy.yml            ← builds + deploys to GitHub Pages on every push to main
dist/                   ← build output — GIT-IGNORED, never commit
```

## Skills in this repo (use them)

- **`update-site`** — the safe edit → preview → publish flow. Start here for any
  change a visitor would see.
- **`be-specific`** — when a request is vague/subjective, get exact, truthful
  copy before editing.
- **`content-vs-design`** — decide whether a change is words (`content.json`) or
  design (`src/`).
- **`design-guardrails`** — protect the design system before any visual change.

## Build & preview

```bash
npm run preview   # build + serve at http://localhost:4321/
npm run build     # just build → dist/
```

Plain Node (≥ 18), zero dependencies.

## Deploy

Push to `main` → the **Deploy site** GitHub Action builds `dist/` and publishes
it to GitHub Pages. Live in ~1–2 minutes. You don't run the deploy; pushing does.
**Committing/pushing is a real deploy to a live site — only push when asked.**

The custom domain is single-sourced from `site.domain` in `content/content.json`
(the build writes `dist/CNAME`). Change the domain there, not in the workflow,
and confirm it under Settings → Pages → Custom domain.

## Content guardrails

- **Truthful only.** Real person, real history — the *same* person as the
  marketing site, reframed for customer success / account management. Reframing
  emphasis is fine; inventing employers, titles, tools, dates, or metrics she
  doesn't have is not. If a request needs a credential she lacks, say so and ask.
- **Preserve the metrics.** `$15M+`, `20+`, `8+`, `60+`, `$2M`, `~3x`, `2x`,
  `15+`, `6+` are real, and the count-up animation parses them — keep the
  `prefix + number + suffix` shape.
- **Match the voice.** Confident, concrete, plain-spoken. Short declaratives.
  No buzzword soup.
- **No HTML in the JSON** — it's escaped and would show as literal text. `&` is
  fine (write `Retention & Renewals` normally).
