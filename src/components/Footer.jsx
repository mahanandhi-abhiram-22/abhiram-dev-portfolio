import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="glass backdrop-blur-xl border-t border-white/10 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          className="flex justify-center space-x-5 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/mahanandhi-abhiram-22"
            target="_blank"
            className="w-11 h-11 glass p-2 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-full h-full text-slate-200" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/m-abhiram"
            target="_blank"
            className="w-11 h-11 glass p-2 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin className="w-full h-full text-blue-400" />
          </motion.a>

          <motion.a
            href="mailto:m22abhiram@gmail.com"
            className="w-11 h-11 glass p-2 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="w-full h-full text-slate-200" />
          </motion.a>
        </motion.div>

        <p className="text-slate-400 text-sm leading-relaxed">
          © 2026 <span className="gradient-text font-bold">Abhiram Mahanandhi</span>.
          <br />All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

