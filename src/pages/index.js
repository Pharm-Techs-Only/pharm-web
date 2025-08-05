import React from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import MailchimpSubscribe from '../components/MailchimpSubscribe'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <Layout>
      {/* Main Hero Section */}
      <HeroHeader>
        <div className="relative">
          <div className="content-container">
            <div className="flex flex-row justify-between items-center">
              <div className="max-w-[730px] w-[60%]">
                <h1>
                  Exciting News! A New Era for Pharm Techs Only! is on the Horizon!
                </h1>
                <p>
                  Get ready for a revolutionary new way to connect, learn, and grow within our global community! We are thrilled to announce that we are in the process of building an entirely new, custom experience for both web and mobile. This next-generation platform is being crafted from the ground up with one goal in mind: to better support and empower you, our dedicated community of pharmacy technicians. This is more than just an update; it's a complete reimagining of how we connect and advance together. Stay tuned for more details as we build the future of our community, together!
                </p>
              </div>
              <div className="flex justify-center">
                <StaticImage src="../images/hero_home.svg" alt="Two Pharmacy Technicians" className="relative -bottom-[150px]" />
              </div>
            </div>
            <StaticImage className="absolute -z-1 w-[352px] h-[99px] l-[50px] t-[220px]" src="../images/cloud_one.svg" alt="Cloud One" />
            <StaticImage className="absolute -z-1 w-[831px] h-[151px] r-[0] b-[200px]" src="../images/cloud_three.svg" alt="Cloud Three" />
            <StaticImage className="absolute -z-1 w-full h-auto l-[0] b-[0]" src="../images/cloud_floor.svg" alt="Cloud Floor" />
          </div>
        </div>
      </HeroHeader>

      {/* Subscribe Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container">
            <div className="flex flex-row justify-between items-center">
              <div className="flex justify-center">
                <StaticImage src="../images/hero_home.svg" alt="Two Pharmacy Technicians" />
              </div>
              <div className="max-w-[730px] w-[60%]">
                <h2>
                  A Community For Us, By Us
                </h2>
                <p>
                  Being a pharmacy technician can be a challenging, and isolating career. It is hard to find the right resources, advance one's career, and find others that you can connect with.
                </p>
                <p>
                  Our founder has felt this first-hand, and for the past 5 years she has been working tirelessly to build Pharm Techs Only!... a place for Pharm Techs, by Pharm Techs. Where our global community can come together to learn, share, support, and grow.
                </p>
                
                {/* Mailchimp signup form */}
                <div id="waitlist">
                  <MailchimpSubscribe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Center Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container flex flex-col items-center">
              <h2>Learn</h2>
              <p>
                Providing comprehensive tools and resources to support your job and growth as a pharmacy technician.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                <Link to="/resource-center/free-ceus" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="height-[102px] mb-4">
                    <StaticImage src="../images/icon_career-resources.svg" alt="Free CEUs" className="w-[98px] h-[89px]" />
                  </div>
                  <h3>Free CEUs</h3>
                </Link>
                <Link to="/resource-center/organizations" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="height-[102px] mb-4">
                    <StaticImage src="../images/icon_organizations.svg" alt="Organizations" className="w-[84px] h-[102px]" />
                  </div>
                  <h3>Organizations</h3>
                </Link>
                <Link to="/resource-center/blog" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="height-[102px] mb-4">
                    <StaticImage src="../images/icon_blog.svg" alt="Blog" className="w-[91px] h-[83px]" />
                  </div>
                  <h3>Blog</h3>
                </Link>
              </div>
              
              <Link
                to="/resource-center"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Go to Resource Center
              </Link>
            </div>
          </div>
      </section>

      {/* Tech Connect Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container flex flex-col items-center">
            <h2>Tech Connect</h2>
            <p>
              Building community, a centralized place to connect, share, and interact with other pharmacy technicians, just like you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {['Interact', 'Connect', 'Chat', 'Polls', 'Communities'].map((item, index) => (
                <div key={index} className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 inline-block">
              <p>Tech Connect Coming Soon</p>
              <p><Link
              to="/#waitlist"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
            >Join the Waitlist!</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container flex flex-col items-center">
            <h2>Grow</h2>
            <p>
              Supporting your career growth from certification through career advancement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Link to="https://careers.pharmtechsonly.com" target="_blank" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_global-careers.svg" alt="Global Career Center" className="w-[98px] h-[89px]" />
                </div>
                <h3>Global Career Center</h3>
              </Link>
              <Link to="https://careers.pharmtechsonly.com/career-resources" target="_blank" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_career-resources.svg" alt="Career Resources" className="w-[98px] h-[89px]" />
                </div>
                <h3>Career Resources</h3>
              </Link>
              <Link to="https://careers.pharmtechsonly.com/interview-coach" target="_blank" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_career-resources.svg" alt="Interview Coach" className="w-[98px] h-[89px]" />
                </div>
                <h3>Interview Coach</h3>
              </Link>
              <Link to="https://careers.pharmtechsonly.com/analyze-offer" target="_blank" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_career-resources.svg" alt="Offer Analyzer" className="w-[98px] h-[89px]" />
                </div>
                <h3>Offer Analyzer</h3>
              </Link>
            </div>
            
            <Link
              to="https://careers.pharmtechsonly.com"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
            >
              Go to Careers
            </Link>
          </div>
        </div>
      </section>

      {/* Employers Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container">
            <h2>
              Employer? See our tools built just for you!
            </h2>
            <p>
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
