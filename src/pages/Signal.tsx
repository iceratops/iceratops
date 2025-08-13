import React from 'react'
import { Rss, Bell, Globe, TrendingUp, Mail, Calendar } from 'lucide-react'

const Signal = () => {
  const upcomingTopics = [
    {
      title: "AI Automation Trends 2025",
      description: "Exploring the latest developments in smart business automation across global markets",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Web Design Standards",
      description: "Best practices for creating websites that perform well in international markets",
      category: "Design",
      readTime: "7 min read"
    },
    {
      title: "Cross-Cultural UX Considerations",
      description: "How to design user experiences that resonate with diverse global audiences",
      category: "UX/UI",
      readTime: "6 min read"
    },
    {
      title: "Automation ROI Case Studies",
      description: "Real-world examples of businesses that transformed their operations with automation",
      category: "Business",
      readTime: "8 min read"
    }
  ]

  const categories = [
    { name: "AI & Automation", icon: "🤖", count: "Coming Soon" },
    { name: "Web Design", icon: "🎨", count: "Coming Soon" },
    { name: "Global Business", icon: "🌍", count: "Coming Soon" },
    { name: "Technology Trends", icon: "📈", count: "Coming Soon" },
    { name: "Case Studies", icon: "📊", count: "Coming Soon" },
    { name: "Industry Insights", icon: "💡", count: "Coming Soon" }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Signal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Insights, trends, and stories from the world of AI automation and web design
          </p>
          <div className="glass-card p-6 inline-block">
            <div className="flex items-center justify-center space-x-2 text-yellow-400">
              <Rss className="w-6 h-6" />
              <span className="font-semibold text-lg">Blog Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              What to <span className="gradient-text">Expect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Signal will be your go-to resource for staying ahead in the rapidly evolving world of AI, automation, and web design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-semibold mb-4">Industry Trends</h3>
              <p className="text-gray-300">Stay updated with the latest developments in AI, automation, and web technologies from around the world</p>
            </div>
            <div className="glass-card p-8 text-center">
              <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-semibold mb-4">Global Insights</h3>
              <p className="text-gray-300">Learn about international market trends, cultural considerations, and global best practices</p>
            </div>
            <div className="glass-card p-8 text-center">
              <Bell className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-semibold mb-4">Expert Analysis</h3>
              <p className="text-gray-300">Deep dives into complex topics with practical insights you can apply to your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Articles */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Upcoming</span> Articles
            </h2>
            <p className="text-xl text-gray-300">
              Here's a preview of the content we're preparing for our global audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingTopics.map((topic, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {topic.category}
                  </span>
                  <span className="text-gray-400 text-sm">{topic.readTime}</span>
                </div>
                <h3 className="font-orbitron text-xl font-semibold mb-3 text-white">
                  {topic.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {topic.description}
                </p>
                <div className="flex items-center text-yellow-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
              Content <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-gray-300">
              Organized topics to help you find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="glass-card p-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-semibold text-white">{category.name}</span>
                </div>
                <span className="text-gray-400 text-sm">{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <Mail className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              Stay <span className="gradient-text">Connected</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to read our latest insights when Signal launches. 
              Get exclusive content delivered to your inbox from our global team of experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="btn-primary px-6 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Join our global community. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Benefits */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                Why <span className="gradient-text">Signal</span> Matters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">📚</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Knowledge</h3>
                <p className="text-gray-300 text-sm">Learn from professionals with real-world global experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🎯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Actionable Insights</h3>
                <p className="text-gray-300 text-sm">Practical advice you can implement in your business immediately</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🌐</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Global Perspective</h3>
                <p className="text-gray-300 text-sm">International insights for businesses operating worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">⚡</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Stay Ahead</h3>
                <p className="text-gray-300 text-sm">Be first to know about emerging trends and technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signal