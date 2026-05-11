import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-10"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main bio */}
          <motion.div variants={itemVariants} className="glass-light rounded-2xl p-8 md:p-10">
            <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-zinc-300 mb-5">
              My journey in technology began with curiosity and self-learning, long before any formal training. What started as a fascination with how systems work evolved into a passion for solving complex problems through code.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-zinc-300">
              Before diving into software engineering, I studied Travel &amp; Tourism and gained valuable experience in operational and administrative roles. These years taught me the importance of reliability, communication, and creative problem-solving. I then taught myself HTML, CSS, and PHP to build websites for my own business ventures, discovering a deeper calling in technology.
            </p>
          </motion.div>

          {/* Two-column cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            <motion.div className="glass-light rounded-2xl p-7">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-5">WeThinkCode_ Journey</h3>
              <ul className="space-y-3">
                {['Java & Backend Systems', 'Databases & APIs', 'Problem Solving & Debugging', 'Git & Version Control', 'Teamwork & Agile Workflow'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-purple-500 dark:text-purple-400 font-bold">▸</span>
                    <span className="text-slate-700 dark:text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="glass-light rounded-2xl p-7">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-5">Deeply Fascinated By</h3>
              <ul className="space-y-3">
                {['Cloud Computing', 'AI & Machine Learning', 'Distributed Systems', 'Quantum Computing Concepts', 'Emerging Technologies'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-cyan-500 dark:text-cyan-400 font-bold">▸</span>
                    <span className="text-slate-700 dark:text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Beyond code */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">Beyond Code</h3>
            <p className="text-slate-700 dark:text-zinc-300 leading-relaxed mb-4 text-sm md:text-base">
              Outside of software engineering, I'm passionate about music production, entrepreneurship, creative thinking, and staying at the forefront of technology research. I believe in building things that solve real-world problems and constantly experimenting with new ideas and emerging technologies.
            </p>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
              <span className="text-purple-600 dark:text-purple-300 font-medium">Philosophy:</span>{' '}
              Confident but humble. Curious but grounded. Ambitious but authentic.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
