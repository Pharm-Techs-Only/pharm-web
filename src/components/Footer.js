import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe and stay up-to-date with the latest community news.
            </h3>
            
            {/* Email signup form */}
            <form className="mb-6">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-md font-medium transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2024 PharmTechs Only. All rights reserved.
            </p>
          </div>
          
          {/* Right side - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Main</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/store" className="text-gray-400 hover:text-white transition-colors">Store</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Resource Center</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Certified Pharm Tech Certification Course</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Free CEUs</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Ebooks</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Pill Identifier</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Tech Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Sign In</Link></li>
              </ul>
              
              <h4 className="font-semibold mb-3 mt-6">Career Tools</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Global Job Board</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Career Tips</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Resume Writing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Employers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Post Jobs</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Search Candidates</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">List Your Company</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
