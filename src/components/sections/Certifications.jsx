import React from 'react'
import { motion } from 'framer-motion'

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2022',
      credentialId: 'AWS-CP-2022',
      icon: '☁️',
      color: 'from-yellow-400 to-orange-400',
      link: '/resource_docs/AWS Certified Cloud Practitioner certificate.pdf',
    },
  ]

  const currentlyExploring = [
    { title: 'AI & Machine Learning', icon: '🤖', color: 'from-purple-400 to-pink-400' },
    { title: 'Quantum Computing', icon: '⚛️', color: 'from-cyan-400 to-blue-400' },
    { title: 'Cloud Architecture', icon: '🏗️', color: 'from-blue-400 to-cyan-400' },
    { title: 'DevOps & Automation', icon: '⚙️', color: 'from-green-400 to-emerald-400' },
    { title: 'Distributed Systems', icon: '🔗', color: 'from-orange-400 to-red-400' },
    { title: 'Data Science', icon: '📊', color: 'from-pink-400 to-purple-400' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative pt-24 pb-20 px-4">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certifications & Learning
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 text-lg">
              Verified expertise and continuous knowledge acquisition
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">🏆 Certifications</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="glass-light rounded-lg p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className={`text-5xl p-4 rounded-lg bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {cert.icon}
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <p className="text-xs text-gray-500 mb-3">ID: {cert.credentialId}</p>
                      <div className="flex items-center gap-2 text-purple-400 text-sm group-hover:gap-3 transition-all">
                        <span>View Credential</span>
                        <motion.span whileHover={{ x: 5 }}>→</motion.span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-gray-400">{cert.date}</div>
                      <motion.div
                        className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center mt-2"
                        animate={{ boxShadow: ['0 0 10px rgba(250, 204, 21, 0.3)', '0 0 20px rgba(250, 204, 21, 0.6)', '0 0 10px rgba(250, 204, 21, 0.3)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✓
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Currently Exploring */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">🚀 Currently Exploring</h3>
            <p className="text-gray-400 text-sm">
              Actively learning and experimenting with these cutting-edge domains:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentlyExploring.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, rotateY: 8 }}
                  className="glass rounded-lg p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all group"
                >
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3 + index * 0.5, repeat: Infinity }}
                  >
                    {item.icon}
                  </motion.div>

                  <h4 className={`font-bold text-white group-hover:bg-gradient-to-r group-hover:${item.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                    {item.title}
                  </h4>

                  {/* Orbiting indicator */}
                  <motion.div
                    className="mt-4 h-6 w-6 mx-auto"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-full h-full rounded-full border border-purple-400/30" />
                    <motion.div
                      className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-0 left-1/2 transform -translate-x-1/2"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Roadmap */}
          <motion.div variants={itemVariants} className="glass rounded-lg p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">📚 Learning Roadmap</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Complete AWS Solutions Architect certification</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Deep dive into Kubernetes and container orchestration</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Master advanced database design and optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Build production-grade microservices architecture</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Explore AI/ML applications in real-world systems</span>
              </div>
            </div>
          </motion.div>

          {/* Credly badges section */}
          <motion.div variants={itemVariants} className="glass rounded-lg p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">🎖️ Verified Credentials</h3>
            <p className="text-gray-400 mb-4">
              All certifications are verified on Credly. View my complete credentials and badges:
            </p>
            <motion.a
              href="https://www.credly.com/users/sibusiso-skhosana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg glass-light text-purple-300 hover:text-purple-100 font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on Credly →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
