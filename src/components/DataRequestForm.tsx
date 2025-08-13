import React, { useState } from 'react'
import { Mail, Download, Edit, Trash2, Eye, FileText, Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  requestType: 'access' | 'rectification' | 'erasure' | 'portability'
  description: string
  company?: string
}

const DataRequestForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    requestType: 'access',
    description: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const requestTypes = [
    {
      value: 'access',
      label: 'Right to Access',
      description: 'Request a copy of your personal data',
      icon: <Eye className="w-5 h-5" />
    },
    {
      value: 'rectification',
      label: 'Right to Rectification',
      description: 'Correct inaccurate personal data',
      icon: <Edit className="w-5 h-5" />
    },
    {
      value: 'erasure',
      label: 'Right to Erasure',
      description: 'Request deletion of your personal data',
      icon: <Trash2 className="w-5 h-5" />
    },
    {
      value: 'portability',
      label: 'Right to Portability',
      description: 'Receive your data in a portable format',
      icon: <Download className="w-5 h-5" />
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    // Here you would typically send the request to your backend
    // For now, we'll just show the success message
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-400" />
        </div>
        <h3 className="font-orbitron text-2xl font-semibold text-white mb-4">
          Request Submitted Successfully
        </h3>
        <p className="text-gray-300 mb-6">
          We have received your data subject request and will process it within 30 days as required by GDPR.
        </p>
        <div className="space-y-3 text-sm text-gray-300">
          <p>• You will receive a confirmation email shortly</p>
          <p>• We may contact you for additional verification if needed</p>
          <p>• For urgent requests, please contact us directly at hello@iceratops.com</p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              email: '',
              requestType: 'access',
              description: ''
            })
          }}
          className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="glass-card p-8">
      <div className="text-center mb-8">
        <h2 className="font-orbitron text-3xl font-semibold text-white mb-4">
          Data Subject Request Form
        </h2>
        <p className="text-gray-300">
          Exercise your GDPR rights by submitting a formal request below. We will respond within 30 days.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Request Type Selection */}
        <div>
          <label className="block text-white font-semibold mb-3">Request Type</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {requestTypes.map((type) => (
              <label
                key={type.value}
                className={`glass-card p-4 cursor-pointer transition-all ${
                  formData.requestType === type.value
                    ? 'ring-2 ring-yellow-400 bg-yellow-400/10'
                    : 'hover:bg-gray-800/50'
                }`}
              >
                <input
                  type="radio"
                  name="requestType"
                  value={type.value}
                  checked={formData.requestType === type.value}
                  onChange={(e) => handleInputChange('requestType', e.target.value as any)}
                  className="sr-only"
                />
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400">{type.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{type.label}</div>
                    <div className="text-sm text-gray-300">{type.description}</div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        {/* Company (Optional) */}
        <div>
          <label className="block text-white font-semibold mb-2">
            Company (Optional)
          </label>
          <input
            type="text"
            value={formData.company || ''}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
            placeholder="Enter your company name"
          />
        </div>

        {/* Request Description */}
        <div>
          <label className="block text-white font-semibold mb-2">
            Request Description *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
            placeholder="Please provide details about your request. For rectification requests, specify what data needs to be corrected. For access requests, specify any particular data you're interested in."
          />
        </div>

        {/* Additional Information */}
        <div className="glass-card p-4 bg-blue-900/20 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-white mb-2">Important Information:</p>
              <ul className="space-y-1">
                <li>• We will verify your identity before processing your request</li>
                <li>• Response time: Up to 30 days (GDPR requirement)</li>
                <li>• For urgent requests, contact us directly at hello@iceratops.com</li>
                <li>• We may request additional verification if needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
          >
            <Send className="w-5 h-5" />
            Submit Request
          </button>
        </div>
      </form>
    </div>
  )
}

export default DataRequestForm
