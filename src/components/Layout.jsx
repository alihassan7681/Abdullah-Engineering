import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import useScrollReveal from '../hooks/useScrollReveal'

const Layout = ({ children }) => {
  // attach global scroll reveal behavior
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20"> {/* pt-20 to offset navbar */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
