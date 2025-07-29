import React from 'react'
import Layout from '../components/Layout'

const TermsPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the PharmTechs Only website and services, you accept and agree to be bound 
              by the terms and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily access the materials on PharmTechs Only for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
              You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <p className="text-gray-700 mb-4">Key account responsibilities include:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring all information provided is accurate and up-to-date</li>
              <li>Using the service in compliance with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Guidelines</h2>
            <p className="text-gray-700 mb-4">
              PharmTechs Only is a professional community. All users are expected to maintain professional 
              standards of conduct. The following behaviors are not permitted:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Harassment, discrimination, or abusive behavior toward other users</li>
              <li>Sharing false, misleading, or inappropriate content</li>
              <li>Violating patient privacy or sharing confidential information</li>
              <li>Promoting illegal activities or non-approved pharmaceutical practices</li>
              <li>Spam, solicitation, or unauthorized commercial activities</li>
              <li>Impersonating others or providing false information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content and Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              Users retain ownership of content they create and share on our platform. However, by posting content, 
              you grant PharmTechs Only a worldwide, non-exclusive, royalty-free license to use, display, and 
              distribute your content in connection with the service.
            </p>
            <p className="text-gray-700 mb-4">
              All materials on this site, including but not limited to text, graphics, logos, and software, 
              are the property of PharmTechs Only or its content suppliers and are protected by copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The information provided on PharmTechs Only is for educational and networking purposes only. 
              It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
              Users should always consult with qualified healthcare professionals regarding medical questions or concerns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall PharmTechs Only or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the materials on PharmTechs Only, even if authorized representative has been notified orally or 
              in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice 
              or liability, under our sole discretion, for any reason whatsoever and without limitation, including but 
              not limited to a breach of the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@pharmtechsonly.com<br />
                <strong>Address:</strong> PharmTechs Only Legal Department<br />
                [Your Address Here]
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default TermsPage

export const Head = () => (
  <>
    <title>Terms of Service - PharmTechs Only</title>
    <meta name="description" content="Terms of service for PharmTechs Only community platform." />
  </>
)
