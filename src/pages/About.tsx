import React from 'react'
import { Users, Target, Globe, Award } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Vision",
      description: "We think big and help businesses connect with customers around the world."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "We use the latest technology to solve real problems and create solutions that work."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our success. We build lasting partnerships with businesses everywhere."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain high standards in everything we do, from design to customer service."
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Iceratops</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building the future of business with AI automation and professional web design
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  At Iceratops, we help businesses grow with smart technology solutions. 
                  Our mission is to bridge the gap between powerful automation tools and practical business needs, 
                  creating digital solutions that actually work.
                </p>
                <p className="text-lg text-gray-300">
                  We combine professional design with solid functionality, making sure every project we build 
                  not only looks impressive but helps your business succeed.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 purple-gradient rounded-2xl opacity-20 animate-float"></div>
                <div className="absolute top-8 left-8 w-48 h-48 bg-yellow-400 rounded-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from our first meeting to project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center">
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
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8">
              The <span className="gradient-text">Iceratops</span> Story
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Iceratops was founded with a simple idea: businesses need better technology solutions. 
                We saw that companies were struggling with outdated websites and manual processes, 
                so we decided to build something better.
              </p>
              <p>
                Our name, Iceratops, represents strength and adaptability. Like the mighty triceratops 
                that evolved to survive, we help businesses adapt and thrive in the digital world 
                with powerful, smart solutions that last.
              </p>
              <p>
                We're building the foundation to serve clients worldwide, with every line of code, design element, 
                and automation workflow crafted with care. Our goal is to help businesses stay 
                ahead in an increasingly connected world through smart technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect p-8 md:p-12 text-center">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We combine the latest technology with proven methods to deliver great results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">Innovation</div>
                <div className="text-gray-300">Using the latest technology to solve real problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">Quality</div>
                <div className="text-gray-300">Every project built with care and attention to detail</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">Partnership</div>
                <div className="text-gray-300">Building lasting relationships through trust and collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About