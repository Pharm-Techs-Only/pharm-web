import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const OrganizationsPage = () => {
  const [activeTab, setActiveTab] = useState('associations')

  const organizationsData = {
    associations: [
      {
        name: 'National Pharmacy Technician Association (NPTA)',
        description: 'Dedicated to advancing the value of pharmacy technicians and the vital roles they play in pharmaceutical care.',
        website: 'pharmacytechnician.org',
        benefits: ['Professional development', 'Certification resources', 'Networking opportunities', 'Career advancement']
      },
      {
        name: 'American Association of Pharmacy Technicians (AAPT)',
        description: 'Provides leadership and represents the interests of its members to the public and healthcare organizations.',
        website: 'pharmacytechnician.com',
        benefits: ['Advocacy', 'Professional recognition', 'Educational resources', 'Industry updates']
      },
      {
        name: 'American Society of Health-System Pharmacists (ASHP)',
        description: 'Professional association of pharmacists and pharmacy technicians who serve in health systems.',
        website: 'ashp.org',
        benefits: ['Health-system focus', 'Clinical resources', 'Standards development', 'Career opportunities']
      },
      {
        name: 'International Association of Certified Pharmacy Technicians (IACPT)',
        description: 'Global organization promoting pharmacy technician professional standards worldwide.',
        website: 'iacpt.org',
        benefits: ['Global perspective', 'International standards', 'Cross-cultural learning', 'Global networking']
      }
    ],
    boards: [
      {
        name: 'Pharmacy Technician Certification Board (PTCB)',
        description: 'The national certification organization for pharmacy technicians in the United States.',
        website: 'ptcb.org',
        benefits: ['National certification', 'Continuing education', 'Career resources', 'Specialty certifications']
      },
      {
        name: 'National Association of Boards of Pharmacy (NABP)',
        description: 'Independent organization that assists state boards of pharmacy in developing, implementing, and enforcing policies.',
        website: 'nabp.pharmacy',
        benefits: ['Regulatory guidance', 'State board resources', 'Compliance information', 'Professional standards']
      },
      {
        name: 'ExCPT Certification Board',
        description: 'Alternative certification pathway for pharmacy technicians with experience-based qualifications.',
        website: 'nhanow.com/excpt',
        benefits: ['Experience-based certification', 'Flexible testing options', 'Career validation', 'Professional recognition']
      }
    ],
    councils: [
      {
        name: 'National Association of Chain Drug Stores (NACDS)',
        description: 'Represents traditional drug stores, supermarkets and mass merchants with pharmacies.',
        website: 'nacds.org',
        benefits: ['Industry advocacy', 'Regulatory updates', 'Business resources', 'Policy information']
      },
      {
        name: 'Healthcare Financial Management Association (HFMA)',
        description: 'Professional organization for healthcare financial management leaders, including pharmacy operations.',
        website: 'hfma.org',
        benefits: ['Financial management resources', 'Healthcare policy updates', 'Professional networking', 'Industry insights']
      },
      {
        name: 'American Pharmacists Association (APhA)',
        description: 'National professional society of pharmacists supporting the pharmacy profession and patient care.',
        website: 'pharmacist.com',
        benefits: ['Professional advocacy', 'Policy influence', 'Educational resources', 'Industry leadership']
      }
    ]
  }

  const tabs = [
    { key: 'associations', label: 'Associations', count: organizationsData.associations.length },
    { key: 'boards', label: 'Boards', count: organizationsData.boards.length },
    { key: 'councils', label: 'Councils', count: organizationsData.councils.length }
  ]

  const renderOrganizations = (organizations) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {organizations.map((org, index) => (
        <div key={index} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-3 text-gray-900">{org.name}</h3>
          <p className="text-gray-600 mb-4">{org.description}</p>
          
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">Website:</p>
            <p className="text-blue-600 font-medium">{org.website}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-gray-800">Key Benefits:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {org.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 border-t">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
          </nav>
          
          <h1 className="text-4xl font-bold mb-4">Professional Organizations</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Explore professional organizations that support pharmacy technicians through advocacy, education, 
            and career development. Connect with associations, certification boards, and industry councils 
            to advance your pharmacy career.
          </p>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.key
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } transition-colors`}
                  >
                    {tab.label}
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-12">
            {activeTab === 'associations' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Professional Associations</h2>
                  <p className="text-gray-600">
                    Professional associations focused on advancing pharmacy technician careers, advocacy, and professional development.
                  </p>
                </div>
                {renderOrganizations(organizationsData.associations)}
              </div>
            )}

            {activeTab === 'boards' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Certification & Regulatory Boards</h2>
                  <p className="text-gray-600">
                    Certification organizations and regulatory boards that establish standards and provide credentials for pharmacy technicians.
                  </p>
                </div>
                {renderOrganizations(organizationsData.boards)}
              </div>
            )}

            {activeTab === 'councils' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Industry Councils</h2>
                  <p className="text-gray-600">
                    Industry councils and organizations that represent pharmacy operations, policy, and business interests.
                  </p>
                </div>
                {renderOrganizations(organizationsData.councils)}
              </div>
            )}
          </div>
          
          {/* Benefits Section */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Why Join Professional Organizations?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-green-900">Career Advancement</h3>
                <p className="text-gray-700">Access to job boards, career resources, and professional development opportunities.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-900">Networking</h3>
                <p className="text-gray-700">Connect with peers, mentors, and industry leaders in the pharmacy field.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-900">Advocacy</h3>
                <p className="text-gray-700">Have your voice heard on important issues affecting pharmacy technicians.</p>
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
    <meta name="description" content="Explore professional organizations that support pharmacy technicians through advocacy, education, and career development opportunities." />
  </>
)
