import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Cpu, Clock, Target, Shield, Users, Mail, CheckCircle, ArrowUpRight } from 'lucide-react'

const Forge = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Automate repetitive tasks, data entry, and workflow processes to save hours of manual work."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      description: "Integrate AI tools for data analysis, customer insights, and intelligent decision-making."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Automation",
      description: "Automate customer onboarding, support responses, and engagement workflows."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Marketing Automation",
      description: "Streamline email campaigns, social media posting, and lead nurturing processes."
    }
  ]

  const useCases = [
    {
      title: "Data Processing",
      description: "Automate data extraction, cleaning, and analysis from multiple sources.",
      examples: ["Invoice processing", "Report generation", "Data migration"]
    },
    {
      title: "Customer Service",
      description: "Automate responses and route inquiries to the right team members.",
      examples: ["FAQ responses", "Ticket routing", "Follow-up emails"]
    },
    {
      title: "Sales & Marketing",
      description: "Automate lead scoring, follow-ups, and campaign management.",
      examples: ["Lead qualification", "Email sequences", "Social media posting"]
    },
    {
      title: "Internal Operations",
      description: "Streamline internal processes and team collaboration.",
      examples: ["Approval workflows", "Document processing", "Team notifications"]
    }
  ]

  const process = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Discovery",
      description: "We analyze your current processes and identify automation opportunities."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Planning",
      description: "We create a detailed plan with timeline, requirements, and cost estimate."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Development",
      description: "We build and test your automation solution with regular updates."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Launch & Support",
      description: "We deploy your automation and provide ongoing support and maintenance."
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Forge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transform your business with intelligent automation. We build custom solutions that save time, reduce errors, and scale with your growth.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="mailto:hello@iceratops.com?subject=Automation Project Discussion" className="btn-primary text-lg px-8 py-4">
               Start Your Project
               <ArrowRight className="inline ml-2" size={20} />
             </a>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Automation <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in creating intelligent automation solutions that adapt to your unique business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="text-yellow-400 mb-4">{service.icon}</div>
                <h3 className="font-orbitron text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Common <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how automation can transform different areas of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="glass-card p-8">
                <h3 className="font-orbitron text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven process to deliver automation solutions that work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="bg-yellow-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-yellow-400/20">
                  <div className="text-yellow-400">{step.icon}</div>
                </div>
                <h3 className="font-orbitron text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guidance Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Custom</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every automation project is unique. We provide custom quotes based on your specific requirements.
            </p>
          </div>
          
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <div className="glass-card p-8 text-center">
               <h3 className="font-orbitron text-xl font-semibold mb-4">Simple Automation</h3>
               <p className="text-gray-300 mb-4">Basic workflow automation and data processing</p>
                               <div className="text-4xl font-bold gradient-text mb-4">Starting from $500*</div>
               <ul className="text-gray-300 space-y-2 text-sm">
                 <li>• Single process automation</li>
                 <li>• Basic integration</li>
                 <li>• 2-3 weeks delivery</li>
               </ul>
             </div>
             
             <div className="glass-card p-8 text-center relative ring-2 ring-yellow-400">
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                 <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                   Most Popular
                 </span>
               </div>
               <h3 className="font-orbitron text-xl font-semibold mb-4">Standard Automation</h3>
               <p className="text-gray-300 mb-4">Multi-process automation with AI integration</p>
                               <div className="text-4xl font-bold gradient-text mb-4">Starting from $1,000*</div>
               <ul className="text-gray-300 space-y-2 text-sm">
                 <li>• Multiple process automation</li>
                 <li>• AI integration</li>
                 <li>• 4-6 weeks delivery</li>
               </ul>
             </div>
             
             <div className="glass-card p-8 text-center">
               <h3 className="font-orbitron text-xl font-semibold mb-4">Enterprise Automation</h3>
               <p className="text-gray-300 mb-4">Complex automation with custom development</p>
               <div className="text-4xl font-bold gradient-text mb-4">Custom Quote*</div>
               <ul className="text-gray-300 space-y-2 text-sm">
                 <li>• Custom development</li>
                 <li>• Advanced AI features</li>
                 <li>• 6+ weeks delivery</li>
               </ul>
             </div>
           </div>
          
                     <div className="text-center">
             <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
               * These are starting prices. Final cost depends on complexity, integrations, and custom requirements. 
               We provide detailed quotes after understanding your specific needs.
             </p>
             <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
               * Monthly hosting and maintenance fees may apply if we manage your automation hosting and ongoing maintenance. 
               Details will be included in your service agreement.
             </p>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-card p-12">
                     <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
             Ready to <span className="gradient-text">Automate</span> Your Business?
           </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your automation needs and create a solution that transforms your workflow.
          </p>
          <a href="mailto:hello@iceratops.com?subject=Automation Project Discussion" className="btn-primary text-lg px-8 py-4">
            Start the Conversation
            <Mail className="inline ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Forge
