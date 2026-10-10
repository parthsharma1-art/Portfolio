'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Shield,
  Layers,
  Terminal,
  Cpu,
  CheckCircle2,
} from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    title: 'Production Experience',
    desc: 'Engineered backend microservices, REST APIs, and automated test pipelines at AetherAI.',
  },
  {
    icon: Layers,
    title: 'Concurrency & Caching',
    desc: 'Implemented Redis-based distributed locking for booking workflows to eliminate race conditions.',
  },
  {
    icon: Shield,
    title: 'Auth & Security',
    desc: 'Protected APIs using Spring Security, JWT authentication, and Google/Apple OAuth 2.0 protocols.',
  },
  {
    icon: GraduationCap,
    title: 'Computer Science Graduate',
    desc: 'B.Tech in Computer Science and Engineering (Class of 2026) with 8.0 / 10.0 CGPA.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative bg-surface/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-4 mb-4">
            Focused on Systems That Scale and Don&apos;t Break.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            I am a Java Backend Developer with a deep interest in backend architecture,
            reliable API contracts, and concurrency control.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              My backend engineering journey revolves around building services that
              handle data safely and reliably. During my work at{' '}
              <strong className="text-white font-medium">AetherAI</strong>, I contributed to
              a production vehicle-rental SaaS platform where I designed Spring Boot
              REST APIs, integrated payment and webhook pipelines, and resolved
              booking race conditions with Redis distributed locking.
            </p>
            <p>
              I completed my <strong className="text-white font-medium">B.Tech in Computer Science and Engineering</strong> (Class of 2026) at IMS Engineering College, Ghaziabad. I treat backend software as an engineering discipline where API contracts must be predictable, data mutations atomic, and services thoroughly tested.
            </p>
            <p className="text-slate-400">
              I am actively seeking full-time opportunities as a{' '}
              <span className="text-accent font-medium">Java Backend Developer</span> or{' '}
              <span className="text-accent font-medium">Software Engineer</span> where I can build
              impactful, high-throughput systems alongside thoughtful engineering teams.
            </p>
          </div>

          {/* Quick Pillars Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-4 border border-white/[0.06] hover:border-accent/30 transition-all flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
