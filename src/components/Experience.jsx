import { motion } from 'framer-motion'
import { FiCalendar, FiCheckCircle } from 'react-icons/fi'

const experience = {
  title: 'Full-Stack ML Engineer',
  company: 'AI Powered Health Assistant',
  keyWorks: [
    'Built NLP based chatbot using Python and NLTK',
    'Integrated disease datasets for intelligent recommendations',
    'Created responsive interactive UI',
    'Implemented ML inference pipelines'
  ]
}

const Experience = () => {
  return (
    <section id="experience" className="section py-32 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold gradient-text text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass p-12 text-center hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center justify-center mb-8">
              <FiCalendar className="w-12 h-12 text-blue-500 mr-4" />
              <h3 className="text-3xl font-bold gradient-text">
                {experience.title}
              </h3>
            </div>
            
            <div className="text-2xl font-bold text-slate-200 mb-8">
              {experience.company}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {experience.keyWorks.map((work, index) => (
                <motion.div
                  key={work}
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl group hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FiCheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 group-hover:animate-bounce" />
                  <span className="text-slate-200 leading-relaxed group-hover:text-white">
                    {work}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

