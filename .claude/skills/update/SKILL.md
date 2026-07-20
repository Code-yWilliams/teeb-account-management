---
name: update
description: >-
  Use when the user says any version of "Cody said to update", "update from
  Cody", "pull Cody's latest", "get the latest version", "grab the newest
  updates", or "sync with the repo". Fetches and applies the latest version of
  this site from GitHub (git pull) so the local copy has Cody's most recent
  design, code, and skill changes. This does NOT publish anything.
---

# Update this site to Cody's latest

Cody maintains the shared design, the page code, and these skills. When he
improves something, this pulls his newest version from GitHub into your local
copy. It only **brings your copy up to date** — it does not publish your site.

## Steps

1. **Check for edits you haven't published yet:**
   ```bash
   git status --short
   ```
   If there are un-deployed changes, tell the user in plain language. Offer to
   **deploy them first** (see the `deploy` skill) or to set them aside while
   updating. Never silently throw away anyone's work.

2. **Pull the latest:**
   ```bash
   git pull --rebase --autostash origin main
   ```
   (`--autostash` tucks away any in-progress edits, pulls Cody's changes, then
   puts your edits back on top.)

3. **Report what came in, in plain language:**
   - If it says **"Already up to date."** → tell the user they're already current.
   - Otherwise, summarize the new commits (`git log --oneline` for the new range)
     as something human: e.g. *"Cody refreshed the design system and added a new
     skill."*

4. **If a conflict appears** (rare) → stop and explain simply. Say which file
   conflicts and ask how to proceed; don't guess at a merge. Usually the cleanest
   path is to `deploy` your pending changes first, then update.

## After updating

If Cody's changes touched the look of the site, take a quick look:
```bash
npm run preview   # → http://localhost:4321/
```
You don't need to deploy after updating — you already have his latest. Deploy
only when **you** change something.
