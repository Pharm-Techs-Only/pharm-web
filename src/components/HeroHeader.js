import React from 'react'
import Header from './Header'

const HeroHeader = ({ children, className = "" }) => {
  return (
    <section className={`bg-gradient-to-b from-[rgba(142, 193, 243, 1)] to-[rgba(216, 235, 255, 0)] ${className}`}>
      <Header />
      {children}
    </section>
  )
}

export default HeroHeader
