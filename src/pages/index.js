import React from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import MailchimpSubscribe from '../components/MailchimpSubscribe'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import heroHome from '../assets/images/hero_home.svg'
import homeCommunity from '../assets/images/home_community.svg'
import cloudOne from '../assets/images/cloud_one.svg'
import cloudThree from '../assets/images/cloud_three.svg'
import cloudFloor from '../assets/images/cloud_floor.svg'
import iconFreeCeus from '../assets/images/icon_free-ceus.svg'
import iconOrganizations from '../assets/images/icon_organizations.svg'
import iconConventions from '../assets/images/icon_conventions.svg'
import iconBlog from '../assets/images/icon_blog.svg'
import iconGlobalCareers from '../assets/images/icon_global-careers.svg'
import iconCareerResources from '../assets/images/icon_career-resources.svg'
import iconInterviewCoach from '../assets/images/icon_interview-coach.svg'
import iconOfferAnalyzer from '../assets/images/icon_offer-analyzer.svg'
import iconInteract from '../assets/images/icon_interact.svg'
import iconConnect from '../assets/images/icon_connect.svg'
import iconChat from '../assets/images/icon_chat.svg'
import iconPolls from '../assets/images/icon_polls.svg'
import iconCommunities from '../assets/images/icon_communities.svg'
import iconPostJobs from '../assets/images/icon_post-jobs.svg'
import iconSearchCandidates from '../assets/images/icon_search-candidates.svg'
import iconFeatureJob from '../assets/images/icon_feature-job.svg'
import iconAdvertise from '../assets/images/icon_advertise.svg'

const HomePage = () => {
  return (
    <Layout>
      {/* Main Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] md:w-[70%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Welcome to the Pharm Techs Only! community.
          </h1>
          <p>Get ready for a revolutionary new way to connect, learn, and grow with pharmacy technicians from around the world!</p>
          <p>Our community was built with one goal in mind: to better support and empower you, our dedicated community of pharmacy technicians.</p>
          <p>Being a pharmacy technician can be a challenging, and isolating career. It is hard to find the right resources, advance one's career, and find others that you can connect with.</p>
          <p>But not any more!</p>
        </div>
        <div className="flex justify-center w-[100%] md:w-[70%] lg:w-[50%] relative px-12">
          <img src={heroHome} alt="Pharm Techs Only!" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      {/* Subscribe Section */}
      <section id="waitlist" className="relative pb-[60px] lg:pb-[160px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="flex justify-center w-[100%] md:w-[70%] lg:w-[50%] px-12">
              <img src={homeCommunity} alt="Two Pharmacy Technicians" />
            </div>
            <div className="pt-[60px] md:pt-[80px] lg:pt-[120px] xl:py-[170px] w-[100%] md:w-[70%] lg:w-[50%] pl-0 lg:pl-[120px]">
              <h2>
                We are thrilled to announce that TechConnect is back!
              </h2>
              <p>TechConnect provides a platform for pharmacy technicians to connect with each other, share experiences, ask questions, and support one another in a professional space.</p>
              <p>Instead of scattered Facebook groups and job sites that don&apos;t understand our role, you now have one place to connect, learn, and grow your career.</p>
              <p>Create your free account and start connecting today.</p>
              <p><em>Mobile access is available now, and dedicated apps are coming soon.</em></p>
              <Link
                to="https://tc.pharmtechsonly.com"
                target="_blank"
                className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block">
                Join Now
              </Link>
            </div>
          </div>
          <div className="-left-[115px] bottom-[420px] absolute z-10"><img src={cloudOne} alt="Cloud One" /></div>
          <div className="-right-[180px] bottom-[225px] absolute z-10"><img src={cloudThree} alt="Cloud Three" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><img src={cloudFloor} alt="Cloud Floor" className="w-full" /></div>
      </section>

      {/* Learn Section */}
      <section className="relative py-[30px] md:py-[40px] lg:py-[80px]">
        <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2>Resource Center</h2>
          <p>
            Providing comprehensive tools and resources to support your job and growth as a pharmacy technician.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-8">
            <Link to="/resource-center/free-ceus" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconFreeCeus} alt="Free CEUs" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Free CEUs</h3>
            </Link>
            <Link to="/resource-center/organizations" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconOrganizations} alt="Organizations" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Organizations</h3>
            </Link>
            <Link to="/resource-center/conventions" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconConventions} alt="Conventions" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Conventions</h3>
            </Link>
            <Link to="/resource-center/blog" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconBlog} alt="Blog" className="" />
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
      <section className="relative py-[30px] md:py-[40px] lg:py-[80px]">
        <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2>Career Portal</h2>
          <p>
            Supporting your career growth from certification through career advancement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-8">
            <Link to="https://tc.pharmtechsonly.com/careers" target="_blank" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconGlobalCareers} alt="Global Career Center" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Global Career Center</h3>
            </Link>
            <Link to="/resource-center/careers" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconCareerResources} alt="Career Resources" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Career Resources</h3>
            </Link>
            <Link to="https://tc.pharmtechsonly.com/account/resume" target="_blank" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconOfferAnalyzer} alt="Digital Resume" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Searchable Digital Resume</h3>
            </Link>
          </div>

          <Link
            to="https://tc.pharmtechsonly.com/careers"
            target="_blank"
            className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Go to Careers
          </Link>
        </div>
      </section>

      {/* Tech Connect Section */}
      <section className="relative py-[30px] md:py-[40px] lg:py-[80px]">
        <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2>Tech Connect</h2>
          <p>
            Building community, a centralized place to connect, share, and interact with other pharmacy technicians, just like you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 mb-8">
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconInteract} alt="Interact" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Interact</h3>
            </div>
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconConnect} alt="Connect" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Connect</h3>
            </div>
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconChat} alt="Chat" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Chat</h3>
            </div>
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconPolls} alt="Polls" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Polls</h3>
            </div>
            <div className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconCommunities} alt="Communities" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Communities</h3>
            </div>
          </div>
          <Link
            to="https://tc.pharmtechsonly.com"
            target="_blank"
            className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block">
            Join Now
          </Link>
        </div>
      </section>

      {/* Employers Section */}
      <section className="relative py-[30px] md:py-[40px] lg:py-[80px]">
        <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h2>
            Employer Tools
          </h2>
          <p>
            Employer? See our tools built just for you!Are you a pharmacy looking to fill your opening with the certified, experienced pharmacy technicians?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-8">
            <a href="mailto:questions@pharmtechsonly.com" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconFeatureJob} alt="Feature Your Job Opening" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Feature Your Job Opening</h3>
            </a>
            <a href="mailto:questions@pharmtechsonly.com" target="_blank" rel="noreferrer" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconAdvertise} alt="Advertise on Tech Connect" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Advertise on Tech Connect</h3>
            </a>
            <a href="#" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconPostJobs} alt="Post Jobs" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Post Jobs<br /><span className="text-sm italic">*coming soon*</span></h3>
            </a>
            <a href="#" className="item-wrap m-w-[292px] w-full m-h-[275px] h-full">
              <div className="height-[102px] mb-4">
                <img src={iconSearchCandidates} alt="Search Candidates" className="" />
              </div>
              <h3 className="font-semibold text-purple-900 text-center mb-0">Search Candidates<br /><span className="text-sm italic">*coming soon*</span></h3>
            </a>
          </div>

          <Link
            to="https://tc.pharmtechsonly.com/employers"
            target="_blank"
            className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
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
