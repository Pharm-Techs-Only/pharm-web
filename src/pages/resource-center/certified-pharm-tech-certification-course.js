import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const CertifiedPharmTechCertificationCoursePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
          </nav>
          
          <h1 className="text-4xl font-bold mb-6">Certified Pharm Tech Certification Course</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Advance your career with our comprehensive pharmacy technician certification course designed to prepare you for national certification exams.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Course Overview</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Comprehensive curriculum covering all certification exam topics</li>
                <li>Interactive modules and practice tests</li>
                <li>Expert instruction from certified pharmacy professionals</li>
                <li>Flexible online learning platform</li>
                <li>Certificate of completion provided</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Course Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold">Pharmacy Law & Ethics</h3>
                <p className="text-gray-600">Federal and state regulations, ethical considerations</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold">Pharmacology</h3>
                <p className="text-gray-600">Drug classifications, mechanisms of action</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold">Pharmacy Operations</h3>
                <p className="text-gray-600">Dispensing processes, inventory management</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold">Patient Safety</h3>
                <p className="text-gray-600">Error prevention, quality assurance</p>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">Enroll Today</h2>
              <p className="mb-4">Ready to take the next step in your pharmacy career?</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Start Your Certification Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CertifiedPharmTechCertificationCoursePage

export const Head = () => (
  <>
    <title>Certified Pharm Tech Certification Course - PharmTechs Only</title>
    <meta name="description" content="Advance your career with our comprehensive pharmacy technician certification course designed to prepare you for national certification exams." />
  </>
)
