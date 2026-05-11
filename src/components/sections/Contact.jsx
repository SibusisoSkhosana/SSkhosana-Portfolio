import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const isDark = document.documentElement.classList.contains('dark')
  const gitIcon = isDark ? '/images/github-white-icon.svg' : '/images/Git.svg'

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 3000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    { title: 'Email', value: 'sbasiso@gmail.com', link: 'mailto:sbasiso@gmail.com', icon: '📧' },
    { title: 'GitHub', value: 'github.com/SibusisoSkhosana', link: 'https://github.com/SibusisoSkhosana', icon: gitIcon },
    { title: 'LinkedIn', value: 'linkedin.com/in/sibusiso-dale-skhosana', link: 'https://www.linkedin.com/in/sibusiso-dale-skhosana-1465714a/', icon: '/images/LinkedIn_icon.svg.png' },
    { title: 'WhatsApp', value: '+27 63 162 7778', link: 'https://wa.me/27631627778', icon: '/images/whatsapp-color-icon.svg' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <section className="relative py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-14"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Let's Build Something Meaningful
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 dark:text-zinc-400 text-base max-w-xl mx-auto">
              Whether it's software engineering, cloud systems, automation, or ambitious ideas — I'm always open to meaningful opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-zinc-300 mb-1.5">Name</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass-light border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-sm"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-zinc-300 mb-1.5">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass-light border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-zinc-300 mb-1.5">Message</label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl glass-light border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none text-sm"
                    placeholder="Tell me about your project or opportunity..."
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-xl font-semibold transition-all text-sm ${
                    submitStatus === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-400/30'
                      : submitStatus === 'error'
                      ? 'bg-red-50 dark:bg-red-500/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-400/30'
                      : 'glass-light border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:glow-purple'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      Transmitting…
                    </motion.span>
                  ) : submitStatus === 'success' ? (
                    '✓ Message sent successfully!'
                  ) : submitStatus === 'error' ? (
                    '✕ Error sending message'
                  ) : (
                    'Transmit Message →'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact methods */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Direct Contact</h3>

              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 6 }}
                    className="glass-light rounded-xl p-4 border border-slate-200 dark:border-white/8 hover:border-purple-300 dark:hover:border-purple-400/40 transition-all group flex items-center gap-4"
                  >
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center"
                      animate={{ rotate: [0, 4, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.4 }}
                    >
                      {typeof method.icon === 'string' && method.icon.startsWith('/') ? (
                        <img src={method.icon} alt={method.title} className="w-7 h-7 object-contain" />
                      ) : (
                        <span className="text-2xl leading-none">{method.icon}</span>
                      )}
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 dark:text-zinc-500 mb-0.5">{method.title}</p>
                      <p className="text-slate-800 dark:text-white font-semibold text-sm truncate group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        {method.value}
                      </p>
                    </div>

                    <span className="text-purple-400 dark:text-purple-400 text-lg flex-shrink-0">→</span>
                  </motion.a>
                ))}
              </div>

              {/* CV download */}
              <div className="pt-2 border-t border-slate-200 dark:border-white/10">
                <motion.a
                  href="/resource_docs/SibusisoDaleSkhosanaResume CRC.pdf.pdf"
                  download
                  className="block w-full px-6 py-3 rounded-xl glass-light border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-center font-semibold hover:glow-cyan transition-all text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  📄 Download CV
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Signal animation */}
          <motion.div
            variants={itemVariants}
            className="relative h-28 glass rounded-2xl border border-cyan-200 dark:border-cyan-400/25 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-15">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-2xl border border-cyan-400"
                  animate={{ scale: [0.85, 1.4], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
            </div>
            <div className="relative z-10 text-center">
              <motion.div className="text-3xl mb-1.5" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                📡
              </motion.div>
              <p className="text-slate-700 dark:text-zinc-300 font-semibold text-sm">Signal Ready for Transmission</p>
              <p className="text-slate-400 dark:text-zinc-500 text-xs mt-0.5">Awaiting your message</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
