import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass px-6 py-4 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold gradient-text cursor-pointer"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
        >
          AM
        </motion.div>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.button
                className={`font-semibold transition-colors ${
                  activeSection === item.id 
                    ? 'gradient-text text-transparent bg-clip-text' 
                    : 'hover:gradient-text hover:text-transparent'
                }`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            </li>
          ))}
        </ul>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <motion.a
            href="https://drive.google.com/file/d/1cJy7j63oDzMWS3cBnr9kbs-bV4ibf5np/view?usp=sharing"
            download
            className="btn-secondary text-sm"
            whileHover={{ scale: 1.05 }}
          >
            Resume
          </motion.a>
          <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">
            Contact Me
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.a
            href="/resume.pdf"
            download
            className="btn-secondary text-sm px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            Resume
          </motion.a>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden"
      >
        <ul className="py-4 space-y-4 backdrop-blur-xl glass mx-6 rounded-2xl mt-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full text-left py-3 px-6 rounded-xl ${
                  activeSection === item.id ? 'bg-white/20' : 'hover:bg-white/10'
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
      </motion.div>
    </motion.nav>
  )
}

export default Navbar

