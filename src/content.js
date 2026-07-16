/**
 * Single source of truth for ALL site content.
 * Edit text, links, projects, and roles here — never in layout code.
 * Rendered to static HTML at build time (see vite.config.js).
 */

export const site = {
  name: 'Mohamed Ameer',
  title: 'Mohamed Ameer | Portfolio',
  description:
    'Computer Science student at the University of Wollongong specialising in AI, Big Data & Cybersecurity, with a background in fintech and experience in full stack development and backend engineering.',
  email: 'mohamedameer0025@proton.me',
  github: 'https://github.com/aeomantic',
  resume: '/Mohamed_Ameer_Resume.pdf',
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
    'Computer Science student at the University of Wollongong specialising in AI, Big Data & Cybersecurity, with a background in fintech and experience in full stack development and backend engineering.',
  ctas: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Resume', href: '/Mohamed_Ameer_Resume.pdf', variant: 'ghost', external: true },
  ],
};

export const projects = {
  label: 'Selected work',
  title: 'Projects',
  description: 'AI applications and tools built at hackathons.',
  items: [
    {
      id: 'claimreview',
      tag: 'HackerRank Orchestrate 2026',
      name: 'Self-Verifying Claim Review Pipeline',
      summary:
        "Placed #43 of 1,773 entrants (top 2.4%) in a 24-hour solo AI engineering hackathon. A vision-LLM pipeline that checks whether submitted photos actually support an insurance claimant's stated damage — and re-examines its own verdicts before trusting them.",
      chips: ['Python', 'GPT-5.4 Vision', 'Pydantic', 'Self-consistency'],
      caseStudy: {
        overview:
          "Built solo in 24 hours for HackerRank Orchestrate 2026, placing #43 of 1,773 entrants (top 2.4%). The system reviews damage claims across cars, laptops, and packages: given a claim conversation, submitted images, user history, and minimum evidence requirements, it decides whether the photos support the claim, contradict it, or don't provide enough information.",
        approach:
          'A GPT-5.4-mini vision pass produces a strict Pydantic-schema assessment with retry and backoff. Borderline verdicts trigger a self-consistency re-pass, and genuine disagreements escalate to full GPT-5.4 as a tie-break — while low-confidence cases are routed to human review instead of guessed. A deterministic mock client keeps the whole harness runnable offline, with bounded concurrency to respect API rate limits.',
        tech: ['Python', 'OpenAI Vision API', 'GPT-5.4 / 5.4-mini', 'Pydantic', 'ThreadPoolExecutor'],
        highlights: [
          'Placed #43 of 1,773 entrants (top 2.4%) — 24-hour solo build',
          'Verifies photo evidence against stated damage across cars, laptops, and packages',
          'Self-verification: borderline cases re-checked for consistency, disagreements escalated to a stronger model',
          'Uncertain claims escalate to human review instead of guessing',
          'Strict Pydantic-schema LLM outputs with retry, backoff, and a hard fallback path',
        ],
      },
      github: 'https://github.com/aeomantic/hackerrank-orchestrate-june26',
    },
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
          'The backend is a normalised 7-table PostgreSQL schema on Supabase, exposed to the frontend through a single unified read view. A Python data-access layer uses unique-key upserts to prevent duplicate records, plus a row-locking job queue so no two agents process the same record simultaneously. The React/TypeScript dashboard receives new incidents over Supabase real-time subscriptions, pushing them onto a live React-Leaflet map without page refreshes.',
        tech: ['Python', 'FastAPI', 'LangGraph', 'GPT-4o-mini', 'Supabase', 'Next.js', 'pgvector'],
        highlights: [
          'LangGraph multi-agent pipeline (Crawler → Cleaner → Classifier → Decider) with inter-agent feedback loops',
          'Normalised 7-table PostgreSQL schema with pgvector IVFFlat indexes, RLS policies, and a single unified read view',
          'Unique-key upserts and a row-locking job queue for race-condition-free distributed agent processing',
          'Live React-Leaflet map with severity colour coding, updated via Supabase real-time subscriptions',
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
          'Real-time session tracking and streaks, with consistent DbResult error handling across 6 independent feature modules',
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
        "AI-powered misinformation detector covering Singapore's four official languages. A LangChain pipeline grounds Qwen 2.5-VL-72B with three parallel live Tavily web searches and streams structured verdicts in real time.",
      chips: ['Next.js', 'LangChain', 'Qwen 2.5-VL-72B', 'Tavily'],
      caseStudy: {
        overview:
          "An AI-powered misinformation detector built for HackoMania 2026, covering Singapore's four official languages (English, Malay, Mandarin, Tamil). The core fact-checking pipeline is engineered in LangChain — chaining prompt → LLM (Qwen 2.5-VL-72B) → parser — with a RAG step that runs three parallel live web searches through Tavily as model context.",
        approach:
          "The end-to-end orchestration is a single flow: retrieve evidence → call the model → validate output → return a structured verdict. Responses stream live over a Server-Sent Events endpoint with built-in error handling and retry logic, and a Zod schema with graceful fallback enforces reliable LLM output. Multilingual prompts return a consistent result object in the user's language, and every input type — voice notes via OpenAI Whisper, plus text extracted from YouTube, websites, PDFs, DOCX, and images — is normalised into the same pipeline, with ClickHouse and Supabase as the data layer and Langfuse for observability.",
        tech: ['Next.js', 'React', 'LangChain', 'Qwen 2.5-VL-72B', 'Tavily', 'OpenAI Whisper', 'Zod', 'ClickHouse', 'Supabase', 'Langfuse', 'Helsinki-NLP'],
        highlights: [
          'LangChain fact-checking pipeline grounded by 3 parallel live Tavily web searches',
          'Real-time verdict streaming via Server-Sent Events with error handling and retry logic',
          'Zod-enforced structured verdicts with graceful fallback',
          'Multilingual fact-checking across 4 official languages with consistent result objects',
          'Unified ingestion: voice (Whisper), YouTube, websites, PDFs, DOCX, and images',
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
  description: 'Roles and contributions across internships, national service, and student organisations.',
  items: [
    {
      org: 'SIM IT Club',
      role: 'Subcommittee Member, General Dept',
      period: 'Oct 2025 — Present',
      body: 'Engineering the Supabase and PostgreSQL backend for ITC-SIMplify, a student-facing campus platform in active development and deployment for SIM students. Also help facilitate hands-on Git & GitHub workshops for cohorts of up to 5 participants, accelerating their adoption of version-control workflows.',
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
      body: 'Delivered 2 e-commerce web projects on schedule by coordinating cross-functional tasks and resolving bottlenecks, cutting overall delivery timelines by 20%. Managed end-to-end project tracking with Jira and Trello, maintaining stakeholder alignment across client and internal teams through the full delivery cycle.',
    },
    {
      org: 'FirstCom Solutions',
      role: 'Web Designer Intern',
      period: 'Jul — Aug 2022',
      body: 'Designed and shipped responsive client websites using HTML, CSS, and Wix, collaborating with the design team to implement UI/UX improvements across multiple live projects.',
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
        { name: 'Python', context: 'SafeWatch · Claim Review Pipeline' },
        { name: 'TypeScript', context: 'ITC-SIMplify · SureBO' },
        { name: 'JavaScript', context: 'Portfolio · web internships' },
        { name: 'Java', context: 'Coursework' },
        { name: 'SQL', context: 'SafeWatch · ITC-SIMplify' },
        { name: 'HTML/CSS', context: 'FirstCom Solutions · portfolio' },
      ],
    },
    {
      name: 'AI & LLM Engineering',
      items: [
        { name: 'LangGraph', context: 'SafeWatch multi-agent pipeline' },
        { name: 'LangChain', context: 'SureBO · MSIG Travel Assistant' },
        { name: 'RAG pipelines', context: 'SureBO — 3 parallel Tavily live searches' },
        { name: 'Prompt engineering', context: 'IBM certificate · SureBO multilingual prompts' },
        { name: 'GPT-5.4 Vision', context: 'Claim Review Pipeline' },
        { name: 'GPT-4o / 4o-mini', context: 'SafeWatch · ITC-SIMplify' },
        { name: 'Qwen 2.5-VL-72B', context: 'SureBO fact-checking' },
        { name: 'Groq Llama 3', context: 'MSIG Travel Assistant' },
        { name: 'OpenAI Whisper', context: 'SureBO voice notes' },
        { name: 'Helsinki-NLP', context: 'SureBO translation' },
        { name: 'Langfuse', context: 'SureBO observability' },
      ],
    },
    {
      name: 'Frontend',
      items: [
        { name: 'Next.js 15', context: 'SafeWatch · ITC-SIMplify · SureBO' },
        { name: 'React', context: 'SureBO · React-Leaflet in SafeWatch' },
        { name: 'Tailwind CSS', context: 'Hackathon frontends' },
        { name: 'Streamlit', context: 'MSIG Travel Assistant' },
      ],
    },
    {
      name: 'Backend & Data',
      items: [
        { name: 'FastAPI', context: 'SafeWatch · MSIG Travel Assistant' },
        { name: 'Supabase', context: 'SafeWatch · ITC-SIMplify RPC · SureBO' },
        { name: 'PostgreSQL', context: 'SafeWatch 7-table schema · ITC-SIMplify' },
        { name: 'pgvector', context: 'SafeWatch IVFFlat indexes' },
        { name: 'REST APIs', context: 'FastAPI backends · SureBO SSE streaming' },
        { name: 'ClickHouse', context: 'SureBO data layer' },
        { name: 'Pydantic · Zod', context: 'Claim Review · SureBO structured outputs' },
        { name: 'PyMuPDF', context: 'MSIG document ingestion' },
      ],
    },
    {
      name: 'Tools & Certificates',
      items: [
        { name: 'Git & GitHub', context: 'SIMITC workshop facilitator' },
        { name: 'Microsoft Azure', context: 'Cloud & DevOps' },
        { name: 'Trello · Jira', context: 'FirstCom project management' },
        { name: 'Wix', context: 'FirstCom client sites' },
        { name: 'IBM GenAI: Prompt Engineering', context: 'Certificate · Mar 2026' },
        { name: 'Huawei Cloud Computing', context: 'Certificate · Nov 2025' },
      ],
    },
  ],
};

export const about = {
  label: 'About me',
  title: 'About',
  description:
    "Hi, I'm Ameer. I'm pursuing a Bachelor of Computer Science (AI, Big Data & Cybersecurity) at the University of Wollongong, graduating May 2027, and hold a Diploma in Financial Business Informatics from Temasek Polytechnic. I've built AI-powered applications at hackathons — most recently placing #43 of 1,773 (top 2.4%) in a 24-hour solo AI engineering sprint — and completed internships in web development and project management.",
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
