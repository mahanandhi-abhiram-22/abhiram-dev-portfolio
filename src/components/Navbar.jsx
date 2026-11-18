import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import signLogo from '../sign.png'

const RESUME_URL = 'https://drive.google.com/file/d/1cJy7j63oDzMWS3cBnr9kbs-bV4ibf5np/view?usp=sharing'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // "skills" has no nav link; keep "About" highlighted while on it
  const current = activeSection === 'skills' ? 'about' : activeSection

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-500 ${
        scrolled ? 'bg-[#07070b]/75 border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 h-16 md:h-[72px]">
        <motion.button
          className="flex items-center h-full"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Go to top"
        >
          <img
            src={signLogo}
            alt="Abhiram Signature Logo"
            className="h-24 md:h-32 w-auto max-w-none -my-6 object-contain select-none drop-shadow-[0_0_14px_rgba(168,85,247,0.45)]"
          />
        </motion.button>

        <ul className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                className={`relative z-10 px-4 py-1.5 text-sm rounded-full transition-colors duration-300 ${
                  current === item.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
              {current === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/25 to-purple-500/25 border border-purple-400/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-outline !py-2 !px-5 text-sm">
            Resume
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-outline !px-4 !py-2 text-sm">
            Resume
          </a>
          <button
            onClick={() => setIsOpen((s) => !s)}
            className="p-2 rounded-lg border border-white/10 bg-white/[0.03]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#07070b]/90 backdrop-blur-xl"
          >
            <ul className="px-6 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.li key={item.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <button
                    className={`w-full text-left py-3 px-4 rounded-xl transition-colors ${
                      current === item.id ? 'text-white bg-purple-500/15' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => { scrollToSection(item.id); setIsOpen(false) }}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
