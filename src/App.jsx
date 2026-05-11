import React, { useState, useEffect } from 'react'
import StarField from './components/StarField'
import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Timeline from './components/sections/Timeline'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // Always start at the top (prevents landing on footer/contact when using browser reloads)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Easter egg console command
    console.log(
      '%c🚀 WELCOME TO SIBU\'S PORTFOLIO 🚀',
      'color: #8b5cf6; font-size: 24px; font-weight: bold;'
    )
    console.log(
      '%cBuilding systems, solving problems, exploring the future of technology.',
      'color: #06b6d4; font-size: 14px;'
    )
    console.log('%c💼 Get in touch:', 'color: #ec4899; font-weight: bold;')
    console.log('📧 Email: sbasiso@gmail.com')
    console.log('🐙 GitHub: github.com/SibusisoSkhosana')
    console.log('💼 LinkedIn: linkedin.com/in/sibusiso-dale-skhosana-1465714a')
    console.log('%cType "help()" for secret commands', 'color: #fbbf24; font-style: italic;')

    // Global help function
    window.help = () => {
      console.log('%c🎯 EASTER EGG COMMANDS:', 'color: #8b5cf6; font-weight: bold; font-size: 16px;')
      console.log('help() - This message')
      console.log('showSecrets() - Reveal hidden portfolio statistics')
      console.log('startJourney() - Show my engineering timeline')
    }

    window.showSecrets = () => {
      console.log('%c📊 PORTFOLIO SECRETS:', 'color: #06b6d4; font-weight: bold; font-size: 16px;')
      console.log('Lines of Code Written: 50,000+')
      console.log('Projects Completed: 15+')
      console.log('Technologies Explored: 25+')
      console.log('Coffee Cups Consumed: ∞')
      console.log('Time to Fix Bugs: exponential(coffee)')
    }

    window.startJourney = () => {
      console.log('%c🌌 ENGINEERING JOURNEY:', 'color: #ec4899; font-weight: bold; font-size: 16px;')
      console.log('2010-2015: Self-learning odyssey begins')
      console.log('2015-2018: Tourism to Tech transition')
      console.log('2018-2023: Professional growth & Setshaba')
      console.log('2024: AWS Cloud Practitioner certified')
      console.log('2025: WeThinkCode_ transformation')
      console.log('2025-Present: Building the future ')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'timeline', 'certifications', 'contact']
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
      <div>
      <StarField />
      <Navigation activeSection={activeSection} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode((v) => !v)} />
      
      <main className="relative z-10">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="timeline"><Timeline /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  )
}

export default App
