'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
} from 'lucide-react'
import { PRIMARY_RESUME, downloadResumeFile } from '../config/resumes'

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    await downloadResumeFile(PRIMARY_RESUME.url, PRIMARY_RESUME.filename)
    setIsDownloading(false)
  }

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 px-4 sm:px-6 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Availability Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass border border-emerald-500/30 text-xs text-slate-300 mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="badge-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-medium text-emerald-400">
                Open to Java Backend Opportunities
              </span>
            </motion.div>

            {/* Profile Avatar & Location Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3.5 mb-6"
            >
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-accent to-indigo-500 shadow-lg">
                <img
                  src="https://ik.imagekit.io/xuh3db9z6/ParthSharma_Photo.png"
                  alt="Parth Sharma"
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-mono text-slate-400">
                  Parth Sharma
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin size={13} className="text-accent" />
                  <span>Noida / Ghaziabad, India</span>
                </div>
              </div>
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-100 mb-6 font-sans"
            >
              Building Reliable{' '}
              <span className="gradient-text">Backend Systems.</span>
            </motion.h1>

            {/* Supporting Bio Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-8"
            >
              I&apos;m Parth Sharma, a Java Backend Developer focused on building
              secure REST APIs, scalable backend services, authentication systems,
              and reliable application workflows.
            </motion.p>

            {/* Core Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-dark font-semibold text-sm hover:bg-sky-300 transition-colors btn-glow cursor-pointer text-center"
              >
                <span>Explore My Work</span>
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                aria-label="Download Java Backend Resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full glass text-slate-200 hover:text-white hover:border-accent/40 font-semibold text-sm transition-all cursor-pointer shadow-sm disabled:opacity-50 text-center"
              >
                <Download size={16} className="text-accent" />
                <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
              </button>
            </motion.div>

            {/* Social & Contact Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-4 text-slate-400"
            >
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">
                Connect
              </span>
              <div className="h-3.5 w-[1px] bg-white/10" />
              <a
                href="https://github.com/parthsharma1-art"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full hover:bg-white/5 hover:text-accent transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/parth-sharma-47a116292/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full hover:bg-white/5 hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:parthsharma2640@gmail.com"
                aria-label="Send Email"
                className="p-2 rounded-full hover:bg-white/5 hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Backend Architecture Interactive Visualization */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="glass-card rounded-2xl p-4 sm:p-7 relative border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Architecture Header */}
              <div className="flex items-center justify-between pb-4 mb-4 sm:mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-mono font-semibold tracking-wide uppercase text-slate-300">
                    Backend Architecture
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Status: 200 OK · 11ms
                </span>
              </div>

              {/* Architecture Nodes Flow */}
              <div className="space-y-3 sm:space-y-3.5 relative">
                {/* 1. Inbound Request & Auth Layer */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-surface/80 border border-white/[0.06] hover:border-accent/30 transition-all">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-sky-500/10 text-accent flex items-center justify-center shrink-0">
                      <Zap size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-200 truncate">
                        Inbound API Request
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">
                        HTTPS · REST API · JWT Validated
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded shrink-0 ml-2">
                    OAuth 2.0
                  </span>
                </div>

                {/* Animated Connecting Arrow */}
                <div className="flex justify-center -my-1 text-accent/60">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-accent to-indigo-500 rounded-full" />
                </div>

                {/* 2. Spring Boot Core Services */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-surface/80 border border-indigo-500/30 shadow-sm hover:border-indigo-500/60 transition-all">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                      <Server size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-200 truncate">
                        Spring Boot Service Layer
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">
                        Java 21 · Spring Security · Booking Logic
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 shrink-0 ml-2">
                    Core App
                  </span>
                </div>

                {/* Animated Connecting Arrow */}
                <div className="flex justify-center -my-1 text-accent/60">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-500 to-rose-500 rounded-full" />
                </div>

                {/* 3. Redis Distributed Lock & Cache */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-surface/80 border border-rose-500/20 hover:border-rose-500/40 transition-all">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                      <Layers size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-200 truncate">
                        Redis Concurrency Lock
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">
                        Distributed Lock · Cache Hit &lt;2ms
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 shrink-0 ml-2">
                    Atomic
                  </span>
                </div>

                {/* Animated Connecting Arrow */}
                <div className="flex justify-center -my-1 text-accent/60">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-rose-500 to-emerald-500 rounded-full" />
                </div>

                {/* 4. MongoDB Persistent Store */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-surface/80 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Database size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-200 truncate">
                        MongoDB &amp; GridFS
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">
                        Transactional Data · File Document Storage
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0 ml-2">
                    Persistence
                  </span>
                </div>
              </div>

              {/* Architecture Bottom Stats */}
              <div className="mt-5 pt-3 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-[11px] text-slate-500 uppercase font-mono">Runtime</p>
                  <p className="text-xs font-semibold text-slate-200">Java 21 LTS</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase font-mono">Framework</p>
                  <p className="text-xs font-semibold text-accent">Spring Boot</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase font-mono">Security</p>
                  <p className="text-xs font-semibold text-emerald-400">JWT + OAuth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
