/**
 * Sticky nav behaviors: scrolled state, mobile menu, scroll-spy
 * highlighting of the active section link.
 */
export default function initNav() {
  const header = document.querySelector('.site-header');
  const burger = document.querySelector('.site-nav__burger');
  const menu = document.getElementById('mobile-menu');

  // Elevated header once the page scrolls
  const onScroll = () => header.classList.toggle('site-header--scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const closeMenu = () => {
    menu.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      closeMenu();
      burger.focus();
    }
  });

  // Scroll spy — highlight the nav link of the section in view
  const links = [...document.querySelectorAll('.site-nav__link')];
  const byId = new Map(links.map((l) => [l.getAttribute('href').slice(1), l]));

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = byId.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'true');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
  });
}
