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
          <p>Welcome to Pharm Techs Only!, the premier global platform built from the ground up for pharmacy technicians, by pharmacy technicians. We were founded on a simple, powerful belief: the pharmacy technician is the backbone of the pharmacy, and it's time the world recognized it.</p>
          <p>We know the daily grind because we've lived it. We understand the pressure of a ringing phone, a long queue of patients, and a complex insurance rejection—all while ensuring 100% accuracy. That shared experience is the foundation of everything we do. We're not a top-down organization run by people who don't understand your role; we are a grassroots movement dedicated to empowering our own.</p>
        </div>
        <div className="flex justify-center w-[50%] relative px-12">
          <StaticImage src="../images/hero_about.svg" alt="About Pharm Techs Only!" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      {/* About Section */}
      <section className="relative pb-[60px] lg:pb-[160px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col">
            <h2>Our Mission</h2>
            <p>Our mission is simple: to empower, connect, and elevate pharmacy technicians at every stage of their careers. Whether you're just starting out, looking for your next opportunity, or seeking to grow within the profession, PTO! provides the tools, resources, and community to help you thrive.</p>
            <p>We believe pharmacy technicians are the backbone of healthcare, and yet, they're too often overlooked. PTO! exists to change that. Through job listings, resume support, free continuing education listings, free downloads, career development resources, peer networking inside TechConnect, and a growing selection of study tools like the Rx Study Buddy Kit, we are building a one-stop hub designed to support the people who support the world’s pharmacies.</p>
            <p>At PTO!, we don't just see your job… we see your worth.</p>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="relative py-[60px] lg:py-[120px]">
        <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start">
          <div className="pt-[60px] md:pt-[80px] lg:pt-[120px] xl:py-[170px] w-[100%] lg:w-[50%] pl-0 lg:pl-[120px]">
            <h2>About the Founder – Courtney Miller</h2>
            <p>Courtney Miller is a dedicated pharmacy technician with over three decades of hands-on experience spanning retail, long-term care, correctional facilities, and specialized pharmacy environments. She’s lived the reality of pharmacy tech life… from exhausting shifts and high-pressure days to stepping into leadership roles where she mentored and guided fellow techs.</p>
            <p>With a deep-rooted passion for advocacy and firsthand knowledge of the profession's struggles, Courtney launched Pharm Techs Only! to build the kind of support network she longed for during her own career. Her mission is to amplify the voices of pharmacy technicians, enhance their visibility, and open doors to greater career growth and recognition.</p>
            <p>Beyond that, she's focused on building a strong, united community… a space where techs from all over the world can connect, share experiences, support one another, and finally feel seen.</p>
            <p>Through Pharm Techs Only!, Courtney is creating more than a platform, she's creating a global movement of empowered pharmacy technicians.</p>
          </div>
          <div className="flex w-[50%] pt-[60px] md:pt-[80px] lg:pt-[120px] xl:py-[170px] w-[100%] lg:w-[50%] pl-0 lg:pl-[120px]">
            <StaticImage src="../images/cmiller.jpg" alt="Courtney Miller" />
          </div>            
        </div>
      </section>

    </Layout>
  )
}

export default HomePage

export const Head = () => (
  <>
    <title>PharmTechs Only - About PTO!</title>
    <meta name="description" content="Learn more about PharmTechs Only and our mission to support pharmacy technicians." />
  </>
)
