'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Tag } from 'lucide-react'

type Category = 'All' | 'Full Stack' | 'Backend' | 'Java'

interface Project {
  name: string
  description: string
  longDesc: string
  tags: string[]
  category: Category[]
  github: string
  demo: string | null
  icon: string
  gradient: string
}

const projects: Project[] = [
  {
    name: 'AI-Based End-to-End Recruitment System',
    description:
      'Full-stack recruitment platform with JWT-based authentication and OAuth 2.0 for secure, role-based access.',
    longDesc:
      'A production-ready full-stack recruitment platform featuring JWT authentication, Google/Apple OAuth 2.0, and role-based access control. Includes job management (CRUD), near real-time chat via client-side polling, and GridFS-powered file uploads for resumes and profile images. Backend built with Spring Boot; frontend with React. Designed to handle end-to-end hiring workflows from job posting to candidate selection.',
    tags: ['React.js', 'Spring Boot', 'MongoDB', 'JWT', 'OAuth 2.0', 'REST APIs', 'GridFS'],
    category: ['Full Stack', 'Backend'],
    github: 'https://github.com/parthsharma1-art/AiBasedEndtoEndRecruitmentSystemBackend',
    demo: 'https://ai-based-endto-end-recruitment-syst.vercel.app/',
    icon: '🤖',
    gradient: 'from-sky-500/20 to-indigo-500/20',
  },
  {
    name: 'Journal App',
    description:
      'Spring Boot journaling application with full CRUD and role-based authentication via Spring Security.',
    longDesc:
      'A secure journaling application built on Spring Boot with MongoDB as the data store. Implements full CRUD operations for journal entries with per-user data isolation. Authentication and authorization are handled by Spring Security with role-based access control. Exposes secured REST endpoints and follows layered backend architecture with service, repository, and controller layers.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'Spring Security', 'REST APIs'],
    category: ['Backend', 'Java'],
    github: 'https://github.com/parthsharma1-art/journalApp',
    demo: null,
    icon: '📓',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    name: 'EW Service',
    description:
      'A service management platform built to streamline operations with modern web technologies.',
    longDesc:
      'A service management platform designed to streamline business operations and enhance user experience. The backend is powered by Spring Boot with RESTful APIs, while the frontend uses React for a responsive UI. Focuses on clean API design and separation of concerns.',
    tags: ['Java', 'Spring Boot', 'React', 'REST API'],
    category: ['Full Stack', 'Backend'],
    github: 'https://github.com/parthsharma1-art/EW-Service',
    demo: null,
    icon: '⚙️',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    name: 'Student Management System',
    description:
      'Comprehensive desktop system for managing student records, attendance, grades, and admin tasks.',
    longDesc:
      'A comprehensive desktop application for educational institutions to manage student records, attendance, grades, and administrative workflows. Built entirely in Java with a Swing/JavaFX GUI and MySQL as the relational database backend via JDBC. Demonstrates solid Java OOP principles and relational data modeling.',
    tags: ['Java', 'MySQL', 'Swing/JavaFX', 'JDBC'],
    category: ['Java'],
    github: 'https://github.com/parthsharma1-art/Student-Management-System',
    demo: null,
    icon: '🎓',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
]

const categories: Category[] = ['All', 'Full Stack', 'Backend', 'Java']

// Mouse-tracking shine on each card
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group glass rounded-2xl p-6 hover:border-accent/30 transition-all cursor-pointer"
    >
      {/* Mouse-follow shine */}
      <div className="card-shine" />

      {/* Gradient bg tint */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
            {project.icon}
          </div>
          <div className="flex gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors text-slate-400 hover:text-accent"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-base font-bold mb-2 group-hover:text-accent transition-colors leading-snug">
          {project.name}
        </h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-xs">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-slate-800 text-slate-500 text-xs">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <p className="text-accent text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          Click for details →
        </p>
      </div>
    </motion.div>
  )
}

// Modal
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="glass rounded-2xl p-8 max-w-2xl w-full relative border border-accent/20 shadow-2xl shadow-accent/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="text-4xl w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
            {project.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold">{project.name}</h3>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.category.map((c) => (
                <span key={c} className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Long description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.longDesc}</p>

        {/* All tags */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
            <Tag size={12} /> Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs hover:border-accent hover:text-accent transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
          >
            <Github size={16} /> View Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-dark text-sm font-semibold hover:bg-sky-300 transition-colors btn-glow"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<Category>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(filter))

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A collection of my recent work. Click any card to see details.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-accent text-dark shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'glass text-slate-400 hover:text-accent hover:border-accent/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
