import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2010-2015',
      title: 'Self-Learning Coding Journey',
      description: 'Began teaching myself HTML, CSS, and PHP for personal business projects. Discovered passion for technology and systems.',
      icon: '📚',
      color: 'from-purple-400 to-pink-400',
    },
    {
      year: '2015-2018',
      title: 'Travel & Tourism Studies',
      description: 'Pursued formal education in Travel & Tourism while maintaining entrepreneurial interests and technical learning.',
      icon: '🌍',
      color: 'from-cyan-400 to-blue-400',
    },
    {
      year: '2018-2023',
      title: 'Professional Experience',
      description: 'Gained valuable operational and administrative experience at Setshaba Research Centre. Learned reliability, communication, and problem-solving.',
      icon: '💼',
      color: 'from-blue-400 to-purple-400',
    },
    {
      year: '2024',
      title: 'AWS Cloud Practitioner',
      description: 'Achieved AWS Cloud Practitioner certification, exploring cloud architecture and infrastructure concepts.',
      icon: '☁️',
      color: 'from-cyan-400 to-green-400',
    },
    {
      year: '2025-2026',
      title: 'WeThinkCode_ Training',
      description: 'Intensive software engineering training covering Java, backend systems, databases, APIs, Git, and agile teamwork.',
      icon: '🚀',
      color: 'from-pink-400 to-purple-400',
    },

    {
      year: '2026-Present',
      title: 'Continuous Growth',
      description: 'Building production systems, exploring AI, distributed systems, and emerging technologies. Contributing to real-world engineering challenges.',
      icon: '🌟',
      color: 'from-orange-400 to-pink-400',
    },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
          className="space-y-8"
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Engineering Journey
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 text-lg">
              A transmission log through different worlds toward engineering mastery
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-pink-400" />

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2`}
                      whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
                    >
                      {event.icon}
                    </motion.div>
                  </div>

                  {/* Timeline content */}
                  <motion.div
                    className="flex-1 md:w-1/2"
                    whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                  >
                    <div className="glass-light rounded-lg p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all">
                      <div className={`text-sm font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-1`}>
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>

                      {/* Decorative accent */}
                      <motion.div
                        className={`mt-4 h-0.5 w-0 bg-gradient-to-r ${event.color}`}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom accent */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            className="mt-12 h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-full origin-bottom"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
