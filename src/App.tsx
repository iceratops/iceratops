import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Launchlite from './pages/Launchlite'
import Blueprints from './pages/Blueprints'
import Signal from './pages/Signal'
import Labs from './pages/Labs'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/launchlite" element={<Launchlite />} />
          <Route path="/blueprints" element={<Blueprints />} />
          <Route path="/signal" element={<Signal />} />
          <Route path="/labs" element={<Labs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App