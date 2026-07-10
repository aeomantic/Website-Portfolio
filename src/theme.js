/**
 * Dark (default) / light toggle. Persisted in localStorage("theme");
 * initial value is applied by the inline script in index.html.
 */
export default function initTheme() {
  const root = document.documentElement;

  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      if (isLight) {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  });
}
