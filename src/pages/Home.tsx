import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Globe, Cpu, Star, Users, Award } from 'lucide-react'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)

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

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Web Design",
      description: "Stunning, responsive websites that captivate audiences worldwide with modern design principles."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      description: "Cutting-edge AI solutions that automate processes and enhance business intelligence globally."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Solutions",
      description: "Streamline operations with intelligent automation systems designed for international scalability."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Singapore",
      text: "Iceratops transformed our digital presence with their innovative AI solutions. Outstanding global service!",
      rating: 5
    },
    {
      name: "Marcus Weber",
      location: "Berlin, Germany",
      text: "The automation solutions have revolutionized our workflow. Professional team with exceptional results.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      location: "Barcelona, Spain",
      text: "Beautiful web design and seamless functionality. They truly understand global market needs.",
      rating: 5
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Empowering the Future with{' '}
              <span className="gradient-text">AI-driven Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stunning Global Web Design & Innovative Automation Solutions for Businesses Worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/launchlite" className="btn-primary text-lg px-8 py-4">
                Get Started Today
                <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-20 h-20 purple-gradient rounded-full opacity-20"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Global Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver world-class automation solutions and web design services to clients across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-yellow-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-orbitron text-xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Global Reach</span>, Local Excellence
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Serving clients worldwide with cutting-edge technology and personalized service
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">200+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-300">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Global Clients</span> Say
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by businesses worldwide for exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-600 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 animate-on-scroll">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Digital Future</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join businesses worldwide who trust Iceratops for their automation and web design needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/launchlite" className="btn-primary text-lg px-8 py-4 glow-effect">
              Start Your Project
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <a href="mailto:hello@iceratops.com" className="btn-secondary text-lg px-8 py-4">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home