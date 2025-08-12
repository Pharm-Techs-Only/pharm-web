import React from 'react'
import Header from './Header'

const HeroHeader = ({ children, className = "" }) => {
  return (
    <section className={`${className}`}>
      <Header />
      {children}
    </section>
  )
}

export default HeroHeader
