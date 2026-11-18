import { motion } from 'framer-motion'

const leftColumn = [
  { label: 'React & Redux', value: 90 },
  { label: 'JavaScript', value: 85 },
  { label: 'HTML/CSS/Tailwind', value: 90 },
  { label: 'Next.js 15', value: 80 },
]

const rightColumn = [
  { label: 'Node.js & Express', value: 85 },
  { label: 'MongoDB & SQL', value: 80 },
  { label: 'REST APIs & JWT', value: 90 },
  { label: 'Python & NLTK', value: 75 },
]

const SkillTrack = ({ item, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-zinc-300 font-light text-sm">{item.label}</div>
        <div className="text-zinc-400 font-light text-sm">{item.value}%</div>
      </div>
      <div className="h-2 rounded-full bg-white/[0.04] border border-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 shadow-[0_0_20px_rgba(168,85,247,0.45)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${item.value}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.3, delay: 0.15 + delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="w-full max-w-7xl mx-auto py-16 md:py-24">
        <h2 className="h-title text-3xl md:text-5xl mb-10"><span className="gradient-text">Skills</span></h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="thin-card p-6 md:p-8 rounded-2xl">
            <div className="text-white font-bold tracking-tight text-lg mb-5">Frontend & Core</div>
            <div className="space-y-6">
              {leftColumn.map((item, idx) => (
                <SkillTrack key={item.label} item={item} delay={idx * 0.04} />
              ))}
            </div>
          </div>

          <div className="thin-card p-6 md:p-8 rounded-2xl">
            <div className="text-white font-bold tracking-tight text-lg mb-5">Backend & AI</div>
            <div className="space-y-6">
              {rightColumn.map((item, idx) => (
                <SkillTrack key={item.label} item={item} delay={idx * 0.04} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


