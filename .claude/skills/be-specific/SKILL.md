---
name: be-specific
description: >-
  Use BEFORE editing anything when a website request is vague, broad, or
  subjective — "make it pop", "the hero feels off", "update my experience",
  "add my new job", "clean this up", "make it more professional", "the projects
  section is boring". Pins down exactly what changes, where, and to what — with a
  couple of quick, concrete questions — before touching a file.
---

# Get specific before you edit

Website copy is exact and public. A vague instruction turned into a guess
produces copy the owner didn't actually approve. Your job here is to convert a
fuzzy ask into a precise edit **the owner has confirmed**, then hand off to the
`update-site` skill.

## The rule

**Never invent résumé copy.** You may *suggest* wording, but the owner must
confirm the final text, and every factual claim (title, employer, date, metric,
tool) must be true. When in doubt, ask — don't fill the gap yourself.

## What to nail down (ask only what's still unclear)

1. **Which spot, exactly?** Point at one section/field, not a vibe.
   "The `hero.headline`, or the tagline under it (`hero.tag`)?"
2. **What's the exact new text?** Get it verbatim, or propose 2–3 options and let
   them pick. Read the neighboring copy first so options match the voice.
3. **Is it true?** For any number, title, date, or claim: "Is that accurate?"
   Metrics like `$15M+` / `~3x` are real — don't round, inflate, or invent.
4. **Copy or design?** Words → `content/content.json`. Look/layout/color →
   `src/` (use `design-guardrails`). Decide with `content-vs-design`.
5. **Scope.** One field, or a sweep across several? Confirm the full list before
   starting so nothing's half-done.

## Turning vague asks into questions

| They said…                    | Ask…                                                          |
| ----------------------------- | ------------------------------------------------------------ |
| "Make the hero pop"           | "Punchier *wording* (I can draft 3), or a *visual* change to size/spacing/color?" |
| "Update my experience"        | "New role, edited bullets, or new dates? What's the exact text, and is it live yet?" |
| "Add my new job"              | "Company, title, dates, and 2–4 bullets — in your words? Newest goes on top." |
| "Make it more professional"   | "Which section reads unprofessional to you? Show me the line and I'll propose fixes." |
| "The stats feel off"          | "Which stat, and what's the correct, true number?"           |

## Then

Once you have the exact, confirmed, truthful text and know it's copy-vs-design,
proceed with the `update-site` flow (edit → `npm run preview` → commit → push).
