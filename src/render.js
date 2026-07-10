/**
 * Pure template functions: content.js → static HTML strings.
 * Executed at build/dev time by the vite plugin in vite.config.js,
 * so the shipped HTML is fully static — no client-side rendering.
 */

const esc = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

/* ── Inline icons (stroke = currentColor, sized via CSS) ── */
const icons = {
  sun: '<svg class="icon icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/></svg>',
  moon: '<svg class="icon icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 14.2A8.6 8.6 0 0 1 9.8 3.4a8.6 8.6 0 1 0 10.8 10.8Z"/></svg>',
  menu: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  github: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2Z"/></svg>',
  external: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 5h5v5M19 5l-8.5 8.5M19 13.5V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.5"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
  download: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M4.5 19.5h15"/></svg>',
  arrow: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>',
};

const themeButton = (cls) => `
  <button class="${cls} theme-toggle" type="button" aria-label="Toggle colour theme">
    ${icons.sun}${icons.moon}
  </button>`;

export function renderNav(c) {
  const links = (cls) =>
    c.nav.map((l) => `<li><a class="${cls}" href="${l.href}">${esc(l.label)}</a></li>`).join('\n');

  return `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <nav class="site-nav container" aria-label="Primary">
      <a class="site-nav__brand" href="#top" aria-label="MA — ${esc(c.site.name)}, back to top">
        <span class="site-nav__brand-mark" aria-hidden="true">MA</span>
      </a>
      <ul class="site-nav__menu">
        ${links('site-nav__link')}
      </ul>
      <div class="site-nav__actions">
        ${themeButton('site-nav__theme')}
        <a class="btn btn--ghost site-nav__resume" href="${c.site.resume}" target="_blank" rel="noopener noreferrer">Resume</a>
        <button class="site-nav__burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          ${icons.menu}${icons.close}
        </button>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <ul class="mobile-menu__list">
        ${links('mobile-menu__link')}
        <li><a class="mobile-menu__link" href="${c.site.resume}" target="_blank" rel="noopener noreferrer">Resume ${icons.download}</a></li>
      </ul>
    </div>
  </header>`;
}

export function renderHero(c) {
  const ctas = c.hero.ctas
    .map(
      (b) =>
        `<a class="btn btn--${b.variant}" href="${b.href}"${
          b.external ? ' target="_blank" rel="noopener noreferrer"' : ''
        }>${esc(b.label)}${b.variant === 'primary' ? icons.arrow : ''}</a>`
    )
    .join('\n');

  return `
  <section class="hero container" id="top">
    <p class="hero__greeting eyebrow" data-hero>${esc(c.hero.greeting)}</p>
    <h1 class="hero__title" data-hero>${esc(c.hero.title)}</h1>
    <p class="hero__description" data-hero>${esc(c.hero.description)}</p>
    <div class="hero__ctas" data-hero>${ctas}</div>
  </section>`;
}

const sectionHeader = (s) => `
  <header class="section__header">
    <p class="eyebrow">${esc(s.label)}</p>
    <h2 class="section__title">${esc(s.title)}</h2>
    <p class="section__description">${esc(s.description)}</p>
  </header>`;

export function renderProjects(c) {
  const cards = c.projects.items
    .map(
      (p) => `
    <article class="project-card reveal" id="project-${p.id}">
      <div class="project-card__glow" aria-hidden="true"></div>
      <p class="project-card__tag">${esc(p.tag)}</p>
      <h3 class="project-card__name">${esc(p.name)}</h3>
      <p class="project-card__summary">${esc(p.summary)}</p>
      <ul class="chip-row" aria-label="Tech stack">
        ${p.chips.map((t) => `<li class="chip">${esc(t)}</li>`).join('')}
      </ul>
      <div class="project-card__actions">
        <button class="btn btn--soft" type="button" data-dialog="dialog-${p.id}">Case study</button>
        <span class="project-card__links">
          <a class="icon-link" href="${p.github}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.name)} on GitHub">${icons.github}</a>
          <a class="icon-link" href="${p.demo}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.name)} live demo">${icons.external}</a>
        </span>
      </div>
    </article>`
    )
    .join('\n');

  return `
  <section id="projects" class="section container">
    ${sectionHeader(c.projects)}
    <div class="projects-grid">
      ${cards}
    </div>
  </section>`;
}

export function renderDialogs(c) {
  return c.projects.items
    .map(
      (p) => `
  <dialog class="case-study" id="dialog-${p.id}" aria-labelledby="dialog-${p.id}-title">
    <div class="case-study__inner">
      <button class="case-study__close icon-link" type="button" data-dialog-close aria-label="Close case study">${icons.close}</button>
      <p class="case-study__tag eyebrow">${esc(p.tag)}</p>
      <h3 class="case-study__title" id="dialog-${p.id}-title">${esc(p.name)}</h3>
      <h4 class="case-study__label">Overview</h4>
      <p class="case-study__text">${esc(p.caseStudy.overview)}</p>
      <h4 class="case-study__label">Approach</h4>
      <p class="case-study__text">${esc(p.caseStudy.approach)}</p>
      <h4 class="case-study__label">Tech stack</h4>
      <ul class="chip-row" aria-label="Full tech stack">
        ${p.caseStudy.tech.map((t) => `<li class="chip">${esc(t)}</li>`).join('')}
      </ul>
      <h4 class="case-study__label">Highlights &amp; results</h4>
      <ul class="case-study__highlights">
        ${p.caseStudy.highlights.map((h) => `<li>${esc(h)}</li>`).join('\n')}
      </ul>
      <div class="case-study__actions">
        <a class="btn btn--primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">Live demo ${icons.external}</a>
        <a class="btn btn--ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">${icons.github} View on GitHub</a>
      </div>
    </div>
  </dialog>`
    )
    .join('\n');
}

export function renderWork(c) {
  const items = c.work.items
    .map(
      (w) => `
    <li class="timeline__item reveal">
      <div class="timeline__marker" aria-hidden="true"></div>
      <div class="timeline__content">
        <p class="timeline__period">${esc(w.period)}</p>
        <h3 class="timeline__role">${esc(w.role)}</h3>
        <p class="timeline__org">${esc(w.org)}</p>
        <p class="timeline__body">${esc(w.body)}</p>
      </div>
    </li>`
    )
    .join('\n');

  return `
  <section id="work" class="section container">
    ${sectionHeader(c.work)}
    <ol class="timeline">
      ${items}
    </ol>
  </section>`;
}

export function renderSkills(c) {
  const groups = c.skills.groups
    .map(
      (g) => `
    <div class="skills__group reveal">
      <h3 class="skills__group-name">${esc(g.name)}</h3>
      <ul class="skills__list">
        ${g.items
          .map(
            (s) => `
        <li class="skills__item">
          <span class="chip chip--skill">${esc(s.name)}</span>
          <span class="skills__context">${esc(s.context)}</span>
        </li>`
          )
          .join('')}
      </ul>
    </div>`
    )
    .join('\n');

  return `
  <section id="skills" class="section container">
    ${sectionHeader(c.skills)}
    <div class="skills__grid">
      ${groups}
    </div>
  </section>`;
}

export function renderAbout(c) {
  return `
  <section id="about" class="section container">
    <div class="about glass reveal">
      <div class="about__content">
        <p class="eyebrow">${esc(c.about.label)}</p>
        <h2 class="section__title">${esc(c.about.title)}</h2>
        <p class="about__description">${esc(c.about.description)}</p>
      </div>
      <img class="about__img" src="${c.about.image}" alt="${esc(c.about.imageAlt)}" width="320" height="320" loading="lazy" decoding="async" />
    </div>
  </section>`;
}

export function renderContact(c) {
  return `
  <section id="contact" class="section container">
    <div class="contact glass reveal">
      <p class="eyebrow">${esc(c.contact.label)}</p>
      <h2 class="section__title">${esc(c.contact.title)}</h2>
      <p class="contact__description">${esc(c.contact.description)}</p>
      <div class="contact__actions">
        <a class="btn btn--primary" href="mailto:${c.site.email}">${icons.mail} ${esc(c.contact.ctaLabel)}</a>
        <a class="btn btn--ghost" href="${c.site.github}" target="_blank" rel="noopener noreferrer">${icons.github} GitHub</a>
        <a class="btn btn--ghost" href="${c.site.resume}" target="_blank" rel="noopener noreferrer">${icons.download} Resume</a>
      </div>
      <p class="contact__email"><a href="mailto:${c.site.email}">${esc(c.site.email)}</a></p>
    </div>
  </section>`;
}

export function renderFooter(c) {
  return `
  <footer class="site-footer container">
    <p class="site-footer__name">${esc(c.footer.name)}</p>
    <a class="site-footer__top" href="#top">Back to top ↑</a>
  </footer>`;
}

/** Map of placeholder → rendered HTML, consumed by vite.config.js */
export function renderAll(content) {
  return {
    '<!--app:nav-->': renderNav(content),
    '<!--app:hero-->': renderHero(content),
    '<!--app:projects-->': renderProjects(content),
    '<!--app:work-->': renderWork(content),
    '<!--app:skills-->': renderSkills(content),
    '<!--app:about-->': renderAbout(content),
    '<!--app:contact-->': renderContact(content),
    '<!--app:footer-->': renderFooter(content),
    '<!--app:dialogs-->': renderDialogs(content),
    '%site.title%': esc(content.site.title),
    '%site.description%': esc(content.site.description),
    '%site.ogImage%': content.site.ogImage,
  };
}
