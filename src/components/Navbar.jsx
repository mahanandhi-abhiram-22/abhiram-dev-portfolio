import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full backdrop-blur bg-[#0f0c1b]/70 border-b border-zinc-800/50"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 h-16">
        <motion.div
          className="text-white font-bold tracking-tight cursor-pointer"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center h-20 w-64 min-w-[200px] justify-start pl-2 md:pl-4">
            <img 
              src="/sign.png" 
              alt="Abhiram Mahanandhi Signature" 
              className="h-full w-auto object-contain brightness-0 invert scale-150 md:scale-175 origin-left transition-transform duration-300 hover:scale-[1.85]" 
            />
          </div>
        </motion.div>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`text-zinc-400 font-light transition-colors hover:text-white ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <a
            href="https://drive.google.com/file/d/1cJy7j63oDzMWS3cBnr9kbs-bV4ibf5np/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            download
            className="btn-outline"
          >
            Resume
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="btn-outline px-4 py-2 text-sm"
          >
            Resume
          </a>
          <button onClick={() => setIsOpen((s) => !s)} className="p-2">
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        className="lg:hidden overflow-hidden border-t border-zinc-800/50"
      >
        <div className="px-6 py-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${
                    activeSection === item.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsOpen(false)
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar

