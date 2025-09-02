import React from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import ResourceLink from '../../components/ResourceLink'

const BlogPage = () => {

  return (
    <Layout includeCTA={true}>
      {/* Hero Section */}
      <HeroHeader>
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
            <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
              <h1>
                Blog
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stay current with the latest news for Pharmacy Technicians and industry trends.
              </p>
            </div>
            <div className="flex justify-center w-[50%] relative px-12">
              <StaticImage src="../images/hero_blog.svg" alt="Two Pharmacy Technicians" className="lg:!absolute -bottom-[20px]" />
            </div>
          </div>
          <div className="-left-[220px] bottom-[240px] absolute z-10"><StaticImage src="../images/cloud_hero-three.svg" alt="Cloud Three" /></div>
          <div className="right-[260] top-[164px] absolute z-10"><StaticImage src="../images/cloud_hero-one.svg" alt="Cloud One" /></div>
        </div>
        <div className="w-full left-[0] bottom-[0] absolute z-10"><StaticImage src="../images/cloud_floor-hero.svg" alt="Cloud Floor" layout="fullWidth" /></div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <ResourceLink />
          </nav>
          <div id="dib-posts"></div>
        </div>
      </div>
      <script async src="https://io.dropinblog.com/embedjs/2e37eb85-3320-46a6-adb0-28174e06195c.js"></script>
    </Layout>
  )
}

export default BlogPage

export const Head = () => (
  <>
    <title>Blog - PharmTechs Only</title>
    <meta name="description" content="Stay current with your PharmTech career through our blog featuring the latest news, tips, and resources for pharmacy technicians." />
  </>
)
