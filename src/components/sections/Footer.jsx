import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const isDark = document.documentElement.classList.contains('dark')
  const gitIcon = isDark ? '/images/github-white-icon.svg' : '/images/Git.svg'

  const socialLinks = [
    { icon: gitIcon, label: 'GitHub', url: 'https://github.com/SibusisoSkhosana' },
    { icon: '/images/LinkedIn_icon.svg.png', label: 'LinkedIn', url: 'https://www.linkedin.com/in/sibusiso-dale-skhosana-1465714a/' },
    { icon: '/images/amazon-web-services-logo.svg', label: 'AWS', url: '#hero' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer id="footer" className="relative py-12 border-t border-slate-200 dark:border-white/8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Top divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-px bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 rounded-full origin-left opacity-40"
          />

          {/* Footer grid */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left items-center">
            <motion.div variants={itemVariants} className="space-y-1.5">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                SIBU
              </h3>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                Building systems, solving problems,<br />exploring the future
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-light border border-slate-200 dark:border-white/10 flex items-center justify-center hover:glow-purple transition-all"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  <img src={link.icon} alt={link.label} className="w-5 h-5 object-contain" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-slate-400 dark:text-zinc-500 text-sm md:text-right space-y-0.5">
              <p>© {currentYear} Sibusiso Skhosana</p>
              <p>All rights reserved</p>
            </motion.div>
          </div>

          {/* Tagline */}
          <div className="relative h-12 flex items-center justify-center">
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-slate-400 dark:text-zinc-600 text-xs text-center"
            >
              ✨ Crafted with curiosity, built with code ✨
            </motion.div>
          </div>

          {/* Bottom divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 rounded-full origin-right opacity-40"
          />

          {/* Easter egg hint */}
          <motion.div
            variants={itemVariants}
            className="text-center text-xs text-slate-300 dark:text-zinc-700 hover:text-slate-500 dark:hover:text-zinc-500 transition-colors cursor-pointer"
            title="Try typing 'help()' in your browser console for a surprise! 🎉"
          >
            💡 Open your browser console for a special message
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
