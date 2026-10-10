'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_x9lwn58'
const TEMPLATE_ID = 'template_0i0hbzd'
const PUBLIC_KEY = 'SH8Vx9GOd2-_qKMf-'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('parthsharma2640@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      window.location.href = 'mailto:parthsharma2640@gmail.com'
    }
  }

  const validate = () => {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.email.trim()) {
      errs.email = 'Please enter your email address.'
    } else if (!validateEmail(form.email)) {
      errs.email = 'Please enter a valid email format.'
    }
    if (!form.message.trim()) errs.message = 'Please enter your message.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSending(true)
    setStatus('idle')
    setStatusMsg('')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setStatusMsg('Thank you! Your message has been sent successfully. I will get back to you promptly.')
      setForm({ name: '', email: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Email send error:', error)
      setStatus('error')
      setStatusMsg('Unable to send message directly. Please feel free to email me directly at parthsharma2640@gmail.com.')
    } finally {
      setIsSending(false)
    }
  }

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=parthsharma2640@gmail.com&su=Inquiry%20via%20Portfolio`

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative bg-surface/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-4 mb-2">
            Have a backend challenge in mind?
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            I&apos;m open to Java Backend Developer and Software Engineer opportunities. Let&apos;s connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-5">
              <h3 className="text-base font-bold text-white mb-4">
                Direct Contact
              </h3>

              {/* Email item with Copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface/70 border border-white/[0.05]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Mail size={17} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-mono text-slate-400">Email Address</p>
                    <a
                      href="mailto:parthsharma2640@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-accent transition-colors truncate block"
                    >
                      parthsharma2640@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                >
                  {copiedEmail ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface/70 border border-white/[0.05]">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">
                    Noida / Ghaziabad, UP, India
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/parth-sharma-47a116292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/[0.06] hover:border-accent/40 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin size={15} className="text-sky-400" />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>

                <a
                  href="https://github.com/parthsharma1-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/[0.06] hover:border-accent/40 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Github size={15} className="text-slate-300" />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </div>
            </div>

            {/* Quick Gmail Compose Card */}
            <div className="p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-emerald-400">
                  Prefer sending via Google?
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Compose directly in Gmail with prefilled recipient.
                </p>
              </div>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs font-medium border border-emerald-500/30 transition-colors whitespace-nowrap"
              >
                Open Gmail ↗
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
              <h3 className="text-base font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: undefined })
                    }}
                    placeholder="John Doe"
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface/80 text-sm text-slate-200 border transition-colors focus:outline-none ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/10 focus:border-accent'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: undefined })
                    }}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface/80 text-sm text-slate-200 border transition-colors focus:outline-none ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/10 focus:border-accent'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: undefined })
                    }}
                    placeholder="Tell me about your team, project, or role..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface/80 text-sm text-slate-200 border transition-colors focus:outline-none resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/10 focus:border-accent'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Status Alert Banner */}
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 border ${
                      status === 'success'
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                        : 'bg-rose-500/10 text-rose-300 border-rose-500/20'
                    }`}
                  >
                    {status === 'success' ? (
                      <CheckCircle size={16} className="shrink-0" />
                    ) : (
                      <AlertCircle size={16} className="shrink-0" />
                    )}
                    <span>{statusMsg}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 px-6 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-sky-300 transition-colors btn-glow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
