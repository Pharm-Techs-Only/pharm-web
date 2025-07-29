import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const ConferencesPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingConferences = [
    {
      name: 'National Pharmacy Technician Conference 2025',
      date: 'April 15-17, 2025',
      location: 'Las Vegas, NV',
      organizer: 'National Pharmacy Technician Association',
      description: 'The premier education and networking event for pharmacy technicians across the nation.',
      topics: ['Certification Updates', 'Career Development', 'Technology in Pharmacy', 'Patient Safety'],
      registrationFee: '$299 (Members: $249)',
      website: 'nptaconference.org',
      earlyBird: 'Early Bird Deadline: February 15, 2025'
    },
    {
      name: 'ASHP Midyear Clinical Meeting 2025',
      date: 'December 8-12, 2025',
      location: 'New Orleans, LA',
      organizer: 'American Society of Health-System Pharmacists',
      description: 'Leading conference for health-system pharmacy professionals including technicians.',
      topics: ['Clinical Pharmacy', 'Health-System Operations', 'Medication Safety', 'Leadership'],
      registrationFee: '$425 (Students: $125)',
      website: 'ashp.org/midyear',
      earlyBird: 'Early Bird Deadline: September 30, 2025'
    },
    {
      name: 'Pharmacy Technician Excellence Summit',
      date: 'June 5-7, 2025',
      location: 'Chicago, IL',
      organizer: 'PharmTech Education Institute',
      description: 'Focused on advancing pharmacy technician skills and professional development.',
      topics: ['Sterile Compounding', 'Immunizations', 'Specialty Pharmacy', 'Quality Assurance'],
      registrationFee: '$199',
      website: 'pharmtechsummit.com',
      earlyBird: 'Early Bird Deadline: April 1, 2025'
    },
    {
      name: 'Regional Pharmacy Technician Workshop - West Coast',
      date: 'August 22-23, 2025',
      location: 'San Francisco, CA',
      organizer: 'California Pharmacy Technician Association',
      description: 'Regional workshop focusing on state-specific regulations and best practices.',
      topics: ['State Regulations', 'Controlled Substances', 'Insurance Processing', 'Customer Service'],
      registrationFee: '$149',
      website: 'cpta-workshop.org',
      earlyBird: 'Early Bird Deadline: July 1, 2025'
    }
  ]

  const pastConferences = [
    {
      name: 'National Pharmacy Technician Conference 2024',
      date: 'April 12-14, 2024',
      location: 'Orlando, FL',
      attendees: '2,500+',
      highlights: ['Record attendance', 'New certification pathways announced', '50+ educational sessions']
    },
    {
      name: 'ASHP Midyear Clinical Meeting 2024',
      date: 'December 10-14, 2024',
      location: 'Anaheim, CA',
      attendees: '25,000+',
      highlights: ['Technology showcase', 'Career fair', 'Specialized technician tracks']
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
          </nav>
          
          <h1 className="text-4xl font-bold mb-6">Pharmacy Technician Conferences</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Stay updated on professional development opportunities, network with peers, and advance your career through industry conferences and events.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 border-b">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Upcoming Conferences
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
                  activeTab === 'past'
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Past Events
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
                  activeTab === 'benefits'
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Benefits
              </button>
            </div>
            
            {/* Upcoming Conferences Tab */}
            {activeTab === 'upcoming' && (
              <div className="space-y-8">
                {upcomingConferences.map((conference, index) => (
                  <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">{conference.name}</h2>
                        <p className="text-gray-600 text-sm">Organized by {conference.organizer}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Open Registration
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-700">Date</h3>
                        <p className="text-gray-600">{conference.date}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Location</h3>
                        <p className="text-gray-600">{conference.location}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Registration Fee</h3>
                        <p className="text-gray-600">{conference.registrationFee}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{conference.description}</p>
                    
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 text-gray-800">Key Topics:</h3>
                      <div className="flex flex-wrap gap-2">
                        {conference.topics.map((topic, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-orange-600 font-medium">{conference.earlyBird}</p>
                        <p className="text-sm text-gray-500">Website: {conference.website}</p>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Past Events Tab */}
            {activeTab === 'past' && (
              <div className="space-y-6">
                {pastConferences.map((conference, index) => (
                  <div key={index} className="bg-gray-50 border rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{conference.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-700">Date</h3>
                        <p className="text-gray-600">{conference.date}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Location</h3>
                        <p className="text-gray-600">{conference.location}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700">Attendees</h3>
                        <p className="text-gray-600">{conference.attendees}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Event Highlights:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {conference.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white border rounded-lg p-6 text-center">
                    <div className="text-blue-600 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Continuing Education</h3>
                    <p className="text-gray-600">Earn CE credits required for license renewal and professional development.</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6 text-center">
                    <div className="text-blue-600 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Networking</h3>
                    <p className="text-gray-600">Connect with peers, mentors, and industry leaders from across the country.</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6 text-center">
                    <div className="text-blue-600 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Latest Trends</h3>
                    <p className="text-gray-600">Stay current with industry trends, technology, and best practices.</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6 text-center">
                    <div className="text-blue-600 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Career Advancement</h3>
                    <p className="text-gray-600">Discover new career paths and advancement opportunities in pharmacy.</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6 text-center">
                    <div className="text-blue-600 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6m8 0H8" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Vendor Expo</h3>
                    <p className="text-gray-600">Explore new products, services, and technology solutions for pharmacy practice.</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6 text-center">
                    <div className="text-blue-600 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Professional Recognition</h3>
                    <p className="text-gray-600">Gain recognition for achievements and contributions to the pharmacy profession.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-800">Getting the Most from Conferences</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Before the Conference</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Review the agenda and plan your sessions</li>
                        <li>Set networking goals</li>
                        <li>Prepare business cards</li>
                        <li>Research exhibitors</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">During the Conference</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Attend diverse sessions</li>
                        <li>Actively participate in discussions</li>
                        <li>Visit the vendor expo</li>
                        <li>Exchange contacts with peers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ConferencesPage

export const Head = () => (
  <>
    <title>Pharmacy Technician Conferences - PharmTechs Only</title>
    <meta name="description" content="Stay updated on professional development opportunities, network with peers, and advance your career through industry conferences and events." />
  </>
)
