'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Home,
  User,
  Briefcase,
  Layers,
  Code2,
  Cpu,
  Mail,
  Download,
  Github,
  Linkedin,
  Copy,
  Check,
  X,
  ExternalLink,
  Terminal,
} from 'lucide-react'
import { RESUME_CONFIGS, downloadResumeFile } from '../config/resumes'

interface CommandItem {
  id: string
  title: string
  subtitle?: string
  icon: typeof Home
  category: 'Navigation' | 'Resumes' | 'Social & Contact'
  action: () => void
  shortcut?: string
}

export default function CommandMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('parthsharma2640@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = 'mailto:parthsharma2640@gmail.com'
    }
  }, [])

  const navigateTo = useCallback((id: string) => {
    onClose()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [onClose])

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-home',
      title: 'Home',
      subtitle: 'Return to top overview',
      icon: Home,
      category: 'Navigation',
      action: () => navigateTo('home'),
      shortcut: 'H',
    },
    {
      id: 'nav-about',
      title: 'About Me',
      subtitle: 'Background & education',
      icon: User,
      category: 'Navigation',
      action: () => navigateTo('about'),
      shortcut: 'A',
    },
    {
      id: 'nav-projects',
      title: 'Featured Projects',
      subtitle: 'AetherAI, Recruitment Platform & Systems',
      icon: Layers,
      category: 'Navigation',
      action: () => navigateTo('projects'),
      shortcut: 'P',
    },
    {
      id: 'nav-experience',
      title: 'Work Experience',
      subtitle: 'AetherAI timeline & contributions',
      icon: Briefcase,
      category: 'Navigation',
      action: () => navigateTo('experience'),
      shortcut: 'E',
    },
    {
      id: 'nav-skills',
      title: 'Technical Skills',
      subtitle: 'Java, Spring Boot, Redis, MongoDB stack',
      icon: Cpu,
      category: 'Navigation',
      action: () => navigateTo('skills'),
      shortcut: 'S',
    },
    {
      id: 'nav-principles',
      title: 'Engineering Principles',
      subtitle: 'Architecture & code standards',
      icon: Code2,
      category: 'Navigation',
      action: () => navigateTo('principles'),
    },
    {
      id: 'nav-contact',
      title: 'Contact',
      subtitle: 'Get in touch for opportunities',
      icon: Mail,
      category: 'Navigation',
      action: () => navigateTo('contact'),
      shortcut: 'C',
    },

    // Resumes
    {
      id: 'resume-java',
      title: 'Download Java Backend Resume',
      subtitle: 'Primary Resume · Target: Java & Spring Boot roles',
      icon: Download,
      category: 'Resumes',
      action: () => {
        const javaResume = RESUME_CONFIGS.find((r) => r.id === 'java-backend')
        if (javaResume) downloadResumeFile(javaResume.url, javaResume.filename)
        onClose()
      },
      shortcut: 'J',
    },
    {
      id: 'resume-swe',
      title: 'Download Software Engineer Resume',
      subtitle: 'Target: General SWE & developer roles',
      icon: Download,
      category: 'Resumes',
      action: () => {
        const sweResume = RESUME_CONFIGS.find((r) => r.id === 'software-engineer')
        if (sweResume) downloadResumeFile(sweResume.url, sweResume.filename)
        onClose()
      },
    },

    // Social & Contact
    {
      id: 'social-github',
      title: 'GitHub Profile',
      subtitle: 'github.com/parthsharma1-art',
      icon: Github,
      category: 'Social & Contact',
      action: () => {
        window.open('https://github.com/parthsharma1-art', '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
    {
      id: 'social-linkedin',
      title: 'LinkedIn Profile',
      subtitle: 'linkedin.com/in/parth-sharma-47a116292',
      icon: Linkedin,
      category: 'Social & Contact',
      action: () => {
        window.open('https://linkedin.com/in/parth-sharma-47a116292/', '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
    {
      id: 'copy-email',
      title: copied ? 'Email Copied!' : 'Copy Email Address',
      subtitle: 'parthsharma2640@gmail.com',
      icon: copied ? Check : Copy,
      category: 'Social & Contact',
      action: copyEmail,
    },
  ]

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(search.toLowerCase())) ||
      cmd.category.toLowerCase().includes(search.toLowerCase())
  )

  // Keyboard navigation inside modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev === 0 ? Math.max(0, filteredCommands.length - 1) : prev - 1
        )
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredCommands, selectedIndex, onClose])

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl rounded-2xl bg-[#0d0f17] border border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-surface/50">
              <Terminal size={18} className="text-accent shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or jump to section..."
                autoFocus
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close command palette"
              >
                <X size={16} />
              </button>
            </div>

            {/* Command List */}
            <div className="overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-500">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex
                  const Icon = cmd.icon

                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-accent/10 text-white border border-accent/20'
                          : 'text-slate-300 hover:bg-white/[0.04] border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-accent text-dark'
                              : 'bg-white/5 text-slate-400'
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="truncate">
                          <p className="font-medium text-slate-200">{cmd.title}</p>
                          {cmd.subtitle && (
                            <p className="text-xs text-slate-500 truncate">
                              {cmd.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="hidden sm:inline-block text-[11px] text-slate-500 font-mono px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.05]">
                          {cmd.category}
                        </span>
                        {cmd.shortcut && (
                          <kbd className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </div>
                    </button>
                  )
                })
              )}
            </div>

            {/* Footer Quick Keys */}
            <div className="px-4 py-2.5 border-t border-white/[0.08] bg-surface/80 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                    ↑
                  </kbd>{' '}
                  <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                    ↓
                  </kbd>{' '}
                  Navigate
                </span>
                <span>
                  <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                    ↵
                  </kbd>{' '}
                  Select
                </span>
              </div>
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
                  ESC
                </kbd>{' '}
                Close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
