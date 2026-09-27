'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Download, Eye } from 'lucide-react'

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
  return (
    <section id="resume" className="py-24 px-6 relative bg-primary/30">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            A summary of my academic background, professional experience, and technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://ik.imagekit.io/xuh3db9z6/ParthSharma_BackendEngineer_Resume.pdf?updatedAt=1790492787825"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            >
              <Eye size={16} /> View Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://ik.imagekit.io/xuh3db9z6/ParthSharma_BackendEngineer_Resume.pdf?updatedAt=1790492787825"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 text-slate-300 text-sm font-semibold hover:bg-slate-700 transition-colors shadow-lg"
            >
              <Download size={16} /> Download
            </motion.a>
          </div>
        </motion.div>

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
