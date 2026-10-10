'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal, FileText, ChevronDown } from 'lucide-react'
import CommandMenu from '../components/CommandMenu'

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isCommandOpen, setIsCommandOpen] = useState(false)

  // Listen for scroll & update active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Section observer
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-70px 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCommandOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-4 pointer-events-none transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill hover:border-accent/40 transition-all duration-300 group"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-accent to-indigo-500 flex items-center justify-center text-xs font-bold text-dark shadow-sm">
              PS
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors">
              Parth Sharma
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-accent/90 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
              Backend
            </span>
          </a>

          {/* Center Navigation Pill (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full glass-pill shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/[0.08] border border-white/[0.1] rounded-full shadow-inner"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              )
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => setIsCommandOpen(true)}
              aria-label="Open Command Menu (Ctrl+K or Cmd+K)"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill hover:border-white/20 text-xs text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm group"
            >
              <Terminal size={14} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline text-slate-400">Search</span>
              <kbd className="hidden sm:inline text-[10px] font-mono bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Resume Button */}
            <a
              href="#resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-dark text-xs font-semibold hover:bg-sky-300 transition-colors btn-glow cursor-pointer"
            >
              <FileText size={13} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-full glass-pill text-slate-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pointer-events-auto mt-2 max-w-sm mx-auto glass-pill rounded-2xl p-4 shadow-2xl border border-white/10"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-accent/15 text-accent font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2 mt-1 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false)
                      setIsCommandOpen(true)
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 text-xs text-slate-300 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <Terminal size={14} className="text-accent" />
                    <span>Command Menu (⌘K)</span>
                  </button>
                  <a
                    href="#resume"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-accent text-dark text-xs font-semibold hover:bg-sky-300 transition-colors"
                  >
                    <FileText size={14} />
                    <span>View Resumes</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Command Menu Modal */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </>
  )
}
