'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'parthsharma2640@gmail.com',
    href: 'mailto:parthsharma2640@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7817971083',
    href: 'tel:+917817971083'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ghaziabad, UP, India',
    href: null
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/parth-sharma-47a116292',
    href: 'https://www.linkedin.com/in/parth-sharma-47a116292/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/parthsharma1-art',
    href: 'https://github.com/parthsharma1-art'
  }
]

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

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState('')

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
    if (status !== 'idle') {
      setStatus('idle')
      setStatusMsg('')
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setIsSending(true)
    setStatus('idle')
    setStatusMsg('')

    try {
      console.log(form)
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
      setStatusMsg('Message sent successfully! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
      setErrors({})
    } catch (err) {
      setStatus('error')
      setStatusMsg('Something went wrong. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative bg-primary/30">
      <div className="max-w-6xl mx-auto">
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
            Have a project in mind or just want to say hello? Feel free to reach out — I am always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <info.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{info.label}</p>
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
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border text-slate-300 placeholder-slate-500 focus:outline-none transition-colors ${errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-accent'}`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border text-slate-300 placeholder-slate-500 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-accent'}`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border text-slate-300 placeholder-slate-500 focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-accent'}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 px-4 py-2 rounded-lg">
                  <CheckCircle size={16} />
                  {statusMsg}
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg">
                  <AlertCircle size={16} />
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 rounded-xl bg-accent text-dark font-semibold hover:bg-sky-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
