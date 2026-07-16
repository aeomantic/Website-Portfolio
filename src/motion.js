/**
 * Motion layer — everything here is skipped entirely under
 * prefers-reduced-motion, and only animates transform/opacity.
 *
 *  - Lenis: smooth scrolling + smooth anchor navigation
 *  - GSAP: hero entrance timeline + ONE ScrollTrigger reveal (projects)
 *  - IntersectionObserver: staggered reveals for the other sections
 */
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scramble, binaryHover } from './decode.js';

export default function initMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    // Static site: no smooth scroll, no reveals, content fully visible via CSS
    return;
  }

  /* ── Lenis smooth scroll ── */
  const lenis = new Lenis();
  // Lenis drives scrolling; disable CSS smooth so anchors don't double-animate
  document.documentElement.style.scrollBehavior = 'auto';

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const navOffset = -1 * (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) * 16 + 16 || 88);

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: navOffset, duration: 1 });
      history.pushState(null, '', a.getAttribute('href'));
    });
  });

  /* ── GSAP ── */
  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);

  // 1. Hero entrance (orchestrated, on load)
  gsap.to('[data-hero]', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.1,
  });

  // 1b. DOSSIER decode: nav links, then the hero title resolves under it
  document
    .querySelectorAll('.site-nav__link [data-decode]')
    .forEach((el, i) => scramble(el, { duration: 450, delay: 150 + i * 70 }));

  const heroTitle = document.querySelector('.hero__title [data-decode]');
  if (heroTitle) {
    scramble(heroTitle, { duration: 900, delay: 350 });

    // 1c. Binary redaction on hover: the title holds as raw bits for the
    // whole hover and only resolves on mouseleave. Hover-capable pointers
    // only — on touch, a tap would leave the title stuck scrambled.
    if (window.matchMedia('(hover: hover)').matches) {
      const fx = binaryHover(heroTitle);
      const title = heroTitle.closest('.hero__title');
      title.addEventListener('mouseenter', fx.start);
      title.addEventListener('mouseleave', fx.stop);
    }
  }

  // 2. Projects grid — the single orchestrated ScrollTrigger reveal
  const cards = gsap.utils.toArray('.projects-grid .reveal');
  if (cards.length) {
    cards.forEach((el) => {
      // Hand off to GSAP: neutralize the CSS reveal transition entirely
      el.classList.add('is-revealed');
      el.style.transition = 'none';
    });
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 78%',
        once: true,
      },
    });
  }

  /* ── IO staggered reveals for remaining sections ── */
  const rest = [...document.querySelectorAll('.reveal')].filter(
    (el) => !el.closest('.projects-grid')
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = [...entry.target.parentElement.querySelectorAll(':scope > .reveal')];
        siblings.forEach((el, i) => {
          el.style.transitionDelay = `${i * 90}ms`;
          el.classList.add('is-revealed');
          io.unobserve(el);
        });
        if (!siblings.length) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  rest.forEach((el) => io.observe(el));
}
