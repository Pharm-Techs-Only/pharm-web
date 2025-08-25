import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import MailchimpSubscribe from './MailchimpSubscribe'

const Footer = () => {
  return (
    <footer className="relative pb-0">
      <div className="content-container relative">
        <div className="relative px-4 sm:px-6 lg:px-8 z-30 flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="flex justify-center w-[50%] px-12">
            <StaticImage src="../images/footer_image.svg" alt="Pharmacy Technician" className="" />
          </div>
        
          {/* Right side - Links */}
          <div className="pt-[60px] md:pt-[80px] lg:py-[120px] xl:pt-[170px] w-[100%] lg:w-[50%] pl-0 lg:pl-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-semibold mb-3">Main</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-white hover:underline transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-white hover:underline transition-colors">About</Link></li>
                  <li><a href="https://store.pharmtechsonly.com" className="text-white hover:underline transition-colors" target="_blank">Store</a></li>
                  <li><Link to="mailto:questions@pharmtechsonly.com" className="text-white hover:underline transition-colors" target="_blank">Contact</Link></li>
                  <li><Link to="/privacy" className="text-white hover:underline transition-colors">Privacy</Link></li>
                  <li><Link to="/terms" className="text-white hover:underline transition-colors">Terms</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Resource Center</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/resource-center/free-ceus" className="text-white hover:underline transition-colors">Free CEUs</Link></li>
                  <li><Link to="/resource-center/organizations" className="text-white hover:underline transition-colors">Ebooks</Link></li>
                  <li><Link to="/resource-center/blog" className="text-white hover:underline transition-colors">Pill Identifier</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Tech Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/#waitlist" className="text-white hover:underline transition-colors">Join The Waitlist</Link></li>
                </ul>
                
                <h4 className="font-semibold mb-3 mt-6">Career Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://careers.pharmtechsonly.com" className="text-white hover:underline transition-colors" target="_blank">Global Career Center</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/career-resources" className="text-white hover:underline transition-colors" target="_blank">Career Resources</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/interview-coach" className="text-white hover:underline transition-colors" target="_blank">Interview Coach</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/analyze-offer" className="text-white hover:underline transition-colors" target="_blank">Offer Analyzer</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Employers</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://careers.pharmtechsonly.com/register-employer" className="text-white hover:underline transition-colors" target="_blank">Post Jobs</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/register-employer" className="text-white hover:underline transition-colors" target="_blank">Search Candidates</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/register-employer" className="text-white hover:underline transition-colors" target="_blank">List Your Company</a></li>
                  <li><a href="https://careers.pharmtechsonly.com/register-employer" className="text-white hover:underline transition-colors" target="_blank">List Your Company</a></li>
                  <li><a href="mailto:questions@pharmtechsonly.com" className="text-white hover:underline transition-colors" target="_blank">Advertise on Tech Connect</a></li>
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
              <div className="flex space-x-4 mb-12">
                <a href="facebook" className="text-white hover:underline transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path></svg>
                </a>
                <a href="x" className="text-white hover:underline transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path></svg>
                </a>
                <a href="linkedin" className="text-white hover:underline transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                </a>
              </div>
              
              <p className="text-white text-sm">
                © 2025 PharmTechs Only. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full left-[0] bottom-[0] absolute -z-1"><StaticImage src="../images/cloud_floor-footer.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-blue)] to-[var(--color-bg-blue)]/60 opacity-75 pointer-events-none z-20"></div>
    </footer>
  )
}

export default Footer
