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
      <HeroHeader className="relative pb-[60px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
            <div className="pt-[60px] md:pt-[80px] py-0 lg:py-[120px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
              <h1>
                Exciting News! A New Era for Pharm Techs Only! is on the Horizon!
              </h1>
              <p>
                Get ready for a revolutionary new way to connect, learn, and grow within our global community! We are thrilled to announce that we are in the process of building an entirely new, custom experience for both web and mobile. This next-generation platform is being crafted from the ground up with one goal in mind: to better support and empower you, our dedicated community of pharmacy technicians. This is more than just an update; it's a complete reimagining of how we connect and advance together. Stay tuned for more details as we build the future of our community, together!
              </p>
            </div>
            <div className="flex justify-center w-[50%] relative px-12">
              <StaticImage src="../images/hero_home.svg" alt="Two Pharmacy Technicians" className="lg:!absolute -bottom-[20px]" />
            </div>
          </div>
          <div className="-left-[60px] top-[40px] absolute z-1"><StaticImage src="../images/cloud_hero-one.svg" alt="Cloud One" /></div>
          <div className="right-[0] bottom-[180px] absolute z-1"><StaticImage src="../images/cloud_hero-three.svg" alt="Cloud Three" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-1"><StaticImage src="../images/cloud_floor-hero.svg" alt="Cloud Floor" layout="fullWidth" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-blue)] to-[#d8ebff]/34 opacity-75 pointer-events-none z-10"></div>
      </HeroHeader>

      {/* Subscribe Section */}
      <section className="relative pb-[60px] lg:pb-[160px]">
        <div className="content-container relative">
          <div className="relative px-4 sm:px-6 lg:px-8 z-20 flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="flex justify-center w-[50%] px-12">
              <StaticImage src="../images/home_community.svg" alt="Two Pharmacy Technicians" />
            </div>
            <div className="pt-[60px] md:pt-[80px] lg:py-[120px] xl:py-[170px] w-[100%] lg:w-[50%] pl-0 lg:pl-[120px]">
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
              <div id="waitlist" className="py-[60px]">
                <MailchimpSubscribe />
              </div>
            </div>
          </div>
          <div className="right-[00px] top-[160px] absolute z-1"><StaticImage src="../images/cloud_community-one.svg" alt="Cloud One" /></div>
          <div className="-left-[50px] bottom-[120px] absolute z-1"><StaticImage src="../images/cloud_community-three.svg" alt="Cloud Three" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-1"><StaticImage src="../images/cloud_floor.svg" alt="Cloud Floor" layout="fullWidth" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#d8ebff]/34 to-[var(--color-bg-blue)] opacity-75 pointer-events-none z-10"></div>
      </section>

      {/* Learn Section */}
      <section className="relative py-[60px] lg:py-[120px]">
        <div className="relative content-container">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
              <h2>Learn</h2>
              <p>
                Providing comprehensive tools and resources to support your job and growth as a pharmacy technician.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">
                <Link to="/resource-center/free-ceus" target="_blank" className="icon-wrap">
                  <div className="height-[102px] mb-4">
                    <StaticImage src="../images/icon_global-careers.svg" alt="Free CEUs" className="" />
                  </div>
                  <h3 className="font-semibold text-purple-900 text-center mb-0">Free CEUs</h3>
                </Link>
                <Link to="/resource-center/organizations" target="_blank" className="icon-wrap">
                  <div className="height-[102px] mb-4">
                    <StaticImage src="../images/icon_organizations.svg" alt="Organizations" className="" />
                  </div>
                  <h3 className="font-semibold text-purple-900 text-center mb-0">Organizations</h3>
                </Link>
                <Link to="/resource-center/blog" target="_blank" className="icon-wrap">
                  <div className="height-[102px] mb-4">
                    <StaticImage src="../images/icon_blog.svg" alt="Blog" className="" />
                  </div>
                  <h3 className="font-semibold text-purple-900 text-center mb-0">Blog</h3>
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
        <div className="-right-[60px] -top-[300px] absolute z-20"><StaticImage src="../images/circles_right.svg" alt="Circles" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-blue)] to-[#D8EBFF]/34 opacity-75 pointer-events-none z-10"></div>
      </section>

      {/* Careers Section */}
      <section className="relative py-[60px] lg:py-[120px]">
        <div className="relative content-container">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
            <h2>Grow</h2>
            <p>
              Supporting your career growth from certification through career advancement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-8">
              <a href="https://careers.pharmtechsonly.com" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_global-careers.svg" alt="Global Career Center" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Global Career Center</h3>
              </a>
              <a href="https://careers.pharmtechsonly.com/career-resources" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_career-resources.svg" alt="Career Resources" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Career Resources</h3>
              </a>
              <a href="https://careers.pharmtechsonly.com/interview-coach" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_interview-coach.svg" alt="Interview Coach" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Interview Coach</h3>
              </a>
              <a href="https://careers.pharmtechsonly.com/analyze-offer" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_offer-analyzer.svg" alt="Offer Analyzer" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Offer Analyzer</h3>
              </a>
            </div>
            
            <a
              href="https://careers.pharmtechsonly.com"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
            >
              Go to Careers
            </a>
          </div>
        </div>
        <div className="-left-[60%] -top-[300px] absolute z-20"><StaticImage src="../images/circles_left.svg" alt="Circles" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#D8EBFF]/34 to-[var(--color-bg-blue)] opacity-75 pointer-events-none z-10"></div>
      </section>

      {/* Tech Connect Section */}
      <section className="relative py-[60px] lg:py-[120px]">
        <div className="relative content-container">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
            <h2>Tech Connect</h2>
            <p>
              Building community, a centralized place to connect, share, and interact with other pharmacy technicians, just like you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 mb-8">
              <div className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_interact.svg" alt="Interact" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Interact</h3>
              </div>
              <div className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_connect.svg" alt="Connect" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Interact</h3>
              </div>
              <div className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_chat.svg" alt="Chat" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Chat</h3>
              </div>
              <div className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_polls.svg" alt="Polls" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Interact</h3>
              </div>
              <div className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_communities.svg" alt="Communities" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Communities</h3>
              </div>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              <p>Tech Connect Coming Soon!</p>
              <Link
                to="/#waitlist"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block">
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
        <div className="-right-[60px] -top-[300px] absolute z-20"><StaticImage src="../images/circles_right.svg" alt="Circles" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-blue)] to-[#D8EBFF]/34 opacity-75 pointer-events-none z-10"></div>
      </section>

      {/* Employers Section */}
      <section className="relative py-[60px] lg:py-[120px]">
        <div className="relative content-container">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
            <h2>
              Employer? See our tools built just for you!
            </h2>
            <p>
              Are you a pharmacy looking to fill your opening with the certified, experienced pharmacy technicians?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 mb-8">
              <a href="https://careers.pharmtechsonly.com/register-employer" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_post-jobs.svg" alt="Post Jobs" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Post Jobs</h3>
              </a>
              <a href="https://careers.pharmtechsonly.com/register-employer" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_search-candidates.svg" alt="Search Candidates" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Search Candidates</h3>
              </a>
              <a href="https://careers.pharmtechsonly.com/register-employer" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_list-company.svg" alt="List Your Company" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">List Your Company</h3>
              </a>
              <a href="https://careers.pharmtechsonly.com/register-employer" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_feature-job.svg" alt="Feature Your Job Opening" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Feature Your Job Opening</h3>
              </a>
              <a href="mailto:questions@pharmtechsonly.com" target="_blank" className="icon-wrap">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_advertise.svg" alt="Advertise on Tech Connect" className="w-[98px] h-[89px]" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Advertise on Tech Connect</h3>
              </a>
            </div>

            <a
              href="https://careers.pharmtechsonly.com/register-employer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
            >
              Create your FREE Employer Account
            </a>
          </div>
        </div>
        <div className="-left-[60%] -bottom-[300px] absolute z-20"><StaticImage src="../images/circles_left.svg" alt="Circles" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#D8EBFF]/34 to-[var(--color-bg-blue)] opacity-75 pointer-events-none z-10"></div>
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
