import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import HeroHeader from "../components/HeroHeader"
import SEO from "../components/SEO"

const NotFoundPage = () => {
  return (
    <Layout includeHeader={true}>
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[140px] pb-[60px] w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            We couldn't find the page you were looking for. It might have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn text-white px-8 py-3 rounded-md font-medium">
              Return Home
            </Link>
            <Link to="/resource-center" className="bg-pharm-light-blue hover:bg-pharm-blue text-white px-8 py-3 rounded-md font-medium transition-colors">
              Explore Resource Center
            </Link>
          </div>
        </div>
      </HeroHeader>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-pharm-blue mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link to="/resource-center/free-ceus" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-pharm-blue mb-2">Free CEUs</h3>
            <p className="text-sm text-pharm-grey">Browse 100% free continuing education for pharmacy techs.</p>
          </Link>
          <Link to="/resource-center/careers" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-pharm-blue mb-2">Career Tools</h3>
            <p className="text-sm text-pharm-grey">Download resume guides, cover letters, and interview tips.</p>
          </Link>
          <a href="https://tc.pharmtechsonly.com" target="_blank" rel="noopener noreferrer" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-pharm-blue mb-2">TechConnect™</h3>
            <p className="text-sm text-pharm-grey">Join our global online community for pharmacy technicians.</p>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <>
    <title>Page Not Found – Pharm Techs Only!</title>
    <meta name="description" content="Sorry, the page you requested could not be found. Explore our free CEUs, career resources, and pharmacy technician community." />
    <meta name="robots" content="noindex, nofollow" />
  </>
)
