import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const FreeCEUsPage = () => {
  const ceuCourses = [
    {
      title: 'Medication Safety in Community Pharmacy',
      hours: '2.0 CE Hours',
      description: 'Learn best practices for preventing medication errors and ensuring patient safety.',
      status: 'Available'
    },
    {
      title: 'Immunization Updates for Pharmacy Technicians',
      hours: '1.5 CE Hours',
      description: 'Stay current with the latest vaccination protocols and requirements.',
      status: 'Available'
    },
    {
      title: 'Controlled Substance Regulations',
      hours: '2.5 CE Hours',
      description: 'Understanding DEA regulations and compliance requirements.',
      status: 'Available'
    },
    {
      title: 'Sterile Compounding Fundamentals',
      hours: '3.0 CE Hours',
      description: 'Essential knowledge for sterile compounding procedures.',
      status: 'Coming Soon'
    }
  ];

  return (
    <Layout>
      <div className="content-container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
          </nav>
          
          <h1 className="text-4xl font-bold mb-6">Free Continuing Education Units (CEUs)</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Stay current with your continuing education requirements through our free CEU courses designed specifically for pharmacy technicians.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h2 className="text-xl font-semibold mb-2 text-yellow-800">Important Note</h2>
              <p className="text-gray-700">
                All courses are accredited and meet state requirements for pharmacy technician continuing education. 
                Certificates are provided upon successful completion.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Available Courses</h2>
            
            <div className="space-y-6">
              {ceuCourses.map((course, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">{course.hours}</p>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <button 
                    className={`px-4 py-2 rounded transition-colors ${
                      course.status === 'Available'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={course.status !== 'Available'}
                  >
                    {course.status === 'Available' ? 'Start Course' : 'Coming Soon'}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">CEU Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">National Requirements</h3>
                  <p className="text-gray-700">Most states require 20-40 hours of continuing education every 2 years for pharmacy technician license renewal.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">State-Specific Info</h3>
                  <p className="text-gray-700">Check with your state board of pharmacy for specific requirements in your jurisdiction.</p>
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
