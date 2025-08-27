import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, includeHeader = false }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col z-20 relative">
        {includeHeader && <Header />}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <div className="-right-[60px] -top-[1875px] absolute z-10"><StaticImage src="../images/circles_right.svg" alt="Circles" /></div>
      <div className="-left-[60%] -top-[2515px] absolute z-10"><StaticImage src="../images/circles_left.svg" alt="Circles" /></div>
      <div className="-right-[60px] -top-[3805px] absolute z-10"><StaticImage src="../images/circles_right.svg" alt="Circles" /></div>
      <div className="absolute inset-0 pointer-events-none z-1" style={{ background: repeating-linear-gradient("#e66465, #e66465 20px, #9198e5 20px, #9198e5 25px"); }}></div>
    </>
  )
}

export default Layout
