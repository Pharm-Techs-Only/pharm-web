import React from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// Import icons
import IconFreeCeus from '../../images/icon_free-ceus.svg'
import IconOrganizations from '../../images/icon_organizations.svg'
import IconConventions from '../../images/icon_conventions.svg'
import IconBlog from '../../images/icon_blog.svg'

const ResourceCenterPage = () => {
  const resources = [
    {
      title: 'Free CEUs',
      description: 'Continuing education units to maintain and enhance your professional credentials.',
      link: '/resource-center/free-ceus',
      icon: IconFreeCeus
    },
    {
      title: 'Organizations',
      description: 'Directory of professional pharmacy technician organizations and associations.',
      link: '/resource-center/organizations',
      icon: IconOrganizations
    },
    {
      title: 'Conventions',
      description: 'Information on upcoming conventions and events for pharmacy technicians.',
      link: '/resource-center/conventions',
      icon: IconConventions
    },
    {
      title: 'Blog',
      description: 'Insights and articles on pharmacy technician topics and trends.',
      link: '/resource-center/blog',
      icon: IconBlog
    }
  ]

  return (
    <Layout includeCTA={true}>
      {/* Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[120px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Resource Center
          </h1>
          <p>
            Providing comprehensive tools and resources to support your job and growth as a pharmacy technician.
          </p>
        </div>
        <div className="flex justify-center lg:pt-[40px] xl:pt-0 w-[50%] relative px-12">
          <StaticImage src="../../images/hero_home.svg" alt="Two Pharmacy Technicians" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      {/* Resources Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="item-wrap flex flex-col items-center">
                <Link
                  to={resource.link}
                >
                  {resource.icon && (
                    <img
                      src={resource.icon}
                      alt={resource.title}
                      className="w-12 h-12 mb-4"
                    />
                  )}
                  <h3 className="mb-3">
                    {resource.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-center mb-4">
                  {resource.description}
                </p>
                <Link
                  to={resource.link}
                  className="text-pharm-light-blue text-center hover:text-pharm-blue font-medium transition-colors"
                >
                  Learn More &gt;
                </Link>
              </div>
            ))}
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
