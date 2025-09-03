import React, { useEffect, useRef } from 'react'
import { ExternalLink, Globe, Star, Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import WebsitePreview from '../components/WebsitePreview'

const Portfolio = () => {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "The Village For Her",
      description: "A women's empowerment platform featuring an e-commerce store with Square Online integration and mission-driven content. Built with Next.js for optimal performance and modern web standards.",
      url: "https://thevillageforher.com",
      category: "Web Platform",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify"],
      features: ["E-commerce Store", "Responsive Design", "SEO Optimized", "Mission-Driven Content", "Square Online Integration"],
             stats: {
         users: "Coming Soon",
         engagement: "Planning",
         launchDate: "2025"
       },
      highlight: true
    }
    // Add more projects here as you complete them
  ]

  const categories = ["All", "Web Platforms", "E-commerce", "AI Integration", "Brand Websites", "Next.js Apps"]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <div className="w-16 h-16 purple-gradient rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float-slow" style={{ animationDelay: '4s' }}>
          <div className="w-8 h-8 bg-purple-500 rounded-full opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-on-scroll">
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the innovative solutions we've built for clients worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-6 py-3 rounded-full border border-white/20 text-gray-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Project</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our latest and most impactful work
            </p>
          </div>

          {projects.filter(p => p.highlight).map((project) => (
            <div key={project.id} className="glass-card p-8 md:p-12 animate-on-scroll project-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Project Preview */}
                <div className="relative group">
                  <WebsitePreview 
                    url={project.url}
                    title={project.title}
                    width={800}
                    height={600}
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-orbitron text-3xl font-bold mb-4 text-white">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm border border-yellow-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{project.stats.users}</div>
                      <div className="text-sm text-gray-400">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 leading-tight">{project.stats.engagement}</div>
                      <div className="text-sm text-gray-400">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{project.stats.launchDate}</div>
                      <div className="text-sm text-gray-400">Launched</div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Live Project
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              More <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse portfolio of successful implementations
            </p>
          </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => !p.highlight).map((project, index) => (
                <div key={project.id} className="glass-card p-6 animate-on-scroll project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-4">
                    <WebsitePreview 
                      url={project.url}
                      title={project.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs border border-yellow-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>

          {/* Coming Soon Placeholder */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="glass-card p-12 max-w-2xl mx-auto">
              <div className="text-yellow-400 mb-4">
                <TrendingUp className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-white">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-300 mb-6">
                We're constantly working on new and exciting projects. Stay tuned for more amazing work!
              </p>
              <a href="mailto:hello@iceratops.com?subject=Project Consultation" className="btn-primary">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 animate-on-scroll">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our <span className="gradient-text">Portfolio</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something amazing together that showcases your vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@iceratops.com?subject=Project Consultation" className="btn-primary text-lg px-8 py-4 glow-effect">
              Start Your Project
              <ArrowRight size={20} />
            </a>
            <a href="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
