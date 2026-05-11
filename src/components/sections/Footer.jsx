import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const isDark = document.documentElement.classList.contains('dark')
  const gitIcon = isDark ? '/images/github-white-icon.svg' : '/images/Git.svg'

  const socialLinks = [
    { icon: gitIcon, label: 'GitHub', url: 'https://github.com/SibusisoSkhosana' },

    { icon: '/images/LinkedIn_icon.svg.png', label: 'LinkedIn', url: 'https://www.linkedin.com/in/sibusiso-dale-skhosana-1465714a/' },
    { icon: '/images/amazon-web-services-logo.svg', label: 'Portfolio', url: '#hero' },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer id="footer" className="relative py-12 px-4 border-t border-purple-400/20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-0.5 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-full origin-left"
          />

          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                SIBU
              </h3>
              <p className="text-gray-400 text-sm">
                Building systems, solving problems,
                <br />
                exploring the future
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-lg hover:glow-purple transition-all"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="w-6 h-6"
                  />
                </motion.a>

              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              variants={itemVariants}
              className="text-gray-500 text-sm md:text-right space-y-1"
            >
              <p>© {currentYear} Sibusiso Skhosana</p>
              <p>All rights reserved</p>
            </motion.div>
          </div>

          {/* Subtle animated background stars */}
          <div className="relative h-16 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-center text-gray-600 text-sm"
            >
              ✨ Crafted with curiosity, built with code ✨
            </motion.div>

            {/* Floating stars */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-gray-700"
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: '50%',
                }}
              >
                ⭐
              </motion.div>
            ))}
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full origin-right"
          />

          {/* Easter egg command hint */}
          <motion.div
            variants={itemVariants}
            className="text-center text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
            title="Try typing 'help' in your browser console for a surprise! 🎉"
          >
            💡 Hint: Open your browser console for a special message
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
