# Christina Sookhoo — Customer Success / Account-Management site

A one-page portfolio site, deployed to GitHub Pages at
**csm.christinasookhoo.com**. Same person and design as the marketing site,
reframed for customer-success / account-management roles. It's built so the
**words are data** and the **design is code**: change the copy by editing one
JSON file.

The marketing version lives in a separate repo; this repo controls only the
account-management site.

## Quick start

```bash
npm run preview
# builds the site and serves it at http://localhost:4321/
```

## Change what the site says

Edit **`content/content.json`** — that's it. Every headline, stat, bullet,
project, tool, and link is a field in that file. Preview, then commit and push;
pushing to `main` deploys automatically.

New to this? Open this folder in Claude Code and just say what you want to
change — the bundled skills (`update-site`, `be-specific`, `content-vs-design`,
`design-guardrails`) will guide the edit safely.

## More

See [CLAUDE.md](./CLAUDE.md) for the full model: file layout, how the build and
GitHub Pages deploy work, and the content/design guardrails.
