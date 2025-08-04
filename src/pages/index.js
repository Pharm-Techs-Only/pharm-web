import React from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <Layout>
      {/* Main Hero Section */}
      <HeroHeader className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="content-container">
            <div className="flex flex-row justify-between items-center">
              <div className="max-w-[730px] w-[60%]">
                <h1 className="text-[42px] font-medium text-pharm-blue mb-6">
                  Exciting News! A New Era for Pharm Techs Only! is on the Horizon!
                </h1>
                <p className="text-[16px] text-pharm-grey">
                  Get ready for a revolutionary new way to connect, learn, and grow within our global community! We are thrilled to announce that we are in the process of building an entirely new, custom experience for both web and mobile. This next-generation platform is being crafted from the ground up with one goal in mind: to better support and empower you, our dedicated community of pharmacy technicians. This is more than just an update; it's a complete reimagining of how we connect and advance together. Stay tuned for more details as we build the future of our community, together!
                </p>
              </div>
              <div className="flex justify-center">
                <StaticImage src="../images/hero_home.svg" alt="Two Pharmacy Technicians" className="relative -bottom-[150px]" />
              </div>
            </div>
            <StaticImage className="absolute -z-1 w-[352px] h-[99px]" style={{ left: "50px", top: "220px" }} src="../images/cloud_one.svg" alt="Cloud One" />
            <StaticImage className="absolute -z-1 w-[831px] h-[151px]" style={{ right: 0, bottom: "200px" }} src="../images/cloud_three.svg" alt="Cloud Three" />
            <StaticImage className="absolute -z-1 w-full h-auto" style={{ left: 0, bottom: 0 }} src="../images/cloud_floor.svg" alt="Cloud Floor" />
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
                  <div id="mc_embed_shell">
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                    <style type="text/css">{`
                          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
                          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                    `}</style>
                    <div id="mc_embed_signup">
                      <form action="https://pharmtechsonly.us10.list-manage.com/subscribe/post?u=647acc4c58e278ba9635c4a4b&amp;id=6fa4d8c02e&amp;f_id=005a48e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                          <div id="mc_embed_signup_scroll">
                              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                              <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" /></div>
                          <div id="mce-responses" className="clear foot">
                              <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                              <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                          </div>
                          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                              <input type="text" name="b_647acc4c58e278ba9635c4a4b_6fa4d8c02e" tabIndex="-1" value="" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
                    <script 
                      type="text/javascript"
                      dangerouslySetInnerHTML={{
                        __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='COMPANY';ftypes[6]='text';fnames[7]='MERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='text';}(jQuery));var $mcj = jQuery.noConflict(true);`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Center Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container">
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
          </div>
      </section>

      {/* Tech Connect Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container">
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
        </div>
      </section>

      {/* Careers Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container">
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
        </div>
      </section>

      {/* Employers Section */}
      <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)]`}>
        <div className="relative">
          <div className="content-container">
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
