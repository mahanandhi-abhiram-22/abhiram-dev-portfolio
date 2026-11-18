import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const glowRef = useRef(null)
  const lenisRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 })

  // Active section via IntersectionObserver (no scroll-handler jank)
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Buttery inertia scrolling
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
    lenisRef.current = lenis
    let raf = 0
    const loop = (time) => { lenis.raf(time); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); lenisRef.current = null }
  }, [])

  // Cursor glow + per-card spotlight (single delegated listener, rAF-throttled)
  useEffect(() => {
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (glowRef.current) glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        const card = e.target.closest?.('.thin-card')
        if (card) {
          const r = card.getBoundingClientRect()
          card.style.setProperty('--mx', `${e.clientX - r.left}px`)
          card.style.setProperty('--my', `${e.clientY - r.top}px`)
        }
      })
    }
    if (!window.matchMedia('(hover: hover)').matches) return
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf) }
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: id === 'home' ? 0 : -64, duration: 1.4 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-full min-h-screen bg-[#07070b] text-white overflow-x-hidden">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="grid-bg" aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
