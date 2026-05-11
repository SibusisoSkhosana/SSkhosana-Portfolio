import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2010 – 2015',
      title: 'Self-Learning Coding Journey',
      description: 'Began teaching myself HTML, CSS, and PHP for personal business projects. Discovered a passion for technology and systems thinking.',
      icon: '📚',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      year: '2015 – 2018',
      title: 'Travel & Tourism Studies',
      description: 'Pursued formal education in Travel & Tourism while maintaining entrepreneurial interests and continuous technical learning.',
      icon: '🌍',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      year: '2018 – 2023',
      title: 'Professional Experience',
      description: 'Gained valuable operational and administrative experience at Setshaba Research Centre. Built skills in reliability, communication, and problem-solving.',
      icon: '💼',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      year: '2024',
      title: 'AWS Cloud Practitioner',
      description: 'Achieved AWS Cloud Practitioner certification, solidifying knowledge of cloud architecture, infrastructure, and AWS services.',
      icon: '☁️',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      year: '2025 – 2026',
      title: 'WeThinkCode_ Training',
      description: 'Intensive software engineering training covering Java, backend systems, databases, REST APIs, Git, and agile teamwork.',
      icon: '🚀',
      color: 'from-violet-500 to-purple-500',
    },
    {
      year: '2026 – Present',
      title: 'Continuous Growth',
      description: 'Building production systems, exploring AI, distributed systems, and emerging technologies. Contributing to real-world engineering challenges.',
      icon: '🌟',
      color: 'from-indigo-500 to-cyan-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Engineering Journey
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 dark:text-zinc-400 text-base">
              A transmission log through different worlds toward engineering mastery
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 via-cyan-400 to-indigo-400 opacity-40" />

            <div className="space-y-10">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-base shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2`}
                      whileHover={{ scale: 1.25 }}
                    >
                      {event.icon}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div className="flex-1 md:w-5/12" whileHover={{ x: index % 2 === 0 ? -6 : 6 }}>
                    <div className="glass-light rounded-2xl p-6 border border-slate-200/60 dark:border-white/8 hover:border-purple-300 dark:hover:border-purple-400/40 transition-all">
                      <div className={`text-xs font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-1.5 tracking-wide`}>
                        {event.year}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{event.title}</h3>
                      <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">{event.description}</p>

                      <motion.div
                        className={`mt-4 h-px w-0 bg-gradient-to-r ${event.color}`}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.35 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-px bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 rounded-full origin-left opacity-50"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
