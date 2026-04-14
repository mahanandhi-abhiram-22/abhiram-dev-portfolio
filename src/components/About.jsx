import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section py-32 bg-black/20">
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold gradient-text mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="max-w-4xl mx-auto space-y-8 text-xl md:text-2xl leading-relaxed text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            I am a passionate <span className="gradient-text font-bold">MERN Stack Developer</span> with hands-on experience building scalable full-stack web applications using{' '}
            <span className="font-bold">React</span>,{' '}
            <span className="font-bold">Node.js</span>,{' '}
            <span className="font-bold">Express</span>, and{' '}
            <span className="font-bold">MongoDB</span>.
          </p>
          
          <p>
            I specialize in <span className="font-bold">RESTful API development</span>,{' '}
            <span className="font-bold">JWT-based authentication</span>, and{' '}
            <span className="font-bold">cloud deployment</span>.
          </p>
          
          <p>
            I also integrate <span className="font-bold">AI/ML features</span> like{' '}
            <span className="font-bold">NLP pipelines</span> and{' '}
            <span className="font-bold">predictive models</span> into modern web applications.
          </p>
          
          <p className="text-lg md:text-xl">
            I focus on building <span className="font-bold">secure, scalable, and performance-optimized systems</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

