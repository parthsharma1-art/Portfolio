import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import EngineeringPrinciples from './sections/EngineeringPrinciples'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-base text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <EngineeringPrinciples />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}
