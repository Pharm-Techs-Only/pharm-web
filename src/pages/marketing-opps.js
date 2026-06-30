import React from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import heroHome from '../assets/images/hero_home.svg'
import cloudOne from '../assets/images/cloud_one.svg'
import cloudThree from '../assets/images/cloud_three.svg'
import cloudFloor from '../assets/images/cloud_floor.svg'

const MarketingOppsPage = () => {
  return (
    <Layout>
      {/* Main Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] md:w-[70%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1 className="flex flex-col items-center">
            <span>Your Global Pharmacy Technician Media & Marketing Partner</span>
          </h1>
          <p>
            Helping employers, educators, organizations, and industry partners connect with pharmacy
            technicians through targeted visibility and strategic promotion.
          </p>
        </div>
        <div className="flex justify-center w-[100%] md:w-[70%] lg:w-[50%] relative px-12">
          <img src={heroHome} alt="Marketing Opportunities" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      {/* Subscribe Section */}
      <section className="relative pb-[60px] lg:pb-[120px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8">
            <div className="pb-4 mb-6 border-b border-gray-200">
              <h4 className="font-semibold mb-3">Our Audience</h4>
              <p>Pharm Techs Only! reaches pharmacy technicians through multiple channels, including:</p>
              <ul>
                <li>26,000+ LinkedIn Company Followers</li>
                <li>21,000+ Personal LinkedIn Followers</li>
                <li>7,500+ Facebook Community Members</li>
                <li>20,000+ Monthly Pinterest Views</li>
                <li>12,000+ Newsletter Subscribers</li>
                <li>TechConnect™ Professional Community</li>
                <li>Career Portal & Resource Center</li>
              </ul>
              <p>Our audience includes pharmacy technicians, students, educators, employers, and healthcare professionals from around the world</p>
            </div>
            <div className="pb-4 mb-6 border-b border-gray-200">
              <h4 className="font-semibold mb-3">Why Partner With PTO?</h4>
              <p>Unlike broad healthcare advertising platforms, Pharm Techs Only! focuses exclusively on the pharmacy technician profession.</p>
              <p>Our niche audience allows partners to connect with pharmacy technicians through trusted channels built specifically for the profession.</p>
              <p><strong>Targeted visibility. Customized solutions. Meaningful results.</strong></p>
            </div>
            <div className="pb-4 mb-6 border-b border-gray-200">
              <h4 className="font-semibold mb-3">How We Can Help</h4>
              <div className="flex flex-row flex-wrap justify-between">
                <div className="item-wrap flex flex-col mb-6 w-[100%] md:w-[48%]">
                  <h5 className="font-semibold mb-3">📣 Recruitment Marketing</h5>
                  <p className="text-left mb-0">Increase visibility for pharmacy technician career opportunities through targeted promotion
                    across PTO's professional network.</p>
                </div>
                <div className="item-wrap flex flex-col mb-6 w-[100%] md:w-[48%]">
                  <h5 className="font-semibold mb-3">🌐 Sponsored Visibility Campaigns</h5>
                  <p className="text-left mb-0">Promote your organization, service, event, educational program, or initiative using your
                    approved articles, graphics, videos, and digital assets across PTO channels.</p>
                </div>
                <div className="item-wrap flex flex-col mb-6 w-[100%] md:w-[48%]">
                  <h5 className="font-semibold mb-3">📰 Newsletter Promotion</h5>
                  <p className="text-left mb-0">Reach pharmacy technicians directly through sponsored newsletter placements.</p>
                </div>
                <div className="item-wrap flex flex-col mb-6 w-[100%] md:w-[48%]">
                  <h5 className="font-semibold mb-3">📱 Social Media Promotion</h5>
                  <p className="text-left mb-0">Expand your reach through PTO's growing social media communities and professional networks.</p>
                </div>
                <div className="item-wrap flex flex-col mb-6 w-[100%]">
                  <h5 className="font-semibold mb-3">⭐ Brand & Program Awareness</h5>
                  <p className="mb-0">Increase awareness for products, services, organizations, events, and educational programs
                    within the pharmacy technician profession.</p>
                </div>
              </div>
            </div>
            <div className="pb-4 mb-6 border-b border-gray-200">
              <h4 className="font-semibold mb-3">Flexible Solutions</h4>
              <p>Whether you're promoting a single opportunity or launching a larger campaign, PTO can tailor a
                solution that aligns with your objectives and resources.</p>
              <ul>
                <li>✅ Flexible promotion options</li>
                <li>✅ No long-term contracts</li>
                <li>✅ Customized solutions</li>
                <li>✅ Pharmacy technician-focused audience</li>
              </ul>
              <p><strong>Tell us your goals and budget, and we'll recommend the right combination of opportunities
                to help maximize your visibility.</strong></p>
            </div>
            <div className="pb-4 mb-6 border-b border-gray-200">
              <h4 className="font-semibold mb-3">Pharmacy Technician Job Boost - $49.95</h4>
              <p>Increase visibility for your pharmacy technician openings through targeted promotion across
                Pharm Techs Only!'s professional network.</p>
              <ul>
                <li>✅ One position per purchase</li>
                <li>✅ Two social media promotions</li>
                <li>✅ 7-10 day campaign</li>
                <li>✅ No contracts or recruiter fees</li>
              </ul>
              <h5 className="font-semibold mb-3">👉 How It Works</h5>
              <ol>
                <li>Purchase your Job Boost.</li>
                <li>After checkout, you'll receive a link to the job submission form.</li>
                <li>Submit your position details and we'll handle the promotion.</li>
              </ol>
              <p><a href="https://buy.stripe.com/cNi7sL49vcSO0Zg9GN2oE03" target="_blank" rel="noopener noreferrer" className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block no-underline">Purchase Job Boost 🚀</a></p>
            </div>
            {/*<div className="pb-4 mb-6 border-b border-gray-200">
              <h4 className="font-semibold mb-3">Featured Blog Article - $299</h4>
              <p>Gain visibility for your products or services with an SEO-focused article featured on PTO!. Our blog gets great traffic both from search and our community. Each article can include up to 3 links back to your site or product pages. All articles are promoted through our newsletter as well as our social media accounts.</p>
              <p>We also offer content writing services at an affordable rate to make promoting your business easy. All blogs receive monthly performance metrics so you can track the effectiveness of your content.</p>
              <p><a href="https://buy.stripe.com/cNi7sL49vcSO0Zg9GN2oE03" target="_blank" rel="noopener noreferrer" className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block decoration-none">⭐ Purchase Featured Blog Article</a></p>
            </div>
            <div className="pb-4 mb-6 border-b border-gray-200">
              <h4 className="font-semibold mb-3">Newsletter Promotion - $199</h4>
              <p>Promote your products or services across our community with an eye-catching ad. Platform and newsletter ads ensure maximum visibility to our highly targeted audience.</p>
              <p><a href="https://buy.stripe.com/cNi7sL49vcSO0Zg9GN2oE03" target="_blank" rel="noopener noreferrer" className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block underline-none">📣 Purchase Newsletter Promotion</a></p>
            </div>*/}

            <div className="pb-4 mb-6 border-b border-gray-200">
              <h4 className="font-semibold mb-3">Ready to Get Started?</h4>
              <p><a href="mailto:questions@pharmtechsonly.com" className="btn text-white px-8 py-3 rounded-md font-medium transition-colors inline-block no-underline">Email us</a></p>
            </div>
          </div>
          <div className="-left-[115px] bottom-[420px] absolute z-10"><img src={cloudOne} alt="Cloud One" /></div>
          <div className="-right-[180px] bottom-[225px] absolute z-10"><img src={cloudThree} alt="Cloud Three" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><img src={cloudFloor} alt="Cloud Floor" className="w-full" /></div>
      </section>
    </Layout>
  )
}

export default MarketingOppsPage

export const Head = () => (
  <>
    <title>Marketing Opportunities - PharmTechs Only</title>
    <meta name="description" content="Promote your products, services, or job openings to pharmacy technicians through PharmTechs Only!" />
  </>
)
