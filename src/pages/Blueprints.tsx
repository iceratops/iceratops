import React from 'react'
import { FileText, Download, Star, Clock, Mail } from 'lucide-react'

const Blueprints = () => {
  const upcomingProducts = [
    {
      title: "Website Templates",
      description: "Professional, customizable website templates for various industries",
      icon: <FileText className="w-8 h-8" />,
      eta: "Q2 2025"
    },
    {
      title: "Automation Workflows",
      description: "Pre-built automation templates for common business processes",
      icon: <Download className="w-8 h-8" />,
      eta: "Q3 2025"
    },
    {
      title: "AI Integration Kits",
      description: "Ready-to-use AI components for web applications",
      icon: <Star className="w-8 h-8" />,
      eta: "Q4 2025"
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Blueprints</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Digital products and templates to accelerate your global business growth
          </p>
          <div className="glass-card p-6 inline-block">
            <div className="flex items-center justify-center space-x-2 text-yellow-400">
              <Clock className="w-6 h-6" />
              <span className="font-semibold text-lg">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              What's <span className="gradient-text">Coming</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're developing a comprehensive suite of digital products to help businesses worldwide launch faster and scale efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProducts.map((product, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="text-yellow-400 mb-6 flex justify-center">
                  {product.icon}
                </div>
                <h3 className="font-orbitron text-xl font-semibold mb-4 text-white">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {product.description}
                </p>
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Expected: {product.eta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                  <span className="gradient-text">Premium Quality</span> Templates
                </h2>
                <div className="space-y-4 text-lg text-gray-300">
                  <p>
                    Our upcoming Blueprints collection will feature professionally designed templates 
                    and digital products crafted with the same attention to detail as our custom projects.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Mobile-responsive designs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>SEO-optimized structure</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Easy customization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Global compatibility</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 purple-gradient rounded-2xl opacity-20 animate-float"></div>
                <div className="absolute top-8 left-8 w-48 h-48 bg-yellow-400 rounded-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <Mail className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              Be the First to <span className="gradient-text">Know</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our global community and get notified when Blueprints launches. 
              Plus, receive exclusive early access and special pricing for our first customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="btn-primary px-6 py-3">
                Notify Me
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Why Wait for <span className="gradient-text">Blueprints</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Faster Launch</h3>
              <p className="text-gray-300 text-sm">Skip the development time and launch your project in days, not months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">💰</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Cost Effective</h3>
              <p className="text-gray-300 text-sm">Professional quality at a fraction of custom development costs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🌍</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Global Ready</h3>
              <p className="text-gray-300 text-sm">Optimized for international markets and multiple languages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🎨</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Design</h3>
              <p className="text-gray-300 text-sm">Modern, professional designs that convert visitors into customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blueprints