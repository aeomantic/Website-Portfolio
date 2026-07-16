/**
 * DOSSIER signature effect: redact → decode text scramble.
 *
 * Only ever runs on aria-hidden spans that sit next to a .sr-only
 * static duplicate, so screen readers and no-JS visitors always get
 * the real text. Callers gate on prefers-reduced-motion (motion.js).
 */
const GLYPHS = '▓▒░#%&$@<>/\\0123456789ABCDEF';

export function scramble(el, { duration = 650, delay = 0 } = {}) {
  const original = el.textContent;
  const chars = Array.from(original);

  // Lock the containing block's height so glyph-width jitter can't reflow
  const block = el.closest('h1, h2, h3, p, a, li') || el;
  block.style.minHeight = `${block.getBoundingClientRect().height}px`;

  const run = () => {
    let start;
    const frame = (t) => {
      start ??= t;
      const p = Math.min((t - start) / duration, 1);
      const resolved = Math.floor(p * chars.length);
      el.textContent = chars
        .map((ch, i) =>
          i < resolved || ch === ' ' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]
        )
        .join('');
      if (p < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = original;
        block.style.minHeight = '';
      }
    };
    requestAnimationFrame(frame);
  };

  delay ? setTimeout(run, delay) : run();
}

/**
 * Binary redaction: while hovered, every letter re-randomizes to 0/1 —
 * held scrambled for the whole hover, resolving only on stop(). Spaces
 * and punctuation pass through so words keep their shape, and with a
 * monospace face the line width never shifts. Same contract as
 * scramble(): run on the aria-hidden span beside a .sr-only duplicate;
 * callers gate on prefers-reduced-motion and hover capability.
 */
export function binaryHover(el, { speed = 55 } = {}) {
  const chars = Array.from(el.textContent);
  const original = el.textContent;
  const escape = (ch) => (ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch);
  let intervalId = null;

  const frame = () => {
    el.innerHTML = chars
      .map((ch) =>
        /[a-z]/i.test(ch) ? `<span class="fx-bit">${Math.random() < 0.5 ? '0' : '1'}</span>` : escape(ch)
      )
      .join('');
  };

  return {
    start() {
      if (intervalId) return;
      frame(); // scramble immediately — no first-tick lag
      intervalId = setInterval(frame, speed);
    },
    stop() {
      clearInterval(intervalId);
      intervalId = null;
      el.textContent = original;
    },
  };
}
