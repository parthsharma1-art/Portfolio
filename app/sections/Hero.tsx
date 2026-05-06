'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Eye, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-dark to-dark" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-lg mb-4 tracking-wide">Hello, I am</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="gradient-text">Parth Sharma</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
            Full Stack Developer & Software Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/parthsharma1-art"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-accent/20 transition-all hover:scale-110"
          >
            <Github size={22} className="text-slate-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-sharma-47a116292/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-accent/20 transition-all hover:scale-110"
          >
            <Linkedin size={22} className="text-slate-300" />
          </a>
          <a
            href="mailto:parthsharma2640@gmail.com"
            className="p-3 rounded-full glass hover:bg-accent/20 transition-all hover:scale-110"
          >
            <Mail size={22} className="text-slate-300" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-dark font-semibold hover:bg-sky-300 transition-colors"
          >
            Explore My Work
          </a>
          <a
            href="/ParthSharma_SoftwareDeveloper_Resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            <Eye size={18} />
            View Resume
          </a>
          <a
            href="https://ik.imagekit.io/xuh3db9z6/ParthSharma_SoftwareDeveloper_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
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
