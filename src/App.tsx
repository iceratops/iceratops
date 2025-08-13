import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Launchlite from './pages/Launchlite'
import Blueprints from './pages/Blueprints'
import Signal from './pages/Signal'
import Labs from './pages/Labs'
import Forge from './pages/Forge'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Terms from './pages/Terms'
import CookieConsent from './components/CookieConsent'

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/launchlite" element={<Launchlite />} />
          <Route path="/blueprints" element={<Blueprints />} />
          <Route path="/signal" element={<Signal />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/forge" element={<Forge />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App