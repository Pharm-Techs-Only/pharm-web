import React from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import MailchimpSubscribe from '../components/MailchimpSubscribe'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import CTA from '../components/CTA'

const ContactPage = () => {
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
          <StaticImage src="../images/hero_contact.svg" alt="Contact Us" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      {/* Subscribe Section */}
      <section className="relative pb-[60px] lg:pb-[160px]">
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col items-start">
            <div className="pt-[60px] md:pt-[80px] lg:pt-[120px] xl:py-[170px] w-[100%] pl-0 lg:pl-[120px]">
              <h2 className="mb-12">
                Stay Connected with Pharm Techs Only!
              </h2>
              <div className="flex items-center space-x-12 mb-22">
                <a href="https://www.facebook.com/4PharmTechsOnly" target="_blank" rel="noreferrer" className="text-white hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 32 32"><path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path></svg>
                </a>
                <a href="https://www.instagram.com/pharmtechsonly" target="_blank" rel="noreferrer" className="text-white hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/pharmtechsonly" target="_blank" rel="noreferrer" className="text-white hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 32 32"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                </a>
              </div>
              <p>
                Stay updated on the latest news and resources from PharmTechs Only! Join our mailing list today.
              </p>
              {/* Mailchimp signup form */}
              <div id="waitlist">
                <MailchimpSubscribe />
              </div>
            </div>
          </div>
        </div><div className="w-full left-[0] bottom-[0] absolute z-10"><StaticImage src="../images/cloud_floor.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      </section>

      {/* Email Section */}
      <section className="relative py-[60px] lg:py-[120px]">
          <div className="relative content-container z-20 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
            <h2>Get in Touch with us by Email</h2>
            <p>
              Email us at <a href="mailto:questions@pharmtechsonly.com" className="text-pharm-blue hover:underline">questions@pharmtechsonly.com</a>
            </p>
        </div>
      </section>
      <CTA type="donate" />
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <>
    <title>PharmTechs Only - Contact</title>
    <meta name="description" content="Get in touch with PharmTechs Only." />
  </>
)
