'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Eye, Download } from 'lucide-react'

const roles = [
  'Software Engineer',
  'Java Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Spring Boot Developer',
]

// Deterministic star data so SSR and client match (no Math.random in render)
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: ((i * 137.508) % 100).toFixed(2),   // golden-angle distribution
  left: ((i * 97.111) % 100).toFixed(2),
  size: (((i * 31) % 3) + 1).toFixed(1),   // 1–3 px
  duration: (3 + ((i * 17) % 4)).toFixed(1),
  delay: ((i * 0.23) % 3).toFixed(2),
  opacity: (0.2 + ((i * 7) % 6) / 10).toFixed(2),
}))

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse-parallax for glow blobs
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const blob1X = useTransform(springX, [0, 1], ['-8%', '8%'])
  const blob1Y = useTransform(springY, [0, 1], ['-8%', '8%'])
  const blob2X = useTransform(springX, [0, 1], ['8%', '-8%'])
  const blob2Y = useTransform(springY, [0, 1], ['8%', '-8%'])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - left) / width)
    mouseY.set((e.clientY - top) / height)
  }, [mouseX, mouseY])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Typewriter effect
  useEffect(() => {
    const current = roles[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, index])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-dark to-dark" />

      {/* Parallax glow blobs */}
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {STARS.map((s) => (
          <span
            key={s.id}
            className="star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: parseFloat(s.opacity),
              '--duration': `${s.duration}s`,
              '--delay': `${s.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/20 text-sm text-slate-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="badge-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Open to opportunities
          </motion.div>

          <p className="text-accent text-lg mb-3 tracking-wide">Hello, I am</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="shimmer-text">Parth Sharma</span>
          </h1>

          {/* Typewriter role */}
          <div className="h-9 md:h-11 flex items-center justify-center mb-10">
            <span className="text-xl md:text-2xl text-slate-300 font-mono font-light tracking-wide">
              {displayed}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }}
                className="inline-block w-0.5 h-6 bg-accent ml-0.5 align-middle"
              />
            </span>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          {[
            { href: 'https://github.com/parthsharma1-art', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/parth-sharma-47a116292/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:parthsharma2640@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.92 }}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-3 rounded-full glass hover:bg-accent/20 hover:border-accent/40 transition-all animate-glow-pulse"
            >
              <Icon size={22} className="text-slate-300 hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-dark font-semibold btn-glow hover:bg-sky-300 transition-colors"
          >
            Explore My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://ik.imagekit.io/xuh3db9z6/ParthSharma_BackendEngineer_Resume.pdf?updatedAt=1790492787825"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            <Eye size={18} />
            View Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://ik.imagekit.io/xuh3db9z6/ParthSharma_BackendEngineer_Resume.pdf?updatedAt=1790492787825"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 transition-colors shadow-lg"
          >
            <Download size={18} />
            Download
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-slate-500 hover:text-accent transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  )
}
