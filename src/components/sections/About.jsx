import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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
          className="space-y-8"
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          {/* Main about paragraph */}
          <motion.div variants={itemVariants} className="glass-light rounded-lg p-8">
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              My journey in technology began with curiosity and self-learning, long before any formal training. What started as a fascination with how systems work evolved into a passion for solving complex problems through code.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Before diving into software engineering, I studied Travel & Tourism and gained valuable experience in operational and administrative roles. These years taught me the importance of reliability, communication, and creative problem-solving. I then taught myself HTML, CSS, and PHP to build websites for my own business ventures, discovering a deeper calling in technology.
            </p>
          </motion.div>

          {/* Timeline and achievements */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            {/* WeThinkCode section */}
            <motion.div className="glass-light rounded-lg p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">WeThinkCode_ Journey</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▸</span> Java & Backend Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▸</span> Databases & APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▸</span> Problem Solving & Debugging
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▸</span> Git & Version Control
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">▸</span> Teamwork & Agile Workflow
                </li>
              </ul>
            </motion.div>

            {/* Interests section */}
            <motion.div className="glass-light rounded-lg p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Deeply Fascinated By</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Cloud Computing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> AI & Machine Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Distributed Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Quantum Computing Concepts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Emerging Technologies
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Personal interests */}
          <motion.div variants={itemVariants} className="glass rounded-lg p-8">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Beyond Code</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Outside of software engineering, I'm passionate about music production, entrepreneurship, creative thinking, and staying at the forefront of technology research. I believe in building things that solve real-world problems and constantly experimenting with new ideas and emerging technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-purple-300">Philosophy:</span> Confident but humble. Curious but grounded. Ambitious but authentic.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
