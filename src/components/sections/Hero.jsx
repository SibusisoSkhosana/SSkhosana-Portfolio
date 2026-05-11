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
        timer = setTimeout(() => setDisplayText(currentText.slice(0, displayText.length + 1)), 100)
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, textIndex, isDeleting])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-24 right-16 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-20"
          animate={{ y: [0, -28, 0], x: [0, 24, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-24 left-16 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-20"
          animate={{ y: [0, 28, 0], x: [0, -24, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-15"
          animate={{ y: [0, 18, 0], x: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Sibusiso Skhosana
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div variants={itemVariants} className="h-14 mb-6 flex items-center justify-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-300">
              {displayText}
              <span className="animate-blink ml-0.5">|</span>
            </div>
          </motion.div>

          {/* Role line */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-600 dark:text-zinc-400 mb-3 tracking-wide"
          >
            Software Engineer · Cloud &amp; AI Enthusiast · Problem Solver
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-500 dark:text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building systems, solving problems, and exploring the future of technology.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 flex-wrap"
          >
            {[
              { href: 'https://github.com/SSkhosana', label: 'GitHub', glow: 'hover:glow-purple' },
              { href: 'https://linkedin.com/in/sibusiso-skhosana', label: 'LinkedIn', glow: 'hover:glow-cyan' },
              { href: '/resource_docs/SibusisoDaleSkhosanaResume CRC.pdf.pdf', label: 'Download CV', glow: 'hover:glow-pink', download: true },
            ].map((btn) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.download ? undefined : '_blank'}
                rel={btn.download ? undefined : 'noopener noreferrer'}
                download={btn.download}
                className={`px-8 py-3 rounded-xl glass-light text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-white/10 transition-all duration-300 ${btn.glow}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.label}
              </motion.a>
            ))}

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-xl glass-light text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-white/10 transition-all duration-300 hover:glow-purple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-7 h-11 rounded-full border-2 border-purple-400/60 dark:border-purple-400 flex items-start justify-center p-1.5">
              <motion.div
                className="w-1 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"
                animate={{ y: [0, 5, 0] }}
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
