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
} from 'lucide-react'

const skillGroups = [
  {
    category: 'Backend Engineering',
    icon: Server,
    color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    skills: [
      { name: 'Java (Java 21 LTS)', note: 'Core language, OOP & modern syntax' },
      { name: 'Spring Boot 3.x', note: 'Microservices & REST controllers' },
      { name: 'REST APIs & Webhooks', note: 'Idempotent contracts, DTOs & event streams' },
      { name: 'Spring Security', note: 'Method-level RBAC & filter chains' },
      { name: 'Hibernate / Spring Data JPA', note: 'Object-relational mapping & queries' },
    ],
  },
  {
    category: 'Databases & Caching',
    icon: Database,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    skills: [
      { name: 'MongoDB & Atlas', note: 'Document schemas, GridFS & vector search' },
      { name: 'Redis', note: 'In-memory caching, distributed locks & TTL' },
      { name: 'MySQL', note: 'Relational data modeling & SQL' },
    ],
  },
  {
    category: 'Security & Integrations',
    icon: ShieldCheck,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    skills: [
      { name: 'OAuth 2.0 & JWT', note: 'Google & Apple login, token rotation & cookies' },
      { name: 'Role-Based Access Control', note: 'Strict candidate & recruiter authorization' },
      { name: 'Payment Integrations', note: 'Stripe & Razorpay HMAC-SHA256 webhooks' },
      { name: 'Email APIs', note: 'Mailgun, Gmail, and Outlook synchronization' },
    ],
  },
  {
    category: 'Testing & Tools',
    icon: Terminal,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    skills: [
      { name: 'Playwright', note: 'Automated end-to-end regression tests' },
      { name: 'Postman & Git/GitHub', note: 'API contract validation & version control' },
      { name: 'GitHub Actions', note: 'CI pipelines & pull-request validation' },
      { name: 'Jira & Agile', note: 'Sprint issue tracking & rapid release cycles' },
    ],
  },
  {
    category: 'Cloud & Monitoring',
    icon: Cloud,
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    skills: [
      { name: 'AWS CloudWatch', note: 'Log stream debugging & metrics monitoring' },
      { name: 'New Relic APM', note: 'Transaction tracing & JVM runtime monitoring' },
      { name: 'Render & Vercel', note: 'Backend container & static frontend deploys' },
      { name: 'Data Structures & Algorithms', note: 'Algorithmic problem solving & OOP design' },
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
            Technical Skills &amp; Tools
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Structured into practical backend disciplines, production tools, and verified proficiencies.
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
