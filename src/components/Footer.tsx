import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="glass-effect mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 purple-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-orbitron font-bold text-xl gradient-text">
                Iceratops
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering the future with AI-driven automation and stunning global web design. 
              We create innovative solutions for businesses worldwide.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Globe size={16} />
                <span>Global Services</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>Worldwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link to="/launchlite" className="text-gray-300 hover:text-yellow-400 transition-colors">Launchlite</Link></li>
              <li><Link to="/blueprints" className="text-gray-300 hover:text-yellow-400 transition-colors">Blueprints</Link></li>
              <li><Link to="/signal" className="text-gray-300 hover:text-yellow-400 transition-colors">Signal</Link></li>
              <li><Link to="/labs" className="text-gray-300 hover:text-yellow-400 transition-colors">Labs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>hello@iceratops.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe size={16} />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Iceratops. All rights reserved. | Empowering global innovation through AI and automation.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer