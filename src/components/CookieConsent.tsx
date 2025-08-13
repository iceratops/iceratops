import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X, Settings, Check, X as XIcon } from 'lucide-react'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      analytics: true,
      marketing: true
    }))
    setShowBanner(false)
    // Here you would enable all cookies
  }

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      analytics: false,
      marketing: false
    }))
    setShowBanner(false)
    // Here you would only enable essential cookies
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom')
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
    // Here you would enable cookies based on preferences
  }

  const updatePreference = (type: 'analytics' | 'marketing', value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Main Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cookie className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="text-sm text-gray-300">
                <p className="mb-2">
                  We use cookies to enhance your browsing experience and analyze site traffic. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link to="/cookies" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Learn more
                  </Link>
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={acceptEssential}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-300 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-orbitron text-lg font-semibold text-white">Cookie Preferences</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-green-400" />
                      <span className="font-semibold text-white">Essential Cookies</span>
                    </div>
                    <span className="text-green-400 text-sm">Always Active</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Required for the website to function properly. Cannot be disabled.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-blue-400" />
                      <span className="font-semibold text-white">Analytics Cookies</span>
                    </div>
                    <button
                      onClick={() => updatePreference('analytics', !preferences.analytics)}
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                        preferences.analytics 
                          ? 'bg-blue-400 border-blue-400' 
                          : 'border-gray-500'
                      }`}
                    >
                      {preferences.analytics && <Check className="w-3 h-3 text-black" />}
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-purple-400" />
                      <span className="font-semibold text-white">Marketing Cookies</span>
                    </div>
                    <button
                      onClick={() => updatePreference('marketing', !preferences.marketing)}
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                        preferences.marketing 
                          ? 'bg-purple-400 border-purple-400' 
                          : 'border-gray-500'
                      }`}
                    >
                      {preferences.marketing && <Check className="w-3 h-3 text-black" />}
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Used to track visitors across websites for advertising purposes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={savePreferences}
                  className="flex-1 px-4 py-2 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-300 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieConsent
