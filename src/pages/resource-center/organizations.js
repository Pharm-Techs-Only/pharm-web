import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'
import HeroHeader from '../../components/HeroHeader'
import { OrganizationsData } from '../../data/organizations'
import { StaticImage } from 'gatsby-plugin-image'
import ResourceLink from '../../components/ResourceLink'

const OrganizationsPage = () => {
  const [activeTab, setActiveTab] = useState('associations')

  

  const tabs = [
    { key: 'associations', label: 'Associations', count: OrganizationsData.associations.length },
    { key: 'boards', label: 'Boards', count: OrganizationsData.boards.length },
    { key: 'councils', label: 'Councils', count: OrganizationsData.councils.length }
  ]

  // Group organizations by region
  const groupByRegion = (organizations) => {
    const grouped = organizations.reduce((acc, org) => {
      if (!acc[org.region]) {
        acc[org.region] = []
      }
      acc[org.region].push(org)
      return acc
    }, {})
    
    // Sort regions: North America first, then alphabetically
    const sortedRegions = Object.keys(grouped).sort((a, b) => {
      if (a === 'North America') return -1
      if (b === 'North America') return 1
      return a.localeCompare(b)
    })
    
    return sortedRegions.map(region => ({
      region,
      organizations: grouped[region]
    }))
  }

  const renderOrganizations = (organizations) => {
    const regionGroups = groupByRegion(organizations)
    
    return (
      <div className="space-y-8">
        {regionGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="pl-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-pharm-blue text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                {group.organizations.length}
              </span>
              {group.region} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {group.organizations.map((org, index) => (
                <div key={index} className="item-wrap justify-start items-start text-left">
                  <div className="flex justify-between w-full items-start align-center mb-3">
                    <h4 className="text-lg font-bold">{org.name}</h4>
                    <span className="bg-gray-100 px-2 py-1 rounded-[4px] text-xs font-medium">
                      {org.region}
                    </span>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="space-y-3 mb-4">
                    {org.address && (
                      <div>
                        <p className="font-medium text-pharm-grey mb-1">Address:</p>
                        <p className="text-sm">
                          {org.building && <span>{org.building}<br /></span>}
                          {org.address}
                        </p>
                      </div>
                    )}
                    
                    {org.phone && (
                      <div>
                        <p className="font-medium text-pharm-grey mb-1">Phone:</p>
                        <p className="text-sm">{org.phone}</p>
                      </div>
                    )}
                    
                    {org.fax && (
                      <div>
                        <p className="font-medium text-pharm-grey mb-1">Fax:</p>
                        <p className="text-sm">{org.fax}</p>
                      </div>
                    )}
                    
                    {org.email && (
                      <div>
                        <p className="font-medium text-pharm-grey mb-1">Email:</p>
                        <p className="text-sm">{org.email}</p>
                      </div>
                    )}
                    
                    {org.website && (
                      <div>
                        <p className="font-medium text-pharm-grey mb-1">Website:</p>
                        <a
                          href={org.website}
                          target="_blank" rel="noreferrer"
                          rel="noopener noreferrer"
                          className="text-pharm-blue hover:text-pharm-light-blue text-sm underline break-all"
                        >
                          {org.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Layout includeCTA={true}>
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Organizations
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connect with pharmacy technician organizations in your country.
          </p>
        </div>
        <div className="flex justify-center w-[50%] relative px-12">
          <StaticImage src="../../images/hero_home.svg" alt="Two Pharmacy Technicians" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <ResourceLink />
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
              <nav className="-mb-px flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`py-4 px-6 border-b-2 font-medium text-[16px] ${
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
                {renderOrganizations(OrganizationsData.associations)}
              </div>
            )}

            {activeTab === 'boards' && (
              <div>
                <div className="mb-6">
                  <h2 className="mb-2">Certification & Regulatory Boards</h2>
                  <p className="">
                    Certification organizations and regulatory boards that establish standards and provide credentials for pharmacy technicians.
                  </p>
                </div>
                {renderOrganizations(OrganizationsData.boards)}
              </div>
            )}

            {activeTab === 'councils' && (
              <div>
                <div className="mb-6">
                  <h2 className="mb-2">Industry Councils</h2>
                  <p className="">
                    Industry councils and organizations that represent pharmacy operations, policy, and business interests.
                  </p>
                </div>
                {renderOrganizations(OrganizationsData.councils)}
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
