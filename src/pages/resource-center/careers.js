import React from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'
import { ResourceData } from '../../data/careers'
import { StaticImage } from 'gatsby-plugin-image'
import heroCeus from '../../assets/images/hero_ceus.svg'
import ResourceLink from '../../components/ResourceLink'

const CareerResourcesPage = () => {
  return (
    <Layout includeCTA={true}>
      {/* Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[120px] xl:py-[170px] w-[100%] md:w-[70%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Career Resources
          </h1>
          <p className="text-xl text-pharm-grey max-w-3xl mx-auto">
            Tools and Guides for Pharmacy Technicians
          </p>
          <p className="text-lg text-pharm-grey mb-8">
            Explore our curated collection of downloadable guides, templates, and tips designed to help you advance your career. From resume building to interview prep, we have the resources you need to succeed.
          </p>
        </div>
        <div className="flex justify-center lg:pt-[40px] xl:pt-0 w-[100%] md:w-[70%] lg:w-[50%] relative px-12">
          <img src={heroCeus} alt="Career Resources" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <ResourceLink />
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ResourceData.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 p-4 overflow-hidden bg-gray-100 relative group">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-auto object-fit transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-pharm-blue mb-3 line-clamp-2">{resource.title}</h3>
                  <p className="text-pharm-grey mb-6 flex-1 text-sm leading-relaxed">{resource.description}</p>
                  <a
                    href={resource.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center w-full px-4 py-3 bg-pharm-blue text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    Download Guide
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default CareerResourcesPage

export const Head = () => (
  <>
    <title>Career Resources - PharmTechs Only</title>
    <meta name="description" content="Explore resources to help boost your pharmacy technician career, including job boards, resume tips, interview preparation, and professional development opportunities." />
  </>
)
