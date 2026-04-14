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
    <div className="relative overflow-hidden gradient-bg">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-0" />
          <div className="absolute top-1/2 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
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
