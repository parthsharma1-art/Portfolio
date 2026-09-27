'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, Phone, MapPin, Linkedin, Github,
  Send, Loader2, CheckCircle, AlertCircle, Clock,
} from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  { icon: Mail,    label: 'Email',    value: 'parthsharma2640@gmail.com',             href: 'mailto:parthsharma2640@gmail.com' },
  { icon: Phone,   label: 'Phone',    value: '+91 7817971083',                        href: 'tel:+917817971083' },
  { icon: MapPin,  label: 'Location', value: 'Ghaziabad, UP, India',                  href: null },
  { icon: Linkedin,label: 'LinkedIn', value: 'linkedin.com/in/parth-sharma-47a116292', href: 'https://www.linkedin.com/in/parth-sharma-47a116292/' },
  { icon: Github,  label: 'GitHub',   value: 'github.com/parthsharma1-art',           href: 'https://github.com/parthsharma1-art' },
]

const SERVICE_ID  = 'service_x9lwn58'
const TEMPLATE_ID = 'template_0i0hbzd'
const PUBLIC_KEY  = 'SH8Vx9GOd2-_qKMf-'

interface FormData   { name: string; email: string; message: string }
interface FormErrors { name?: string; email?: string; message?: string }

function validateEmail(e: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) }

// Floating-label input
function FloatInput({
  type = 'text', name, label, value, onChange, error, as,
}: {
  type?: string; name: keyof FormData; label: string; value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string; as?: 'textarea'
}) {
  const base =
    'w-full px-4 pt-6 pb-2 rounded-xl bg-slate-800/50 text-slate-300 placeholder-transparent ' +
    'focus:outline-none transition-all duration-200 '
  const border = error
    ? 'border border-red-500 focus:border-red-400'
    : 'border border-slate-700 focus:border-accent'

  return (
    <div className="float-label-group">
      {as === 'textarea' ? (
        <textarea
          name={name}
          id={name}
          rows={4}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={`${base}${border} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={`${base}${border}`}
        />
      )}
      <label htmlFor={name}>{label}</label>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm]       = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors]   = useState<FormErrors>({})
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus]   = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState('')

  function validate() {
    const e: FormErrors = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!validateEmail(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }))
    if (status !== 'idle') { setStatus('idle'); setStatusMsg('') }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setIsSending(true); setStatus('idle'); setStatusMsg('')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { name: form.name, email: form.email, message: form.message }, PUBLIC_KEY)
      setStatus('success')
      setStatusMsg('Message sent! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' }); setErrors({})
    } catch {
      setStatus('error')
      setStatusMsg('Something went wrong. Please try again later.')
    } finally { setIsSending(false) }
  }

  return (
    <section id="contact" className="py-24 px-6 relative bg-primary/30">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out — I am always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — info + availability card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Availability card */}
            <div className="glass rounded-2xl p-5 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3 mb-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="badge-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-green-400 text-sm font-semibold">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs mt-2">
                <Clock size={12} />
                Usually responds within 24 hours
              </div>
            </div>

            {/* Contact info */}
            <div className="glass rounded-2xl p-8 flex-1">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0
                                    group-hover:bg-accent/20 transition-colors">
                      <info.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-slate-300 hover:text-accent transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              <FloatInput
                name="name"
                label="Your Name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <FloatInput
                type="email"
                name="email"
                label="Your Email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <FloatInput
                name="message"
                label="Your Message"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                as="textarea"
              />

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 px-4 py-2 rounded-lg border border-green-500/20"
                  >
                    <CheckCircle size={16} /> {statusMsg}
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg border border-red-500/20"
                  >
                    <AlertCircle size={16} /> {statusMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSending}
                className="w-full py-3 rounded-xl bg-accent text-dark font-semibold hover:bg-sky-300
                           transition-colors flex items-center justify-center gap-2
                           disabled:opacity-60 disabled:cursor-not-allowed btn-glow"
              >
                {isSending ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending…</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


