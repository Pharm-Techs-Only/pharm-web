import React from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import MailchimpSubscribe from '../components/MailchimpSubscribe'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <Layout includeCTA={true}>
      {/* Main Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            About Pharm Techs Only! (PTO!)
          </h1>
          <p>
            Get ready for a revolutionary new way to connect, learn, and grow within our global community! We are thrilled to announce that we are in the process of building an entirely new, custom experience for both web and mobile. This next-generation platform is being crafted from the ground up with one goal in mind: to better support and empower you, our dedicated community of pharmacy technicians. This is more than just an update; it's a complete reimagining of how we connect and advance together. Stay tuned for more details as we build the future of our community, together!
          </p>
        </div>
        <div className="flex justify-center w-[50%] relative px-12">
          <StaticImage src="../images/hero_about.svg" alt="About Pharm Techs Only!" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      {/* Subscribe Section */}
      <section className="relative pb-[60px] lg:pb-[160px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row justify-between items-center">
            <h2>About Pharm Techs Only!</h2>
            <p>Pharm Techs Only! (PTO!) is a global platform built for pharmacy technicians, by pharmacy technicians. Our mission is simple: to empower, connect, and elevate pharmacy technicians at every stage of their careers. Whether you're just starting out, looking for your next opportunity, or seeking to grow within the profession, PTO! provides the tools, resources, and community to help you thrive.</p>
            <p>We believe pharmacy technicians are the backbone of healthcare, and yet, they're too often overlooked. PTO! exists to change that. Through job listings, resume support, free continuing education listings, free downloads, career development resources, peer networking inside TechConnect, and a growing selection of study tools like the Rx Study Buddy Kit, we are building a one-stop hub designed to support the people who support the world’s pharmacies.</p>
            <p>At PTO!, we don't just see your job… we see your worth.</p>
          </div>
          <div className="-left-[115px] bottom-[420px] absolute z-10"><StaticImage src="../images/cloud_one.svg" alt="Cloud One" /></div>
          <div className="-right-[180px] bottom-[225px] absolute z-10"><StaticImage src="../images/cloud_three.svg" alt="Cloud Three" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><StaticImage src="../images/cloud_floor.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      </section>

      {/* Learn Section */}
      <section className="relative py-[60px] lg:py-[120px]">
          <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
            <div className="pt-[60px] md:pt-[80px] lg:pt-[120px] xl:py-[170px] w-[100%] lg:w-[50%] pl-0 lg:pl-[120px]">
              <h2>About the Founder – Courtney Miller</h2>
            <p>Courtney Miller is a dedicated pharmacy technician with over three decades of hands-on experience spanning retail, long-term care, correctional facilities, and specialized pharmacy environments. She’s lived the reality of pharmacy tech life… from exhausting shifts and high-pressure days to stepping into leadership roles where she mentored and guided fellow techs.</p>
            <p>With a deep-rooted passion for advocacy and firsthand knowledge of the profession's struggles, Courtney launched Pharm Techs Only! to build the kind of support network she longed for during her own career. Her mission is to amplify the voices of pharmacy technicians, enhance their visibility, and open doors to greater career growth and recognition.</p>
            <p>Beyond that, she's focused on building a strong, united community… a space where techs from all over the world can connect, share experiences, support one another, and finally feel seen.</p>
            <p>Through Pharm Techs Only!, Courtney is creating more than a platform, she's creating a global movement of empowered pharmacy technicians.</p>
          </div>
          <div className="flex justify-center w-[50%] px-12">
            <StaticImage src="../images/home_community.svg" alt="Two Pharmacy Technicians" />
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
