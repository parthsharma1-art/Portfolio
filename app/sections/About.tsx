'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
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
  items: string[]
  color: string
}

const skills: Skill[] = [
  {
    icon: FileCode,
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Spring Boot', 'Spring Security', 'REST APIs', 'JPA / Hibernate'],
    color: 'from-indigo-400 to-violet-500',
  },
  {
    icon: Database,
    title: 'Databases',
    items: ['MySQL', 'MongoDB', 'Redis'],
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: BookOpen,
    title: 'Concepts',
    items: ['OOP', 'Data Structures & Algorithms', 'Agile'],
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code'],
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: Cloud,
    title: 'Platforms',
    items: ['AWS', 'Jira', 'Confluence', 'Slack'],
    color: 'from-cyan-400 to-sky-500',
  },
]

// Animated number counter using requestAnimationFrame
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const target = parseInt(value, 10)
  const suffix = value.replace(/\d/g, '')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    const duration = 1500

    function step(timestamp: number) {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }

    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <div ref={ref}>
      <p className="text-4xl font-bold gradient-text mb-2">
        {count}{suffix}
      </p>
      <p className="text-slate-400 text-sm tracking-wide uppercase">{label}</p>
    </div>
  )
}

export default function About() {
  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section id="about" aria-label="About Me" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Computer Science graduate and Backend Engineer at AetherAI. I build
            scalable REST APIs and SaaS backend systems using Java and Spring Boot.
            Passionate about clean architecture, performance, and delivering
            production-ready features in Agile teams.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass rounded-2xl p-6 border border-transparent
                         hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5
                         transition-all duration-300 ease-out will-change-transform cursor-default"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/15 transition-colors duration-300 mb-3">
                <skill.icon size={24} className="text-accent" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold mb-3 tracking-tight">{skill.title}</h3>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded-md text-xs bg-slate-800 text-slate-400 border border-slate-700/50"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Subtle bottom accent line on hover */}
              <div className={`mt-4 h-0.5 w-0 group-hover:w-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <AnimatedStat value="6+" label="Projects Completed" />
            <AnimatedStat value="80+" label="LeetCode Problems" />
            <AnimatedStat value="8+" label="Months Experience" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
