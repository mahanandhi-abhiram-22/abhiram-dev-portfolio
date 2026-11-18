import { motion } from 'framer-motion'

const projects = [
  {
    badge: 'IEEE',
    title: 'Battery Health Intelligence',
    description: 'Battery health intelligence project, published on IEEE Xplore.',
    tech: [],
    github: 'https://github.com/mahanandhi-abhiram-22/Battery-Health-Intelligence',
    live: 'https://ieeexplore.ieee.org/document/11470440',
    liveLabel: 'Paper',
  },
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
      <div className="w-full max-w-[1680px] mx-auto">
        <h2 className="h-title text-3xl md:text-5xl mb-10"><span className="gradient-text">Projects</span></h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="thin-card rounded-2xl p-6 md:p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-white font-bold tracking-tight text-xl">{project.title}</h3>
                    {project.badge && (
                      <span className="shrink-0 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="muted text-sm leading-relaxed">{project.description}</p>
                </div>

                {project.tech.length > 0 && <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex-1"
                >
                  <span className="font-semibold">{project.liveLabel ?? 'Demo'}</span>
                  <span className="ml-2 text-purple-300">→</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex-1"
                >
                  <span className="font-semibold">GitHub</span>
                  <span className="ml-2 text-purple-300">↗</span>
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

