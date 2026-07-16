/* Font — JetBrains Mono variable (wght 100–800, normal + italic),
   self-hosted, subset, font-display: swap. SIL OFL 1.1. */
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/jetbrains-mono/wght-italic.css';

/* Design system */
import '../Styles/tokens.css';
import '../Styles/base.css';
import '../Styles/Components/nav.css';
import '../Styles/Components/hero.css';
import '../Styles/Components/projects.css';
import '../Styles/Components/work.css';
import '../Styles/Components/skills.css';
import '../Styles/Components/about.css';
import '../Styles/Components/contact.css';
import '../Styles/Components/dialog.css';

import initTheme from './theme.js';
import initNav from './nav.js';
import initDialogs from './modal.js';
import initMotion from './motion.js';

initTheme();
initNav();
initDialogs();

try {
  initMotion();
} catch (err) {
  // Motion must never take the content down with it
  document.documentElement.classList.remove('js');
  console.error('Motion init failed, falling back to static:', err);
}
