import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100
      const section = sections.find(s => {
        const el = document.getElementById(s)
        if (el) {
          return scrollPosition >= el.offsetTop
        }
        return false
      })
      if (section) setActiveSection(section)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden">
      {/* Purple radial glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 15% 10%, rgba(99,102,241,0.22) 0%, rgba(15,12,27,0) 45%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 85% 25%, rgba(168,85,247,0.18) 0%, rgba(15,12,27,0) 45%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 60% 90%, rgba(59,130,246,0.12) 0%, rgba(15,12,27,0) 45%)" }} />
      </div>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
