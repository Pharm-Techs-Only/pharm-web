import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen) {
        setTimeout(() => setIsMenuOpen(false), 250);
      }
    }

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const navLinks = (mobile = false) => (
    <>
      <Link 
        to="/#waitlist" 
        className={`text-pharm-light-blue ${mobile ? 'text-center' : ''} hover:text-pharm-blue px-3 py-2 text-sm text-[16px] transition-colors`}
        activeClassName="text-pharm-blue"
      >
        Tech Connect<br/>
        <span className="text-xs">(Coming Soon)</span>
      </Link>
      <a 
        href="https://careers.pharmtechsonly.com" 
        target="_blank" rel="noreferrer"
        className={`text-pharm-light-blue ${mobile ? 'text-center' : ''} hover:text-pharm-blue active:text-pharm-blue px-3 py-2 text-sm text-[16px] transition-colors`}
        activeClassName="text-pharm-blue"
      >
        Careers
      </a>
      <Link 
        to="/resource-center" 
        className={`text-pharm-light-blue ${mobile ? 'text-center' : ''} hover:text-pharm-blue active:text-pharm-blue px-3 py-2 text-sm text-[16px] transition-colors`}
        activeClassName="text-pharm-blue"
      >
        Resource Center
      </Link>
      <a 
        href="https://careers.pharmtechsonly.com/register-employer" 
        className={`text-pharm-light-blue ${mobile ? 'text-center' : ''} hover:text-pharm-blue active:text-pharm-blue px-3 py-2 text-sm text-[16px] transition-colors`}
        activeClassName="text-pharm-blue"
        target="_blank" rel="noreferrer"
      >
        Employers
      </a>
      <a 
        href="https://store.pharmtechsonly.com" 
        target="_blank" rel="noreferrer"
        className={`text-pharm-light-blue ${mobile ? 'text-center' : ''} hover:text-pharm-blue active:text-pharm-blue px-3 py-2 text-sm text-[16px] transition-colors`}
        activeClassName="text-pharm-blue"
      >
        Store
      </a>
    </>);

  return (
    <>
    <header className="relative z-90 bg-[#fff]/90 shadow-[0_4px_5px_3px_rgba(0,0,0,0.15)] h-[117px] flex items-center">
      <div className="header-container px-4 sm:px-6 lg:px-8">
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
            {navLinks()}
          </nav>
          
          {/* Mobile menu button - Show for screens < 1100px */}
          <div className="mobile-menu-btn">
            <button 
              onClick={toggleMenu}
              className="text-pharm-grey hover:text-blue-600 hover:cursor-pointer focus:outline-none focus:text-blue-600"
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
      </div>
    </header>
    {/* Mobile Navigation Menu - Show for screens < 1100px */}
    <div className={`mobile-menu bg-white border-t border-gray-200 ${isMenuOpen ? 'h-auto py-4' : 'h-0 py-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
      <nav className="flex flex-col space-y-2" ref={menuRef}>
        {navLinks(true)}
      </nav>
    </div>
    </>
  )
}

export default Header
