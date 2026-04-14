import { motion } from 'framer-motion'

const skillsData = {
  Frontend: ['React', 'Redux', 'JavaScript (ES6+)', 'HTML', 'CSS', 'Responsive Design', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
  Databases: ['MongoDB', 'MySQL'],
  Languages: ['Java', 'JavaScript', 'Python', 'SQL'],
  'AI/ML': ['NLP (NLTK)', 'Scikit-learn', 'TensorFlow (Basics)', 'ML API Integration'],
  'Cloud & DevOps': ['GitHub Actions', 'CI/CD', 'Vercel'],
  Testing: ['Postman'],
  Security: ['JWT Authentication', 'RBAC', 'Secure REST APIs', 'Password Hashing'],
  Tools: ['Git', 'GitHub', 'VS Code', 'npm']
}

const Skills = () => {
  return (
    <section id="skills" className="section py-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold gradient-text text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="glass-modern p-8 lg:p-10 tilt-hover group hover:shadow-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05, rotateX: 5, rotateY: 5 }}
            >
              <h3 className="text-3xl font-bold gradient-text-primary mb-10 border-b-2 border-white/30 pb-6 text-center animate-glow">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="flex items-center space-x-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:animate-ping" />
                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

