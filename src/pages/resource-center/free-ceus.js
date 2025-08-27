import React from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'
import { ceuData } from '../../data/ceus'
import { StaticImage } from 'gatsby-plugin-image'

const FreeCEUsPage = () => {
  // Format date for display
  const formatExpirationDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Utility functions for working with CEU data

  /**
   * Groups CEUs by expiration year
   * @param {Array} ceus - Array of CEU objects
   * @returns {Object} Object with years as keys and arrays of CEUs as values
   */
  const groupCEUsByYear = (ceus = ceuData) => {
    return ceus.reduce((grouped, ceu) => {
      const year = new Date(ceu.expirationDate).getFullYear()
      if (!grouped[year]) {
        grouped[year] = []
      }
      grouped[year].push(ceu)
      return grouped
    }, {})
  }

  /**
   * Sorts CEUs by expiration date (earliest first)
   * @param {Array} ceus - Array of CEU objects
   * @returns {Array} Sorted array of CEUs
   */
  const sortCEUsByDate = (ceus = ceuData) => {
    return [...ceus].sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate))
  }

  /**
   * Gets CEUs grouped by year and sorted within each year (excludes expired CEUs)
   * @param {Array} ceus - Array of CEU objects
   * @returns {Object} Object with years as keys and sorted arrays of CEUs as values
   */
  const getCEUsGroupedAndSorted = (ceus = ceuData) => {
    // Filter out expired CEUs first
    const currentCeus = filterCEUsByExpiration(ceus)
    const sortedCeus = sortCEUsByDate(currentCeus)
    const groupedCeus = groupCEUsByYear(sortedCeus)
    
    // Sort CEUs within each year group by date
    Object.keys(groupedCeus).forEach(year => {
      groupedCeus[year] = sortCEUsByDate(groupedCeus[year])
    })
    
    return groupedCeus
  }

  /**
   * Gets available years sorted in ascending order (only years with non-expired CEUs)
   * @param {Array} ceus - Array of CEU objects
   * @returns {Array} Array of years as strings, sorted ascending
   */
  const getAvailableYears = (ceus = ceuData) => {
    // Filter out expired CEUs first, then get years
    const currentCeus = filterCEUsByExpiration(ceus)
    const years = [...new Set(currentCeus.map(ceu => new Date(ceu.expirationDate).getFullYear().toString()))]
    return years.sort((a, b) => parseInt(a) - parseInt(b))
  }

  /**
   * Filters out expired CEUs (keeps only current and future CEUs)
   * @param {Array} ceus - Array of CEU objects
   * @returns {Array} Filtered array of non-expired CEUs
   */
  const filterCEUsByExpiration = (ceus = ceuData) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Set to start of day for accurate comparison
    
    return ceus.filter(ceu => {
      const expirationDate = new Date(ceu.expirationDate)
      return expirationDate >= today
    })
  }

  /**
   * Checks if a CEU is expiring soon (within specified days)
   * @param {Object} ceu - CEU object
   * @param {number} days - Number of days to consider as "soon" (default: 30)
   * @returns {boolean} True if expiring soon
   */
  const isCEUExpiringSoon = (ceu, days = 30) => {
    const today = new Date()
    const expiration = new Date(ceu.expirationDate)
    const timeDiff = expiration.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return daysDiff <= days && daysDiff > 0
  }

  
  // Get CEUs grouped by year and sorted
  const ceusByYear = getCEUsGroupedAndSorted(ceuData)
  const availableYears = getAvailableYears(ceuData)

  return (
    <Layout>
      {/* Hero Section */}
      <HeroHeader className="pb-[60px] relative">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
            <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
              <h1>
                Free Continuing Education Units (CEUs)
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stay current with your continuing education requirements through our free CEU courses designed specifically for pharmacy technicians.
              </p>
            </div>
            <div className="flex justify-center w-[50%] relative px-12">
              <StaticImage src="../images/hero_ceus.svg" alt="Two Pharmacy Technicians" className="lg:!absolute -bottom-[20px]" />
            </div>
          </div>
          <div className="-left-[220px] bottom-[240px] absolute z-10"><StaticImage src="../images/cloud_hero-three.svg" alt="Cloud Three" /></div>
          <div className="right-[260] top-[164px] absolute z-10"><StaticImage src="../images/cloud_hero-one.svg" alt="Cloud One" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><StaticImage src="../images/cloud_floor-hero.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
          </nav>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Stay current with your continuing education requirements through our free CEU courses designed specifically for pharmacy technicians.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h2 className="text-xl font-semibold mb-2 text-yellow-800">Important Note</h2>
              <p className="text-gray-700">
                All courses are accredited and meet state requirements for pharmacy technician continuing education. 
                Certificates are provided upon successful completion. Please note the expiration dates for each course.
              </p>
            </div>
            
            {availableYears.map(year => (
              <div key={year} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Courses Expiring in {year}
                </h2>
                
                <div className="space-y-6">
                  {ceusByYear[year]?.map((ceu, index) => (
                    <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold pr-4">{ceu.title}</h3>
                        <div className="flex flex-col items-end space-y-2">
                          {isCEUExpiringSoon(ceu) && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              Expiring Soon
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <p className="text-blue-600 font-medium">{ceu.hours}</p>
                        <p className="text-red-600 font-medium">
                          Expires: {formatExpirationDate(ceu.expirationDate)}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{ceu.description}</p>
                      
                      <button 
                        className={`px-4 py-2 rounded transition-colors ${
                          ceu.status === 'Available'
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={ceu.status !== 'Available'}
                        onClick={() => {
                          if (ceu.status === 'Available' && ceu.link && ceu.link !== '#') {
                            window.open(ceu.link, '_blank')
                          }
                        }}
                      >
                        {ceu.status === 'Available' ? 'View CEU' : 'Coming Soon'}
                      </button>
                    </div>
                  )) || []}
                </div>
              </div>
            ))}
            
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">CEU Requirements & Important Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">National Requirements</h3>
                  <p className="text-gray-700">Most states require 20-40 hours of continuing education every 2 years for pharmacy technician license renewal.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">State-Specific Info</h3>
                  <p className="text-gray-700">Check with your state board of pharmacy for specific requirements in your jurisdiction.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Expiration Dates</h3>
                  <p className="text-gray-700">All courses have expiration dates. Complete courses before they expire to ensure credit eligibility.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Certificates</h3>
                  <p className="text-gray-700">Completion certificates are provided upon successful course completion and can be downloaded for your records.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FreeCEUsPage

export const Head = () => (
  <>
    <title>Free CEUs - PharmTechs Only</title>
    <meta name="description" content="Stay current with your continuing education requirements through our free CEU courses designed specifically for pharmacy technicians." />
  </>
)
