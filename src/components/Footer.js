import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import MailchimpSubscribe from './MailchimpSubscribe'

const Footer = () => {
  return (
    <footer className="relative pb-0">
      <div className="content-container relative">
        <div className="relative px-4 sm:px-6 lg:px-8 z-30 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-stretch">
          <div className="justify-center w-[50%] px-12 pb-8 relative flex flex-col hidden lg:block lg:self-end">
            <StaticImage src="../images/footer_image.svg" alt="Pharmacy Technician" className="" />
          </div>
        
          {/* Right side - Links */}
          <div className="pt-[60px] md:pt-[80px] lg:pt-[120px] xl:pt-[170px] w-[100%] lg:w-[50%] px-20 lg:px-0 pb-0 pl-0 lg:pl-[120px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-semibold mb-3">Main</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-white hover:underline transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-white hover:underline transition-colors">About</Link></li>
                  <li><a href="https://store.pharmtechsonly.com" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Store</a></li>
                  <li><Link to="mailto:questions@pharmtechsonly.com" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Contact</Link></li>
                  <li><Link to="/privacy" className="text-white hover:underline transition-colors">Privacy</Link></li>
                  <li><Link to="/terms" className="text-white hover:underline transition-colors">Terms</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Resource Center</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li><Link to="/resource-center/free-ceus" className="text-white hover:underline transition-colors">Free CEUs</Link></li>
                  <li><Link to="/resource-center/organizations" className="text-white hover:underline transition-colors">Organizations</Link></li>
                  <li><Link to="/resource-center/conventions" className="text-white hover:underline transition-colors">Conventions</Link></li>
                  <li><Link to="/resource-center/blog" className="text-white hover:underline transition-colors">Blog</Link></li>
                </ul>
                <h4 className="font-semibold mb-3">Tech Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/#waitlist" className="text-white hover:underline transition-colors">Join The Waitlist</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Career Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://careers.pharmtechsonly.com" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Global Career Center</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/career-resources" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Career Resources</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/interview-coach" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Interview Coach</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/analyze-offer" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Offer Analyzer</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Employers</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://careers.pharmtechsonly.com/register-employer" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Post Jobs</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/register-employer" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Search Candidates</a></li>
                  <li><Link to="/marketing-opps" className="text-white hover:underline transition-colors" target="_blank" rel="noreferrer">Marketing Opportunities</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Subscribe and stay up-to-date with the latest community news.
              </h3>
              
              {/* Email signup form */}
              <div className="mb-6">
                <MailchimpSubscribe />
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 mb-12">
                <a href="https://www.facebook.com/4PharmTechsOnly" target="_blank" rel="noreferrer" className="text-white hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path></svg>
                </a>
                <a href="https://www.instagram.com/pharmtechsonly" target="_blank" rel="noreferrer" className="text-white hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/pharmtechsonly" target="_blank" rel="noreferrer" className="text-white hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            <p className="text-white text-sm">
              © 2025 PharmTechs Only. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full left-[0] bottom-[0] absolute z-10"><StaticImage src="../images/cloud_floor-footer.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-blue)]/0 to-[var(--color-bg-white)]/100 pointer-events-none z-2"></div>
    </footer>
  )
}

export default Footer
