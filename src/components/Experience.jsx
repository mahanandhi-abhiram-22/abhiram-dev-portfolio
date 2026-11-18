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
      <div className="w-full max-w-[1680px] mx-auto">
        <h2 className="h-title text-3xl md:text-5xl mb-10"><span className="gradient-text">Experience</span></h2>

        <div className="relative space-y-6 md:pl-10">
          <div className="hidden md:block absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-purple-400/60 via-indigo-400/30 to-transparent" aria-hidden="true" />
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="thin-card rounded-2xl p-6 md:p-8"
            >
              <span className="hidden md:block absolute -left-[37px] top-8 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_0_4px_rgba(168,85,247,0.2),0_0_18px_rgba(192,132,252,0.9)]" aria-hidden="true" />
              <div className="space-y-2">
                <div className="text-white font-bold tracking-tight text-xl">{exp.title}</div>
                <div className="muted text-sm md:text-base font-light">{exp.subtitle}</div>
              </div>

              <div className="mt-6 space-y-3">
                {exp.points.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
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




