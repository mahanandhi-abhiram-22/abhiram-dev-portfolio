import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Freelance Web Developer',
    subtitle: 'Independent / Self-Employed | Duration: 2024 - Present',
    points: [
      'Designed and deployed clean, high-performance websites and landing pages for local shops, small businesses, and community clients.',
      'Collaborated closely with small business owners to translate their needs into functional web solutions that help them scale and grow their digital presence.',
      'Handled end-to-end development and deployment using modern web technologies, ensuring fully responsive and mobile-friendly designs.',
    ],
  },
  {
    title: 'Full-Stack ML Engineer',
    subtitle: 'AI Powered Health Assistant | Duration: 2025 - 2025',
    points: [
      'Built NLP based chatbot using Python and NLTK',
      'Integrated disease datasets for intelligent recommendations',
      'Created responsive interactive UI',
      'Implemented ML inference pipelines',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="w-full max-w-7xl mx-auto py-16 md:py-24">
        <h2 className="h-title text-3xl md:text-5xl mb-10">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="thin-card rounded-2xl p-6 md:p-8"
            >
              <div className="space-y-2">
                <div className="text-white font-bold tracking-tight text-xl">{exp.title}</div>
                <div className="muted text-sm md:text-base font-light">{exp.subtitle}</div>
              </div>

              <div className="mt-6 space-y-3">
                {exp.points.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400/80" />
                    <div className="muted leading-relaxed text-sm md:text-base">{p}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience




