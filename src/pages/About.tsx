import React from 'react'
import { Users, Target, Globe, Award } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Vision",
      description: "We think globally, connecting businesses worldwide through innovative technology solutions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "Cutting-edge AI and automation technologies drive everything we create for our clients."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our mission. We build lasting partnerships with businesses across the globe."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in design, development, and customer service worldwide."
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
            Pioneering the future of global business through AI-driven automation and exceptional web design
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
                  At Iceratops, we believe in empowering businesses worldwide with cutting-edge technology solutions. 
                  Our mission is to bridge the gap between innovative AI automation and practical business applications, 
                  creating digital experiences that drive global success.
                </p>
                <p className="text-lg text-gray-300">
                  We combine futuristic design aesthetics with robust functionality, ensuring every project we deliver 
                  not only looks exceptional but performs flawlessly across international markets.
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
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from initial consultation to project delivery and beyond
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
                Founded with a vision to democratize access to cutting-edge technology, Iceratops emerged from the 
                intersection of artificial intelligence, automation, and exceptional design. We recognized that 
                businesses worldwide needed more than just websites – they needed intelligent, automated solutions 
                that could scale globally.
              </p>
              <p>
                Our name, Iceratops, represents the fusion of innovation and strength. Like the mighty triceratops 
                that adapted and thrived, we help businesses evolve and succeed in the digital age through powerful, 
                intelligent solutions that stand the test of time.
              </p>
              <p>
                Today, we serve clients across six continents, delivering projects that not only meet but exceed 
                expectations. Every line of code, every design element, and every automation workflow is crafted 
                with precision and purpose, ensuring our clients stay ahead in an increasingly connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect p-8 md:p-12 text-center">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">Global Presence</span>, Personal Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              While we serve clients worldwide, we never lose sight of the personal relationships that make great projects possible
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2020</div>
                <div className="text-gray-300">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">200+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About