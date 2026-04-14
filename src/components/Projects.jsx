import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    title: 'Sammunat AI Landing',
    description: 'Swiggy Like Reels Food App - A full-stack MERN application enabling reel-style food discovery with real-time interactions, likes, and engagement features.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
    github: 'https://github.com/mahanandhi-abhiram-22',
    live: 'https://sammunat-ai-landing.vercel.app/'
  },
  {
    title: 'Pokémon Explorer',
    description: 'Interactive React app integrating PokeAPI for real-time Pokémon search, filtering, and dynamic card visualization.',
    tech: ['React', 'Vite', 'Axios', 'Tailwind CSS', 'PokeAPI'],
    github: 'https://github.com/mahanandhi-abhiram-22',
    live: 'https://poke-explorer-delta.vercel.app/'
  },
  {
    title: 'Query Dashboard',
    description: 'Interactive analytics dashboard with React & Redux Toolkit visualizing query results with charts and responsive UI.',
    tech: ['React', 'Redux Toolkit', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/mahanandhi-abhiram-22',
    live: 'https://query-dashboard-eta.vercel.app/'
  },
  {
    title: 'Aadhaar QR Scan',
    description: 'Advanced Aadhaar QR code scanner and verifier application with secure validation and extraction features.',
    tech: ['React', 'Node.js', 'Express', 'QR Code Processing', 'Security Validation'],
    github: 'https://github.com/mahanandhi-abhiram-22/aadhaar-rq-scan',
    live: 'https://github.com/mahanandhi-abhiram-22/aadhaar-rq-scan'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section py-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold gradient-text text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-modern p-6 lg:p-8 tilt-hover group cursor-pointer hover:shadow-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 2, rotateY: 2 }}
            >
              <div className="h-32 bg-gradient-to-br from-slate-800/50 to-transparent rounded-xl mb-4 group-hover:from-slate-700/70 transition-all duration-500 shimmer" />
              
              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text-primary transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-4 text-sm leading-tight">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-bold text-slate-200 text-sm mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 hover:bg-white/20 hover:shadow-glow transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  className="btn-secondary flex-1 text-center py-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiGithub className="inline mr-2" />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  className="btn-primary flex-1 text-center py-3"
                  whileHover={{ scale: 1.05 }}
                >
                  Live <FiArrowUpRight className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
