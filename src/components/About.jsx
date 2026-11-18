import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'

const CountUp = ({ to, suffix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}

const About = () => {
  return (
    <section id="about" className="section">
      <div className="w-full max-w-[1680px] mx-auto py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="h-title text-3xl md:text-5xl">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
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
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="thin-card p-5 rounded-2xl"
            >
              <div className="gradient-text font-bold tracking-tight text-3xl"><CountUp to={10} suffix="+" /></div>
              <div className="text-zinc-400 font-light mt-1 text-sm">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="thin-card p-5 rounded-2xl"
            >
              <div className="gradient-text font-bold tracking-tight text-3xl">Freelance</div>
              <div className="text-zinc-400 font-light mt-1 text-sm">Clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="thin-card p-5 rounded-2xl"
            >
              <div className="gradient-text font-bold tracking-tight text-3xl">AI</div>
              <div className="text-zinc-400 font-light mt-1 text-sm">Integrations</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


