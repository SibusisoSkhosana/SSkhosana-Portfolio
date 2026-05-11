import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Software Engineer',
    'Cloud Enthusiast',
    'AI Explorer',
    'Backend Developer',
    'Problem Solver',
  ]

  useEffect(() => {
    const currentText = texts[textIndex]
    let timer

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, textIndex, isDeleting])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Sibusiso Skhosana
          </motion.h1>

          {/* Typing animation subtitle */}
          <motion.div variants={itemVariants} className="h-16 mb-6">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 dark:text-purple-300">

              {displayText}
              <span className="animate-blink">|</span>
            </div>
          </motion.div>

          {/* Secondary subtitle */}
          <motion.p
            variants={itemVariants}
className="text-token mb-4 max-w-2xl mx-auto"


          >
            Software Engineer | Cloud & AI Enthusiast | Problem Solver
          </motion.p>


          {/* Tagline */}
          <motion.p
            variants={itemVariants}
className="text-token mb-8 max-w-2xl mx-auto leading-relaxed"

          >

            Building systems, solving problems, and exploring the future of technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap"
          >
            <motion.a
              href="https://github.com/SSkhosana"
              target="_blank"
              rel="noopener noreferrer"
className="px-8 py-3 rounded-lg glass-light text-token font-semibold hover:glow-purple transition-all duration-300"

              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/sibusiso-skhosana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg glass-light text-token font-semibold hover:glow-cyan transition-all duration-300"

              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="/resource_docs/SibusisoDaleSkhosanaResume CRC.pdf.pdf"
              download
              className="px-8 py-3 rounded-lg glass-light text-token font-semibold hover:glow-pink transition-all duration-300"

              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-lg glass-light text-token font-semibold hover:glow-cyan transition-all duration-300"

              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-purple-400 flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-purple-400 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
