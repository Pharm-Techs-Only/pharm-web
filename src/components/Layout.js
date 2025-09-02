import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CTA from './CTA'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ children, includeHeader = false, includeCTA = false }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {includeHeader && <Header />}
      <main className="flex-grow relative z-20">
        {children}
      </main>
      {includeCTA && <CTA />}
      <Footer />
      <div className="-right-[60px] top-[1875px] absolute z-10"><StaticImage src="../images/circles_right.svg" alt="Circles" /></div>
      <div className="-left-[60px] top-[2515px] absolute z-10"><StaticImage src="../images/circles_left.svg" alt="Circles" /></div>
      <div className="-right-[60px] top-[3805px] absolute z-10"><StaticImage src="../images/circles_right.svg" alt="Circles" /></div>
      <div className="-left-[60px] top-[4445px] absolute z-10"><StaticImage src="../images/circles_left.svg" alt="Circles" /></div>
      <div className="absolute inset-0 pointer-events-none z-1" style={{ background: "repeating-linear-gradient(var(--color-bg-blue), var(--color-bg-white) 1080px, var(--color-bg-blue) 2160px, var(--color-bg-white) 3240px, var(--color-bg-blue) 4320px, var(--color-bg-white) 5400px, var(--color-bg-blue) 6480px)" }}></div>
    </div>
  )
}

export default Layout
