'use client'

import { motion } from 'framer-motion'
import {
  Server,
  Database,
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Cloud,
  Sparkles,
  Smartphone,
} from 'lucide-react'

const skillGroups = [
  {
    category: 'Backend & Microservices',
    icon: Server,
    color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    skills: [
      { name: 'Java 21 LTS', note: 'Core language, OOP, modern syntax & concurrency' },
      { name: 'Spring Boot 3.x', note: 'Microservices, Spring MVC & REST controllers' },
      { name: 'Hibernate & JPA', note: 'Data mapping, transaction boundaries & queries' },
      { name: 'REST APIs & Webhooks', note: 'Idempotent contracts, DTOs & Razorpay webhooks' },
      { name: 'FastAPI (Python)', note: 'Asynchronous AI workloads & microservices' },
    ],
  },
  {
    category: 'Generative AI & MCP Tools',
    icon: Sparkles,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    skills: [
      { name: 'Model Context Protocol (MCP)', note: 'Native MCP servers over SSE for autonomous LLM agents' },
      { name: 'Spring AI', note: 'Agent tools, embeddings & structured model completions' },
      { name: 'Google Gemini & Vision API', note: 'ATS resume semantic scoring & handwritten OCR' },
      { name: 'Vector Search & Embeddings', note: 'MongoDB Atlas vector store & cosine similarity search' },
      { name: 'Tesseract OCR Pipeline', note: 'Bilingual handwritten text digitization & verification' },
    ],
  },
  {
    category: 'Databases & Caching',
    icon: Database,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    skills: [
      { name: 'MongoDB & Atlas GridFS', note: 'Document schemas, GridFS resume storage & sequences' },
      { name: 'Redis (Upstash / TLS)', note: 'Distributed caching, session states & rate-limiting' },
      { name: 'Supabase (PostgreSQL)', note: 'Realtime WebSockets, custom JWTs & Row-Level Security' },
      { name: 'MySQL & Relational SQL', note: 'Normalized schemas, indexing & transactional ACID' },
    ],
  },
  {
    category: 'Security & Authentication',
    icon: ShieldCheck,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    skills: [
      { name: 'Spring Security 6', note: 'Stateless filter chains, BCrypt & method security' },
      { name: 'OAuth 2.0 & Stateless JWT', note: 'Google & Apple social login, refresh-token rotation' },
      { name: 'Role-Based Access Control', note: 'Strict Candidate, Recruiter & Admin authorization' },
      { name: 'Bot Protection & Rate Limiting', note: 'Google reCAPTCHA Enterprise & Bucket4j token bucket' },
      { name: 'Cryptographic Verification', note: 'HMAC SHA-256 webhook signatures & secure headers' },
    ],
  },
  {
    category: 'Frontend, PWA & Mobile',
    icon: Smartphone,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    skills: [
      { name: 'React 18 & Vite', note: 'Modern responsive SPAs with hooks & fast bundling' },
      { name: 'Capacitor 8 (Android APK)', note: 'Cross-platform mobile wrapper & native Android builds' },
      { name: 'Progressive Web Apps (PWA)', note: 'Service workers, offline asset caching & 60fps mobile' },
      { name: 'Tailwind CSS & CSS Modules', note: 'Dark/light glassmorphic UI & rural accessibility' },
      { name: 'WebSockets & Live Polling', note: 'Bidirectional chat systems & real-time notifications' },
    ],
  },
  {
    category: 'Cloud, DevOps & Testing',
    icon: Cloud,
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    skills: [
      { name: 'AWS (EC2, S3, Load Balancer)', note: 'Cloud infrastructure, asset storage & CloudWatch logs' },
      { name: 'Docker & Containerization', note: 'Multi-stage container builds & reproducible environments' },
      { name: 'GitHub Actions (CI/CD)', note: 'Automated test, build & deployment pipelines' },
      { name: 'New Relic APM', note: 'JVM heap profiling, transaction tracing & telemetry' },
      { name: 'Playwright & Testing', note: 'End-to-end regression suites, Postman & JUnit 5' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative bg-surface-base">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-4 mb-2">
            Technical Skills &amp; Capabilities
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Structured into practical engineering disciplines, Generative AI integration, cloud infrastructure, and verified proficiencies.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800/80 hover:border-sky-500/30 transition-all flex flex-col justify-between bg-surface-card/60"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${group.color}`}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-bold text-slate-100">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/70 hover:border-slate-700 transition-colors"
                      >
                        <p className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </p>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {skill.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
