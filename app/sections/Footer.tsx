'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800/80 bg-surface-base/80 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-sky-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center font-bold text-sky-400 font-mono text-sm shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                PS
              </span>
              <span className="font-heading font-semibold text-lg text-slate-100 tracking-tight">
                Parth Sharma
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Java Backend Developer specializing in production-grade REST APIs, secure authentication systems, Redis distributed locking, and resilient distributed architectures.
            </p>
            {/* Currently Exploring badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>
                <strong className="text-slate-200 font-medium">Currently Exploring:</strong> Distributed Systems & Event-Driven Architecture (Apache Kafka)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Experience & Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#resume" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Download Resumes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com/parthsharma1-art"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>github.com/parthsharma1-art</span>
              </a>
              <a
                href="https://linkedin.com/in/parth-sharma-47a116292/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>linkedin.com/in/parth-sharma</span>
              </a>
              <a
                href="mailto:parthsharma2640@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>parthsharma2640@gmail.com</span>
              </a>
            </div>


          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Parth Sharma. Engineered with Next.js, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-800 hover:border-slate-700 bg-surface-card hover:bg-surface-elevated text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
