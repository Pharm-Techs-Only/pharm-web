import React from 'react'
import Header from './Header'

const HeroHeader = ({ children, className = "" }) => {
  return (
    <section className={`${className} pb-[60px] relative`}>
      <Header />
      {children}
    </section>
  )
}

export default HeroHeader
