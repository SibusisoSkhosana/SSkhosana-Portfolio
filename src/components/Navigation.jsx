import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Navigation = ({ activeSection, isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.1 }}
        >
          SIBU
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'text-purple-400 dark:text-purple-300'
                  : 'text-zinc-700 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex gap-2 md:gap-4">
          <motion.button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              toggleDarkMode()
            }}
            className="p-2 rounded-lg glass-light border border-purple-400/10 dark:border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </motion.button>

          {/* Hamburger Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg glass-light border border-purple-400/10 dark:border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 flex flex-col justify-around">
              <motion.span
                className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                animate={isMobileMenuOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                animate={isMobileMenuOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-950/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-purple-400/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-purple-400/20 text-purple-300'
                      : 'text-zinc-300 hover:bg-purple-400/10 hover:text-white'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
