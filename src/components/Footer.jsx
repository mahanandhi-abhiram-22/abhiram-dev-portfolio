import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl py-10 mt-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          className="flex justify-center space-x-5 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            aria-label="GitHub"
            href="https://github.com/mahanandhi-abhiram-22"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 p-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_10px_30px_-8px_rgba(168,85,247,0.6)] transition-all duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-full h-full text-slate-200" />
          </motion.a>

          <motion.a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/m-abhiram"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 p-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_10px_30px_-8px_rgba(168,85,247,0.6)] transition-all duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin className="w-full h-full text-indigo-300" />
          </motion.a>

          <motion.a
            aria-label="Email"
            href="mailto:m22abhiram@gmail.com"
            className="w-11 h-11 p-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_10px_30px_-8px_rgba(168,85,247,0.6)] transition-all duration-300"
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

