'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Shield,
  FileCheck,
  Layers,
  Zap,
  CheckCircle,
  BookOpen,
} from 'lucide-react'

const principles = [
  {
    icon: Code2,
    title: 'Clean & Maintainable Code',
    desc: 'Writing self-documenting code with clear separation of concerns across controllers, services, and repositories.',
  },
  {
    icon: Shield,
    title: 'Secure Authentication & AuthZ',
    desc: 'Enforcing least-privilege role access, cryptographic token verification, and secure credential handling.',
  },
  {
    icon: FileCheck,
    title: 'Reliable API Contracts',
    desc: 'Designing predictable REST endpoints with standardized request/response schemas, validation, and error envelopes.',
  },
  {
    icon: Layers,
    title: 'Data Consistency & Concurrency',
    desc: 'Treating race conditions seriously using distributed locks (Redis) and transactional boundaries to prevent corruption.',
  },
  {
    icon: Zap,
    title: 'Caching & Performance Awareness',
    desc: 'Leveraging in-memory caches to protect primary databases, with conscious attention to cache invalidation and TTLs.',
  },
  {
    icon: CheckCircle,
    title: 'Automated Testing & Verification',
    desc: 'Building automated test suites (e.g. Playwright E2E) to catch regressions before code ever hits production.',
  },
  {
    icon: BookOpen,
    title: 'Clear Documentation & Observability',
    desc: 'Documenting architectural decisions and utilizing structured logging for clear debugging and monitoring.',
  },
]

export default function EngineeringPrinciples() {
  return (
    <section id="principles" className="py-24 px-4 sm:px-6 relative bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            Engineering Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-4 mb-2">
            Core Engineering Principles
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Guiding philosophies I follow when designing backend systems and collaborating in teams.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, idx) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="glass-card rounded-2xl p-5 border border-white/[0.06] hover:border-accent/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
