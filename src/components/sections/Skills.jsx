import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Engineering',
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Java', level: 'Strong Foundation' },
        { name: 'Problem Solving', level: 'Hands-on Experience' },
        { name: 'Debugging', level: 'Hands-on Experience' },
        { name: 'Agile Workflow', level: 'Strong Foundation' },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-cyan-400 to-blue-400',
      skills: [
        { name: 'REST APIs', level: 'Strong Foundation' },
        { name: 'Backend Systems', level: 'Strong Foundation' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'Database Design', level: 'Hands-on Experience' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'AWS Cloud', level: 'Actively Growing' },
        { name: 'Cloud Architecture', level: 'Actively Growing' },
        { name: 'Linux', level: 'Intermediate' },
        { name: 'System Design', level: 'Intermediate' },
      ],
    },
    {
      title: 'Databases',
      color: 'from-pink-400 to-purple-400',
      skills: [
        { name: 'SQL', level: 'Strong Foundation' },
        { name: 'Database Optimization', level: 'Familiar' },
        { name: 'Data Modeling', level: 'Intermediate' },
        { name: 'NoSQL Concepts', level: 'Familiar' },
      ],
    },
    {
      title: 'Tools & Workflow',
      color: 'from-cyan-400 to-green-400',
      skills: [
        { name: 'Git', level: 'Strong Foundation' },
        { name: 'GitHub', level: 'Strong Foundation' },
        { name: 'Team Collaboration', level: 'Hands-on Experience' },
        { name: 'HTML & CSS', level: 'Intermediate' },
      ],
    },
    {
      title: 'Creative & Problem Solving',
      color: 'from-orange-400 to-pink-400',
      skills: [
        { name: 'System Design', level: 'Intermediate' },
        { name: 'Architecture Thinking', level: 'Intermediate' },
        { name: 'Innovation', level: 'Actively Growing' },
        { name: 'Creative Engineering', level: 'Hands-on Experience' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative pt-24 pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Skills Galaxy
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" />
            <p className="text-token dark:text-token mt-4 text-lg">
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
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-light rounded-lg p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}>
                  {category.title}
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-300">{skill.name}</span>
                      <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${category.color} bg-clip-text text-transparent border border-current`}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Orbiting particle indicator */}
                <motion.div
                  className="mt-6 h-8 w-8 mx-auto relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute inset-0 rounded-full border border-purple-400/30" />
                  <motion.div
                    className="absolute w-2 h-2 bg-purple-400 rounded-full top-0 left-1/2 transform -translate-x-1/2"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key principles */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-lg p-8 mt-12"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              📌 Skills Philosophy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I believe in honest self-assessment. I don't use inflated percentages or misleading metrics. Each skill represents genuine experience, active projects, or continuous learning. I rate honestly: familiar with the basics, intermediate with practical use, strong foundation from production experience, and actively growing through ongoing projects and exploration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
