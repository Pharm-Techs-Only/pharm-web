import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'
import { StaticImage } from 'gatsby-plugin-image'

const StorePage = () => {
  useEffect(() => {
    // Load Ecwid store script
    const existingScript = document.getElementById('ecwid-script')
    if (existingScript) {
      // If script exists, reinitialize if needed
      if (window.xProductBrowser && typeof window.xProductBrowser === 'function') {
        window.xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-85557832")
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
          window.xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-85557832")
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
            Store
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our store for the latest products and resources tailored for pharmacy technicians.
          </p>
        </div>
        <div className="flex justify-center w-[50%] relative px-12">
          <StaticImage src="../images/hero_store.svg" alt="Pharmacy Technicians Store" className="lg:!absolute -bottom-[20px]" />
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

export const Head = () => (
  <>
    <title>Store - PharmTechs Only</title>
    <meta name="description" content="Explore our store for the latest products and resources tailored for pharmacy technicians." />
  </>
)
