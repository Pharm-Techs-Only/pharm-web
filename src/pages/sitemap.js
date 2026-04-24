import React from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import { Link } from 'gatsby'

const SitemapPage = () => {
  return (
    <Layout includeHeader={true}>
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[170px] pb-[60px] w-full text-center">
          <h1>Site Map</h1>
          <p>Find your way around Pharm Techs Only!</p>
        </div>
      </HeroHeader>
      
      <section className="relative pb-[60px] lg:pb-[120px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-pharm-blue">Main</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
                  <li><Link to="/about" className="text-blue-600 hover:underline">About</Link></li>
                  <li><Link to="/store" className="text-blue-600 hover:underline">Store</Link></li>
                  <li><Link to="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
                  <li><Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-pharm-blue">Resource Center</h3>
                <ul className="space-y-3">
                  <li><Link to="/resource-center" className="text-blue-600 hover:underline">Resource Center Home</Link></li>
                  <li><Link to="/resource-center/free-ceus" className="text-blue-600 hover:underline">Free CEUs</Link></li>
                  <li><Link to="/resource-center/organizations" className="text-blue-600 hover:underline">Organizations</Link></li>
                  <li><Link to="/resource-center/conventions" className="text-blue-600 hover:underline">Conventions</Link></li>
                  <li><Link to="/resource-center/blog" className="text-blue-600 hover:underline">Blog</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-pharm-blue">Career Tools</h3>
                <ul className="space-y-3">
                  <li><Link to="/careers" className="text-blue-600 hover:underline">Global Career Center</Link></li>
                  <li><Link to="/resource-center/careers" className="text-blue-600 hover:underline">Career Resources</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-pharm-blue">Tech Connect</h3>
                <ul className="space-y-3">
                  <li><Link to="https://tc.pharmtechsonly.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Community Portal</Link></li>
                  <li><Link to="https://tc.pharmtechsonly.com/careers" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Careers Portal</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-pharm-blue">Employers</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-blue-600 hover:underline opacity-50 cursor-not-allowed">Post Jobs (Coming Soon)</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline opacity-50 cursor-not-allowed">Search Candidates (Coming Soon)</a></li>
                  <li><Link to="/marketing-opps" className="text-blue-600 hover:underline">Marketing Opportunities</Link></li>
                  <li><Link to="https://tc.pharmtechsonly.com/employers" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Employer Portal</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default SitemapPage

export const Head = () => (
  <>
    <title>Site Map | Pharm Techs Only!</title>
    <meta name="description" content="View the complete site map to easily navigate all sections of Pharm Techs Only!" />
  </>
)
