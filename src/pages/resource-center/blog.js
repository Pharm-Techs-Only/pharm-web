import React from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'

const BlogPage = () => {
  const ceuCourses = [
    {
      title: 'Medication Safety in Community Pharmacy',
      hours: '2.0 CE Hours',
      description: 'Learn best practices for preventing medication errors and ensuring patient safety.',
      status: 'Available'
    },
    {
      title: 'Immunization Updates for Pharmacy Technicians',
      hours: '1.5 CE Hours',
      description: 'Stay current with the latest vaccination protocols and requirements.',
      status: 'Available'
    },
    {
      title: 'Controlled Substance Regulations',
      hours: '2.5 CE Hours',
      description: 'Understanding DEA regulations and compliance requirements.',
      status: 'Available'
    },
    {
      title: 'Sterile Compounding Fundamentals',
      hours: '3.0 CE Hours',
      description: 'Essential knowledge for sterile compounding procedures.',
      status: 'Coming Soon'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroHeader>
        <div className="content-container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay current with the latest news for Pharmacy Technicians and industry trends.
          </p>
        </div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <Link to="/resource-center" className="text-blue-600 hover:text-blue-800">
              ← Back to Resource Center
            </Link>
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
