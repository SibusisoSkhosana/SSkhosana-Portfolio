import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const isDark = document.documentElement.classList.contains('dark')
  const gitIcon = isDark ? '/images/github-white-icon.svg' : '/images/Git.svg'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      title: 'Email',
      value: 'sbasiso@gmail.com',
      link: 'mailto:sbasiso@gmail.com',
      icon: '📧',
      color: 'from-purple-400 to-pink-400',
    },
    {
      title: 'GitHub',
      value: 'github.com/SibusisoSkhosana',
      link: 'https://github.com/SibusisoSkhosana',
      icon: gitIcon,
      color: 'from-gray-400 to-gray-600',
    },

    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/sibusiso-dale-skhosana-1465714a/',
      link: 'https://www.linkedin.com/in/sibusiso-dale-skhosana-1465714a/',
      icon: '/images/LinkedIn_icon.svg.png',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      title: 'WhatsApp',
      value: '+27 63 162 7778',
      link: 'https://wa.me/27631627778',
      icon: '/images/whatsapp-color-icon.svg',
      color: 'from-green-400 to-emerald-400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative pt-24 pb-20">
    <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Meaningful
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Whether it's software engineering, cloud systems, automation, or ambitious ideas — I'm always open to meaningful opportunities and collaborations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Name</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-light text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-light text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Message</label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg glass-light text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                    submitStatus === 'success'
                      ? 'bg-green-500/30 text-green-300'
                      : submitStatus === 'error'
                      ? 'bg-red-500/30 text-red-300'
                      : 'glass-light text-white hover:glow-purple'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Transmitting...
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
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="glass-light rounded-lg p-4 border border-purple-400/20 hover:border-purple-400/50 transition-all group flex items-center gap-4"
                  >
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {typeof method.icon === 'string' && method.icon.startsWith('/') ? (
                        <img
                          src={method.icon}
                          alt={`${method.title} icon`}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <span className="text-2xl leading-none">{method.icon}</span>
                      )}
                    </motion.div>

                    <div className="flex-1">
                      <p className="text-xs text-gray-400">{method.title}</p>
                      <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                        {method.value}
                      </p>
                    </div>

                    <motion.span className="text-purple-400 text-lg" whileHover={{ x: 5 }}>
                      →
                    </motion.span>
                  </motion.a>
                ))}
              </div>

              {/* CV Download */}
              <motion.div className="pt-4 border-t border-purple-400/20">
                <motion.a
                  href="/resource_docs/SibusisoDaleSkhosanaResume CRC.pdf.pdf"
                  download
                  className="block w-full px-6 py-3 rounded-lg glass-light text-white text-center font-semibold hover:glow-cyan transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 Download CV
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Signal transmission animation */}
          <motion.div
            variants={itemVariants}
            className="relative mt-16 h-32 glass rounded-lg border border-cyan-400/30 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-lg border border-cyan-400"
                  animate={{
                    scale: [0.8, 1.5],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                className="text-4xl mb-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📡
              </motion.div>
              <p className="text-gray-300 font-semibold">Signal Ready for Transmission</p>
              <p className="text-xs text-gray-500 mt-1">Awaiting your message</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
