'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Award,
  Download,
  Eye,
  ExternalLink,
  Server,
  Code,
  Loader2,
  Check,
} from 'lucide-react'
import { RESUME_CONFIGS, ResumeConfig, downloadResumeFile } from '../config/resumes'

const experience = [
  {
    role: 'Backend Engineer (Paid)',
    company: 'AetherAI, Inc.',
    year: 'Nov 2025 – Jul 2026',
    desc: [
      'Developed and maintained production Java 21 and Spring Boot backend services for a vehicle-rental SaaS platform.',
      'Designed REST APIs and integrations with Mailgun, Gmail, and Outlook.',
      'Implemented event-driven webhooks, an email synchronization pipeline in MongoDB, and a cash-booking workflow.',
      'Secured APIs with Google and Apple OAuth 2.0, JWT, and Redis.',
    ],
    color: 'bg-indigo-500',
    dotColor: 'border-indigo-500',
  },
  {
    role: 'Backend Engineer Intern (Unpaid)',
    company: 'AetherAI, Inc.',
    year: 'Jul 2025 – Nov 2025',
    desc: [
      'Authored Playwright end-to-end tests for authentication, onboarding, booking, and checkout workflows.',
      'Diagnosed production issues using AWS CloudWatch.',
    ],
    color: 'bg-accent',
    dotColor: 'border-accent',
  },
]

const education = [
  {
    degree: 'B.Tech. in Computer Science and Engineering',
    school: 'IMS Engineering College, Ghaziabad',
    year: 'Graduated May 2026',
    desc: 'CGPA: 8.0 / 10.0',
    color: 'bg-accent',
    dotColor: 'border-accent',
  },
  {
    degree: 'Class XII (CBSE)',
    school: 'Vidya Bhawan Public School, Baghpat',
    year: '2021 – 2022',
    desc: 'Percentage: 89%',
    color: 'bg-violet-500',
    dotColor: 'border-violet-500',
  },
]

const skills = [
  'Java', 'Python', 'JavaScript', 'SQL',
  'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Webhooks',
  'MongoDB', 'MongoDB Atlas', 'MySQL', 'Redis',
  'Spring Security', 'OAuth 2.0', 'JWT',
  'Playwright', 'Postman', 'Git', 'Jira',
  'AWS CloudWatch', 'Spring AI', 'LangChain', 'RAG', 'Vector Search',
]

const achievements = [
  'Solved 80+ Data Structures & Algorithms problems across LeetCode, GeeksforGeeks, and HackerRank.',
  'Completed Java Programming and Web Development Certification, CETPA (2023).',
]

interface TimelineItem {
  role?: string
  degree?: string
  company?: string
  school?: string
  year: string
  desc: string[] | string
  color: string
  dotColor: string
  link?: { text: string; url: string }
}

function TimelineSection({
  title,
  icon: Icon,
  items,
}: {
  title: string
  icon: typeof Briefcase
  items: TimelineItem[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Icon size={22} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="relative pl-8">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'top' }}
          className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent via-indigo-500 to-transparent"
        />

        <div className="space-y-8">
          {items.map((item, i) => {
            const heading = item.role ?? item.degree ?? ''
            const sub = item.company ?? item.school ?? ''
            const bullets = Array.isArray(item.desc) ? item.desc : [item.desc]

            return (
              <motion.div
                key={heading}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.18 + 0.2, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.18 + 0.1, type: 'spring', stiffness: 300 }}
                  className={`absolute -left-5 top-1.5 w-4 h-4 rounded-full border-2 ${item.dotColor} bg-dark`}
                />

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass rounded-xl p-5 border border-transparent hover:border-accent/20 transition-colors"
                >
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    {item.year}
                  </span>
                  <h4 className="text-base font-semibold mt-2 mb-0.5">{heading}</h4>
                  <p className="text-slate-400 text-sm mb-3">{sub}</p>
                  <ul className="space-y-1.5 mb-3">
                    {bullets.map((b, idx) => (
                      <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {item.link && (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors mt-2 bg-indigo-500/10 px-3 py-1.5 rounded-md w-fit"
                    >
                      <Eye size={14} />
                      {item.link.text}
                    </a>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Resume() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<{ id: string; text: string; isError?: boolean } | null>(null)

  const handleDownload = async (resume: ResumeConfig) => {
    if (!resume.url || resume.url.trim() === '') {
      setStatusMessage({ id: resume.id, text: 'Resume URL is currently unavailable.', isError: true })
      return
    }

    setDownloadingId(resume.id)
    setStatusMessage(null)

    const result = await downloadResumeFile(resume.url, resume.filename)
    setDownloadingId(null)

    if (result.success) {
      setStatusMessage({ id: resume.id, text: `Downloaded ${resume.filename}`, isError: false })
    } else if (result.fallbackOpened) {
      setStatusMessage({ id: resume.id, text: 'Opening PDF in new tab (attachment download fallback)', isError: false })
    } else {
      setStatusMessage({ id: resume.id, text: result.error || 'Unable to download file.', isError: true })
    }

    setTimeout(() => {
      setStatusMessage((prev) => (prev?.id === resume.id ? null : prev))
    }, 4500)
  }

  return (
    <section id="resume" className="py-24 px-6 relative bg-primary/30">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A summary of my academic background, professional experience, and technical expertise.
          </p>
        </motion.div>

        {/* Two Resume Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {RESUME_CONFIGS.map((resume) => {
            const isPrimary = resume.isPrimary
            const isDownloading = downloadingId === resume.id
            const hasValidUrl = Boolean(resume.url && resume.url.trim() !== '')
            const message = statusMessage?.id === resume.id ? statusMessage : null
            const CardIcon = isPrimary ? Server : Code

            return (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isPrimary ? 0 : 0.1 }}
                className={`glass rounded-2xl p-6 sm:p-7 border relative flex flex-col justify-between transition-all duration-300 h-full overflow-hidden ${
                  isPrimary
                    ? 'border-accent/40 bg-gradient-to-b from-accent/[0.08] via-slate-900/60 to-slate-900/40 shadow-lg shadow-accent/5 hover:border-accent/60'
                    : 'border-slate-700/60 hover:border-accent/30'
                }`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isPrimary
                          ? 'bg-accent/15 text-accent shadow-inner'
                          : 'bg-indigo-500/15 text-indigo-400'
                      }`}
                    >
                      <CardIcon size={24} aria-hidden="true" />
                    </div>

                    {isPrimary && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30 tracking-wide shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                        Primary Resume
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-100 mb-2 tracking-tight">
                    {resume.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {resume.description}
                  </p>
                </div>

                {/* Status Feedback & Action Buttons */}
                <div className="pt-4 border-t border-slate-700/50 mt-auto">
                  {message && (
                    <div
                      className={`text-xs mb-3 px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
                        message.isError
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}
                      role="status"
                    >
                      {!message.isError && <Check size={14} className="shrink-0" aria-hidden="true" />}
                      <span>{message.text}</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-2.5 w-full">
                    {/* Primary Action: Download Button */}
                    <button
                      type="button"
                      onClick={() => handleDownload(resume)}
                      disabled={!hasValidUrl || isDownloading}
                      aria-label={resume.downloadLabel}
                      title={hasValidUrl ? resume.downloadLabel : 'Resume URL is currently unavailable'}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                        isPrimary
                          ? 'bg-accent text-dark hover:bg-sky-300 btn-glow shadow-md shadow-accent/20'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-accent/40 shadow-sm'
                      }`}
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 size={16} className="animate-spin shrink-0" aria-hidden="true" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download size={16} className="shrink-0" aria-hidden="true" />
                          <span>{resume.downloadLabel}</span>
                        </>
                      )}
                    </button>

                    {/* Secondary Action: View Resume */}
                    {hasValidUrl ? (
                      <a
                        href={resume.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${resume.title} in new tab`}
                        title={`View ${resume.title} in a new tab`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-700/80 hover:border-accent/50 text-slate-300 hover:text-accent text-sm font-medium transition-colors bg-slate-900/40 hover:bg-accent/5"
                      >
                        <Eye size={15} className="shrink-0" aria-hidden="true" />
                        <span>View Resume</span>
                        <ExternalLink size={13} className="shrink-0 opacity-60" aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        title="Resume URL is currently unavailable"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-800 text-slate-600 text-sm font-medium cursor-not-allowed"
                      >
                        <Eye size={15} className="shrink-0" aria-hidden="true" />
                        <span>View Resume</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline columns */}
        <div className="grid md:grid-cols-2 gap-12">
          <TimelineSection
            title="Experience"
            icon={Briefcase}
            items={experience as TimelineItem[]}
          />
          <TimelineSection
            title="Education"
            icon={GraduationCap}
            items={education as TimelineItem[]}
          />
        </div>

        {/* Skills & achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Award size={22} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold">Skills, Tools &amp; Achievements</h3>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 rounded-full bg-slate-800/80 text-slate-300 text-xs border border-slate-700
                             hover:border-accent hover:text-accent hover:shadow-[0_0_10px_rgba(56,189,248,0.25)] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="border-t border-slate-700/50 pt-4">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">Achievements</p>
              <ul className="space-y-2">
                {achievements.map((ach, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-accent mt-0.5">▸</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
