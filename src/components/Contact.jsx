import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    window.setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
      window.setTimeout(() => setStatus('idle'), 2500)
    }, 900)
  }

  return (
    <section id="contact" className="section">
      <div className="w-full max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="lg:pr-8">
            <h2 className="h-title text-3xl md:text-5xl mb-4">Get In Touch</h2>
            <p className="muted text-sm md:text-base leading-relaxed">
              Minimal form, fast feedback. Send a message and I’ll get back to you.
            </p>

            <div className="mt-6 space-y-3">
              <div className="thin-card rounded-2xl p-4">
                <div className="text-white font-light">Email</div>
                <div className="text-white font-bold">abhiram.mahanandhi04@gmail.com</div>
              </div>
              <div className="thin-card rounded-2xl p-4">
                <div className="text-white font-light">Phone</div>
                <div className="text-white font-bold">+91 9154737259</div>
              </div>
              <div className="thin-card rounded-2xl p-4">
                <div className="text-white font-light">Location</div>
                <div className="text-white font-bold">Hyderabad, India</div>
              </div>
            </div>
          </div>

          <motion.div
            className="thin-card rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="muted text-xs">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full bg-transparent border border-zinc-800/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/60"
                  required
                />
              </div>

              <div>
                <label className="muted text-xs">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full bg-transparent border border-zinc-800/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/60"
                  required
                />
              </div>

              <div>
                <label className="muted text-xs">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="mt-2 w-full bg-transparent border border-zinc-800/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/60 resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary-soft w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: status === 'sent' ? 1 : 0, y: status === 'sent' ? 0 : 8 }}
                transition={{ duration: 0.25 }}
                className="text-zinc-400 text-sm"
              >
                Thanks — message delivered (simulated).
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact


