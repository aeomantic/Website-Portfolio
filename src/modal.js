/**
 * Project case-study dialogs. Built on native <dialog>:
 * Esc-to-close and focus return come for free; we add backdrop
 * click-to-close and a body scroll lock.
 */
export default function initDialogs() {
  document.querySelectorAll('[data-dialog]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dialog = document.getElementById(btn.dataset.dialog);
      if (!dialog) return;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  });

  document.querySelectorAll('dialog.case-study').forEach((dialog) => {
    dialog.querySelector('[data-dialog-close]')?.addEventListener('click', () => dialog.close());

    // A click on the backdrop targets the <dialog> element itself
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  });
}
