import React from 'react'
import Header from './Header'
import { StaticImage } from 'gatsby-plugin-image'
import cloudHeroThree from '../assets/images/cloud_hero-three.svg'
import cloudHeroOne from '../assets/images/cloud_hero-one.svg'
import cloudFloorHero from '../assets/images/cloud_floor-hero.svg'

const HeroHeader = ({ children, className = "" }) => {
  return (
    <section className={`${className} pb-[60px] relative`}>
      <Header />
      <div className="content-container relative">
        <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
          {children}
        </div>
        <div className="-left-[220px] bottom-[240px] absolute z-10"><img src={cloudHeroThree} alt="Cloud Three" /></div>
        <div className="right-[260] top-[164px] absolute z-10"><img src={cloudHeroOne} alt="Cloud One" /></div>
      </div>
      <div className="w-full left-[0] bottom-[0] absolute z-10"><img src={cloudFloorHero} alt="Cloud Floor" className="w-full" /></div>
    </section>
  )
}

export default HeroHeader
