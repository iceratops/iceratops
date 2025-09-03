import React, { useState, useEffect } from 'react'
import { ExternalLink, RefreshCw, Globe, AlertCircle } from 'lucide-react'

interface WebsitePreviewProps {
  url: string
  title: string
  fallbackImage?: string
  width?: number
  height?: number
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ 
  url, 
  title, 
  fallbackImage = "/thevillageforher-preview.svg",
  width = 800, 
  height = 600 
}) => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [previewMethod, setPreviewMethod] = useState<'screenshot' | 'iframe' | 'fallback'>('screenshot')

  useEffect(() => {
    const loadPreview = async () => {
      setIsLoading(true)
      setError(false)

      // Try to use a reliable screenshot service
      try {
        // Option 1: Use Microlink (more reliable)
        const microlinkUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=${width}&viewport.height=${height}`
        
        const response = await fetch(microlinkUrl)
        if (response.ok) {
          const data = await response.json()
          if (data.status === 'success' && data.data?.screenshot?.url) {
            setImageUrl(data.data.screenshot.url)
            setPreviewMethod('screenshot')
            setIsLoading(false)
            return
          }
        }
      } catch (err) {
        console.log('Microlink failed, trying alternative...')
      }

      // Option 2: Try iframe embedding
      try {
        setPreviewMethod('iframe')
      } catch (err) {
        setPreviewMethod('fallback')
      }
      
      setIsLoading(false)
    }

    loadPreview()
  }, [url, width, height])

  const handleRefresh = () => {
    setIsLoading(true)
    setError(false)
    // Reload the preview
    window.location.reload()
  }

  if (isLoading) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-purple-900/50 to-slate-800/50">
        <div className="aspect-video flex items-center justify-center">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 mx-auto mb-4 text-yellow-400 animate-spin" />
            <p className="text-gray-300">Loading live preview...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-red-900/50 to-slate-800/50">
        <div className="aspect-video flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-400" />
            <p className="text-gray-300 mb-2">Preview unavailable</p>
            <button 
              onClick={handleRefresh}
              className="text-yellow-400 hover:text-yellow-300 text-sm"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (previewMethod === 'iframe') {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/20">
        <iframe
          src={url}
          title={`${title} live preview`}
          className="w-full aspect-video"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
        />
        <div className="absolute top-2 right-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 text-white px-2 py-1 rounded text-xs hover:bg-black/70 transition-colors"
          >
            Open in new tab
          </a>
        </div>
      </div>
    )
  }

  if (previewMethod === 'screenshot' && imageUrl) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/20 group">
        <img 
          src={imageUrl} 
          alt={`${title} live preview`}
          className="w-full h-auto aspect-video object-cover project-image"
          onError={() => setError(true)}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            Visit Site
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    )
  }

  // Fallback to static image or placeholder
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/20">
      <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-slate-800/50 flex items-center justify-center">
        <div className="text-center">
          <Globe className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">Live Preview</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Visit Site
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default WebsitePreview
