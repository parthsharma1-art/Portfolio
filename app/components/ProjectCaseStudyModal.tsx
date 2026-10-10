'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, CheckCircle2, Shield, Layers, Cpu, Server } from 'lucide-react'

export interface ProjectData {
  id: string
  title: string
  subtitle: string
  badge: string
  isProfessional: boolean
  description: string
  contributions: string[]
  technologies: string[]
  githubUrl?: string | null
  demoUrl?: string | null
  architectureSummary: string
  challenges: { problem: string; solution: string }[]
  keyOutcomes: string[]
}

export default function ProjectCaseStudyModal({
  project,
  onClose,
}: {
  project: ProjectData | null
  onClose: () => void
}) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#0e1019] border border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[88vh]"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-white/[0.08] bg-surface/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20">
                  {project.badge}
                </span>
                {project.isProfessional && (
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Production Role
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1">{project.subtitle}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Project Overview
              </h3>
              <p className="leading-relaxed text-slate-300">{project.description}</p>
            </div>

            {/* Backend Contributions */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                My Backend Contributions
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.contributions.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-surface/50 border border-white/[0.05]"
                  >
                    <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-normal">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Summary */}
            <div className="p-4 rounded-xl bg-surface/80 border border-white/[0.07]">
              <div className="flex items-center gap-2 mb-2 text-accent">
                <Server size={16} />
                <h3 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  System Architecture &amp; Data Flow
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {project.architectureSummary}
              </p>
            </div>

            {/* Engineering Challenges Solved */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Engineering Challenges &amp; Solutions
              </h3>
              <div className="space-y-3">
                {project.challenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface/60 border border-white/[0.06]"
                  >
                    <p className="text-xs font-semibold text-rose-400 mb-1">
                      Problem: <span className="text-slate-300 font-normal">{ch.problem}</span>
                    </p>
                    <p className="text-xs font-semibold text-emerald-400">
                      Solution: <span className="text-slate-300 font-normal">{ch.solution}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/[0.08] bg-surface/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={14} />
                  <span>View Code</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-dark text-xs font-semibold hover:bg-sky-300 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
