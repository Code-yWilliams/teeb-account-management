#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// build.js — renders content/content.json through src/template.js into dist/.
//
//   node scripts/build.js     # build the site into dist/
//   npm run build             # same
//
// This site keeps WORDS and CODE separate — that separation is the whole point:
//   • content/content.json  → everything the page SAYS   (edit this for copy)
//   • src/template.js        → the STRUCTURE + markup      (edit rarely)
//   • src/styles.css         → the DESIGN
//   • src/main.js            → the interactions
//
// The build just glues them into a static site in dist/, and writes a CNAME so
// GitHub Pages serves it from the custom domain (single-sourced from
// site.domain in the content). No dependencies — plain Node (>= 18).
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { render } from '../src/template.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');

// Static folders copied verbatim into dist/. Destinations must match the paths
// referenced in src/template.js (css/, js/, assets/).
const STATIC = [
  { from: 'src/styles.css', to: 'css/styles.css' },
  { from: 'src/main.js', to: 'js/main.js' },
  { from: 'src/assets', to: 'assets' },
];

const content = JSON.parse(readFileSync(join(root, 'content', 'content.json'), 'utf8'));

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

writeFileSync(join(distDir, 'index.html'), render(content));

for (const { from, to } of STATIC) {
  const dest = join(distDir, to);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(join(root, from), dest, { recursive: true });
}

const domain = content.site?.domain;
if (domain) writeFileSync(join(distDir, 'CNAME'), `${domain}\n`);

console.log(`✓ built → dist/  (${domain || 'no custom domain'})`);
