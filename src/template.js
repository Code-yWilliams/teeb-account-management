// ─────────────────────────────────────────────────────────────────────────────
// template.js — renders a content object into the full index.html string.
//
// This is CODE (structure + design). It should be identical for every variant.
// The words on the page come from content/<variant>.json — edit those, not this,
// to change copy. Only touch this file to change layout, markup, or design.
// ─────────────────────────────────────────────────────────────────────────────

// Escape text destined for HTML body/attribute context.
const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// Non-breaking middot separator, e.g. "A · B · C" that won't wrap awkwardly.
const midDots = (arr) => arr.map(esc).join(' &nbsp;·&nbsp; ');

export function render(c) {
  const clarity = c.site.clarityId
    ? `<script type="text/javascript">
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "${esc(c.site.clarityId)}");
    </script>`
    : '';

  const navTagline = `Los Angeles, CA &nbsp;·&nbsp;
        <span class="status-dot" aria-hidden="true"></span>${esc(c.nav.availability)}`;

  const navLinks = c.nav.links
    .map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`)
    .join('\n        ');

  const sidebarStats = c.profile.stats
    .map(
      (s) =>
        `<div class="sb-stat">
              <span class="sb-n">${esc(s.n)}</span
              ><span class="sb-l">${esc(s.l)}</span>
            </div>`
    )
    .join('\n            ');

  const heroPills = [
    ...c.hero.pills.primary.map((p) => `<span class="pill-a">${esc(p)}</span>`),
    ...c.hero.pills.secondary.map((p) => `<span class="pill-b">${esc(p)}</span>`),
    `<span class="pill-n">${c.hero.pills.neutral.map(esc).join(' · ')}</span>`,
  ].join('\n            ');

  const heroCtas = c.hero.ctas
    .map((cta) => `<a href="${esc(cta.href)}" class="cta-link">${esc(cta.label)}</a>`)
    .join('\n          ');

  const aboutParagraphs = c.about.paragraphs
    .map((p) => `<p class="body-text">\n            ${esc(p)}\n          </p>`)
    .join('\n          ');

  const statsBand = c.statsBand
    .map(
      (s) =>
        `<div class="sb-item">
              <div class="sb-metric">${esc(s.metric)}</div>
              <div class="sb-label">${esc(s.label)}</div>
            </div>`
    )
    .join('\n            ');

  const whatColumns = c.what.columns
    .map(
      (col) =>
        `<div class="what-col">
              <h3 class="what-col-title">${esc(col.title)}</h3>
              ${col.items
                .map(
                  (item) =>
                    `<div class="what-item">
                <div class="what-item-title">${esc(item.title)}</div>
                <div class="what-item-body">
                  ${esc(item.body)}
                </div>
              </div>`
                )
                .join('\n              ')}
            </div>`
    )
    .join('\n            ');

  const experienceItems = c.experience.items
    .map(
      (job) =>
        `<div class="exp-item">
            <div class="exp-date">${esc(job.date)}</div>
            <div>
              <div class="exp-role">${esc(job.role)}</div>
              <div class="exp-co">${esc(job.company).replace(/ · /g, ' &nbsp;·&nbsp; ')}</div>
              <ul class="exp-bullets">
                ${job.bullets.map((b) => `<li>${esc(b)}</li>`).join('\n                ')}
              </ul>
            </div>
          </div>`
    )
    .join('\n\n          ');

  const starDots = [
    { key: 'situation', letter: 'S', label: 'Situation', color: '#3a7ebf' },
    { key: 'action', letter: 'A', label: 'Action', color: '#2a6aaa' },
    { key: 'result', letter: 'R', label: 'Result', color: '#1a5a9a' },
  ];
  const projectCards = c.projects.cards
    .map(
      (card) =>
        `<article class="cs-card">
              <div class="cs-top">
                <p class="cs-tag">${esc(card.tag)}</p>
                <h3 class="cs-title">
                  ${esc(card.title)}
                </h3>
                ${starDots
                  .map(
                    (d) =>
                      `<div class="star-row">
                  <div class="star-label">
                    <div class="star-dot" style="background: ${d.color}">${d.letter}</div>
                    ${d.label}
                  </div>
                  <p class="star-text">
                    ${esc(card[d.key])}
                  </p>
                </div>`
                  )
                  .join('\n                ')}
              </div>
              <div class="cs-result">
                <span class="cs-metric">${esc(card.metric)}</span>
                <span class="cs-label"
                  >${esc(card.metricLabel)}</span
                >
              </div>
            </article>`
    )
    .join('\n\n            ');

  const brandItems = c.brands.list
    .map((b) => `<span class="brand-item">${esc(b)}</span>`)
    .join('\n            ');

  const toolsGroups = c.tools.groups
    .map(
      (g) =>
        `<div>
              <p class="tool-label">${esc(g.label)}</p>
              ${g.items.map((i) => `<p class="tool-item">${esc(i)}</p>`).join('\n              ')}
            </div>`
    )
    .join('\n            ');

  const contactLinks = c.contact.links
    .map((l) => {
      const extAttrs = l.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a
              href="${esc(l.href)}"${extAttrs}
              class="cta-link cta-inv"
              >${esc(l.label)}</a
            >`;
    })
    .join('\n            ');

  return `<!doctype html>
<html lang="${esc(c.site.lang)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(c.site.title)}</title>
    <meta
      name="description"
      content="${esc(c.site.description)}"
    />
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%2312426A' rx='14' width='100' height='100'/><text x='50' y='64' text-anchor='middle' fill='%23FEFCF8' font-family='serif' font-size='44' font-weight='400'>${esc(
        c.site.faviconInitials
      )}</text></svg>"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Inter:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/styles.css" />
    ${clarity}
  </head>
  <body>
    <nav aria-label="Main navigation">
      <span class="nav-tagline"
        >${navTagline}</span
      >
      <ul class="nav-links" id="nav-links">
        ${navLinks}
      </ul>
      <button
        class="burger"
        id="burger"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>

    <!-- SIDEBAR -->
    <aside class="sidebar" aria-label="Profile">
      <div class="sb-photo-wrap">
        <img
          class="sb-photo"
          src="${esc(c.profile.photo)}"
          alt="${esc(c.profile.name)}"
        />
        <div class="sb-photo-grad"></div>
        <div class="sb-photo-tint"></div>
      </div>
      <div class="sb-body">
        <div>
          <div class="sb-name">${esc(c.profile.name)}</div>
          <div class="sb-title">${esc(c.profile.title)}</div>
          <div class="sb-stats">
            ${sidebarStats}
          </div>
        </div>
      </div>
    </aside>

    <div class="hero-layout">
      <main class="main">
        <!-- HERO STRIP -->
        <section id="hero" class="hero-strip" aria-label="Introduction">
          <p class="eyebrow">
            Los Angeles, CA &nbsp;·&nbsp;
            <span class="status-dot" aria-hidden="true"></span>${esc(c.hero.availability)}
          </p>
          <h1 class="hero-headline">
            ${esc(c.hero.headline)}<br /><em
              >${esc(c.hero.headlineEmphasis)}</em
            >
          </h1>
          <p class="hero-tag">
            ${esc(c.hero.tag)}
          </p>
          <div class="pills">
            ${heroPills}
          </div>
          ${heroCtas}
        </section>

        <!-- ABOUT -->
        <section id="about" class="s-warm section reveal" aria-label="About">
          <p class="eyebrow">${esc(c.about.eyebrow)}</p>
          <h2 class="sec-title">
            ${esc(c.about.title)}
          </h2>
          ${aboutParagraphs}
          <p class="body-text" style="color: #5a5248">
            ${esc(c.about.note)}
          </p>
          <blockquote>
            <p>
              "${esc(c.about.quote)}"
            </p>
          </blockquote>
        </section>

        <!-- STATS BAND -->
        <div class="stats-band" aria-label="Key statistics">
          <div class="stats-inner">
            ${statsBand}
          </div>
        </div>

        <div class="full-rule"></div>

        <!-- WHAT I DO -->
        <section
          id="what"
          class="s-cream section reveal"
          aria-label="What I do"
        >
          <p class="eyebrow">${esc(c.what.eyebrow)}</p>
          <h2 class="sec-title">${esc(c.what.title)}</h2>
          <div class="what-grid">
            ${whatColumns}
          </div>
        </section>

        <!-- EXPERIENCE -->
        <section
          id="experience"
          class="section reveal"
          style="background: #eef3f8"
          aria-label="Work experience"
        >
          <p class="eyebrow">${esc(c.experience.eyebrow)}</p>
          <h2 class="sec-title">${esc(c.experience.title)}</h2>

          ${experienceItems}
        </section>

        <!-- PROJECTS -->
        <section
          id="projects"
          class="section reveal"
          style="background: #f2eae0"
          aria-label="Case studies"
        >
          <p class="eyebrow">${esc(c.projects.eyebrow)}</p>
          <h2 class="sec-title">${esc(c.projects.title)}</h2>
          <div class="cs-grid">
            ${projectCards}
          </div>
        </section>

        <!-- BRANDS -->
        <div class="brands-strip" aria-label="Brands supported">
          <p class="brands-label">${esc(c.brands.label)}</p>
          <div class="brands-industries">
            ${midDots(c.brands.industries)}
          </div>
          <div class="brands-list">
            ${brandItems}
          </div>
        </div>

        <!-- TOOLS -->
        <section
          id="tools"
          class="section reveal"
          style="background: #1e3a54"
          aria-label="Tools and skills"
        >
          <p class="eyebrow eyebrow-d">${esc(c.tools.eyebrow)}</p>
          <h2 class="sec-title-d">${esc(c.tools.title)}</h2>
          <div class="tools-grid">
            ${toolsGroups}
          </div>
        </section>

        <!-- CONTACT -->
        <section
          id="contact"
          class="section reveal"
          style="
            background: #163050;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          "
          aria-label="Contact"
        >
          <p class="eyebrow eyebrow-d">${esc(c.contact.eyebrow)}</p>
          <h2 class="sec-title-d">${esc(c.contact.title)}</h2>
          <p class="body-dark" style="max-width: 480px">
            ${esc(c.contact.body)}
          </p>
          <div style="margin-top: 24px">
            ${contactLinks}
          </div>
        </section>

        <footer>
          <span>${esc(c.footer.copyright)}</span>
          <span>${esc(c.footer.location)}</span>
        </footer>
      </main>
    </div>

    <script src="js/main.js"></script>
  </body>
</html>
`;
}
