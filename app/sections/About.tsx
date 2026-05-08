'use client'

import { motion } from 'framer-motion'
import {
  FileCode,
  Server,
  Database,
  BookOpen,
  Wrench,
  Cloud,
  type LucideIcon,
} from 'lucide-react'

interface Skill {
  icon: LucideIcon
  title: string
  desc: string
}

const skills: Skill[] = [
  {
    icon: FileCode,
    title: 'Languages',
    desc: 'Java, Python, JavaScript, HTML, CSS',
  },
  {
    icon: Server,
    title: 'Backend',
    desc: 'Spring Boot, Spring Security, REST APIs, JPA / Hibernate',
  },
  {
    icon: Database,
    title: 'Databases',
    desc: 'MySQL, MongoDB',
  },
  {
    icon: BookOpen,
    title: 'Concepts',
    desc: 'OOP, Data Structures & Algorithms, Agile',
  },
  {
    icon: Wrench,
    title: 'Tools',
    desc: 'Cursor AI, Git, GitHub, IntelliJ IDEA, VS Code, Postman',
  },
  {
    icon: Cloud,
    title: 'Platforms',
    desc: 'AWS, Jira, Confluence, Slack',
  },
]

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Computer Science undergraduate and Backend Engineer at AetherAI.
            I build scalable REST APIs and SaaS backend systems using Java and
            Spring Boot. Passionate about clean architecture, performance, and
            delivering production-ready features in Agile teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: 'easeOut',
              }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 border border-transparent
                         hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5
                         transition-all duration-300 ease-out will-change-transform"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/15 transition-colors duration-300">
                  <skill.icon
                    size={24}
                    className="text-accent flex-shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">6+</p>
              <p className="text-slate-400 text-sm tracking-wide uppercase">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">80+</p>
              <p className="text-slate-400 text-sm tracking-wide uppercase">
                LeetCode Problems
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">8+</p>
              <p className="text-slate-400 text-sm tracking-wide uppercase">
                Months Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
