import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const PillIdentifierPage = () => {
  const [searchForm, setSearchForm] = useState({
    imprint: '',
    color: '',
    shape: '',
    size: ''
  })

  const colors = ['', 'White', 'Yellow', 'Pink', 'Blue', 'Green', 'Orange', 'Red', 'Purple', 'Brown', 'Gray', 'Black']
  const shapes = ['', 'Round', 'Oval', 'Capsule', 'Square', 'Triangle', 'Diamond', 'Oblong', 'Rectangular']
  const sizes = ['', 'Small (< 6mm)', 'Medium (6-12mm)', 'Large (> 12mm)']

  const handleInputChange = (field, value) => {
    setSearchForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSearch = () => {
    // This would typically connect to a pill identification API
    console.log('Searching for pill with criteria:', searchForm)
  }

  const sampleResults = [
    {
      name: 'Acetaminophen 325mg',
      imprint: 'TYLENOL 325',
      color: 'White',
      shape: 'Round',
      manufacturer: 'Johnson & Johnson',
      ndc: '50580-506-01'
    },
    {
      name: 'Ibuprofen 200mg',
      imprint: 'I-2',
      color: 'Orange',
      shape: 'Round',
      manufacturer: 'Advil',
      ndc: '50580-451-60'
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
          </nav>
          
          <h1 className="text-4xl font-bold mb-6">Pill Identifier</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Identify unknown medications by entering physical characteristics such as imprint, color, shape, and size.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <h2 className="text-xl font-semibold mb-2 text-red-800">Important Safety Notice</h2>
              <p className="text-gray-700">
                This tool is for informational purposes only. Always consult with a pharmacist or healthcare provider 
                for proper medication identification and never take unknown medications.
              </p>
            </div>
            
            {/* Search Form */}
            <div className="bg-white border rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-6">Search Criteria</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imprint/Text on Pill
                  </label>
                  <input
                    type="text"
                    placeholder="Enter any letters, numbers, or symbols"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchForm.imprint}
                    onChange={(e) => handleInputChange('imprint', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchForm.color}
                    onChange={(e) => handleInputChange('color', e.target.value)}
                  >
                    {colors.map((color, index) => (
                      <option key={index} value={color}>
                        {color || 'Select Color'}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shape
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchForm.shape}
                    onChange={(e) => handleInputChange('shape', e.target.value)}
                  >
                    {shapes.map((shape, index) => (
                      <option key={index} value={shape}>
                        {shape || 'Select Shape'}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchForm.size}
                    onChange={(e) => handleInputChange('size', e.target.value)}
                  >
                    {sizes.map((size, index) => (
                      <option key={index} value={size}>
                        {size || 'Select Size'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Search Pills
                </button>
              </div>
            </div>
            
            {/* Sample Results */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">Sample Results</h2>
              <p className="text-gray-600 mb-4">
                Here are examples of how search results would appear:
              </p>
              
              <div className="space-y-4">
                {sampleResults.map((pill, index) => (
                  <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-blue-900">{pill.name}</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        Match
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Imprint:</span>
                        <p className="text-gray-600">{pill.imprint}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Color:</span>
                        <p className="text-gray-600">{pill.color}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Shape:</span>
                        <p className="text-gray-600">{pill.shape}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Manufacturer:</span>
                        <p className="text-gray-600">{pill.manufacturer}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-500">NDC: {pill.ndc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">How to Use This Tool</h2>
              <div className="space-y-3 text-gray-700">
                <div>
                  <h3 className="font-semibold">1. Examine the Pill Carefully</h3>
                  <p>Look for any letters, numbers, or symbols imprinted on the medication.</p>
                </div>
                <div>
                  <h3 className="font-semibold">2. Note Physical Characteristics</h3>
                  <p>Observe the color, shape, and approximate size of the pill.</p>
                </div>
                <div>
                  <h3 className="font-semibold">3. Enter Information</h3>
                  <p>Fill in the search form with as much detail as possible for accurate results.</p>
                </div>
                <div>
                  <h3 className="font-semibold">4. Review Results</h3>
                  <p>Compare the results with your pill and verify with a healthcare professional.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Remember:</strong> Never take medication that you cannot positively identify. 
                  If you're unsure about a medication, consult your pharmacist or healthcare provider immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PillIdentifierPage

export const Head = () => (
  <>
    <title>Pill Identifier - PharmTechs Only</title>
    <meta name="description" content="Identify unknown medications by entering physical characteristics such as imprint, color, shape, and size." />
  </>
)
