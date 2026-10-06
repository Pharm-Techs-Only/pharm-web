import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
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
                  <li><a href="https://tc.pharmtechsonly.com/careers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Global Career Center</a></li>
                  <li><Link to="/resource-center/careers" className="text-blue-600 hover:underline">Career Resources</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-pharm-blue">Tech Connect</h3>
                <ul className="space-y-3">
                  <li><a href="https://tc.pharmtechsonly.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Community Portal</a></li>
                  <li><a href="https://tc.pharmtechsonly.com/careers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Careers Portal</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-pharm-blue">Employers</h3>
                <ul className="space-y-3">
                  <li><span className="text-gray-400">Post Jobs (Coming Soon)</span></li>
                  <li><span className="text-gray-400">Search Candidates (Coming Soon)</span></li>
                  <li><Link to="/marketing-opps" className="text-blue-600 hover:underline">Marketing Opportunities</Link></li>
                  <li><a href="https://tc.pharmtechsonly.com/employers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Employer Portal</a></li>
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

const PAGE_TITLE = 'Site Map – Pharm Techs Only! – All Pages & Sections'
const PAGE_DESC = 'Complete site map for Pharm Techs Only! Navigate all sections including Resource Center, Free CEUs, Organizations, Conventions, Blog, Career Portal, TechConnect community, Store, and Employer Tools.'

export const Head = () => {
  const siteNavSchema = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Pharm Techs Only! Site Navigation',
    url: 'https://www.pharmtechsonly.com/sitemap/',
    hasPart: [
      { '@type': 'SiteNavigationElement', name: 'Home', url: 'https://www.pharmtechsonly.com/' },
      { '@type': 'SiteNavigationElement', name: 'About', url: 'https://www.pharmtechsonly.com/about/' },
      { '@type': 'SiteNavigationElement', name: 'Resource Center', url: 'https://www.pharmtechsonly.com/resource-center/' },
      { '@type': 'SiteNavigationElement', name: 'Free CEUs', url: 'https://www.pharmtechsonly.com/resource-center/free-ceus/' },
      { '@type': 'SiteNavigationElement', name: 'Professional Organizations', url: 'https://www.pharmtechsonly.com/resource-center/organizations/' },
      { '@type': 'SiteNavigationElement', name: 'Pharmacy Conventions', url: 'https://www.pharmtechsonly.com/resource-center/conventions/' },
      { '@type': 'SiteNavigationElement', name: 'Blog', url: 'https://www.pharmtechsonly.com/resource-center/blog/' },
      { '@type': 'SiteNavigationElement', name: 'Career Resources', url: 'https://www.pharmtechsonly.com/resource-center/careers/' },
      { '@type': 'SiteNavigationElement', name: 'Store', url: 'https://www.pharmtechsonly.com/store/' },
      { '@type': 'SiteNavigationElement', name: 'Marketing Opportunities', url: 'https://www.pharmtechsonly.com/marketing-opps/' },
      { '@type': 'SiteNavigationElement', name: 'Contact', url: 'https://www.pharmtechsonly.com/contact/' },
      { '@type': 'SiteNavigationElement', name: 'TechConnect Community', url: 'https://tc.pharmtechsonly.com' },
    ],
  }

  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESC} />
      <SEO title={PAGE_TITLE} description={PAGE_DESC} path="/sitemap/" />
      <script type="application/ld+json">{JSON.stringify(siteNavSchema)}</script>
    </>
  )
}

