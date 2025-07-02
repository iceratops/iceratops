import React from 'react'
import { Beaker, Cpu, Zap, Rocket, Mail, Code } from 'lucide-react'

const Labs = () => {
  const upcomingProjects = [
    {
      title: "AI Content Generator",
      description: "Intelligent content creation tool for global marketing campaigns",
      icon: <Cpu className="w-8 h-8" />,
      status: "In Development",
      eta: "Q3 2025"
    },
    {
      title: "Automation Workflow Builder",
      description: "Visual drag-and-drop interface for creating complex business automations",
      icon: <Zap className="w-8 h-8" />,
      status: "Planning",
      eta: "Q4 2025"
    },
    {
      title: "Global Analytics Platform",
      description: "Comprehensive analytics solution for international business operations",
      icon: <Beaker className="w-8 h-8" />,
      status: "Research",
      eta: "2026"
    }
  ]

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence integrated into practical business tools",
      icon: "🤖"
    },
    {
      title: "Global Scalability",
      description: "Built from the ground up to handle international markets and diverse user bases",
      icon: "🌍"
    },
    {
      title: "Enterprise Ready",
      description: "Robust, secure, and reliable solutions designed for business-critical operations",
      icon: "🏢"
    },
    {
      title: "Developer Friendly",
      description: "Comprehensive APIs and documentation for seamless integration",
      icon: "👨‍💻"
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Labs</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Experimental SaaS solutions and cutting-edge software for the global market
          </p>
          <div className="glass-card p-6 inline-block">
            <div className="flex items-center justify-center space-x-2 text-yellow-400">
              <Beaker className="w-6 h-6" />
              <span className="font-semibold text-lg">Innovation in Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                  The Future of <span className="gradient-text">Business Software</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-300">
                  <p>
                    Iceratops Labs is where innovation meets practicality. We're developing the next generation 
                    of SaaS solutions that combine artificial intelligence, automation, and global accessibility 
                    to solve real business challenges.
                  </p>
                  <p>
                    Our experimental approach allows us to push boundaries and create software that doesn't just 
                    meet current needs, but anticipates future requirements of businesses operating in an 
                    increasingly connected world.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 purple-gradient rounded-2xl opacity-20 animate-float"></div>
                <div className="absolute top-8 left-8 w-48 h-48 bg-yellow-400 rounded-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-16 right-8 w-32 h-32 bg-blue-400 rounded-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Projects in <span className="gradient-text">Development</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a sneak peek at the innovative SaaS solutions we're building for global businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="glass-card p-8">
                <div className="text-yellow-400 mb-6 flex justify-center">
                  {project.icon}
                </div>
                <h3 className="font-orbitron text-xl font-semibold mb-4 text-white text-center">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Status:</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      project.status === 'In Development' ? 'bg-green-600 text-white' :
                      project.status === 'Planning' ? 'bg-yellow-600 text-white' :
                      'bg-blue-600 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Expected:</span>
                    <span className="text-sm text-yellow-400 font-semibold">{project.eta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Built for the <span className="gradient-text">Global Market</span>
            </h2>
            <p className="text-xl text-gray-300">
              Every solution we develop is designed with international businesses in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-orbitron text-lg font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Access */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <Rocket className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              Join the <span className="gradient-text">Beta Program</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be among the first to test our innovative SaaS solutions. Get early access, 
              influence development, and enjoy special pricing for beta participants worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="btn-primary px-6 py-3">
                Join Beta
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Priority access for early supporters. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Development</span> Philosophy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How we approach building software that makes a difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Code className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">User-Centric Design</h3>
                    <p className="text-gray-300">Every feature is designed with real user needs in mind, tested across different cultures and markets.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Performance First</h3>
                    <p className="text-gray-300">Speed and reliability are non-negotiable. Our solutions work fast, everywhere in the world.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Beaker className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Continuous Innovation</h3>
                    <p className="text-gray-300">We're always experimenting with new technologies to stay ahead of the curve.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
                    <p className="text-gray-300">Our global community of users helps shape the direction of our products.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Rocket className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Scalable Architecture</h3>
                    <p className="text-gray-300">Built to grow with your business, from startup to enterprise scale.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Cpu className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">AI Integration</h3>
                    <p className="text-gray-300">Artificial intelligence isn't just a feature—it's woven into the fabric of everything we build.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Labs