'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Download,
  Eye,
  ExternalLink,
  Server,
  Code,
  Loader2,
  Check,
  FileText,
} from 'lucide-react'
import { RESUME_CONFIGS, ResumeConfig, downloadResumeFile } from '../config/resumes'

export default function Resume() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<{ id: string; text: string; isError?: boolean } | null>(null)

  const handleDownload = async (resume: ResumeConfig) => {
    if (!resume.url || resume.url.trim() === '') {
      setStatusMessage({ id: resume.id, text: 'Resume URL is currently unavailable.', isError: true })
      return
    }

    setDownloadingId(resume.id)
    setStatusMessage(null)

    const result = await downloadResumeFile(resume.url, resume.filename)
    setDownloadingId(null)

    if (result.success) {
      setStatusMessage({ id: resume.id, text: `Downloaded ${resume.filename}`, isError: false })
    } else if (result.fallbackOpened) {
      setStatusMessage({ id: resume.id, text: 'Opening PDF in new tab (download triggered)', isError: false })
    } else {
      setStatusMessage({ id: resume.id, text: result.error || 'Unable to download file.', isError: true })
    }

    setTimeout(() => {
      setStatusMessage((prev) => (prev?.id === resume.id ? null : prev))
    }, 4500)
  }

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-4 mb-3">
            Download My Resume
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Select the targeted version depending on your hiring team&apos;s requirements.
          </p>
        </motion.div>

        {/* Two Resume Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {RESUME_CONFIGS.map((resume) => {
            const isPrimary = resume.isPrimary
            const isDownloading = downloadingId === resume.id
            const hasValidUrl = Boolean(resume.url && resume.url.trim() !== '')
            const message = statusMessage?.id === resume.id ? statusMessage : null
            const CardIcon = isPrimary ? Server : Code

            return (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isPrimary ? 0 : 0.1 }}
                className={`glass-card rounded-2xl p-5 sm:p-7 border relative flex flex-col justify-between transition-all duration-300 h-full overflow-hidden ${
                  isPrimary
                    ? 'border-accent/40 bg-gradient-to-b from-accent/[0.08] via-slate-900/60 to-slate-900/40 shadow-lg shadow-accent/5 hover:border-accent/60'
                    : 'border-slate-700/60 hover:border-accent/30'
                }`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isPrimary
                          ? 'bg-accent/15 text-accent shadow-inner'
                          : 'bg-indigo-500/15 text-indigo-400'
                      }`}
                    >
                      <CardIcon size={24} aria-hidden="true" />
                    </div>

                    {isPrimary && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30 tracking-wide shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                        Primary Resume
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-100 mb-2 tracking-tight">
                    {resume.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {resume.description}
                  </p>
                </div>

                {/* Status Feedback & Action Buttons */}
                <div className="pt-4 border-t border-slate-700/50 mt-auto">
                  {message && (
                    <div
                      className={`text-xs mb-3 px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
                        message.isError
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}
                      role="status"
                    >
                      {!message.isError && <Check size={14} className="shrink-0" aria-hidden="true" />}
                      <span>{message.text}</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-2.5 w-full">
                    {/* Primary Action: Download Button */}
                    <button
                      type="button"
                      onClick={() => handleDownload(resume)}
                      disabled={!hasValidUrl || isDownloading}
                      aria-label={resume.downloadLabel}
                      title={hasValidUrl ? resume.downloadLabel : 'Resume URL is currently unavailable'}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                        isPrimary
                          ? 'bg-accent text-dark hover:bg-sky-300 btn-glow shadow-md shadow-accent/20'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-accent/40 shadow-sm'
                      }`}
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 size={16} className="animate-spin shrink-0" aria-hidden="true" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download size={16} className="shrink-0" aria-hidden="true" />
                          <span>{resume.downloadLabel}</span>
                        </>
                      )}
                    </button>

                    {/* Secondary Action: View Resume */}
                    {hasValidUrl ? (
                      <a
                        href={resume.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${resume.title} in new tab`}
                        title={`View ${resume.title} in a new tab`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-700/80 hover:border-accent/50 text-slate-300 hover:text-accent text-sm font-medium transition-colors bg-slate-900/40 hover:bg-accent/5"
                      >
                        <Eye size={15} className="shrink-0" aria-hidden="true" />
                        <span>View Resume</span>
                        <ExternalLink size={13} className="shrink-0 opacity-60" aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        title="Resume URL is currently unavailable"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-800 text-slate-600 text-sm font-medium cursor-not-allowed"
                      >
                        <Eye size={15} className="shrink-0" aria-hidden="true" />
                        <span>View Resume</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
