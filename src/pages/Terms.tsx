import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Shield, DollarSign, Clock, AlertTriangle, ArrowLeft, CheckCircle } from 'lucide-react'

const Terms = () => {
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
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="glass-card p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service ("Terms") govern your use of Iceratops services, including web design and automation solutions. By using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-300">
              If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Services</h2>
            <p className="text-gray-300 mb-4">
              Iceratops provides the following services:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Web Design</h3>
                </div>
                <p className="text-gray-300 text-sm">Professional website development and design services</p>
              </div>
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Automation Solutions</h3>
                </div>
                <p className="text-gray-300 text-sm">Custom automation and AI integration services</p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Payment Terms</h2>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Pricing</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  All prices are quoted in USD unless otherwise specified. Prices are subject to change with notice.
                </p>
              </div>
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Payment Schedule</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Payment terms will be specified in individual project agreements. Late payments may result in project delays.
                </p>
              </div>
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Refunds</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Refund policies will be detailed in individual service agreements. No refunds for completed work.
                </p>
              </div>
            </div>
          </section>

          {/* Project Terms */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Project Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Project Scope</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Project scope, deliverables, and timelines will be defined in individual project agreements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Revisions</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Number of revisions included will be specified in project agreements. Additional revisions may incur extra charges.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Project Delays</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Delays caused by client feedback or requirements changes may extend project timelines.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Client Content</h3>
                <p className="text-gray-300 text-sm mb-3">
                  You retain ownership of content you provide. You grant us license to use this content for project delivery.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Deliverables</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Upon full payment, you receive ownership of final deliverables. We retain rights to showcase work in our portfolio.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Third-party Assets</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Third-party assets (fonts, images, etc.) remain subject to their respective licenses.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Limitations of Liability</h2>
            <div className="glass-card p-6 bg-red-900/20 border border-red-500/20">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
                <h3 className="font-semibold text-white">Disclaimer</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Our services are provided "as is" without warranties of any kind. We are not liable for indirect, incidental, or consequential damages.
              </p>
              <p className="text-gray-300 text-sm">
                Our total liability is limited to the amount paid for the specific service.
              </p>
            </div>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Confidentiality</h2>
            <div className="glass-card p-4">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="font-semibold text-white">Non-Disclosure</h3>
              </div>
              <p className="text-gray-300 text-sm">
                We maintain strict confidentiality of client information and project details. Information is shared only with your consent or as required by law.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Termination</h2>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Either party may terminate services with written notice. Termination terms will be specified in individual agreements.
              </p>
              <p className="text-gray-300 text-sm">
                Upon termination, you remain responsible for payment of completed work and expenses incurred.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms are governed by the laws of the United Kingdom. Any disputes will be resolved through arbitration or mediation.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.
            </p>
            <p className="text-gray-300">
              Continued use of our services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about these Terms, please contact us:
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

export default Terms
