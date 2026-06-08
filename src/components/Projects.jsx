import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Swiggy Like Reels Food App',
    description:
      'Built vertical reel-style food discovery with MERN by implementing real-time interactions, likes, and feed engagement analytics to drive faster user exploration and higher retention.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/mahanandhi-abhiram-22',
    live: 'https://github.com/mahanandhi-abhiram-22/Swiggy-like-reel-app',
  },
  {
    title: 'Pokémon Explorer',
    description:
      'Interactive React app integrating PokeAPI for real-time Pokémon search, filtering, and dynamic card visualization.',
    tech: ['React', 'Vite', 'Axios', 'TailwindCSS', 'PokeAPI'],
    github: 'https://github.com/mahanandhi-abhiram-22',
    live: 'https://poke-explorer-delta.vercel.app/',
  },
  {
    title: 'Query Dashboard',
    description:
      'Built an interactive analytics query dashboard with React and Tailwind CSS to isolate complex system query logs, then streamlined Redux Toolkit state management to prevent unnecessary re-renders and accelerated chart-driven analysis using Chart.js.',
    tech: ['React', 'Redux Toolkit', 'Chart.js', 'TailwindCSS'],
    github: 'https://github.com/mahanandhi-abhiram-22',
    live: 'https://query-dashboard-eta.vercel.app/',
  },
  {
    title: 'Aadhaar QR Scan',
    description:
      'Advanced Aadhaar QR code scanner and verifier application with secure validation and extraction features.',
    tech: ['React', 'Node.js', 'Express', 'QR', 'Security'],
    github: 'https://github.com/mahanandhi-abhiram-22/aadhaar-rq-scan',
    live: 'https://github.com/mahanandhi-abhiram-22/aadhaar-rq-scan',
  },
  {
    title: 'Sammunat AI Landing Page',
    description:
      'Engineered a production-ready agency landing page in Next.js 15 with TypeScript and Tailwind CSS for a US-based professional marketplace, then leveraged Framer Motion for fluid hero animations to maximize user retention and improved SEO/performance using Next.js Server Components deployed on Vercel.',
    tech: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/mahanandhi-abhiram-22/sammunat-ai-landing',
    live: 'https://sammunat-ai-landing.vercel.app/',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="w-full max-w-7xl mx-auto py-16 md:py-24">
        <h2 className="h-title text-3xl md:text-5xl mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.02 }}
              className="thin-card rounded-2xl p-6 md:p-7"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-white font-bold tracking-tight text-xl">{project.title}</h3>
                  <p className="muted text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex-1"
                >
                  <span className="font-semibold">Demo</span>
                  <span className="ml-2 text-zinc-400">→</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex-1"
                >
                  <span className="font-semibold">GitHub</span>
                  <span className="ml-2 text-zinc-400">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

