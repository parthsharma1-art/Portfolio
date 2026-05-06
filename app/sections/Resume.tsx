'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Download, Eye } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    school: 'IMS Engineering College, Ghaziabad, UP',
    year: '2022 - 2026',
    desc: 'CGPA: 8.0. Focused on software development, algorithms, data structures, and system design.'
  },
  {
    degree: 'Class XII (Senior Secondary)',
    school: 'Vidya Bhawan Public School, Baghpat, UP',
    year: '2021 - 2022',
    desc: 'Percentage: 89%.'
  }
]

const experience = [
  {
    role: 'Backend Engineer',
    company: 'AetherAI, Inc. (Remote)',
    url: 'https://aetheraiapp.com',
    year: 'Nov 2025 - Present',
    desc: 'Developing and maintaining scalable backend services using Java and Spring Boot for a production SaaS platform. Designing and enhancing RESTful APIs. Fixing production bugs, improving performance, and ensuring backend reliability. Collaborating with product managers and frontend engineers in Agile/Scrum ceremonies.'
  },
  {
    role: 'Backend Engineering Intern',
    company: 'AetherAI, Inc. (Remote)',
    url: 'https://aetheraiapp.com',
    year: 'Jul 2025 - Oct 2025',
    desc: 'Contributed to backend development using Java and Spring Boot. Built and tested REST APIs used in the company\'s SaaS product. Assisted in backend QA testing, debugging, and issue resolution in an Agile environment.'
  }
]

const achievements = [
  'Solved 80+ DSA problems on LeetCode, GeeksforGeeks, and HackerRank'
]

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 relative bg-primary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            A summary of my academic background, professional experience, and technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/ParthSharma_SoftwareDeveloper_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
            >
              <Eye size={16} />
              View Resume
            </a>
            <a
              href="https://ik.imagekit.io/xuh3db9z6/ParthSharma_SoftwareDeveloper_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 text-slate-300 text-sm font-semibold hover:bg-slate-700 transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={28} className="text-accent" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="glass rounded-xl p-6 border-l-4 border-accent">
                  <span className="text-accent text-sm font-medium">{edu.year}</span>
                  <h4 className="text-lg font-semibold mt-1">{edu.degree}</h4>
                  <p className="text-slate-400 text-sm">{edu.school}</p>
                  <p className="text-slate-500 text-sm mt-2">{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={28} className="text-accent" />
              <h3 className="text-xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.role} className="glass rounded-xl p-6 border-l-4 border-indigo-500">
                  <span className="text-indigo-400 text-sm font-medium">{exp.year}</span>
                  <h4 className="text-lg font-semibold mt-1">{exp.role}</h4>
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-accent transition-colors underline underline-offset-2">
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-slate-400 text-sm">{exp.company}</p>
                  )}
                  <p className="text-slate-500 text-sm mt-2">{exp.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award size={28} className="text-accent" />
            <h3 className="text-xl font-bold">Skills, Tools & Achievements</h3>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                'Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'JPA/Hibernate',
                'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
                'Python', 'MongoDB', 'MySQL', 'Git', 'GitHub',
                'Postman', 'IntelliJ IDEA', 'VS Code', 'Agile/Scrum', 'DSA'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="border-t border-slate-700 pt-4 mt-4">
              <p className="text-slate-400 text-sm mb-2 font-medium">Achievements</p>
              <ul className="space-y-2">
                {achievements.map((ach, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-accent mt-1">&#9679;</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
