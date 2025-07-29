import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const EbooksPage = () => {
  const ebooks = [
    {
      title: 'Complete Guide to Pharmacy Technician Certification',
      author: 'PharmTech Education Team',
      category: 'Certification',
      pages: 245,
      description: 'Comprehensive study guide covering all aspects of pharmacy technician certification exams.',
      topics: ['Pharmacy Law', 'Pharmacology', 'Pharmacy Operations', 'Patient Safety'],
      downloadSize: '2.1 MB',
      format: 'PDF'
    },
    {
      title: 'Medication Safety Handbook for Pharmacy Technicians',
      author: 'Dr. Sarah Johnson, PharmD',
      category: 'Safety',
      pages: 156,
      description: 'Essential safety protocols and error prevention strategies for pharmacy technicians.',
      topics: ['Error Prevention', 'Quality Assurance', 'Risk Management', 'Patient Counseling'],
      downloadSize: '1.8 MB',
      format: 'PDF'
    },
    {
      title: 'Sterile Compounding Best Practices',
      author: 'Michael Chen, CPhT',
      category: 'Compounding',
      pages: 198,
      description: 'Step-by-step guide to sterile compounding techniques and USP standards.',
      topics: ['USP Guidelines', 'Aseptic Technique', 'Cleanroom Protocols', 'Quality Control'],
      downloadSize: '3.2 MB',
      format: 'PDF'
    },
    {
      title: 'Insurance and Billing for Pharmacy Technicians',
      author: 'Lisa Martinez, CPhT',
      category: 'Billing',
      pages: 134,
      description: 'Navigate insurance claims, prior authorizations, and billing procedures.',
      topics: ['Insurance Processing', 'Prior Authorizations', 'Claim Rejections', 'Medicare/Medicaid'],
      downloadSize: '1.5 MB',
      format: 'PDF'
    },
    {
      title: 'Pharmacy Math Made Simple',
      author: 'Robert Kim, PharmD',
      category: 'Mathematics',
      pages: 89,
      description: 'Master pharmaceutical calculations with easy-to-follow examples and practice problems.',
      topics: ['Dosage Calculations', 'Ratio & Proportion', 'Unit Conversions', 'Business Math'],
      downloadSize: '1.2 MB',
      format: 'PDF'
    },
    {
      title: 'Customer Service Excellence in Pharmacy',
      author: 'Amanda Davis, CPhT',
      category: 'Customer Service',
      pages: 112,
      description: 'Develop exceptional customer service skills specific to pharmacy settings.',
      topics: ['Communication Skills', 'Conflict Resolution', 'Cultural Sensitivity', 'Professional Ethics'],
      downloadSize: '1.4 MB',
      format: 'PDF'
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
          
          <h1 className="text-4xl font-bold mb-6">Educational Ebooks</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Download comprehensive ebooks covering essential topics for pharmacy technicians. All books are available in PDF format for easy reading on any device.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ebooks.map((book, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                      <p className="text-gray-600 text-sm">by {book.author}</p>
                    </div>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                      {book.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500">
                    <div>
                      <span className="font-medium">Pages:</span> {book.pages}
                    </div>
                    <div>
                      <span className="font-medium">Format:</span> {book.format}
                    </div>
                    <div>
                      <span className="font-medium">Size:</span> {book.downloadSize}
                    </div>
                    <div>
                      <span className="font-medium">Free Download</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-gray-800">Topics Covered:</h3>
                    <div className="flex flex-wrap gap-2">
                      {book.topics.map((topic, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex-1">
                      Download PDF
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Download Instructions</h2>
              <div className="space-y-3 text-gray-700">
                <p>1. Click the "Download PDF" button for any ebook you'd like to access</p>
                <p>2. The file will download directly to your device</p>
                <p>3. Use any PDF reader to view the content (Adobe Reader, browser, mobile apps)</p>
                <p>4. Books can be read offline once downloaded</p>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> All ebooks are provided free of charge for educational purposes. 
                  Please respect copyright and do not redistribute without permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EbooksPage

export const Head = () => (
  <>
    <title>Educational Ebooks - PharmTechs Only</title>
    <meta name="description" content="Download comprehensive ebooks covering essential topics for pharmacy technicians. All books are available in PDF format for easy reading on any device." />
  </>
)
