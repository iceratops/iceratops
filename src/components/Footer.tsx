import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="glass-effect mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/iceratops_logo.svg" alt="Iceratops" className="h-20 w-auto" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering the future with AI automation and professional web design.
              We create innovative digital solutions for businesses worldwide.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Globe size={16} />
                <span>Global Services</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>Remote Delivery</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link to="/launchlite" className="text-gray-300 hover:text-yellow-400 transition-colors">Web Design</Link></li>
              <li><Link to="/forge" className="text-gray-300 hover:text-yellow-400 transition-colors">Automation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <a href="mailto:hello@iceratops.com" className="hover:text-yellow-400 transition-colors">
                  hello@iceratops.com
                </a>
              </div>
              <a 
                href="https://linktr.ee/iceratops" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <img src="/linktree.svg" alt="Linktree" className="w-4 h-4" />
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center text-gray-400 mb-4">
            <p>&copy; 2025 Iceratops. All rights reserved. | Empowering global innovation through technology solutions.</p>
          </div>
          <div className="text-center text-sm text-gray-500">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-yellow-400 transition-colors">Cookie Policy</Link>
              <Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
              <button 
                onClick={() => {
                  localStorage.removeItem('cookieConsent')
                  localStorage.removeItem('cookiePreferences')
                  window.location.reload()
                }}
                className="hover:text-yellow-400 transition-colors"
              >
                Manage Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer