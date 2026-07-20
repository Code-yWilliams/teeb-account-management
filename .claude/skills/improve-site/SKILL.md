---
name: improve-site
description: >-
  Use when the user wants ideas for making the site better — "how can I improve
  my site", "make it nicer", "review my site", "suggest improvements", "make me
  look more employable", "critique this", "what would make this stronger", "give
  me feedback". Runs a thorough review (UI, content, and hiring-manager lenses)
  and returns prioritized, concrete, TRUTHFUL suggestions the user can choose to
  apply.
---

# Improve this site (the coach)

Goal: give the owner a short, prioritized list of **specific, honest** changes
that make the site nicer to look at, sharper to read, and more convincing to a
hiring manager — then help apply the ones they pick.

This is a *proposal* step. You suggest; the owner decides; then you apply chosen
items via `be-specific` → `update-site` → `deploy`. You never publish anything
here.

## The one rule that makes this trustworthy

**Never invent facts to make the person look better.** No fake employers,
titles, tools, dates, metrics, or testimonials. You may:
- reframe or reposition *real* accomplishments more powerfully,
- surface strengths that are buried,
- improve clarity, design, and structure,
- and **ask the owner** for a real detail that would strengthen the site (a
  metric, an outcome, a testimonial they actually have).

Any suggestion that would require a new fact must be phrased as *"ask the owner
about X"*, never as invented copy.

## Step 1 — Gather the material

- Read `content/content.json` (all the words + data).
- Note the design system from `src/` (see `design-guardrails`: Fraunces/Inter,
  warm-cream + navy palette, section rhythm, count-up metrics, reveals, mobile
  nav). UI suggestions must fit *this* system, not fight it.
- Infer the **target roles** from `site.title`, the hero, and `contact` (e.g.
  marketing/PM, or customer success/account management). Every suggestion is
  judged against "does this help land *those* roles?"
- Optional but valuable: `npm run preview` → look at the real page at desktop
  **and** a narrow (mobile) width. A real look catches visual issues the JSON
  can't show. (If browser/screenshot tools are available, use them.)

## Step 2 — Run the review with a subagent panel

Do the heavy analysis in **subagents** (via the Agent/Task tool) so it's
thorough and doesn't clutter the chat. Prefer running **three lenses in
parallel**, then merge. If subagents aren't available, do the same three passes
inline.

Give each subagent: the full `content/content.json`, the design facts above, and
the inferred target roles. Ask each for concrete findings tied to a specific
`content.json` field or `src/` area, each with a *why* and an impact/effort tag.

**Lens A — Hiring manager / recruiter (employability):**
- Does the hero say who she is and the value she brings *for the target role* in
  ~5 seconds?
- Is every claimed strength backed by proof (a metric, an outcome, a story)?
- Are the target roles obvious and consistent across title, hero, and the ask?
- Missing signals recruiters look for: quantified results, scope/scale,
  relevant tools, domain fit, career progression, social proof/testimonials, an
  easy way to contact.
- Red flags: vague buzzwords, unquantified claims, dated framing,
  inconsistency.
- Best reframes: same true facts, positioned more powerfully for the role.
- What to **ask the owner** for that would most raise credibility.

**Lens B — Content / copywriting:**
- Clarity and specificity; cut jargon, filler, and hedging.
- Lead with impact; quantify outcomes.
- Voice: confident, concrete, plain, short declaratives (per guardrails).
- Redundancy across sections; does each section earn its place?
- Scannability, headlines, bullet strength; typos/grammar.
- Is there a clear call to action?

**Lens C — UI / UX / visual design:**
- Visual hierarchy and readability — does the eye move in the right order?
- Spacing/rhythm consistency; anything cramped or unbalanced.
- Mobile experience specifically.
- Accessibility: contrast, text size, focus states, alt text, reduced motion.
- Modern polish vs. dated or generic "AI-slop" patterns.
- Fits the existing design system (propose changes *within* it, not one-off
  hacks — see `design-guardrails`).

## Step 3 — Synthesize and prioritize

Merge the lenses, drop duplicates, and rank by **impact × ease**. Group as:

1. **Quick wins** — copy/data tweaks in `content/content.json`, low effort, real
   impact. (Include a suggested draft of the new wording where you can — the
   owner can accept or edit.)
2. **Bigger improvements** — design or new-section changes in `src/` (more
   effort; describe the change and why).
3. **Needs a real detail from you** — high-value additions that require a fact
   only the owner has (a metric, a testimonial, an outcome). Phrase these as
   questions.

For each item give: **what**, **where** (exact file/field), **why** (especially
the employability angle), and a **concrete suggested change**.

## Step 4 — Present and hand off

Show the owner a short, skimmable, ranked list (lead with the quick wins). Keep
it honest and encouraging — this is a coach, not a teardown. Then offer:

> Want me to apply any of these? Tell me which numbers and I'll make the edits,
> show you a preview, and deploy when you're happy.

When they pick items, use `be-specific` to lock the exact wording, `update-site`
to make the edits, and `deploy` to publish. (Optional: if they want to track
ideas over time, offer to save the list to `notes/improvements.md` — that's a
local note, not part of the site.)
