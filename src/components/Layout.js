import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, includeHeader = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {includeHeader && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
