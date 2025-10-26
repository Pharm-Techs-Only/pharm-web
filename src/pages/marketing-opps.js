import React from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import { StaticImage } from "gatsby-plugin-image"

const MarketingOppsPage = () => {
  return (
    <Layout>
      {/* Main Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Market your business with Pharm Techs Only!
          </h1>
          <p>
            Explore our tailored marketing opportunities designed to help you reach and engage with the pharmacy technician community effectively.
          </p>
        </div>
        <div className="flex justify-center w-[50%] relative px-12">
          <StaticImage src="../images/hero_home.svg" alt="Marketing Opportunities" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      {/* Subscribe Section */}
      <section className="relative pb-[60px] lg:pb-[160px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8">
            <p>Pharm Techs Only! (PTO!) offers several affiliate marketing opportunities for businesses and content creators in the pharmaceutical industry. Our platform, with a strong following on social media and a growing audience of pharmacy professionals, is an ideal place to showcase your information, products, and services. By partnering with PTO!, you can reach an engaged audience of pharmacy technicians, employers, and industry leaders.</p>
            <p>Below is an overview of our marketing offerings:</p>

            <h4 className="font-semibold mb-3">✏️ Blog Writing and Posting Services</h4>
            <p>Gain visibility for your products or services with an SEO-focused article featured on PTO!. Our blog gets great traffic both from search and our community. Each article can include up to 3 links back to your site or product pages. All articles are promoted through our newsletter as well as our social media accounts.</p>
            <p>We also offer content writing services at an affordable rate to make promoting your business easy. All blogs receive monthly performance metrics so you can track the effectiveness of your content.</p>

            <h4 className="font-semibold mb-3">📰 Ads</h4>
            <p>Promote your products or services across our community with an eye-catching ad. Platform and newsletter ads ensure maximum visibility to our highly targeted audience.</p>

            <h4 className="font-semibold mb-3">📱 Paid Social Media Posts</h4>
            <p>Leverage our growing social media presence with a paid post featuring your product, service, or campaign. Each post is tailored to match the tone and interests of our pharmacy technician audience to maximize engagement and reach. Posts can include a direct link to your website, discount code, or promo page. Perfect for boosting awareness, driving traffic, and getting in front of our 40K+ followers and active LinkedIn network.</p>

            <p>▶ Partner with Pharm Techs Only! today to promote your business to a highly targeted audience of Pharmacy Technicians.</p>

            <p><a href="mailto:questions@pharmtechsonly.com" target="_blank" title="Email Us!">📧 Email us</a> for more details, including pricing and current search and audience metrics.</p>

            <p>Let us help you grow your pharmaceutical brand!</p>
          </div>
          <div className="-left-[115px] bottom-[420px] absolute z-10"><StaticImage src="../images/cloud_one.svg" alt="Cloud One" /></div>
          <div className="-right-[180px] bottom-[225px] absolute z-10"><StaticImage src="../images/cloud_three.svg" alt="Cloud Three" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><StaticImage src="../images/cloud_floor.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      </section>
    </Layout>
  )
}

export default MarketingOppsPage

export const Head = () => (
  <>
    <title>PharmTechs Only - Community for Pharmacy Technicians</title>
    <meta name="description" content="A community for pharmacy technicians to connect, learn, and grow together." />
  </>
)
