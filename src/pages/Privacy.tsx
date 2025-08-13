import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Mail, Calendar, Eye, Download, Trash2, Edit, ArrowLeft } from 'lucide-react'
import DataRequestForm from '../components/DataRequestForm'

const Privacy = () => {
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
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="glass-card p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Iceratops ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-300">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Personal Information</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Name and contact information (email address)</li>
                  <li>• Company information and project requirements</li>
                  <li>• Communication history and correspondence</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Technical Information</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Website usage data and analytics</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• To provide and maintain our services</li>
              <li>• To communicate with you about projects and inquiries</li>
              <li>• To improve our website and services</li>
              <li>• To send you updates and marketing communications (with consent)</li>
              <li>• To comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Data Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• With your explicit consent</li>
              <li>• To comply with legal requirements</li>
              <li>• To protect our rights and safety</li>
              <li>• With service providers who assist in our operations (under strict confidentiality agreements)</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Your Rights (GDPR)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <Eye className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Right to Access</h3>
                </div>
                <p className="text-gray-300 text-sm">Request a copy of your personal data</p>
              </div>
              
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <Edit className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Right to Rectification</h3>
                </div>
                <p className="text-gray-300 text-sm">Correct inaccurate personal data</p>
              </div>
              
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <Trash2 className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Right to Erasure</h3>
                </div>
                <p className="text-gray-300 text-sm">Request deletion of your personal data</p>
              </div>
              
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <Download className="w-5 h-5 text-yellow-400 mr-2" />
                  <h3 className="font-semibold text-white">Right to Portability</h3>
                </div>
                <p className="text-gray-300 text-sm">Receive your data in a portable format</p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Data Retention</h2>
            <p className="text-gray-300 mb-4">
              We retain your personal information only for as long as necessary to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Provide our services to you</li>
              <li>• Comply with legal obligations</li>
              <li>• Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-gray-300 mt-4">
              When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className="flex items-center text-yellow-400">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-gray-300">Your data is protected with industry-standard security measures</span>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="glass-card p-4">
              <div className="flex items-center text-yellow-400 mb-2">
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-white font-semibold">Email:</span>
              </div>
              <a href="mailto:hello@iceratops.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                hello@iceratops.com
              </a>
            </div>
          </section>

          {/* Data Subject Request Form */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Exercise Your Rights</h2>
            <p className="text-gray-300 mb-6">
              Use the form below to exercise your GDPR rights. You can request access to your data, 
              request corrections, request deletion, or request data portability.
            </p>
            <DataRequestForm />
          </section>

          {/* Updates */}
          <section>
            <h2 className="font-orbitron text-2xl font-semibold mb-4 text-white">Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy
