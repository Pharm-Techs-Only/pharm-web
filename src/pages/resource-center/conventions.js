import React from 'react'
import Layout from '../../components/Layout'
import { ConventionsData } from '../../data/conventions'
import HeroHeader from '../../components/HeroHeader'
import { StaticImage } from 'gatsby-plugin-image'
import ResourceLink from '../../components/ResourceLink'

const ConventionsPage = () => {
  // Group conventions by country, then by year, then sort by date within each year
  const groupConventions = () => {
    const grouped = ConventionsData.reduce((acc, convention) => {
      if (!acc[convention.country]) {
        acc[convention.country] = {}
      }
      if (!acc[convention.country][convention.year]) {
        acc[convention.country][convention.year] = []
      }
      acc[convention.country][convention.year].push(convention)
      return acc
    }, {})
    
    // Sort countries alphabetically
    const sortedCountries = Object.keys(grouped).sort()
    
    return sortedCountries.map(country => ({
      country,
      years: Object.keys(grouped[country])
        .sort((a, b) => parseInt(a) - parseInt(b))
        .map(year => ({
          year: parseInt(year),
          conventions: grouped[country][year].sort((a, b) => 
            new Date(a.date) - new Date(b.date)
          )
        }))
    }))
  }

  const countryGroups = groupConventions()
  const totalConventions = ConventionsData.length

  return (
    <Layout includeCTA={true}>
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Conventions
          </h1>
          <p className="text-xl text-pharm-grey max-w-3xl mx-auto">
            Discover upcoming pharmacy technician conventions.
          </p>
        </div>
        <div className="flex justify-center w-[50%] relative px-12">
          <StaticImage src="../../images/hero_home.svg" alt="Pharmacy Convention" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <ResourceLink />
          </nav>
          
          <h1 className="text-4xl font-bold mb-4">Pharmacy Conventions</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Discover upcoming pharmacy conventions, conferences, and professional meetings. 
            Network with industry professionals, learn about the latest developments, and advance your pharmacy career.
          </p>

          {/* Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-2">Convention Directory</h2>
                <p className="text-blue-700">
                  Browse {totalConventions} pharmacy conventions and conferences organized by country and year.
                </p>
              </div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                {totalConventions}
              </div>
            </div>
          </div>

          {/* Conventions by Country and Year */}
          <div className="space-y-12">
            {countryGroups.map((countryGroup, countryIndex) => (
              <div key={countryIndex} className="pl-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                    {countryGroup.years.reduce((total, year) => total + year.conventions.length, 0)}
                  </span>
                  {countryGroup.country}
                </h2>
                
                <div className="space-y-8">
                  {countryGroup.years.map((yearGroup, yearIndex) => (
                    <div key={yearIndex} className="ml-4">
                      <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                        <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {yearGroup.conventions.length}
                        </span>
                        {yearGroup.year}
                      </h3>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {yearGroup.conventions.map((convention, index) => (
                          <div key={index} className="item-wrap">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-lg font-bold text-gray-900 leading-tight">{convention.name}</h4>
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium whitespace-nowrap ml-2">
                                {convention.year}
                              </span>
                            </div>
                            
                            {convention.description && (
                              <p className="text-sm text-gray-600 mb-3 italic">{convention.description}</p>
                            )}
                            
                            <div className="space-y-3 mb-4">
                              <div>
                                <p className="text-sm text-gray-500 mb-1">Location:</p>
                                <p className="text-gray-700 text-sm">{convention.location}</p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-gray-500 mb-1">Date:</p>
                                <p className="text-gray-700 text-sm font-medium">{convention.dateRange}</p>
                              </div>
                              
                              {convention.website && (
                                <div>
                                  <p className="text-sm text-gray-500 mb-1">Website:</p>
                                  <a 
                                    href={convention.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 text-sm underline break-all"
                                  >
                                    {convention.website}
                                  </a>
                                </div>
                              )}
                            </div>
                            
                            {convention.website && (
                              <div className="pt-3 border-t border-gray-100">
                                <a 
                                  href={convention.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                  Learn More
                                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits Section */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Why Attend Pharmacy Conventions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-green-900">Professional Development</h3>
                <p className="text-gray-700">Gain continuing education credits, learn about new developments, and enhance your skills.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-900">Networking</h3>
                <p className="text-gray-700">Connect with peers, industry leaders, and potential mentors in the pharmacy field.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-900">Industry Insights</h3>
                <p className="text-gray-700">Stay current with industry trends, regulations, and emerging technologies in pharmacy.</p>
              </div>
            </div>
          </div>
          
          {/* Planning Tips Section */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Convention Planning Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-yellow-900">Early Registration</h3>
                <p className="text-gray-700">Register early for better rates and to secure your spot at popular sessions.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-yellow-900">Plan Your Schedule</h3>
                <p className="text-gray-700">Review the agenda in advance and plan which sessions align with your professional goals.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-yellow-900">Prepare for Networking</h3>
                <p className="text-gray-700">Bring business cards and be ready to discuss your career interests and experiences.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-yellow-900">Follow Up</h3>
                <p className="text-gray-700">Connect with new contacts after the event and implement what you learned.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ConventionsPage

export const Head = () => (
  <>
    <title>Pharmacy Conventions - PharmTechs Only</title>
    <meta name="description" content="Discover upcoming pharmacy conventions, conferences, and professional meetings. Network with industry professionals and advance your pharmacy career." />
  </>
)
