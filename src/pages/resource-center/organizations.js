import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const OrganizationsPage = () => {
  const organizations = [
    {
      name: 'National Pharmacy Technician Association (NPTA)',
      type: 'National',
      description: 'Dedicated to advancing the value of pharmacy technicians and the vital roles they play in pharmaceutical care.',
      website: 'pharmacytechnician.org',
      benefits: ['Professional development', 'Certification resources', 'Networking opportunities', 'Career advancement']
    },
    {
      name: 'Pharmacy Technician Certification Board (PTCB)',
      type: 'Certification',
      description: 'The national certification organization for pharmacy technicians in the United States.',
      website: 'ptcb.org',
      benefits: ['National certification', 'Continuing education', 'Career resources', 'Specialty certifications']
    },
    {
      name: 'American Association of Pharmacy Technicians (AAPT)',
      type: 'Professional',
      description: 'Provides leadership and represents the interests of its members to the public and healthcare organizations.',
      website: 'pharmacytechnician.com',
      benefits: ['Advocacy', 'Professional recognition', 'Educational resources', 'Industry updates']
    },
    {
      name: 'American Society of Health-System Pharmacists (ASHP)',
      type: 'Health-System',
      description: 'Professional association of pharmacists and pharmacy technicians who serve in health systems.',
      website: 'ashp.org',
      benefits: ['Health-system focus', 'Clinical resources', 'Standards development', 'Career opportunities']
    },
    {
      name: 'National Association of Chain Drug Stores (NACDS)',
      type: 'Industry',
      description: 'Represents traditional drug stores, supermarkets and mass merchants with pharmacies.',
      website: 'nacds.org',
      benefits: ['Industry advocacy', 'Regulatory updates', 'Business resources', 'Policy information']
    },
    {
      name: 'International Association of Certified Pharmacy Technicians (IACPT)',
      type: 'International',
      description: 'Global organization promoting pharmacy technician professional standards worldwide.',
      website: 'iacpt.org',
      benefits: ['Global perspective', 'International standards', 'Cross-cultural learning', 'Global networking']
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
          </nav>
          
          <h1 className="text-4xl font-bold mb-6">Professional Organizations</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Connect with professional organizations that support pharmacy technicians through advocacy, education, and career development opportunities.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {organizations.map((org, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold">{org.name}</h2>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                      {org.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{org.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Website:</p>
                    <p className="text-blue-600 font-medium">{org.website}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-800">Member Benefits:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {org.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">Why Join Professional Organizations?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Career Advancement</h3>
                  <p className="text-gray-700">Access to job boards, career resources, and professional development opportunities.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Networking</h3>
                  <p className="text-gray-700">Connect with peers, mentors, and industry leaders in the pharmacy field.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Advocacy</h3>
                  <p className="text-gray-700">Have your voice heard on important issues affecting pharmacy technicians.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrganizationsPage

export const Head = () => (
  <>
    <title>Professional Organizations - PharmTechs Only</title>
    <meta name="description" content="Connect with professional organizations that support pharmacy technicians through advocacy, education, and career development opportunities." />
  </>
)
