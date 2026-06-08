import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="w-full max-w-7xl mx-auto py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="h-title text-3xl md:text-5xl">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="thin-card p-6 md:p-8 rounded-2xl"
          >
            <p className="text-zinc-400 font-light leading-relaxed text-base md:text-lg">
              I build production-grade <span className="text-white">MERN</span> applications with a focus on clean APIs, responsive UI, and real-world implementation. From planning features to shipping performant deployments, I develop solutions that are maintainable, mobile-friendly, and ready to scale.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="thin-card p-5 rounded-2xl"
            >
              <div className="text-white font-bold tracking-tight text-2xl">10+</div>
              <div className="text-zinc-400 font-light mt-1 text-sm">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="thin-card p-5 rounded-2xl"
            >
              <div className="text-white font-bold tracking-tight text-2xl">Freelance</div>
              <div className="text-zinc-400 font-light mt-1 text-sm">Clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="thin-card p-5 rounded-2xl"
            >
              <div className="text-white font-bold tracking-tight text-2xl">AI</div>
              <div className="text-zinc-400 font-light mt-1 text-sm">Integrations</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


