/**
 * Single source of truth for ALL site content.
 * Edit text, links, projects, and roles here — never in layout code.
 * Rendered to static HTML at build time (see vite.config.js).
 */

export const site = {
  name: 'Mohamed Ameer',
  title: 'Mohamed Ameer | Portfolio',
  description:
    'Computer Science student at the University of Wollongong specialising in AI, with a background in fintech and experience in full stack development and backend engineering.',
  email: 'mohamedameer0025@gmail.com',
  github: 'https://github.com/aeomantic',
  resume: '/Intern_Resume.pdf',
  ogImage: '/pengu.jpeg',
};

export const nav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  greeting: "Hi, I'm Ameer 👋",
  title: 'AI & FULL STACK DEVELOPER.',
  description:
    'Computer Science student at the University of Wollongong specialising in AI, with a background in fintech and experience in full stack development and backend engineering.',
  ctas: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Resume', href: '/Intern_Resume.pdf', variant: 'ghost', external: true },
  ],
};

export const projects = {
  label: 'Selected work',
  title: 'Projects',
  description: 'AI applications and tools built at hackathons.',
  items: [
    {
      id: 'safewatch',
      tag: 'StraightUp Hackathon 2026',
      name: 'SafeWatch',
      summary:
        'A LangGraph multi-agent pipeline converts noisy Reddit posts into verified Singapore crime incidents. Real-time Next.js dashboard with React-Leaflet clustering and Supabase Realtime, processing incidents with no human in the loop.',
      chips: ['LangGraph', 'GPT-4o-mini', 'FastAPI', 'pgvector', 'Next.js'],
      caseStudy: {
        overview:
          'SafeWatch is an AI-powered community crime intelligence platform built at the StraightUp Hackathon 2026. A LangGraph multi-agent pipeline (Crawler → Cleaner → Classifier → Decider) with inter-agent feedback loops processes noisy Reddit posts and converts them into verified Singapore crime incidents with no human in the loop.',
        approach:
          'The backend uses a normalised PostgreSQL schema with pgvector IVFFlat indexes, RLS policies, and an optimistic row-locking incident queue enabling race-condition-free distributed agent processing. A real-time Next.js dashboard with React-Leaflet map clustering and Supabase Realtime surfaces community-reported incidents by severity.',
        tech: ['Python', 'FastAPI', 'LangGraph', 'GPT-4o-mini', 'Supabase', 'Next.js', 'pgvector'],
        highlights: [
          'LangGraph multi-agent pipeline (Crawler → Cleaner → Classifier → Decider) with inter-agent feedback loops',
          'Normalised PostgreSQL schema with pgvector IVFFlat indexes and RLS policies',
          'Optimistic row-locking incident queue enabling race-condition-free distributed processing',
          'Real-time React-Leaflet map with severity colour coding and Supabase Realtime updates',
        ],
      },
      github: 'https://github.com/Vedha-Krishna/SafeWatch',
      demo: 'https://safewatch-flame.vercel.app',
    },
    {
      id: 'itcsimplify',
      tag: 'SIM IT Club ITCamp 2026',
      name: 'ITC-SIMplify',
      summary:
        'Award-winning campus study spot finder for SIM students. Features a gamification pipeline with 100 progression levels, real-time session tracking, and an AI chatbot, backed by a Supabase data layer across 13+ tables.',
      chips: ['Next.js 15', 'TypeScript', 'Supabase', 'GPT-4o-mini'],
      caseStudy: {
        overview:
          'ITC-SIMplify is a campus study spot finder built for the SIM IT Club ITCamp 2026. Students can find available study spots, connect with study buddies, check real-time ETAs, and use an AI chatbot powered by GPT-4o-mini. Awarded the Design Excellence Award at the SIM IT Club ITCamp Project Showcase (Apr 2026).',
        approach:
          'The platform is backed by a centralised Supabase data layer covering 13+ database tables. A gamification pipeline built with Supabase RPC tracks points and EXP across 100 progression levels, with real-time session tracking and streak systems across 6 feature modules.',
        tech: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'GPT-4o-mini'],
        highlights: [
          'Awarded Design Excellence Award at SIM IT Club ITCamp Project Showcase (Apr 2026)',
          'Centralised Supabase data layer in TypeScript covering 13+ database tables',
          'Gamification pipeline with configurable cooldown rules across 100 progression levels',
          'Real-time session tracking and streak system across 6 feature modules',
          'AI chatbot powered by GPT-4o-mini',
        ],
      },
      github: 'https://github.com/AlexBearBear0319/ITC-SIMplify',
      demo: 'https://itc-simplify.vercel.app/auth/login',
    },
    {
      id: 'msig',
      tag: 'SingHacks 2025',
      name: 'MSIG Travel Assistant',
      summary:
        "A generative AI assistant for travel insurance queries. Uses LangChain with Groq's Llama 3 for multi-turn conversations and intent classification, with a FastAPI backend for policy comparisons.",
      chips: ['LangChain', 'Groq Llama 3', 'FastAPI', 'Streamlit'],
      caseStudy: {
        overview:
          "A generative AI assistant for travel insurance queries built during SingHacks 2025. LangChain with Groq's Llama 3 model manages multi-turn conversations and classifies user intent across policy types.",
        approach:
          'The FastAPI backend handles policy comparisons and eligibility checks, with PyMuPDF processing uploaded documents for dynamic quote generation. The interface is built with Streamlit for rapid prototyping and demo delivery.',
        tech: ['LangChain', 'Groq Llama 3', 'FastAPI', 'PyMuPDF', 'Streamlit', 'Python'],
        highlights: [
          'Multi-turn conversational insurance advisor',
          'Real-time policy comparison and eligibility checks',
          'PDF document ingestion via PyMuPDF',
          'Intent classification across 10+ policy categories',
        ],
      },
      github: 'https://github.com/MuhammadHasifF/SingHacks2025',
      demo: 'https://msigtravelassistant.streamlit.app/',
    },
    {
      id: 'surebo',
      tag: 'HackoMania 2026',
      name: 'SureBO',
      summary:
        "AI-powered misinformation detector covering Singapore's four official languages. A RAG pipeline draws from 20+ verified government and news sources with WhatsApp voice note support.",
      chips: ['Next.js', 'GPT-4o', 'LangChain', 'Supabase'],
      caseStudy: {
        overview:
          "An AI-powered misinformation detector built for HackoMania 2026, covering Singapore's four official languages (English, Mandarin, Malay, Tamil). Submitted text and URLs are processed through a RAG pipeline that draws from 20+ verified government and news sources.",
        approach:
          'WhatsApp voice note support is handled by OpenAI Whisper, with Helsinki-NLP powering multilingual translation. ClickHouse and Supabase form the data layer, and Langfuse provides end-to-end pipeline observability.',
        tech: ['Next.js', 'React', 'LangChain', 'GPT-4o', 'OpenAI Whisper', 'ClickHouse', 'Supabase', 'Langfuse', 'Helsinki-NLP'],
        highlights: [
          '20+ verified government and news sources in the RAG pipeline',
          'Multilingual fact-checking across 4 official languages',
          'WhatsApp voice note transcription via OpenAI Whisper',
          'Full pipeline observability with Langfuse',
          'Real-time source citation with every verdict',
        ],
      },
      github: 'https://github.com/AlexBearBear0319/surebo-check',
      demo: 'https://surebo-check.vercel.app',
    },
  ],
};

export const work = {
  label: 'Experience',
  title: 'Work',
  description: 'Roles and contributions across internships and student organisations.',
  items: [
    {
      org: 'SIM IT Club',
      role: 'Subcommittee Member',
      period: 'Oct 2025 — Present',
      body: 'Facilitated the SIMITC GitHub Workshop Series from October 2025, guiding groups of up to 5 participants through hands-on Git and GitHub sessions. Currently developing the backend for a campus app with real-time ETA tracking for study spot discovery.',
    },
    {
      org: 'Singapore Armed Forces',
      role: 'Security Trooper',
      period: 'May 2023 — May 2025',
      body: 'Served from May 2023 to May 2025. Managed daily access control for 100+ personnel and vehicles, maintained accurate entry logs, and assisted in training 10+ recruits on standard operating procedures. Identified operational gaps that reduced security incidents.',
    },
    {
      org: 'FirstCom Solutions',
      role: 'Project Manager Intern',
      period: 'Aug 2022 — Jan 2023',
      body: 'Contributed to 2+ e-commerce projects from August 2022 to January 2023, identifying bottlenecks that cut delivery timelines by 20%. Managed stakeholder communication and aligned client expectations, tracking progress via Trello and Jira.',
    },
    {
      org: 'FirstCom Solutions',
      role: 'Web Designer Intern',
      period: 'Jul — Aug 2022',
      body: 'Designed and built responsive websites with HTML and CSS from July to August 2022, using Wix to deliver client-ready solutions. Collaborated with the design team on UI/UX improvements across multiple client sites.',
    },
  ],
};

/**
 * Skills are grouped and contextual — every entry is sourced from the
 * About languages list, project tech stacks, or work descriptions above.
 * `context` names where each skill was actually used.
 */
export const skills = {
  label: 'Toolbox',
  title: 'Skills',
  description: 'Grouped by where they show up in my projects and roles.',
  groups: [
    {
      name: 'Languages',
      items: [
        { name: 'Python', context: 'SafeWatch · MSIG Travel Assistant' },
        { name: 'JavaScript', context: 'Portfolio · web internships' },
        { name: 'TypeScript', context: 'ITC-SIMplify' },
        { name: 'Java', context: 'Coursework' },
        { name: 'SQL', context: 'SafeWatch · ITC-SIMplify' },
        { name: 'HTML/CSS', context: 'FirstCom Solutions · portfolio' },
      ],
    },
    {
      name: 'AI & LLM Engineering',
      items: [
        { name: 'LangGraph', context: 'SafeWatch multi-agent pipeline' },
        { name: 'LangChain', context: 'MSIG Travel Assistant · SureBO' },
        { name: 'GPT-4o / 4o-mini', context: 'SafeWatch · ITC-SIMplify · SureBO' },
        { name: 'Groq Llama 3', context: 'MSIG Travel Assistant' },
        { name: 'OpenAI Whisper', context: 'SureBO voice notes' },
        { name: 'RAG pipelines', context: 'SureBO · 20+ verified sources' },
        { name: 'Langfuse', context: 'SureBO observability' },
      ],
    },
    {
      name: 'Frontend',
      items: [
        { name: 'Next.js', context: 'SafeWatch · ITC-SIMplify · SureBO' },
        { name: 'React', context: 'SureBO · React-Leaflet in SafeWatch' },
        { name: 'Streamlit', context: 'MSIG Travel Assistant' },
      ],
    },
    {
      name: 'Backend & Data',
      items: [
        { name: 'FastAPI', context: 'SafeWatch · MSIG Travel Assistant' },
        { name: 'Supabase', context: 'SafeWatch · ITC-SIMplify · SureBO' },
        { name: 'PostgreSQL', context: 'SafeWatch · ITC-SIMplify' },
        { name: 'pgvector', context: 'SafeWatch IVFFlat indexes' },
        { name: 'ClickHouse', context: 'SureBO data layer' },
        { name: 'PyMuPDF', context: 'MSIG document ingestion' },
      ],
    },
    {
      name: 'Tools & Practice',
      items: [
        { name: 'Git & GitHub', context: 'SIMITC workshop facilitator' },
        { name: 'Trello · Jira', context: 'FirstCom project management' },
        { name: 'Wix', context: 'FirstCom client sites' },
      ],
    },
  ],
};

export const about = {
  label: 'About me',
  title: 'About',
  description:
    "Hi, I'm Ameer. I study Computer Science at the University of Wollongong, majoring in Artificial Intelligence and Cyber Security. I hold a Diploma in Financial Business Informatics from Temasek Polytechnic. I've built AI-powered applications at hackathons and completed internships in web development and project management.",
  image: '/pengu.jpeg',
  imageAlt: 'Profile picture',
};

export const contact = {
  label: 'Get in touch',
  title: 'Get In Contact',
  description:
    'Currently open to internship and junior developer roles in AI development or full stack engineering. Feel free to reach out if you have an opportunity to discuss.',
  ctaLabel: 'Reach Out',
};

export const footer = {
  name: 'Mohamed Ameer',
};
