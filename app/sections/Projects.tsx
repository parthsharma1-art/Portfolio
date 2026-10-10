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
} from 'lucide-react'
import ProjectCaseStudyModal, { ProjectData } from '../components/ProjectCaseStudyModal'

const projectsData: ProjectData[] = [
  {
    id: 'ai-recruitment-platform',
    title: 'AI Recruitment Platform',
    subtitle: 'Full-stack platform with role-based dashboards, Razorpay & Redis caching',
    badge: 'Full-Stack Platform',
    isProfessional: false,
    description:
      'A full-stack platform with separate role-based dashboards for recruiters (job postings, applicants) and candidates (application tracking). Integrated Razorpay subscription checkout, JWT/OAuth 2.0 security, Redis caching, and real-time status updates.',
    contributions: [
      'Built a full-stack platform with separate role-based dashboards for recruiters (job postings, applicants) and candidates (application tracking)',
      'Integrated Razorpay subscription checkout with HMAC SHA-256 webhook signature verification',
      'Secured REST APIs with JWT, OAuth 2.0 (RBAC), and Bucket4j rate limiting; used Redis caching to cut session validation latency by 50%',
      'Added real-time messaging and live application status updates using Supabase WebSockets',
      'Deployed on Render (backend) and Vercel (frontend), with New Relic APM for transaction tracing and JVM monitoring',
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'React.js',
      'MongoDB',
      'Redis',
      'Bucket4j',
      'Supabase WebSockets',
      'Razorpay',
      'New Relic APM',
    ],
    githubUrl: 'https://github.com/parthsharma1-art/AiBasedEndtoEndRecruitmentSystemBackend',
    demoUrl: 'https://ai-based-endto-end-recruitment-syst.vercel.app/',
    architectureSummary:
      'Stateless Spring Boot backend utilizing Bucket4j token-bucket filter algorithms, Redis cache layers for session verification, and Supabase WebSockets for event pushing. Monitored in production using New Relic APM for JVM health and transaction profiling.',
    challenges: [
      {
        problem: 'High database lookup overhead for repeated session validation and rate-limit checks.',
        solution: 'Employed Redis in-memory key-value caching with TTL expiry, slashing session check latency by 50%.',
      },
      {
        problem: 'Ensuring payment webhook authenticity and preventing replay attacks.',
        solution: 'Implemented strict HMAC SHA-256 cryptographic signature calculation against raw webhook payloads before mutating account tier status.',
      },
    ],
    keyOutcomes: [
      '50% reduction in session validation latency via Redis caching',
      'Tamper-proof Razorpay payment processing with HMAC SHA-256 signature verification',
      'Production observability via New Relic APM transaction and JVM monitoring',
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
              Systems and platforms engineered with Java, Spring Boot, distributed caching, and vector search.
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
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                        Key Engineering Highlights:
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
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
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 hover:text-white text-xs font-semibold border border-slate-700 hover:border-sky-500/50 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>View Case Study</span>
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
