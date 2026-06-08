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
      <div className="h-2 rounded-full bg-zinc-900/60 border border-zinc-800/50 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-400/90 via-fuchsia-400/90 to-indigo-400/90 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
          style={{ width: `${item.value}%` }}
        />
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="w-full max-w-7xl mx-auto py-16 md:py-24">
        <h2 className="h-title text-3xl md:text-5xl mb-10">Skills</h2>

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


