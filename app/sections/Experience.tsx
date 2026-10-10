'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react'

const experienceList = [
  {
    role: 'Junior Backend Developer',
    company: 'AetherAI Technologies LLC',
    period: '11/2025 – 07/2026',
    location: 'Remote / US Client',
    isPrimary: true,
    highlights: [
      'Owned backend development in Java 21 and Spring Boot for a US vehicle-rental startup, building REST APIs for bookings, trip edits, cancellations, payment validation, and status management (draft, confirmed, cancelled) from requirement to production.',
      'Built Google and Apple OAuth 2.0 login end to end using Spring Security, HTTP-only cookies, and refresh-token rotation for secure, persistent sessions.',
      'Integrated Gmail, Outlook, and Mailgun APIs to process booking emails and sync availability. Hosts block vehicle dates once, and the backend then updates availability automatically.',
      'Wrote Playwright E2E tests (positive, negative, and edge cases) for signup, login, onboarding, and all booking statuses to catch regressions before release.',
      'Used AWS CloudWatch logs to debug production issues quickly, working with Git/GitHub, Jira, and Postman in a rapid release cycle.',
    ],
    tech: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'OAuth 2.0',
      'JWT',
      'REST APIs',
      'Mailgun',
      'Gmail / Outlook APIs',
      'Playwright',
      'AWS CloudWatch',
      'Git/GitHub',
      'Postman',
      'Jira',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'AetherAI Technologies LLC',
    period: '07/2025 – 11/2025',
    location: 'Remote',
    isPrimary: false,
    promotionBadge: 'Promoted to full-time developer within 4 months',
    highlights: [
      'Started as an intern and was promoted to a full-time developer role within 4 months.',
      'Contributed to Java 21 and Spring Boot backend development for a vehicle-rental platform by updating REST APIs, fixing bugs, and supporting third-party integrations under team guidance.',
    ],
    tech: ['Java 21', 'Spring Boot', 'REST APIs', 'Third-Party Integrations', 'Bug Fixing', 'Git', 'Postman'],
  },
]

const educationList = [
  {
    degree: 'B.Tech. in Computer Science and Engineering',
    institution: 'IMS Engineering College, Ghaziabad',
    period: '2022 – 2026',
    score: 'CGPA: 8.0 / 10',
    details: 'Core curriculum: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), and Computer Networks.',
  },
  {
    degree: 'Class XII (CBSE)',
    institution: 'Vidya Bhawan Public School, Baghpat',
    period: '2021 – 2022',
    score: 'Percentage: 89%',
    details: 'Completed senior secondary schooling with Science Stream (Physics, Chemistry, and Mathematics).',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative bg-surface-base/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-4 mb-2">
            Work Experience &amp; Education
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Verified professional background, production backend engineering contributions, and academic foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Work Experience (AetherAI Progression) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                <Briefcase size={16} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-6 border-l border-slate-800 space-y-10">
              {experienceList.map((exp, idx) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                      exp.isPrimary
                        ? 'border-sky-400 bg-surface-base shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                        : 'border-slate-500 bg-surface-base'
                    }`}
                  />

                  <div className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-800/80 hover:border-sky-500/30 transition-all bg-surface-card/60">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                            {exp.role}
                          </h4>
                          {exp.promotionBadge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {exp.promotionBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-sky-400/90 font-medium mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                        <Calendar size={12} className="text-sky-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2.5 mb-5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                          <span className="text-sky-400 mt-0.5 shrink-0 font-bold">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-800/60">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                <GraduationCap size={16} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-800/80 bg-surface-card/60"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-indigo-400 font-semibold bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100 mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mb-2.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
