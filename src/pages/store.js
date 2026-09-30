import React, { useEffect } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import { StaticImage } from 'gatsby-plugin-image'
import heroStore from '../assets/images/hero_store.svg'

const StorePage = () => {
  useEffect(() => {
    // Load Ecwid store script
    const existingScript = document.getElementById('ecwid-script')
    if (existingScript) {
      // If script exists, reinitialize if needed
      if (window.xProductBrowser && typeof window.xProductBrowser === 'function') {
        window.xProductBrowser("categoriesPerRow=3", "views=grid(20,3) list(60) table(60)", "categoryView=grid", "searchView=list", "id=my-store-85557832")
      }
      return
    }

    // Create and load the Ecwid script
    const script = document.createElement('script')
    script.id = 'ecwid-script'
    script.src = 'https://app.ecwid.com/script.js?85557832&data_platform=code&data_date=2025-09-05'
    script.setAttribute('data-cfasync', 'false')
    script.type = 'text/javascript'
    script.charset = 'utf-8'

    // Add error handling
    script.onerror = () => {
      console.error('Failed to load Ecwid store script')
    }

    // Add load handler to initialize store
    script.onload = () => {
      // Give a small delay to ensure the script has fully initialized
      setTimeout(() => {
        if (window.xProductBrowser && typeof window.xProductBrowser === 'function') {
          window.xProductBrowser("categoriesPerRow=3", "views=grid(20,3) list(60) table(60)", "categoryView=grid", "searchView=list", "id=my-store-85557832")
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
    <Layout includeCTA="default">
      {/* Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] md:w-[70%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Store
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our store for the latest products and resources tailored for pharmacy technicians.
          </p>
        </div>
        <div className="flex justify-center w-[100%] md:w-[70%] lg:w-[50%] relative px-12">
          <img src={heroStore} alt="Pharmacy Technicians Store" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div id="my-store-85557832"></div>
        </div>
      </div>
    </Layout>
  )
}

export default StorePage

const PAGE_TITLE = 'Pharmacy Technician Store – Study Kits, Apparel & Resources'
const PAGE_DESC = 'Shop the Pharm Techs Only! store for pharmacy technician study kits, exam prep materials, branded apparel, and professional resources. Products designed to support pharmacy technicians at every stage of their career.'

export const Head = () => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pharmtechsonly.com' },
      { '@type': 'ListItem', position: 2, name: 'Store', item: 'https://www.pharmtechsonly.com/store' },
    ],
  }

  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESC} />
      <SEO title={PAGE_TITLE} description={PAGE_DESC} path="/store" />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </>
  )
}
