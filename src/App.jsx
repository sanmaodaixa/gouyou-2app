
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">🐶 Welcome to GouYou</h1>
      <p className="mt-3 text-gray-600">Connect dog owners, share life, and discover cool products.</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-6 bg-white shadow p-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
        <Link to="/upload" className="text-blue-600 hover:underline">Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<div className='p-6'>[Profile Page]</div>} />
        <Route path="/upload" element={<div className='p-6'>[Upload Page]</div>} />
      </Routes>
    </Router>
  )
}

export default App
