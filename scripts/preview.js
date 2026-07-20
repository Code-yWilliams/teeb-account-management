#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// preview.js — serve the built dist/ folder locally so you can eyeball the site.
//
//   node scripts/build.js && node scripts/preview.js
//   (or just: npm run preview)
//
// Then open:  http://localhost:4321/
//
// Zero dependencies. Static files only.
// ─────────────────────────────────────────────────────────────────────────────

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, normalize, extname } from 'node:path';

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = process.env.PORT || 4321;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

createServer(async (req, res) => {
  try {
    let rel = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
    let filePath = join(distDir, rel);
    if ((await stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html');
    const body = await readFile(filePath);
    res.writeHead(200, { 'content-type': MIME[extname(filePath)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end('<h1>404 — not found</h1><p>Run <code>npm run build</code> first, then open <a href="/">/</a>.</p>');
  }
}).listen(port, () => {
  console.log(`Preview: http://localhost:${port}/`);
});
