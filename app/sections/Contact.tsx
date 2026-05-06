'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'

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

export default function Contact() {
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
            <form
              action="mailto:parthsharma2640@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 placeholder-slate-500 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 placeholder-slate-500 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 placeholder-slate-500 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-accent text-dark font-semibold hover:bg-sky-300 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
