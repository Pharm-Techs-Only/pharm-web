import React from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'
import { CeusData } from '../../data/ceus'
import { StaticImage } from 'gatsby-plugin-image'
import ResourceLink from '../../components/ResourceLink'

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
  const groupCEUsByYear = (ceus = CeusData) => {
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
  const sortCEUsByDate = (ceus = CeusData) => {
    return [...ceus].sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate))
  }

  /**
   * Gets CEUs grouped by year and sorted within each year (excludes expired CEUs)
   * @param {Array} ceus - Array of CEU objects
   * @returns {Object} Object with years as keys and sorted arrays of CEUs as values
   */
  const getCEUsGroupedAndSorted = (ceus = CeusData) => {
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
  const getAvailableYears = (ceus = CeusData) => {
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
  const filterCEUsByExpiration = (ceus = CeusData) => {
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
  const ceusByYear = getCEUsGroupedAndSorted(CeusData)
  const availableYears = getAvailableYears(CeusData)

  return (
    <Layout includeCTA={true}>
      {/* Hero Section */}
      <HeroHeader>
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
            <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
              <h1>
                Free Continuing Education Units (CEUs)
              </h1>
              <p className="text-xl text-pharm-grey max-w-3xl mx-auto">
                Stay current with your continuing education requirements through our free CEU courses designed specifically for pharmacy technicians.
              </p>
            </div>
            <div className="flex justify-center w-[50%] relative px-12">
              <StaticImage src="../../images/hero_home.svg" alt="Two Pharmacy Technicians" className="lg:!absolute -bottom-[20px]" />
            </div>
          </div>
          <div className="-left-[220px] bottom-[240px] absolute z-10"><StaticImage src="../../images/cloud_hero-three.svg" alt="Cloud Three" /></div>
          <div className="right-[260] top-[164px] absolute z-10"><StaticImage src="../../images/cloud_hero-one.svg" alt="Cloud One" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><StaticImage src="../../images/cloud_floor-hero.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <ResourceLink />
          </nav>
          
          <div className="prose max-w-none">
            <p className="text-lg text-pharm-grey mb-8">
              Stay current with your continuing education requirements through our free CEU courses designed specifically for pharmacy technicians.
            </p>
            
            <div className="item-wrap p-6 mb-8 items-start">
              <h2 className="text-xl font-semibold mb-2 text-pharm-blue">Important Note</h2>
              <p className="text-pharm-grey">
                All courses are accredited and meet state requirements for pharmacy technician continuing education. 
                Certificates are provided upon successful completion. Please note the expiration dates for each course.
              </p>
            </div>
            
            {availableYears.map(year => (
              <div key={year} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-pharm-blue">
                  Expiring in {year}
                </h2>
                
                <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ceusByYear[year]?.map((ceu, index) => (
                    <div key={index} className="item-wrap items-start">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold font-body text-pharm-blue pr-4">{ceu.title}</h3>
                        <div className="flex flex-col items-end space-y-2">
                          {isCEUExpiringSoon(ceu) && (
                            <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800">
                              Expiring Soon
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <StaticImage src="../../images/icon_cal.svg" alt="Calendar Icon" className="w-[24px] h-[24px]" />
                          <p className="text-pharm-grey font-medium mb-0">
                            Expiration Date: {formatExpirationDate(ceu.expirationDate)}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <StaticImage src="../../images/icon_clock.svg" alt="Clock Icon" className="w-[24px] h-[24px]" />
                          <p className="text-pharm-grey font-medium mb-0">{ceu.hours}</p>
                        </div>
                      </div>
                      
                      <p className="text-pharm-grey mb-8">{ceu.description}</p>
                      
                      <button 
                        className={`px-4 py-2 rounded transition-colors ${
                          ceu.link
                            ? 'bg-pharm-green text-white hover:bg-pharm-green/80'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!ceu.link || ceu.link === '#'}
                        onClick={() => {
                          if (ceu.link && ceu.link !== '#') {
                            window.open(ceu.link, '_blank')
                          }
                        }}
                      >
                        {ceu.link && ceu.link !== '#' ? 'Click to View!' : 'Coming Soon...'}
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
                  <p className="text-pharm-grey">Most states require 20-40 hours of continuing education every 2 years for pharmacy technician license renewal.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">State-Specific Info</h3>
                  <p className="text-pharm-grey">Check with your state board of pharmacy for specific requirements in your jurisdiction.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Expiration Dates</h3>
                  <p className="text-pharm-grey">All courses have expiration dates. Complete courses before they expire to ensure credit eligibility.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Certificates</h3>
                  <p className="text-pharm-grey">Completion certificates are provided upon successful course completion and can be downloaded for your records.</p>
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
