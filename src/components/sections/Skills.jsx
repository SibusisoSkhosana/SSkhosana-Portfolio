import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Engineering',
      color: 'from-purple-500 to-pink-500',
      accent: 'text-purple-600 dark:text-purple-400',
      skills: [
        { name: 'Java', level: 'Strong Foundation' },
        { name: 'Problem Solving', level: 'Hands-on' },
        { name: 'Debugging', level: 'Hands-on' },
        { name: 'Agile Workflow', level: 'Strong Foundation' },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-cyan-500 to-blue-500',
      accent: 'text-cyan-600 dark:text-cyan-400',
      skills: [
        { name: 'REST APIs', level: 'Strong Foundation' },
        { name: 'Backend Systems', level: 'Strong Foundation' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'Database Design', level: 'Hands-on' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-blue-500 to-indigo-500',
      accent: 'text-blue-600 dark:text-blue-400',
      skills: [
        { name: 'AWS Cloud', level: 'Growing' },
        { name: 'Cloud Architecture', level: 'Growing' },
        { name: 'Linux', level: 'Intermediate' },
        { name: 'System Design', level: 'Intermediate' },
      ],
    },
    {
      title: 'Databases',
      color: 'from-violet-500 to-purple-500',
      accent: 'text-violet-600 dark:text-violet-400',
      skills: [
        { name: 'SQL', level: 'Strong Foundation' },
        { name: 'Database Optimization', level: 'Familiar' },
        { name: 'Data Modeling', level: 'Intermediate' },
        { name: 'NoSQL Concepts', level: 'Familiar' },
      ],
    },
    {
      title: 'Tools & Workflow',
      color: 'from-teal-500 to-cyan-500',
      accent: 'text-teal-600 dark:text-teal-400',
      skills: [
        { name: 'Git', level: 'Strong Foundation' },
        { name: 'GitHub', level: 'Strong Foundation' },
        { name: 'Team Collaboration', level: 'Hands-on' },
        { name: 'HTML & CSS', level: 'Intermediate' },
      ],
    },
    {
      title: 'Creative Engineering',
      color: 'from-indigo-500 to-violet-500',
      accent: 'text-indigo-600 dark:text-indigo-400',
      skills: [
        { name: 'System Design', level: 'Intermediate' },
        { name: 'Architecture Thinking', level: 'Intermediate' },
        { name: 'Innovation', level: 'Growing' },
        { name: 'Creative Engineering', level: 'Hands-on' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-14"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Skills Galaxy
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 dark:text-zinc-400 text-base">
              A constellation of expertise and continuous growth
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-light rounded-2xl p-6 border border-slate-200/60 dark:border-white/8 hover:border-purple-300 dark:hover:border-purple-400/40 transition-all duration-300"
              >
                <div className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-5`}>
                  {category.title}
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-slate-700 dark:text-zinc-300 text-sm">{skill.name}</span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border ${category.accent} border-current opacity-80`}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Orbit ring */}
                <motion.div
                  className="mt-5 h-7 w-7 mx-auto relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute inset-0 rounded-full border border-purple-300 dark:border-purple-400/30" />
                  <motion.div
                    className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-0 left-1/2 -translate-x-1/2"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
              📌 Skills Philosophy
            </h3>
            <p className="text-slate-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
              I believe in honest self-assessment. I don't use inflated percentages or misleading metrics. Each skill represents genuine experience, active projects, or continuous learning — familiar, intermediate, strong foundation, or actively growing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
