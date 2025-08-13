import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Web Design', path: '/launchlite' },
    { name: 'Automation', path: '/forge' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-black/20 shadow-lg border-b border-white/10' : 'backdrop-blur-sm bg-black/5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 px-6">
          <Link to="/" className="flex items-center justify-center group">
            <img 
              src="/iceratops_text_logo.svg"
              alt="Iceratops" 
              className="h-16 w-auto transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(251,176,64,0.6)] group-hover:filter group-hover:brightness-110" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="mailto:hello@iceratops.com?subject=Project Consultation" className="btn-primary">
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200 relative w-6 h-6"
            >
              <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden backdrop-blur-md bg-black/30 mt-2 rounded-lg border border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-yellow-400 bg-white/10'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <a href="mailto:hello@iceratops.com?subject=Project Consultation" className="btn-primary w-full">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar