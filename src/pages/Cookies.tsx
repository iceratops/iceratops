import React from 'react'
import { Link } from 'react-router-dom'
import { Cookie, Settings, Shield, Clock, ArrowLeft, Info } from 'lucide-react'

const Cookies = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Cookie Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="glass-card p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
            </p>
            <div className="flex items-center text-yellow-400">
              <Cookie className="w-5 h-5 mr-2" />
              <span className="text-gray-300">Cookies help us improve your browsing experience</span>
            </div>
          </section>

          {/* Cookie Categories */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="font-semibold text-white text-lg">Essential Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  These cookies are necessary for the website to function properly. They cannot be disabled.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>• Session management</span>
                    <span className="text-green-400">Always Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Security features</span>
                    <span className="text-green-400">Always Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Basic functionality</span>
                    <span className="text-green-400">Always Active</span>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-3">
                  <Settings className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="font-semibold text-white text-lg">Analytics Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>• Google Analytics</span>
                    <span className="text-blue-400">Optional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Performance metrics</span>
                    <span className="text-blue-400">Optional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• User behavior analysis</span>
                    <span className="text-blue-400">Optional</span>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-3">
                  <Info className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="font-semibold text-white text-lg">Marketing Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  These cookies are used to track visitors across websites to display relevant advertisements.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>• Social media pixels</span>
                    <span className="text-purple-400">Optional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Advertising networks</span>
                    <span className="text-purple-400">Optional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Remarketing</span>
                    <span className="text-purple-400">Optional</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Cookie Duration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4 text-center">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Session Cookies</h3>
                <p className="text-gray-300 text-sm">Deleted when you close your browser</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Persistent Cookies</h3>
                <p className="text-gray-300 text-sm">Remain until manually deleted or expired</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Third-party Cookies</h3>
                <p className="text-gray-300 text-sm">Duration set by external services</p>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-4">
              You can control and manage cookies in several ways:
            </p>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <h3 className="font-semibold text-yellow-400 mb-2">Browser Settings</h3>
                <p className="text-gray-300 text-sm">
                  Most browsers allow you to block or delete cookies. Check your browser's help section for instructions.
                </p>
              </div>
              <div className="glass-card p-4">
                <h3 className="font-semibold text-yellow-400 mb-2">Cookie Consent</h3>
                <p className="text-gray-300 text-sm">
                  Use our cookie consent banner to manage your preferences for non-essential cookies.
                </p>
              </div>
              <div className="glass-card p-4">
                <h3 className="font-semibold text-yellow-400 mb-2">Third-party Opt-outs</h3>
                <p className="text-gray-300 text-sm">
                  Visit the websites of third-party services to opt out of their tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Third-party Services */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Third-party Services</h2>
            <p className="text-gray-300 mb-4">
              We use the following third-party services that may set cookies:
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-white">Google Analytics</h3>
                  <p className="text-gray-300 text-sm">Website analytics and performance tracking</p>
                </div>
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 text-sm"
                >
                  Opt Out
                </a>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-white">Social Media Platforms</h3>
                  <p className="text-gray-300 text-sm">Social media integration and sharing</p>
                </div>
                <span className="text-gray-400 text-sm">Manage via platform settings</span>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-gray-300">
              Please check this page periodically for any updates. Your continued use of our website after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="glass-card p-4">
              <a href="mailto:hello@iceratops.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                hello@iceratops.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Cookies
