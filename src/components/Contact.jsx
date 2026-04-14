import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: FiMail, label: 'abhiram.mahanandhi04@gmail.com', value: 'abhiram.mahanandhi04@gmail.com' },
    { icon: FiPhone, label: '+91 9154737259', value: 'tel:+919154737259' },
    { icon: FiMapPin, label: 'Hyderabad, India', value: 'Hyderabad, India' },
    { 
      icon: FiLinkedin, 
      label: 'LinkedIn', 
      value: 'https://www.linkedin.com/in/m-abhiram',
      href: true 
    },
    { 
      icon: FiGithub, 
      label: 'GitHub', 
      value: 'https://github.com/mahanandhi-abhiram-22',
      href: true 
    }
  ]

  return (
    <section id="contact" className="section py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="glass p-6 hover:shadow-xl transition-all duration-300 flex items-center space-x-4 cursor-pointer hover:-translate-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => info.href && window.open(info.value, '_blank')}
                >
                  <info.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-200">{info.label}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 lg:p-12"
        >
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-white placeholder-slate-400"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-white placeholder-slate-400"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-white placeholder-slate-400 resize-vertical"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full btn-primary py-5 text-lg font-bold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {submitted && (
              <motion.p
                className="text-center text-green-400 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Message sent successfully! 🚀
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

