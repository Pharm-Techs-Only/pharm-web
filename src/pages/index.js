import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <Layout>
      {/* Main Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Exciting News! A New Era for Pharm Techs Only! is on the Horizon!
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Get ready for a revolutionary new way to connect, learn, and grow within our global community! We are thrilled to announce that we are in the process of building an entirely new, custom experience for both web and mobile. This next-generation platform is being crafted from the ground up with one goal in mind: to better support and empower you, our dedicated community of pharmacy technicians. This is more than just an update; it's a complete reimagining of how we connect and advance together. Stay tuned for more details as we build the future of our community, together!
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-200 rounded-lg w-full h-96 flex items-center justify-center">
                <StaticImage src="../images/hero-home.svg" alt="Two Pharmacy Technicians" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="bg-gray-200 rounded-lg w-full h-80 flex items-center justify-center">
                <StaticImage src="../images/hero-home.svg" alt="Two Pharmacy Technicians" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Community For Us, By Us
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Being a pharmacy technician can be a challenging, and isolating career. It is hard to find the right resources, advance one's career, and find others that you can connect with.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our founder has felt this first-hand, and for the past 5 years she has been working tirelessly to build Pharm Techs Only!... a place for Pharm Techs, by Pharm Techs. Where our global community can come together to learn, share, support, and grow.
              </p>
              
              {/* Mailchimp signup form */}
              <div id="waitlist" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Join the Waitlist</h3>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Center Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Providing comprehensive tools and resources to support your job and growth as a pharmacy technician.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {[
              'Free CEUs',
              'Organizations',
              'Blog',
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
          
          <Link
            to="/resource-center"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Go to Resource Center
          </Link>
        </div>
      </section>

      {/* Tech Connect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Connect</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Building community, a centralized place to connect, share, and interact with other pharmacy technicians, just like you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {['Interact', 'Connect', 'Chat', 'Polls', 'Communities'].map((item, index) => (
              <div key={index} className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
                <h3 className="font-semibold text-indigo-900">{item}</h3>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 inline-block">
            <p className="text-yellow-800 font-medium">Tech Connect Coming Soon</p>
            <p className="text-yellow-800 font-medium"><Link
            to="/#waitlist"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >Join the Waitlist!</Link></p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Grow</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Supporting your career growth from certification through career advancement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {title: 'Global Career Center', link: 'https://careers.pharmtechsonly.com'},
              {title: 'Career Resources', link: 'https://careers.pharmtechsonly.com/career-resources'}, 
              {title: 'Interview Coach', link: 'https://careers.pharmtechsonly.com/interview-coach'},
              {title: 'Offer Analyzer', link: 'https://careers.pharmtechsonly.com/analyze-offer'},
            ].map((item, index) => (
              <Link key={index} to={item.link} target="_blank" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </Link>
            ))}
          </div>
          
          <Link
            to="https://careers.pharmtechsonly.com"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Go to Careers
          </Link>
        </div>
      </section>

      {/* Employers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Employer? See our tools built just for you!
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Are you a pharmacy looking to fill your opening with the certified, experienced pharmacy technicians?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Post Jobs', link: 'https://careers.pharmtechsonly.com/register-employer' },
              { title: 'Search Candidates', link: 'https://careers.pharmtechsonly.com/register-employer' },
              { title: 'List Your Company', link: 'https://careers.pharmtechsonly.com/register-employer' },
              { title: 'Advertise on Tech Connect', link: 'https://careers.pharmtechsonly.com/register-employer' }
            ].map((item, index) => (
              <div key={index} className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                <Link to={item.link} target="_blank" className="text-purple-900 hover:text-purple-700">
                  <h3 className="font-semibold text-purple-900">{item.title}</h3>
                </Link>
              </div>
            ))}
          </div>
          
          <Link
            to="https://careers.pharmtechsonly.com/register-employer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Create your FREE Employer Account
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

export const Head = () => (
  <>
    <title>PharmTechs Only - Community for Pharmacy Technicians</title>
    <meta name="description" content="A community for pharmacy technicians to connect, learn, and grow together." />
  </>
)
