import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

const MedicalDictionaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'General', 'Pharmacy', 'Anatomy', 'Conditions', 'Procedures']

  const medicalTerms = [
    {
      term: 'Absorption',
      category: 'Pharmacy',
      definition: 'The process by which a drug enters the bloodstream from its site of administration.',
      pronunciation: 'ab-SORP-shun'
    },
    {
      term: 'Bioavailability',
      category: 'Pharmacy',
      definition: 'The fraction of an administered dose of unchanged drug that reaches the systemic circulation.',
      pronunciation: 'BY-oh-uh-VAY-luh-bil-ih-tee'
    },
    {
      term: 'Contraindication',
      category: 'General',
      definition: 'A specific situation in which a drug, procedure, or surgery should not be used because it may be harmful.',
      pronunciation: 'kon-truh-in-dih-KAY-shun'
    },
    {
      term: 'Dosage Form',
      category: 'Pharmacy',
      definition: 'The physical form in which a drug is produced and dispensed, such as tablets, capsules, or liquids.',
      pronunciation: 'DOH-sij form'
    },
    {
      term: 'Efficacy',
      category: 'General',
      definition: 'The ability of a drug to produce the desired therapeutic effect under ideal conditions.',
      pronunciation: 'EF-ih-kuh-see'
    },
    {
      term: 'Formulary',
      category: 'Pharmacy',
      definition: 'A list of medications that are approved for use by a healthcare system or insurance plan.',
      pronunciation: 'FOR-myuh-ler-ee'
    },
    {
      term: 'Generic Drug',
      category: 'Pharmacy',
      definition: 'A medication that contains the same active ingredient as a brand-name drug but is sold under its chemical name.',
      pronunciation: 'juh-NER-ik drug'
    },
    {
      term: 'Half-life',
      category: 'Pharmacy',
      definition: 'The time required for the concentration of a drug in the blood to decrease by half.',
      pronunciation: 'HAF-lyf'
    },
    {
      term: 'Indication',
      category: 'General',
      definition: 'A medical condition or symptom that makes a particular treatment or procedure advisable.',
      pronunciation: 'in-dih-KAY-shun'
    },
    {
      term: 'Metabolism',
      category: 'General',
      definition: 'The chemical processes by which the body breaks down and transforms substances, including medications.',
      pronunciation: 'muh-TAB-uh-lizm'
    },
    {
      term: 'Pharmacokinetics',
      category: 'Pharmacy',
      definition: 'The study of how the body processes drugs, including absorption, distribution, metabolism, and excretion.',
      pronunciation: 'far-muh-koh-ky-NET-iks'
    },
    {
      term: 'Therapeutic Index',
      category: 'Pharmacy',
      definition: 'A measure of drug safety, calculated as the ratio between toxic and therapeutic doses.',
      pronunciation: 'ther-uh-PYOO-tik IN-deks'
    },
    {
      term: 'Hypertension',
      category: 'Conditions',
      definition: 'High blood pressure, a condition in which the force of blood against artery walls is consistently too high.',
      pronunciation: 'hy-per-TEN-shun'
    },
    {
      term: 'Intramuscular',
      category: 'Procedures',
      definition: 'A method of drug administration by injection into a muscle.',
      pronunciation: 'in-truh-MUS-kyuh-ler'
    },
    {
      term: 'Cardiovascular',
      category: 'Anatomy',
      definition: 'Relating to the heart and blood vessels.',
      pronunciation: 'kar-dee-oh-VAS-kyuh-ler'
    }
  ]

  const filteredTerms = medicalTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
          </nav>
          
          <h1 className="text-4xl font-bold mb-6">Medical Dictionary</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Search our comprehensive medical dictionary to find definitions, pronunciations, and explanations of medical and pharmaceutical terms.
            </p>
            
            {/* Search and Filter Section */}
            <div className="mb-8 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Search for a medical term..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Results Section */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'}
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
            
            {/* Terms List */}
            <div className="space-y-4">
              {filteredTerms.length > 0 ? (
                filteredTerms.map((term, index) => (
                  <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-blue-900">{term.term}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        {term.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 italic">
                      Pronunciation: {term.pronunciation}
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed">
                      {term.definition}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">No terms found matching your search criteria.</p>
                  <p className="text-gray-400 text-sm mt-2">Try adjusting your search term or category filter.</p>
                </div>
              )}
            </div>
            
            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">About This Dictionary</h2>
              <div className="space-y-3 text-gray-700">
                <p>Our medical dictionary contains thousands of terms commonly used in pharmacy and healthcare settings.</p>
                <p>Each entry includes:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Clear, concise definitions</li>
                  <li>Pronunciation guides</li>
                  <li>Category classification</li>
                  <li>Context-specific explanations</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Note:</strong> This dictionary is for educational purposes only and should not replace professional medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MedicalDictionaryPage

export const Head = () => (
  <>
    <title>Medical Dictionary - PharmTechs Only</title>
    <meta name="description" content="Search our comprehensive medical dictionary to find definitions, pronunciations, and explanations of medical and pharmaceutical terms." />
  </>
)
