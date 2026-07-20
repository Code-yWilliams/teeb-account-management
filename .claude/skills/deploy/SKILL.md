---
name: deploy
description: >-
  Use when the user wants to publish their changes to the live website — "deploy",
  "publish", "push it live", "make it live", "ship it", "put my changes online",
  "post my updates". Validates the build, commits all local changes, pushes to
  GitHub, and tells the user their site will be live in about a minute.
---

# Deploy (publish) this site

Publishing = **commit + push to GitHub**. A GitHub Action then rebuilds the site
and publishes it to GitHub Pages automatically — usually **live within about a
minute**. Pushing is already authenticated (Cody set up a GitHub token), so no
login is needed.

## Steps

1. **See what will be published:**
   ```bash
   git status --short
   ```
   - If there's **nothing to commit**, tell the user: their live site already
     matches their local copy — nothing to deploy. Stop here.
   - Otherwise, tell them in plain language what's about to go live (which
     sections/files changed). If they just said "deploy," a quick
     *"Publishing your edits to the About section and hero — here goes"* is enough.

2. **Safety check — build first:**
   ```bash
   npm run build
   ```
   This catches a broken `content/content.json` (like a missing comma) **before**
   it reaches the live site.
   - If the build **fails**, STOP. Explain the problem in plain terms (it's
     almost always a small JSON typo), fix it, and re-run. **Never push a build
     that doesn't pass.**

3. **Commit and push:**
   ```bash
   git add -A
   git commit -m "<one-line plain-language summary of what changed>"
   git push
   ```
   Write the commit message as a simple summary — e.g. *"Update hero headline and
   add new project."*

4. **Tell the user it's on the way:**
   > Done — pushed to GitHub. Your updates should be live in about a minute.

   Include the site's real address (from `site.domain` in
   `content/content.json`, or its `…github.io` URL) so they can go check it.

## Good to know

- `dist/` is build output and is **git-ignored** — you never commit it; the
  Action rebuilds it in the cloud.
- If `git push` is **rejected because the remote is ahead** (Cody pushed
  something), run the `update` skill first, then deploy.
- **Deploy publishes to the real, public website** — only do it when the user
  has asked to make changes live.
