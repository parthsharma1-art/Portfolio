'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Server,
  Layers,
  Shield,
  Zap,
  ArrowUpRight,
  Database,
  CheckCircle2,
  Lock,
  Cpu,
  Activity,
  Bot,
  Sparkles,
  Smartphone,
} from 'lucide-react'
import ProjectCaseStudyModal, { ProjectData } from '../components/ProjectCaseStudyModal'

const projectsData: ProjectData[] = [
  {
    id: 'ai-recruitment-platform',
    title: 'AI-Powered Recruitment & Talent Intelligence SaaS',
    subtitle: 'Full-stack distributed system with Spring AI, Model Context Protocol (MCP) server & Gemini ATS',
    badge: 'Microservices & GenAI',
    isProfessional: false,
    description:
      'A full-stack, distributed AI recruitment platform featuring autonomous LLM agents, an MCP server, ATS resume scoring with Gemini API, and dynamic technical interview simulators. Built with Spring Boot (Java 21) for core business logic, FastAPI (Python) for asynchronous AI workloads, and React 18 (Vite) for responsive candidate and recruiter portals.',
    contributions: [
      'Microservices Architecture & Orchestration: Architected a distributed platform using Spring Boot (Java 21), FastAPI (Python), and React 18 (Vite) for recruiter and candidate portals, cutting candidate screening turnaround time by over 70%.',
      'Spring AI & Model Context Protocol (MCP) Server: Engineered a native Model Context Protocol (MCP) server with Spring AI exposing recruitment tools (CandidateMcpTools, JobMcpTools) over SSE endpoints, enabling autonomous LLM agents to query databases and execute workflows in real time.',
      'AI-Powered ATS Resume Parsing & Semantic Matching: Implemented an intelligent ATS screening engine using Google Gemini API and semantic vector embeddings, parsing multi-format resumes (PDF/DOCX) and calculating ATS match scores against dynamic job requirements.',
      'Dynamic AI Technical Assessment & Interview Engine: Developed an automated candidate evaluation pipeline featuring dynamic technical test generation and an interactive, multi-turn AI interview simulator with real-time response evaluation and scoring rubrics.',
      'Enterprise Security, OAuth2 & Bot Protection: Secured public and private endpoints using Spring Security 6 with stateless JWT, role-based access control (RBAC), dual Google OAuth2 social login, and Google reCAPTCHA Enterprise scoring to prevent automated bot submissions.',
      'Multi-Tier Distributed Caching with Resilient Fallback: Designed a low-latency data access strategy integrating Upstash Redis (TLS) for token blacklisting, session state, and OTP rate-limiting, engineering an in-memory JVM failover mechanism to maintain 99.9% auth service availability during cache outages.',
      'Real-Time Chat & Collaborative Event System: Integrated Supabase PostgreSQL with Realtime WebSockets using backend-minted custom JWT tokens and Row-Level Security (RLS), enabling instantaneous bi-directional candidate-recruiter messaging and live recruitment notifications.',
      'Automated Payment Gateways & Subscription Webhooks: Built an end-to-end monetization module integrating Razorpay Payment Gateway with cryptographically verified HMAC SHA-256 webhook handlers, enabling secure transaction processing and tiered recruiter subscription upgrades.',
      'Asynchronous Cron Pipelines & Zero-Cold-Start Optimization: Engineered asynchronous scheduled batch processors (@Scheduled cron jobs) for periodic resume shortlist evaluation and automated microservice keep-alive pings, eliminating Render/Cloud server cold starts and reducing API latency by ~85%.',
      'Transactional Communication & Production Observability: Integrated Brevo (Sendinblue) transactional email APIs for automated candidate alerts and verification OTPs, while instrumenting New Relic APM for JVM heap profiling, database transaction tracing, and production telemetry.',
    ],
    technologies: [
      'Java 21',
      'Spring Boot 3',
      'Spring AI',
      'MCP Server',
      'FastAPI (Python)',
      'React 18',
      'Google Gemini API',
      'Redis (Upstash)',
      'MongoDB GridFS',
      'Supabase WebSockets',
      'Spring Security 6',
      'Razorpay',
      'Docker',
      'New Relic APM',
    ],
    githubUrl: 'https://github.com/parthsharma1-art/AiBasedEndtoEndRecruitmentSystemBackend',
    demoUrl: 'https://ai-based-endto-end-recruitment-syst.vercel.app/',
    architectureSummary:
      'Distributed microservices architecture utilizing Spring Boot (Java 21) for transaction-heavy business logic and an SSE-based Spring AI MCP server, paired with FastAPI for Python-based AI embeddings and vector similarity pipelines. Secured via Spring Security 6 with Upstash Redis TLS caching, Supabase Realtime WebSockets for bidirectional event streams, and New Relic APM telemetry in production.',
    challenges: [
      {
        problem: 'Severe cloud container cold starts and high latency during scheduled batch applicant evaluations.',
        solution: 'Engineered asynchronous @Scheduled cron pipelines with microservice keep-alive pings and background evaluation threads, eliminating cold starts and reducing API latency by ~85%.',
      },
      {
        problem: 'Auth service downtime risk and token validation bottlenecks during external Redis cache degradation.',
        solution: 'Designed a multi-tier caching architecture with Upstash Redis (TLS) and an automatic in-memory JVM failover mechanism, maintaining 99.9% auth service availability.',
      },
      {
        problem: 'Enabling autonomous AI agents to query candidate profiles and execute recruitment actions without compromising data security.',
        solution: 'Engineered a native Model Context Protocol (MCP) server using Spring AI over SSE, exposing fine-grained tools (CandidateMcpTools, JobMcpTools) with strict RBAC authorization.',
      },
    ],
    keyOutcomes: [
      'Cut candidate screening turnaround time by over 70% with Spring AI, MCP server, and Gemini ATS scoring',
      'Achieved 99.9% auth service availability through multi-tier Redis TLS caching and in-memory JVM failover',
      '~85% API latency reduction via asynchronous scheduled cron batch processors and keep-alive pingers',
      'Tamper-proof monetization via cryptographically verified Razorpay webhooks and tiered subscriptions',
    ],
  },
  {
    id: 'milk-management-system',
    title: 'Milk Management System (Smart Dairy Operations & Billing)',
    subtitle: 'Full-stack dairy SaaS platform with AI/OCR handwritten register digitization & mobile PWA',
    badge: 'Full-Stack SaaS & AI/OCR',
    isProfessional: false,
    description:
      'A scalable full-stack dairy management platform digitizing end-to-end milk collection, bilingual customer ledgers, daily shift procurement, and automated billing. Integrates an AI-powered OCR pipeline (Gemini Vision API & Tesseract OCR) to scan and digitize handwritten Hindi/English registers into atomic ledger entries, paired with a Capacitor cross-platform mobile PWA.',
    contributions: [
      'Full-Stack System Architecture: Architected a scalable full-stack dairy management platform using Spring Boot 3 (Java 21), MongoDB Atlas, and React 18 (Vite) to digitize end-to-end milk collection, inventory management, billing, and customer ledgers.',
      'Automated Register OCR & Handwritten Digitization: Engineered an AI-powered OCR pipeline using Google Gemini Vision API & Tesseract to scan handwritten Hindi/English milk registers with 88%+ confidence, featuring an interactive human-in-the-loop verification workflow before ledger commit.',
      'Bilingual Search & Phonetic Matching Engine: Implemented an intelligent bilingual search system (Hindi & English) with transliteration and phonetic fallback algorithms, enabling operators to look up customers seamlessly in both Devanagari script and Latin text.',
      'Dynamic Tiered Pricing & Rate Engine: Designed an automated milk pricing engine supporting date-effective pricing, animal types (Cow vs. Buffalo), and customized rates per customer, completely replacing manual calculations and eliminating billing discrepancies.',
      'Split-Shift Daily Milk Ledger: Developed daily procurement tracking supporting Morning/Evening shift entries, automated Absent/Present status derivation, mandatory operator notes for zero-quantity records, and real-time ledger updates.',
      'Automated Billing & Invoice Generation: Created an automated monthly billing engine with BigDecimal precision aggregating daily milk records, calculating deductions/advances, and generating downloadable PDF invoices with QR-based digital payment links.',
      'Cross-Platform Mobile PWA & Capacitor Android App: Configured Capacitor 8 and modern PWA service workers with offline asset caching and APK builds, delivering an app-store-ready Android app with smooth 60fps mobile touch interactions.',
      'Real-Time 1-on-1 Customer Support Chat: Built a bidirectional in-app chat system with auto-refresh polling, unread badges, quick-reply templates, and in-conversation text search between dairy administrators and customers.',
      'Secure Multi-Role RBAC & JWT Authentication: Implemented Spring Security 6 with stateless JWT tokens, enforcing Role-Based Access Control (Admin vs. Customer) with BCrypt password hashing, session revocation, and secure route guards.',
      'Customer Onboarding & Notification Service: Built an adaptive customer registration workflow allowing immediate account creation with gradual profile enrichment and automated alerts for transaction updates and bill releases.',
      'Responsive Glassmorphism & Accessible UI/UX: Designed a modern, dark/light theme responsive dashboard in React with Vanilla CSS Modules & Lucide Icons, optimized for desktop operators and low-bandwidth mobile environments in rural areas.',
      'Data Consistency & MongoDB Transaction Management: Structured custom sequence generators for auto-incrementing customer codes (customer_10001+), milk entry IDs, and invoice IDs with atomic operations to prevent duplicate sequence collision during concurrent write spikes.',
      'Comprehensive Financial Ledger & Payment Reconciliation: Developed customer balance sheets tracking cash advances, partial online payments, pending dues, and ledger history with export capabilities (Excel/PDF) for audit readiness.',
      'Performance & Build Optimization: Optimized frontend asset bundling with Vite tree-shaking and dynamic imports, reducing production bundle size to under 650 KB gzip and achieving sub-second initial page load times.',
      'Production CI/CD & Cloud Deployment: Configured containerized deployments with Docker, AWS EC2, S3 asset storage, Load Balancer, and automated build scripts for seamless continuous deployment.',
    ],
    technologies: [
      'Java 21',
      'Spring Boot 3.3',
      'React 18',
      'Vite',
      'MongoDB Atlas',
      'Google Gemini Vision API',
      'Tesseract OCR',
      'Capacitor (Android APK)',
      'Spring Security 6',
      'JWT & RBAC',
      'PWA Service Workers',
      'Docker',
      'AWS (EC2, S3)',
    ],
    githubUrl: 'https://github.com/parthsharma1-art/MilkManagementSystem-Frontend',
    demoUrl: 'https://milk-management-system1.vercel.app/',
    architectureSummary:
      'Spring Boot 3 backend leveraging MongoDB atomic sequence generators and BigDecimal precision accounting, paired with an intelligent OCR pipeline utilizing Gemini Vision API and Tesseract OCR. Fronted by a Vite React 18 responsive PWA compiled to a native Android APK via Capacitor 8 for rural, offline-tolerant mobile use.',
    challenges: [
      {
        problem: 'Deciphering illegible handwritten milk collection registers written by rural operators in mixed Hindi/English scripts without ledger corruption.',
        solution: 'Engineered a dual OCR pipeline combining Google Gemini Vision API and Tesseract OCR with an interactive human-in-the-loop verification workflow before ledger commit, achieving 88%+ scan confidence.',
      },
      {
        problem: 'Floating-point rounding errors and sequence collision risks during simultaneous shift-entry writes by multiple milk collectors.',
        solution: 'Enforced strict BigDecimal arithmetic across all billing engines and structured custom MongoDB atomic sequence generators for unique customer codes and entry IDs.',
      },
      {
        problem: 'Delivering desktop-grade ledger functionality to dairy operators in low-bandwidth rural conditions and mobile smartphones.',
        solution: 'Configured Capacitor 8 with offline PWA service worker asset caching and Vite tree-shaking (<650 KB gzip bundle), ensuring smooth 60fps mobile touch performance.',
      },
    ],
    keyOutcomes: [
      '88%+ confidence handwritten register OCR parsing with human-in-the-loop ledger verification',
      '100% elimination of manual pricing discrepancies through automated BigDecimal shift calculation',
      'Dual deployment: Live Web SaaS + Capacitor Android APK with offline PWA caching under 650 KB gzip',
      'Sub-second bilingual customer lookups across Devanagari and Latin script with phonetic fallback',
    ],
  },
  {
    id: 'url-based-rag-system',
    title: 'URL-Based RAG System',
    subtitle: 'Retrieval-Augmented Generation with Spring AI & MongoDB Atlas Vector Search',
    badge: 'AI & Vector Search',
    isProfessional: false,
    description:
      'A Retrieval-Augmented Generation pipeline that ingests web pages, chunks content, generates embeddings, and stores vectors in MongoDB Atlas for semantic search. Exposed REST APIs for content ingestion and querying that return answers grounded in the source pages.',
    contributions: [
      'Built a Retrieval-Augmented Generation pipeline that ingests web pages, chunks content, and generates embeddings',
      'Stored high-dimensional vectors in MongoDB Atlas for cosine similarity semantic search',
      'Exposed REST APIs for content ingestion and querying that return answers grounded in the source pages',
      'Engineered overlapping token chunking preserving continuous semantic context across web documents',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring AI',
      'MongoDB Atlas Vector Search',
      'REST APIs',
      'Embeddings',
    ],
    githubUrl: 'https://github.com/parthsharma1-art/URL-based-RAG-system',
    demoUrl: null,
    architectureSummary:
      'Document ingestion and semantic retrieval pipeline built with Spring AI. Web pages are ingested and split into overlapping text chunks, embedded into vector representations, and indexed in MongoDB Atlas Vector Search for low-latency cosine similarity retrieval.',
    challenges: [
      {
        problem: 'Preventing LLM hallucination and preserving exact factual accuracy from ingested web documentation.',
        solution: 'Implemented similarity search thresholding to pass only top-k relevant grounded chunks into the LLM synthesis context window.',
      },
      {
        problem: 'Ingesting variable length web pages without losing contextual continuity across splits.',
        solution: 'Engineered an overlapping token chunking strategy ensuring continuous context across chunk boundaries.',
      },
    ],
    keyOutcomes: [
      'Sub-second semantic vector similarity search via MongoDB Atlas',
      'Fully grounded answers referencing original URL source pages',
      'Clean Spring AI architecture with extensible provider abstractions',
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-4 mb-2">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              Production-grade systems and platforms engineered with Java 21, Spring Boot, Spring AI, distributed caching, OCR pipelines, and mobile PWAs.
            </p>
          </div>
          <a
            href="https://github.com/parthsharma1-art"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors self-start md:self-auto"
          >
            <span>View all on GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-5 sm:p-8 border border-slate-800/80 hover:border-sky-500/30 relative overflow-hidden group bg-surface-card/60"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Project Left Info */}
                <div className="lg:col-span-8 flex flex-col justify-between h-full">
                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Contributions Checklist */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2.5">
                        <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          Key Engineering Highlights:
                        </p>
                        <span className="text-[11px] font-mono text-sky-400/80">
                          {project.contributions.length} technical points · Click Case Study for full breakdown
                        </span>
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2.5">
                        {project.contributions.slice(0, 4).map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-300 leading-normal"
                          >
                            <span className="text-sky-400 mt-0.5 shrink-0 font-bold">▸</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Right Column: Architecture Box & Actions */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 text-sky-400 mb-2">
                      <Server size={15} />
                      <span className="text-[11px] font-mono font-semibold uppercase">
                        Architecture Focus
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-4">
                      {project.architectureSummary}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 hover:text-white text-xs font-semibold border border-slate-700 hover:border-sky-500/50 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>View Case Study ({project.contributions.length} Highlights)</span>
                      <ArrowUpRight size={14} className="text-sky-400" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Github size={13} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded-xl bg-sky-500 text-slate-950 text-xs font-semibold hover:bg-sky-400 transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                        >
                          <ExternalLink size={13} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
