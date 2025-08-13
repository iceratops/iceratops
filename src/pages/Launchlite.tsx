import React from 'react'
import { Link } from 'react-router-dom'
import { Check, Zap, Globe, Smartphone, ArrowRight } from 'lucide-react'

const Launchlite = () => {
  const features = [
    "Lightning-fast one-page websites",
    "Mobile-responsive design",
    "SEO optimization included",
    "Global CDN deployment",
    "SSL certificate included",
    "Contact form integration",
    "Social media integration"
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      description: "Perfect for small businesses and personal brands",
      features: [
        "One-page responsive website",
        "Basic SEO optimization",
        "Contact form",
        "Social media links",
        "Mobile optimization"
      ]
    },
    {
      name: "Professional",
      price: "$399",
      description: "Ideal for growing businesses and entrepreneurs",
      features: [
        "Everything in Starter",
        "Advanced SEO optimization",
        "Google Analytics integration",
        "Custom animations",
        "Lead capture forms",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      description: "For established businesses requiring premium features",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Advanced analytics",
        "A/B testing setup",
        "Conversion optimization",
        "Multi-language support"
      ]
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Launchlite</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Lightning-fast one-page websites that convert visitors into customers worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="mailto:hello@iceratops.com?subject=Website Project Discussion" className="btn-primary text-lg px-8 py-4">
            Start Your Project
            <ArrowRight className="inline ml-2" size={20} />
          </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Launchlite</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a professional, high-converting website that works perfectly across all devices and markets globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Optimized for speed with global CDN deployment ensuring fast loading times worldwide</p>
            </div>
            <div className="glass-card p-8 text-center">
              <Smartphone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-semibold mb-4">Mobile First</h3>
              <p className="text-gray-300">Responsive design that looks perfect on all devices, from mobile to desktop</p>
            </div>
            <div className="glass-card p-8 text-center">
              <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-semibold mb-4">Global Ready</h3>
              <p className="text-gray-300">SEO optimized for international markets with multi-language support available</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-center">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`glass-card p-8 relative ${tier.popular ? 'ring-2 ring-yellow-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-orbitron text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
          

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Launch</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses worldwide who've launched successfully with Launchlite
            </p>
            <a href="mailto:hello@iceratops.com?subject=Website Project Discussion" className="btn-primary text-lg px-8 py-4">
              Start the Conversation
              <ArrowRight className="inline ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Launchlite