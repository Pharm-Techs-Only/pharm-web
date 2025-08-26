import React from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'
import { 
  getCEUsGroupedAndSorted, 
  getAvailableYears,
  isCEUExpiringSoon
} from '../../data/ceus'

const FreeCEUsPage = () => {
  // Get CEUs grouped by year and sorted
  const ceusByYear = getCEUsGroupedAndSorted()
  const availableYears = getAvailableYears()

  // Format date for display
  const formatExpirationDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Layout>
      {/* Hero Section */}
      <HeroHeader>
        <div className="content-container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Free Continuing Education Units (CEUs)
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay current with your continuing education requirements through our free CEU courses designed specifically for pharmacy technicians.
          </p>
        </div>
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
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            ceu.status === 'Available' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {ceu.status}
                          </span>
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
