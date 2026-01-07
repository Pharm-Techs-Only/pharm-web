import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import ResourceLink from '../../components/ResourceLink'

const BlogPage = () => {
  useEffect(() => {
    // Check if DIB script/content was already loaded by Cloudflare Worker
    // The Worker serves pre-rendered pages that already include the DIB script
    if (window.DIB || window.dibMenu) {
      // DIB already loaded (likely from Worker), just reinitialize if needed
      if (window.DIB && typeof window.DIB.init === 'function') {
        window.DIB.init()
      }
      return
    }

    // Check if script element already exists
    const existingScript = document.getElementById('dropin-blog-script')
    if (existingScript) {
      // Script tag exists, try to reinitialize
      if (window.DIB && typeof window.DIB.init === 'function') {
        window.DIB.init()
      }
      return
    }

    // Check for any existing DIB scripts in the page
    const existingDibScripts = document.querySelectorAll('script[src*="dropinblog.com"], script[src*="io.dropinblog.com"]')
    if (existingDibScripts.length > 0) {
      // DIB script already in page (from Worker), don't load again
      return
    }

    // Only load if DIB is not present at all (fallback for non-Worker requests)
    const script = document.createElement('script')
    script.id = 'dropin-blog-script'
    script.src = 'https://io.dropinblog.com/embedjs/2e37eb85-3320-46a6-adb0-28174e06195c.js'
    script.async = true
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load DropIn Blog script')
    }
    
    // Add load handler to ensure initialization
    script.onload = () => {
      // Give a small delay to ensure the script has fully initialized
      setTimeout(() => {
        if (window.DIB && typeof window.DIB.init === 'function') {
          window.DIB.init()
        }
      }, 100)
    }

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Don't remove the script on unmount as it might be needed for other pages
      // The script will persist and be reused
    }
  }, [])

  return (
    <Layout includeCTA={true}>
      {/* Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay current with the latest news for Pharmacy Technicians and industry trends on our blog.
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Updated regularly with articles, tips, and resources to help you advance your career.
          </p>
        </div>
        <div className="flex justify-center w-[50%] relative px-12">
          <StaticImage src="../../images/hero_blog.svg" alt="Pharm Techs Only Blog" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <ResourceLink />
          </nav>
          <div id="dib-posts"></div>
        </div>
      </div>
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
