import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
