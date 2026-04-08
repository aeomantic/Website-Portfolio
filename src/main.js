import '../Styles/modern-normalize.css';
import '../Styles/style.css';
import '../Styles/Components/header.css';
import '../Styles/Components/hero.css';
import '../Styles/Components/about.css';
import '../Styles/Components/featured.css';
import '../Styles/Components/work.css';
import '../Styles/Components/contact.css';
import '../Styles/Components/footer.css';
import '../Styles/Components/mobile-nav.css';
import '../Styles/utils.css';

import mobileNav from './utilis/mobile-nav';

mobileNav();

// ── Staggered reveal (projects cards + any .reveal element) ──
(function staggerReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                // Reveal all siblings in the same grid at once
                entry.target.parentElement
                    .querySelectorAll('.reveal')
                    .forEach(el => {
                        el.classList.add('is-revealed');
                        observer.unobserve(el);
                    });
            });
        },
        { threshold: 0 }
    );

    items.forEach(el => observer.observe(el));
}());

// ── Hero typing animation ────────────────────────────────────
(function heroTyping() {
    const subtitle = document.querySelector('.hero__subtitle');
    const title    = document.querySelector('.hero__title');
    if (!subtitle || !title) return;

    // Elements that appear after typing finishes
    const deferred = [
        document.querySelector('.hero__description'),
        document.querySelector('.hero__btn'),
    ].filter(Boolean);

    // Hide them immediately so they don't flash before the animation
    deferred.forEach(el => el.classList.add('hero__fade-later'));

    // Type every character of `el`'s current text, then call onDone(cursor)
    function type(el, speed, onDone) {
        // Array.from handles multi-byte emoji correctly
        const chars = Array.from(el.textContent.trim());
        el.textContent = '';

        const cursor = document.createElement('span');
        cursor.className = 'hero__cursor';
        cursor.setAttribute('aria-hidden', 'true');
        el.appendChild(cursor);

        let i = 0;
        const tick = setInterval(() => {
            if (i < chars.length) {
                cursor.insertAdjacentText('beforebegin', chars[i++]);
            } else {
                clearInterval(tick);
                onDone(cursor);
            }
        }, speed);
    }

    // 1. Type subtitle (65 ms/char)
    type(subtitle, 65, (cursorA) => {
        cursorA.remove(); // remove cursor from subtitle line
        // 2. Short pause then type title (45 ms/char — snappier for longer text)
        setTimeout(() => {
            type(title, 45, (cursorB) => {
                // 3. Cursor blinks 3× then vanishes; description + btn fade in
                cursorB.classList.add('hero__cursor--done');
                setTimeout(() => {
                    deferred.forEach((el, i) => {
                        setTimeout(() => el.classList.add('is-visible'), i * 120);
                    });
                }, 700);
            });
        }, 220);
    });
}());

// ── Dark / Light mode toggle ─────────────────────────────────
(function themeToggle() {
    const root     = document.documentElement;
    const saved    = localStorage.getItem('theme');
    const sysDark  = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial  = saved ?? (sysDark ? 'dark' : 'light');

    if (initial === 'light') root.setAttribute('data-theme', 'light');

    document.querySelectorAll('.header__sun, .mobile-nav__sun').forEach(btn => {
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
}());

// ── Snake diagram scroll reveal ──────────────────────────────
(function snakeReveal() {
    const items = document.querySelectorAll('.snake__item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('snake__item--visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0 }
    );

    items.forEach(item => observer.observe(item));
}());

// ── Project detail modal ──────────────────────────────────────
(function projectModal() {
    const PROJECTS = {
        msig: {
            tag:       'SingHacks 2025',
            accent:    'indigo',
            title:     'MSIG Travel Assistant',
            desc:      'A generative AI assistant for travel insurance queries built during SingHacks 2025. LangChain with Groq\'s Llama 3 model manages multi-turn conversations and classifies user intent across policy types.\n\nThe FastAPI backend handles policy comparisons and eligibility checks, with PyMuPDF processing uploaded documents for dynamic quote generation. The interface is built with Streamlit for rapid prototyping and demo delivery.',
            tech:      ['LangChain', 'Groq Llama 3', 'FastAPI', 'PyMuPDF', 'Streamlit', 'Python'],
            highlights: [
                'Multi-turn conversational insurance advisor',
                'Real-time policy comparison and eligibility checks',
                'PDF document ingestion via PyMuPDF',
                'Intent classification across 10+ policy categories',
            ],
            github: 'https://github.com/MuhammadHasifF/SingHacks2025',
        },
        surebo: {
            tag:       'HackoMania 2026',
            accent:    'rose',
            title:     'SureBO',
            desc:      'An AI-powered misinformation detector built for HackoMania 2026, covering Singapore\'s four official languages (English, Mandarin, Malay, Tamil). Submitted text and URLs are processed through a RAG pipeline that draws from 20+ verified government and news sources.\n\nWhatsApp voice note support is handled by OpenAI Whisper, with Helsinki-NLP powering multilingual translation. ClickHouse and Supabase form the data layer, and Langfuse provides end-to-end pipeline observability.',
            tech:      ['Next.js', 'React', 'LangChain', 'GPT-4o', 'OpenAI Whisper', 'ClickHouse', 'Supabase', 'Langfuse', 'Helsinki-NLP'],
            highlights: [
                '20+ verified government and news sources in the RAG pipeline',
                'Multilingual fact-checking across 4 official languages',
                'WhatsApp voice note transcription via OpenAI Whisper',
                'Full pipeline observability with Langfuse',
                'Real-time source citation with every verdict',
            ],
            github: 'https://github.com/AlexBearBear0319/surebo-check',
        },
    };

    const overlay   = document.getElementById('projectModal');
    const closeBtn  = document.getElementById('modalClose');
    const tagEl     = document.getElementById('modalTag');
    const titleEl   = document.getElementById('modalTitle');
    const descEl    = document.getElementById('modalDesc');
    const chipsEl   = document.getElementById('modalChips');
    const listEl    = document.getElementById('modalHighlights');
    const githubEl  = document.getElementById('modalGithub');

    if (!overlay) return;

    function openModal(id) {
        const p = PROJECTS[id];
        if (!p) return;

        // Tag
        tagEl.textContent = p.tag;
        tagEl.className = 'modal__tag' + (p.accent === 'rose' ? ' modal__tag--rose' : '');

        // Title
        titleEl.textContent = p.title;

        // Description – support \n as paragraph breaks
        descEl.innerHTML = p.desc
            .split('\n\n')
            .map(para => `<p style="margin:0 0 0.75rem">${para}</p>`)
            .join('');

        // Tech chips
        chipsEl.innerHTML = p.tech
            .map(t => `<span class="modal__chip">${t}</span>`)
            .join('');

        // Highlights
        listEl.innerHTML = p.highlights
            .map(h => `<li>${h}</li>`)
            .join('');

        // GitHub
        githubEl.href = p.github;

        overlay.setAttribute('aria-hidden', 'false');
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Open via any [data-project] button
    document.querySelectorAll('[data-project]').forEach(btn => {
        // Only attach to <button> elements (not the article containers)
        if (btn.tagName !== 'BUTTON') return;
        btn.addEventListener('click', () => openModal(btn.dataset.project));
    });

    // Close via button, overlay click, or Escape key
    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
}());

