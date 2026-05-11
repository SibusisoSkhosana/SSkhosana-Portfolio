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
      focus: [
        'AI integration concepts',
        'System design',
        'Experimentation',
        'User interaction',
        'Innovation',
        'Creative engineering',
      ],
      technologies: ['Python', 'AI APIs', 'Audio Processing', 'Frontend Integration', 'Backend Systems'],
      challenges: [
        {
          challenge: 'Complex Audio Processing Integration',
          solution: 'Implemented efficient audio handling with real-time processing pipelines',
        },
        {
          challenge: 'AI Model Integration',
          solution: 'Built abstraction layer for seamless AI API integration',
        },
        {
          challenge: 'User Experience Design',
          solution: 'Created intuitive interface for advanced audio controls',
        },
      ],
      highlights: 'Demonstrates curiosity beyond traditional junior developer projects and showcases interest in emerging technologies and intelligent systems.',
      lessons: 'Learned the importance of modular design when integrating multiple complex systems.',
      impact: 'Pushes boundaries of audio technology and AI integration in creative applications.',
      scalability: 'Designed with horizontal scaling in mind for real-time processing',
      github: 'https://github.com/SSkhosana/auralis',
    },
    {
      id: 2,
      title: 'Findito',
      category: 'Utility Platform / Search & Discovery',
      tagline: 'Smart discovery and search platform',
      description: 'A discovery-focused platform designed to help users efficiently locate, organize, and interact with information in smarter ways.',
      focus: [
        'Usability',
        'Backend logic',
        'Data handling',
        'Search functionality',
        'Workflow optimization',
        'Scalable thinking',
      ],
      technologies: ['Java', 'REST APIs', 'Database Systems', 'Search Logic', 'Frontend/Backend Integration'],
      challenges: [
        {
          challenge: 'Efficient Search Algorithms',
          solution: 'Implemented indexed search with caching for sub-second response times',
        },
        {
          challenge: 'Data Organization',
          solution: 'Designed flexible data model supporting various information types',
        },
        {
          challenge: 'User Workflow Optimization',
          solution: 'Built intuitive discovery mechanism based on user behavior',
        },
      ],
      highlights: 'Demonstrates product-oriented thinking and practical software engineering focused on solving real user problems.',
      lessons: 'Discovered importance of understanding user workflows before building features.',
      impact: 'Provides practical tool that genuinely solves information discovery challenges.',
      scalability: 'Architected for distributed caching and search indexing',
      github: 'https://github.com/SSkhosana/findito',
    },
    {
      id: 3,
      title: 'AWS Student Intervention System',
      category: 'Cloud Computing / EducTech / Distributed Systems',
      tagline: 'Enterprise cloud-based intervention platform',
      description: 'A cloud-based student intervention and support system designed to assist institutions in identifying, tracking, and supporting students who may require academic or operational intervention.',
      focus: [
        'AWS cloud services',
        'Backend architecture',
        'Database integration',
        'Scalability',
        'System reliability',
        'Team collaboration',
        'Real-world impact',
      ],
      technologies: ['AWS', 'Java', 'REST APIs', 'SQL Databases', 'Cloud Infrastructure', 'Distributed Systems'],
      challenges: [
        {
          challenge: 'Real-time Data Processing',
          solution: 'Leveraged AWS Lambda and DynamoDB for event-driven architecture',
        },
        {
          challenge: 'System Scalability',
          solution: 'Implemented auto-scaling policies and load balancing across availability zones',
        },
        {
          challenge: 'Data Security & Compliance',
          solution: 'Applied encryption, access controls, and audit logging for GDPR compliance',
        },
      ],
      highlights: 'Enterprise-level junior engineering work emphasizing cloud engineering concepts, scalable architecture, problem-solving, and collaboration.',
      lessons: 'Learned production-style thinking: monitoring, logging, error handling, and disaster recovery.',
      impact: 'Directly assists institutions in providing timely support to at-risk students.',
      scalability: 'Handles thousands of concurrent users with multi-region deployment capability',
      github: 'https://github.com/SSkhosana/aws-student-intervention',
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
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent dark:from-cyan-300 dark:to-pink-300">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 text-lg">
              Mission modules showcasing real engineering work
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.id !== 3)
              .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, rotateY: 3 }}
                className="group glass-light rounded-lg overflow-hidden cursor-pointer border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-purple-600/20 to-cyan-600/20">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  {/* Project category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/50 rounded-full text-xs text-purple-200 font-semibold">
                    {project.category}
                  </div>

                  {/* Floating particles effect */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400 rounded-full"
                      animate={{
                        x: Math.random() * 300 - 150,
                        y: Math.random() * 200 - 100,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{
                        left: `${30 + i * 30}%`,
                        top: `${40 + i * 20}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.tagline}</p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-purple-400/20 text-purple-300 border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-purple-400/20 text-purple-300 border border-purple-400/30">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <motion.button
                    className="text-purple-400 font-semibold text-sm hover:text-purple-200 transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Student Intervention (single stretched box across page) */}
          {projects[2] && (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-light rounded-lg overflow-hidden cursor-pointer border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 lg:col-span-2 w-full"
              onClick={() => setSelectedProject(projects[2])}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="relative overflow-hidden rounded-lg h-64 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/50 rounded-full text-xs text-cyan-200 font-semibold">
                    {projects[2].category}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-300 transition-colors">
                    {projects[2].title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{projects[2].tagline}</p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {projects[2].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[2].technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="text-cyan-400 font-semibold text-sm hover:text-cyan-200 transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass max-w-2xl max-h-96 overflow-y-auto rounded-lg p-8 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-400">{selectedProject.tagline}</p>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="text-2xl text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                >
                  ✕
                </motion.button>
              </div>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-purple-400 font-bold mb-2">Key Challenges & Solutions:</h4>
                  {selectedProject.challenges.map((item, idx) => (
                    <div key={idx} className="mb-2 text-sm">
                      <p className="text-gray-400"><strong>→ {item.challenge}</strong></p>
                      <p className="ml-4 text-gray-500">✓ {item.solution}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-cyan-400 font-bold mb-2">Impact & Lessons:</h4>
                  <p className="text-sm">{selectedProject.impact}</p>
                  <p className="text-sm mt-2">{selectedProject.lessons}</p>
                </div>

                <div>
                  <h4 className="text-pink-400 font-bold mb-2">Scalability:</h4>
                  <p className="text-sm">{selectedProject.scalability}</p>
                </div>

                <div className="pt-4 flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/40 transition-colors text-sm font-semibold"
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
