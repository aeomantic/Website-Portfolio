# Content Inventory — Baseline (pre-redesign)

Snapshot taken 2026-07-10 from commit `04b084e`. Every piece of user-facing content
on the site, verbatim. Used to verify zero content loss after the redesign.

Sources: `index.html` (sections) and `src/main.js` (project modal data).

---

## 1. Global / Meta

| Item | Value |
|---|---|
| Page title | `Mohamed Ameer | Portfolio` |
| Favicon | `/vite.svg` |
| Font (current) | General Sans via Fontshare CDN |
| Theme | Dark default, light-mode toggle, persisted in `localStorage("theme")` |
| Resume | `/Intern_Resume.pdf` (opens in new tab) |

## 2. Navigation (desktop + mobile — identical links)

| Label | Target |
|---|---|
| About | `#about` |
| Projects | `#projects` |
| Work | `#work` |
| Contact | `#contact` |
| (theme toggle) | sun/moon button, aria-label "Toggle colour theme" |
| Resume | `/Intern_Resume.pdf` |

## 3. Hero

- Image: `/pengu.jpeg` — alt: "Profile picture"
- Subtitle: **Hi, I'm Ameer 👋** (typing animation)
- Title: **AI & FULL STACK DEVELOPER.** (typing animation)
- Description: "Computer Science student at the University of Wollongong specialising in AI, with a background in fintech and experience in full stack development and backend engineering."
- CTA button: **Reach Out** → `#contact`

## 4. About (`#about`)

- Label: "About me" / Title: "About"
- Description: "Hi, I'm Ameer. I study Computer Science at the University of Wollongong, majoring in Artificial Intelligence and Cyber Security. I hold a Diploma in Financial Business Informatics from Temasek Polytechnic. I've built AI-powered applications at hackathons and completed internships in web development and project management."
- Subheading: "Languages" — list: Python, JavaScript, TypeScript, Java, SQL, HTML/CSS
- Image: `/pengu.jpeg` — alt: "Profile picture"

## 5. Projects (`#projects`)

Section header — label: "Selected work" / title: "Projects" / description: "AI applications and tools built at hackathons."

### 5.1 SafeWatch — StraightUp Hackathon 2026 (accent: indigo)

- Card summary: "A LangGraph multi-agent pipeline converts noisy Reddit posts into verified Singapore crime incidents. Real-time Next.js dashboard with React-Leaflet clustering and Supabase Realtime, processing incidents with no human in the loop."
- Card chips: LangGraph, GPT-4o-mini, FastAPI, pgvector, Next.js
- Modal description (para 1): "SafeWatch is an AI-powered community crime intelligence platform built at the StraightUp Hackathon 2026. A LangGraph multi-agent pipeline (Crawler → Cleaner → Classifier → Decider) with inter-agent feedback loops processes noisy Reddit posts and converts them into verified Singapore crime incidents with no human in the loop."
- Modal description (para 2): "The backend uses a normalised PostgreSQL schema with pgvector IVFFlat indexes, RLS policies, and an optimistic row-locking incident queue enabling race-condition-free distributed agent processing. A real-time Next.js dashboard with React-Leaflet map clustering and Supabase Realtime surfaces community-reported incidents by severity."
- Modal tech: Python, FastAPI, LangGraph, GPT-4o-mini, Supabase, Next.js, pgvector
- Highlights:
  1. LangGraph multi-agent pipeline (Crawler → Cleaner → Classifier → Decider) with inter-agent feedback loops
  2. Normalised PostgreSQL schema with pgvector IVFFlat indexes and RLS policies
  3. Optimistic row-locking incident queue enabling race-condition-free distributed processing
  4. Real-time React-Leaflet map with severity colour coding and Supabase Realtime updates
- GitHub: https://github.com/Vedha-Krishna/SafeWatch
- Live demo: https://safewatch-flame.vercel.app

### 5.2 ITC-SIMplify — SIM IT Club ITCamp 2026 (accent: rose)

- Card summary: "Award-winning campus study spot finder for SIM students. Features a gamification pipeline with 100 progression levels, real-time session tracking, and an AI chatbot, backed by a Supabase data layer across 13+ tables."
- Card chips: Next.js 15, TypeScript, Supabase, GPT-4o-mini
- Modal description (para 1): "ITC-SIMplify is a campus study spot finder built for the SIM IT Club ITCamp 2026. Students can find available study spots, connect with study buddies, check real-time ETAs, and use an AI chatbot powered by GPT-4o-mini. Awarded the Design Excellence Award at the SIM IT Club ITCamp Project Showcase (Apr 2026)."
- Modal description (para 2): "The platform is backed by a centralised Supabase data layer covering 13+ database tables. A gamification pipeline built with Supabase RPC tracks points and EXP across 100 progression levels, with real-time session tracking and streak systems across 6 feature modules."
- Modal tech: Next.js 15, TypeScript, Supabase, PostgreSQL, GPT-4o-mini
- Highlights:
  1. Awarded Design Excellence Award at SIM IT Club ITCamp Project Showcase (Apr 2026)
  2. Centralised Supabase data layer in TypeScript covering 13+ database tables
  3. Gamification pipeline with configurable cooldown rules across 100 progression levels
  4. Real-time session tracking and streak system across 6 feature modules
  5. AI chatbot powered by GPT-4o-mini
- GitHub: https://github.com/AlexBearBear0319/ITC-SIMplify
- Live demo: https://itc-simplify.vercel.app/auth/login

### 5.3 MSIG Travel Assistant — SingHacks 2025 (accent: indigo)

- Card summary: "A generative AI assistant for travel insurance queries. Uses LangChain with Groq's Llama 3 for multi-turn conversations and intent classification, with a FastAPI backend for policy comparisons."
- Card chips: LangChain, Groq Llama 3, FastAPI, Streamlit
- Modal description (para 1): "A generative AI assistant for travel insurance queries built during SingHacks 2025. LangChain with Groq's Llama 3 model manages multi-turn conversations and classifies user intent across policy types."
- Modal description (para 2): "The FastAPI backend handles policy comparisons and eligibility checks, with PyMuPDF processing uploaded documents for dynamic quote generation. The interface is built with Streamlit for rapid prototyping and demo delivery."
- Modal tech: LangChain, Groq Llama 3, FastAPI, PyMuPDF, Streamlit, Python
- Highlights:
  1. Multi-turn conversational insurance advisor
  2. Real-time policy comparison and eligibility checks
  3. PDF document ingestion via PyMuPDF
  4. Intent classification across 10+ policy categories
- GitHub: https://github.com/MuhammadHasifF/SingHacks2025
- Live demo: https://msigtravelassistant.streamlit.app/

### 5.4 SureBO — HackoMania 2026 (accent: rose)

- Card summary: "AI-powered misinformation detector covering Singapore's four official languages. A RAG pipeline draws from 20+ verified government and news sources with WhatsApp voice note support."
- Card chips: Next.js, GPT-4o, LangChain, Supabase
- Modal description (para 1): "An AI-powered misinformation detector built for HackoMania 2026, covering Singapore's four official languages (English, Mandarin, Malay, Tamil). Submitted text and URLs are processed through a RAG pipeline that draws from 20+ verified government and news sources."
- Modal description (para 2): "WhatsApp voice note support is handled by OpenAI Whisper, with Helsinki-NLP powering multilingual translation. ClickHouse and Supabase form the data layer, and Langfuse provides end-to-end pipeline observability."
- Modal tech: Next.js, React, LangChain, GPT-4o, OpenAI Whisper, ClickHouse, Supabase, Langfuse, Helsinki-NLP
- Highlights:
  1. 20+ verified government and news sources in the RAG pipeline
  2. Multilingual fact-checking across 4 official languages
  3. WhatsApp voice note transcription via OpenAI Whisper
  4. Full pipeline observability with Langfuse
  5. Real-time source citation with every verdict
- GitHub: https://github.com/AlexBearBear0319/surebo-check
- Live demo: https://surebo-check.vercel.app

## 6. Work (`#work`)

Section header — title: "Work" / description: "Roles and contributions across internships and student organisations."

1. **SIM IT Club — Subcommittee Member**: "Facilitated the SIMITC GitHub Workshop Series from October 2025, guiding groups of up to 5 participants through hands-on Git and GitHub sessions. Currently developing the backend for a campus app with real-time ETA tracking for study spot discovery."
2. **Singapore Armed Forces — Security Trooper**: "Served from May 2023 to May 2025. Managed daily access control for 100+ personnel and vehicles, maintained accurate entry logs, and assisted in training 10+ recruits on standard operating procedures. Identified operational gaps that reduced security incidents."
3. **FirstCom Solutions — Project Manager Intern**: "Contributed to 2+ e-commerce projects from August 2022 to January 2023, identifying bottlenecks that cut delivery timelines by 20%. Managed stakeholder communication and aligned client expectations, tracking progress via Trello and Jira."
4. **FirstCom Solutions — Web Designer Intern**: "Designed and built responsive websites with HTML and CSS from July to August 2022, using Wix to deliver client-ready solutions. Collaborated with the design team on UI/UX improvements across multiple client sites."

## 7. Contact (`#contact`)

- Label: "Get in touch" / Title: "Get In Contact"
- Description: "Currently open to internship and junior developer roles in AI development or full stack engineering. Feel free to reach out if you have an opportunity to discuss."
- CTA button: **Reach Out** → `mailto:mohamedameer0025@gmail.com`

## 8. Footer

- Text: "-- Mohamed Ameer --"

## 9. Assets in `public/`

| Asset | Referenced? |
|---|---|
| `Intern_Resume.pdf` | ✅ nav + mobile nav Resume buttons |
| `pengu.jpeg` | ✅ hero + about images |
| `vite.svg` | ✅ favicon |
| `pengu001.jpeg` … `pengu008.jpeg` (8 files) | ❌ unreferenced |
| `penguproject001.jpeg` … `penguproject006.jpeg` (6 files) | ❌ unreferenced |

## 10. Anchors / routes that must keep working

`#about`, `#projects`, `#work`, `#contact`, `/Intern_Resume.pdf`

## 11. Notable gaps (relative to redesign spec)

- **No GitHub or LinkedIn profile links anywhere on the site** — only per-project repo links. (Git remote suggests https://github.com/aeomantic.)
- No meta description / Open Graph tags.
- Site email is `mohamedameer0025@gmail.com` (differs from account email `mohamedameer462@gmail.com`) — preserved as-is unless told otherwise.
