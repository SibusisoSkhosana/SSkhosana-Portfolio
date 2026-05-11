import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Auralis',
      category: 'AI / Audio Technology',
      tagline: 'Intelligent audio-focused platform',
      description: 'An experimental intelligent audio-focused platform exploring AI-assisted workflows, sound interaction, and advanced user experiences.',
      focus: ['AI integration concepts', 'System design', 'Experimentation', 'User interaction', 'Innovation', 'Creative engineering'],
      technologies: ['Python', 'AI APIs', 'Audio Processing', 'Frontend Integration', 'Backend Systems'],
      challenges: [
        { challenge: 'Complex Audio Processing Integration', solution: 'Implemented efficient audio handling with real-time processing pipelines' },
        { challenge: 'AI Model Integration', solution: 'Built abstraction layer for seamless AI API integration' },
        { challenge: 'User Experience Design', solution: 'Created intuitive interface for advanced audio controls' },
      ],
      highlights: 'Demonstrates curiosity beyond traditional junior developer projects and showcases interest in emerging technologies and intelligent systems.',
      lessons: 'Learned the importance of modular design when integrating multiple complex systems.',
      impact: 'Pushes boundaries of audio technology and AI integration in creative applications.',
      scalability: 'Designed with horizontal scaling in mind for real-time processing',
      github: 'https://github.com/SSkhosana/auralis',
      accentFrom: 'from-purple-500',
      accentTo: 'to-indigo-500',
      cardBorder: 'border-purple-200 dark:border-purple-400/30 hover:border-purple-400 dark:hover:border-purple-400/60',
      tagBg: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-200',
      techBg: 'bg-purple-50 dark:bg-purple-400/15 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-400/30',
      btnColor: 'text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200',
    },
    {
      id: 2,
      title: 'Findito',
      category: 'Search & Discovery',
      tagline: 'Smart discovery and search platform',
      description: 'A discovery-focused platform designed to help users efficiently locate, organize, and interact with information in smarter ways.',
      focus: ['Usability', 'Backend logic', 'Data handling', 'Search functionality', 'Workflow optimization', 'Scalable thinking'],
      technologies: ['Java', 'REST APIs', 'Database Systems', 'Search Logic', 'Frontend/Backend Integration'],
      challenges: [
        { challenge: 'Efficient Search Algorithms', solution: 'Implemented indexed search with caching for sub-second response times' },
        { challenge: 'Data Organization', solution: 'Designed flexible data model supporting various information types' },
        { challenge: 'User Workflow Optimization', solution: 'Built intuitive discovery mechanism based on user behavior' },
      ],
      highlights: 'Demonstrates product-oriented thinking and practical software engineering focused on solving real user problems.',
      lessons: 'Discovered importance of understanding user workflows before building features.',
      impact: 'Provides practical tool that genuinely solves information discovery challenges.',
      scalability: 'Architected for distributed caching and search indexing',
      github: 'https://github.com/SSkhosana/findito',
      accentFrom: 'from-cyan-500',
      accentTo: 'to-blue-500',
      cardBorder: 'border-cyan-200 dark:border-cyan-400/30 hover:border-cyan-400 dark:hover:border-cyan-400/60',
      tagBg: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-200',
      techBg: 'bg-cyan-50 dark:bg-cyan-400/15 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-400/30',
      btnColor: 'text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200',
    },
    {
      id: 3,
      title: 'AWS Student Intervention System',
      category: 'Cloud / EducTech / Distributed Systems',
      tagline: 'Enterprise cloud-based intervention platform',
      description: 'A cloud-based student intervention and support system designed to assist institutions in identifying, tracking, and supporting students who may require academic or operational intervention.',
      focus: ['AWS cloud services', 'Backend architecture', 'Database integration', 'Scalability', 'System reliability', 'Team collaboration', 'Real-world impact'],
      technologies: ['AWS', 'Java', 'REST APIs', 'SQL Databases', 'Cloud Infrastructure', 'Distributed Systems'],
      challenges: [
        { challenge: 'Real-time Data Processing', solution: 'Leveraged AWS Lambda and DynamoDB for event-driven architecture' },
        { challenge: 'System Scalability', solution: 'Implemented auto-scaling policies and load balancing across availability zones' },
        { challenge: 'Data Security & Compliance', solution: 'Applied encryption, access controls, and audit logging for GDPR compliance' },
      ],
      highlights: 'Enterprise-level junior engineering work emphasising cloud concepts, scalable architecture, problem-solving, and collaboration.',
      lessons: 'Learned production-style thinking: monitoring, logging, error handling, and disaster recovery.',
      impact: 'Directly assists institutions in providing timely support to at-risk students.',
      scalability: 'Handles thousands of concurrent users with multi-region deployment capability',
      github: 'https://github.com/SSkhosana/aws-student-intervention',
      accentFrom: 'from-indigo-500',
      accentTo: 'to-cyan-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 dark:text-zinc-400 text-base">
              Mission modules showcasing real engineering work
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter((p) => p.id !== 3).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`group glass-light rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${project.cardBorder}`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Card image area */}
                <div className={`relative h-52 bg-gradient-to-br ${project.accentFrom}/10 ${project.accentTo}/10 overflow-hidden`}>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accentFrom}/20 ${project.accentTo}/20`}
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${project.tagBg}`}>
                    {project.category}
                  </div>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
                      animate={{ x: [0, Math.random() * 40 - 20], y: [0, Math.random() * 40 - 20], opacity: [0, 0.8, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.6 }}
                      style={{ left: `${28 + i * 26}%`, top: `${38 + i * 18}%` }}
                    />
                  ))}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm mb-3">{project.tagline}</p>
                  <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className={`text-xs px-2.5 py-0.5 rounded-full border ${project.techBg}`}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border ${project.techBg}`}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <motion.button
                    className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${project.btnColor}`}
                    whileHover={{ x: 4 }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AWS wide card */}
          {projects[2] && (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -3 }}
              className="glass-light rounded-2xl overflow-hidden cursor-pointer border border-indigo-200 dark:border-indigo-400/30 hover:border-indigo-400 dark:hover:border-indigo-400/60 transition-all duration-300"
              onClick={() => setSelectedProject(projects[2])}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20"
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-100 dark:bg-indigo-500/30 rounded-full text-xs font-semibold text-indigo-700 dark:text-indigo-200">
                    {projects[2].category}
                  </div>
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                    {projects[2].title}
                  </h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm mb-3">{projects[2].tagline}</p>
                  <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed mb-4">
                    {projects[2].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[2].technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-0.5 rounded-full border bg-indigo-50 dark:bg-indigo-400/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors flex items-center gap-1.5 w-fit"
                    whileHover={{ x: 4 }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              className="glass max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl p-8 w-full border border-slate-200 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{selectedProject.title}</h2>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm">{selectedProject.tagline}</p>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="text-xl text-slate-400 dark:text-zinc-500 hover:text-slate-700 dark:hover:text-white ml-4"
                  whileHover={{ scale: 1.2 }}
                >
                  ✕
                </motion.button>
              </div>

              <div className="space-y-5 text-sm">
                <div>
                  <h4 className="text-purple-600 dark:text-purple-400 font-bold mb-2">Key Challenges &amp; Solutions</h4>
                  {selectedProject.challenges.map((item, idx) => (
                    <div key={idx} className="mb-2.5">
                      <p className="text-slate-700 dark:text-zinc-300 font-medium">→ {item.challenge}</p>
                      <p className="ml-4 text-slate-500 dark:text-zinc-500 mt-0.5">✓ {item.solution}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-cyan-600 dark:text-cyan-400 font-bold mb-2">Impact &amp; Lessons</h4>
                  <p className="text-slate-600 dark:text-zinc-300">{selectedProject.impact}</p>
                  <p className="text-slate-600 dark:text-zinc-300 mt-1.5">{selectedProject.lessons}</p>
                </div>

                <div>
                  <h4 className="text-pink-600 dark:text-pink-400 font-bold mb-2">Scalability</h4>
                  <p className="text-slate-600 dark:text-zinc-300">{selectedProject.scalability}</p>
                </div>

                <div className="pt-3 flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-500/30 transition-colors font-semibold border border-purple-200 dark:border-purple-400/30"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
