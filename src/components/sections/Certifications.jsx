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
      color: 'from-amber-400 to-orange-400',
      link: '/resource_docs/AWS Certified Cloud Practitioner certificate.pdf',
    },
  ]

  const currentlyExploring = [
    { title: 'AI & Machine Learning', icon: '🤖', color: 'from-purple-500 to-indigo-500' },
    { title: 'Quantum Computing', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { title: 'Cloud Architecture', icon: '🏗️', color: 'from-blue-500 to-indigo-500' },
    { title: 'DevOps & Automation', icon: '⚙️', color: 'from-teal-500 to-cyan-500' },
    { title: 'Distributed Systems', icon: '🔗', color: 'from-indigo-500 to-violet-500' },
    { title: 'Data Science', icon: '📊', color: 'from-violet-500 to-purple-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Certifications &amp; Learning
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 dark:text-zinc-400 text-base">
              Verified expertise and continuous knowledge acquisition
            </p>
          </motion.div>

          {/* Cert cards */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">🏆 Certifications</h3>
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -3 }}
                className="block glass-light rounded-2xl p-6 border border-amber-200 dark:border-amber-400/30 hover:border-amber-400 dark:hover:border-amber-400/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-5">
                  <motion.div
                    className="text-4xl"
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {cert.icon}
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">{cert.title}</h4>
                    <p className="text-slate-500 dark:text-zinc-400 text-sm">{cert.issuer}</p>
                    <p className="text-slate-400 dark:text-zinc-500 text-xs mt-1">ID: {cert.credentialId}</p>
                    <p className="text-purple-600 dark:text-purple-400 text-sm mt-2 font-medium group-hover:underline">
                      View Credential →
                    </p>
                  </div>

                  <div className="text-right flex flex-col items-end gap-2">
                    <span className="text-sm text-slate-500 dark:text-zinc-400">{cert.date}</span>
                    <motion.div
                      className="w-10 h-10 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-500 dark:text-amber-400 text-sm font-bold"
                      animate={{ boxShadow: ['0 0 8px rgba(251,191,36,0.2)', '0 0 18px rgba(251,191,36,0.5)', '0 0 8px rgba(251,191,36,0.2)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✓
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Currently exploring */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">🚀 Currently Exploring</h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm">
              Actively learning and experimenting with these cutting-edge domains:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentlyExploring.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="glass rounded-2xl p-5 border border-slate-200/60 dark:border-white/8 hover:border-purple-300 dark:hover:border-purple-400/40 transition-all group"
                >
                  <motion.div
                    className="text-3xl mb-3"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + index * 0.4, repeat: Infinity }}
                  >
                    {item.icon}
                  </motion.div>

                  <h4 className={`font-bold text-sm bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Roadmap */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 border border-cyan-200 dark:border-cyan-400/25">
            <h3 className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mb-4">📚 Learning Roadmap</h3>
            <div className="space-y-3">
              {[
                'Complete AWS Solutions Architect certification',
                'Deep dive into Kubernetes and container orchestration',
                'Master advanced database design and optimization',
                'Build production-grade microservices architecture',
                'Explore AI/ML applications in real-world systems',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-cyan-500 dark:text-cyan-400 mt-0.5 font-bold">→</span>
                  <span className="text-slate-700 dark:text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Credly */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 border border-purple-200 dark:border-purple-400/25">
            <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3">🎖️ Verified Credentials</h3>
            <p className="text-slate-600 dark:text-zinc-400 text-sm mb-5">
              All certifications are verified on Credly. View my complete credentials and badges:
            </p>
            <motion.a
              href="https://www.credly.com/users/sibusiso-skhosana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-xl glass-light border border-purple-200 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 font-semibold transition-all text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
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
