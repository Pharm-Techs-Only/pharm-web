import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b content-container">
      <div className="max-w-[1170px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <StaticImage
                src="../images/logo.svg"
                alt="PharmTechsOnly!"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Show for screens >= 1100px */}
          <nav className="hidden desktop-nav:flex space-x-8">
            <Link 
              to="/#waitlist" 
              className="text-pharm-grey hover:text-pharm-blue px-3 py-2 text-sm font-medium transition-colors"
              activeClassName="text-pharm-blue"
            >
              Tech Connect<br/>
              (Coming Soon)
            </Link>
            <Link 
              to="https://careers.pharmtechsonly.com" 
              target="_blank"
              className="text-pharm-grey hover:text-pharm-blue px-3 py-2 text-sm font-medium transition-colors"
              activeClassName="text-pharm-blue"
            >
              Careers
            </Link>
            <Link 
              to="/resource-center" 
              className="text-pharm-grey hover:text-pharm-blue px-3 py-2 text-sm font-medium transition-colors"
              activeClassName="text-pharm-blue"
            >
              Resource Center
            </Link>
            <Link 
              to="https://store.pharmtechsonly.com" 
              target="_blank"
              className="text-pharm-grey hover:text-pharm-blue px-3 py-2 text-sm font-medium transition-colors"
              activeClassName="text-pharm-blue"
            >
              Store
            </Link>
          </nav>
          
          {/* Mobile menu button - Show for screens < 1100px */}
          <div className="mobile-menu-btn">
            <button 
              onClick={toggleMenu}
              className="text-pharm-grey hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - Show for screens < 1100px */}
        {isMenuOpen && (
          <div className="mobile-menu border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/tech-connect" 
                className="text-pharm-grey hover:text-pharm-blue px-3 py-2 text-sm font-medium transition-colors block"
                activeClassName="text-pharm-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Tech Connect
              </Link>
              <Link 
                to="/careers" 
                className="text-pharm-grey hover:text-pharm-blue px-3 py-2 text-sm font-medium transition-colors block"
                activeClassName="text-pharm-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/resource-center" 
                className="text-pharm-grey hover:text-pharm-blue px-3 py-2 text-sm font-medium transition-colors block"
                activeClassName="text-pharm-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Resource Center
              </Link>
              <Link 
                to="/store" 
                className="text-pharm-grey hover:text-pharm-blue px-3 py-2 text-sm font-medium transition-colors block"
                activeClassName="text-pharm-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
