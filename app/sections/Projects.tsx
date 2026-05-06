'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    name: 'AI-Based End-to-End Recruitment System',
    description: 'Full-stack recruitment platform with JWT-based authentication and OAuth 2.0 for secure, role-based access. Features job management (CRUD), near real-time chat via client-side polling, and file uploads (resumes, profile images) using GridFS.',
    tags: ['React.js', 'Spring Boot', 'MongoDB', 'JWT', 'OAuth 2.0', 'REST APIs', 'GridFS'],
    github: 'https://github.com/parthsharma1-art/AiBasedEndtoEndRecruitmentSystemBackend',
    demo: 'https://ai-based-endto-end-recruitment-syst.vercel.app/',
    icon: 'AI'
  },
  {
    name: 'Journal App',
    description: 'Spring Boot-based journaling application with full CRUD operations. Implements role-based authentication and authorization using Spring Security. Secured REST endpoints with comprehensive backend architecture.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'Spring Security', 'REST APIs'],
    github: 'https://github.com/parthsharma1-art/journalApp',
    demo: null,
    icon: 'J'
  },
  {
    name: 'EW Service',
    description: 'A service management platform built to streamline operations and enhance user experience with modern web technologies.',
    tags: ['Java', 'Spring Boot', 'React', 'REST API'],
    github: 'https://github.com/parthsharma1-art/EW-Service',
    demo: null,
    icon: 'E'
  },
  {
    name: 'Student Management System',
    description: 'Comprehensive system for managing student records, attendance, grades, and administrative tasks for educational institutions.',
    tags: ['Java', 'MySQL', 'Swing/JavaFX', 'JDBC'],
    github: 'https://github.com/parthsharma1-art/Student-Management-System',
    demo: null,
    icon: 'S'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A collection of my recent work, showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:border-accent/30 transition-all hover:-translate-y-2 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-accent/10 transition-colors text-slate-400 hover:text-accent"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent/10 transition-colors text-slate-400 hover:text-accent"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
