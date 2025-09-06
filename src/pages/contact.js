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
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Contact Us
          </h1>
          <p>
            We would love to hear from you! Whether you have questions, feedback, or just want to connect, our team is here to help. Reach out to us through the form below or connect with us on social media.
          </p>
        </div>
        <div className="flex justify-center w-[50%] relative px-12">
          <StaticImage src="../images/hero_home.svg" alt="Two Pharmacy Technicians" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      {/* Subscribe Section */}
      <section className="relative pb-[60px] lg:pb-[160px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="flex justify-center w-[50%] px-12">
              <StaticImage src="../images/home_community.svg" alt="Two Pharmacy Technicians" />
            </div>
            <div className="pt-[60px] md:pt-[80px] lg:pt-[120px] xl:py-[170px] w-[100%] lg:w-[50%] pl-0 lg:pl-[120px]">
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
          <div className="-left-[115px] bottom-[420px] absolute z-10"><StaticImage src="../images/cloud_one.svg" alt="Cloud One" /></div>
          <div className="-right-[180px] bottom-[225px] absolute z-10"><StaticImage src="../images/cloud_three.svg" alt="Cloud Three" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><StaticImage src="../images/cloud_floor.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      </section>

      {/* Learn Section */}
      <section className="relative py-[60px] lg:py-[120px]">
          <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
            <h2>Resource Center</h2>
            <p>
              Providing comprehensive tools and resources to support your job and growth as a pharmacy technician.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-8">
              <Link to="/resource-center/free-ceus" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_global-careers.svg" alt="Free CEUs" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Free CEUs</h3>
              </Link>
              <Link to="/resource-center/organizations" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_organizations.svg" alt="Organizations" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Organizations</h3>
              </Link>
              <Link to="/resource-center/conventions" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_conventions.svg" alt="Conventions" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Conventions</h3>
              </Link>
              <Link to="/resource-center/blog" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
                <div className="height-[102px] mb-4">
                  <StaticImage src="../images/icon_blog.svg" alt="Blog" className="" />
                </div>
                <h3 className="font-semibold text-purple-900 text-center mb-0">Blog</h3>
              </Link>
            </div>
            
            <Link
              to="/resource-center"
              className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
            >
              Go to Resources
            </Link>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative py-[60px] lg:py-[120px]">
        <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2>Career Portal</h2>
          <p>
            Supporting your career growth from certification through career advancement.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-8">
            <a href="https://careers.pharmtechsonly.com" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_global-careers.svg" alt="Global Career Center" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Global Career Center</h3>
            </a>
            <a href="https://careers.pharmtechsonly.com/career-resources" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_career-resources.svg" alt="Career Resources" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Career Resources</h3>
            </a>
            <a href="https://careers.pharmtechsonly.com/interview-coach" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_interview-coach.svg" alt="Interview Coach" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Interview Coach</h3>
            </a>
            <a href="https://careers.pharmtechsonly.com/analyze-offer" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_offer-analyzer.svg" alt="Offer Analyzer" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Offer Analyzer</h3>
            </a>
          </div>
          
          <a
            href="https://careers.pharmtechsonly.com"
            target="_blank" rel="noreferrer"
            className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Go to Careers
          </a>
        </div>
      </section>

      {/* Tech Connect Section */}
      <section className="relative py-[60px] lg:py-[120px]">
        <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2>Tech Connect</h2>
          <p>
            Building community, a centralized place to connect, share, and interact with other pharmacy technicians, just like you.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 mb-8">
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_interact.svg" alt="Interact" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Interact</h3>
            </div>
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_connect.svg" alt="Connect" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Connect</h3>
            </div>
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_chat.svg" alt="Chat" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Chat</h3>
            </div>
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_polls.svg" alt="Polls" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Polls</h3>
            </div>
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
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
              className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Employers Section */}
      <section className="relative py-[60px] lg:py-[120px]">
        <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2>
            Employer Tools
          </h2>
          <p>
            Employer? See our tools built just for you!Are you a pharmacy looking to fill your opening with the certified, experienced pharmacy technicians?
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-8">
            <a href="https://careers.pharmtechsonly.com/register-employer" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_post-jobs.svg" alt="Post Jobs" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Post Jobs</h3>
            </a>
            <a href="https://careers.pharmtechsonly.com/register-employer" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_search-candidates.svg" alt="Search Candidates" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Search Candidates</h3>
            </a>
            <a href="https://careers.pharmtechsonly.com/register-employer" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_feature-job.svg" alt="Feature Your Job Opening" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Feature Your Job Opening</h3>
            </a>
            <a href="mailto:questions@pharmtechsonly.com" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <StaticImage src="../images/icon_advertise.svg" alt="Advertise on Tech Connect" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Advertise on Tech Connect</h3>
            </a>
          </div>

          <a
            href="https://careers.pharmtechsonly.com/register-employer"
            className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Create your FREE Employer Account
          </a>
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
