import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="section">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="glass p-1 inline-block">
            <motion.div 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-sm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              MERN Stack Developer
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <motion.span 
              className="gradient-text block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Abhiram
            </motion.span>
            <motion.span 
              className="block text-4xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Mahanandhi
            </motion.span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed text-slate-300">
            Building scalable full-stack applications, integrating AI/ML capabilities,
            and designing high-performance modern web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              className="btn-primary text-lg px-10 py-4"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <HiArrowNarrowRight className="ml-2 inline" />
            </motion.button>
            <motion.button
              className="btn-secondary text-lg px-10 py-4"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
        
        {/* Full-Stack Decorative */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 lg:h-[500px]"
        >
          <div className="glass-modern w-full h-full rounded-3xl p-6 lg:p-12 flex items-center justify-center relative overflow-hidden">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/debugging-illustration-svg-download-png-13904988.png" alt="Full-Stack Developer Tools" className="w-64 h-64 lg:w-80 lg:h-80 animate-float drop-shadow-2xl" />
 
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

