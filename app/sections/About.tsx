'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Terminal } from 'lucide-react'

const skills = [
  { icon: Code, title: 'Frontend', desc: 'React, Next.js, HTML5, CSS3, Tailwind CSS, TypeScript' },
  { icon: Database, title: 'Backend', desc: 'Java, Spring Boot, REST APIs, Node.js' },
  { icon: Globe, title: 'Web Dev', desc: 'Responsive Design, UI/UX, Performance Optimization' },
  { icon: Terminal, title: 'Tools', desc: 'Git, GitHub, VS Code, Maven' }
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Computer Science undergraduate with professional experience as a Backend Engineer at AetherAI. Strong foundation in Java, Spring Boot, REST APIs, and database-driven applications. Actively contributing to production SaaS backend systems, bug fixes, and feature development in an Agile environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:border-accent/30 transition-all hover:-translate-y-1"
            >
              <skill.icon size={32} className="text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-slate-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">6+</p>
              <p className="text-slate-400">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">80+</p>
              <p className="text-slate-400">DSA Problems Solved</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">~8+</p>
              <p className="text-slate-400">months of professional experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
