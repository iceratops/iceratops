import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Globe, Cpu, Star, Users, Award, Target, Rocket, Shield } from 'lucide-react'

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
      title: "Web Design",
      description: "Professional, fast websites that work perfectly on all devices and help you connect with customers."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      description: "Smart tools that automate your work and give you insights to make better decisions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Solutions",
      description: "Custom automation that saves you time and money by handling repetitive tasks."
    }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "We use the latest technology to solve real problems and create solutions that actually work."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "We get your projects done quickly without cutting corners on quality."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliable & Secure",
      description: "Everything we build is secure, stable, and ready for real-world use."
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
              <span className="gradient-text">Web Design & AI Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Professional web design and powerful automation solutions for businesses worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/launchlite" className="btn-primary text-lg px-8 py-4">
                Get Website
                <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/forge" className="btn-secondary text-lg px-8 py-4">
                Get Automation
                <ArrowRight className="inline ml-2" size={20} />
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
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build websites and automation tools that help businesses grow and succeed
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

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              These are the principles that guide how we work with every client
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-yellow-400 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 animate-on-scroll">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Business</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's build something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/launchlite" className="btn-primary text-lg px-8 py-4 glow-effect">
              Get Website
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <Link to="/forge" className="btn-secondary text-lg px-8 py-4">
              Get Automation
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home