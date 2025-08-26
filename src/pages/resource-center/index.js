import React from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'

const ResourceCenterPage = () => {
  const resources = [
    {
      title: 'Free CEUs',
      description: 'Continuing education units to maintain and enhance your professional credentials.',
      link: '/resource-center/free-ceus'
    },
    {
      title: 'Organizations',
      description: 'Directory of professional pharmacy technician organizations and associations.',
      link: '/resource-center/organizations'
    },
    {
      title: 'Conventions',
      description: 'Information on upcoming conventions and events for pharmacy technicians.',
      link: '/resource-center/conventions'
    },
    {
      title: 'Blog',
      description: 'Insights and articles on pharmacy technician topics and trends.',
      link: '/resource-center/blog'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <HeroHeader>
        <div className="content-container text-center">
          <h1>
            Resource Center
          </h1>
          <p>
            Providing comprehensive tools and resources to support your job and growth as a pharmacy technician.
          </p>
        </div>
      </HeroHeader>

      {/* Resources Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <Link
                  to={resource.link}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="content-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to advance your career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of pharmacy technicians who are already using our resources to grow professionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Explore Career Opportunities
            </Link>
            <Link
              to="/tech-connect"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ResourceCenterPage

export const Head = () => (
  <>
    <title>Resource Center - PharmTechs Only</title>
    <meta name="description" content="Comprehensive tools and resources to support your job and growth as a pharmacy technician." />
  </>
)
