import React from 'react'
import Header from './Header'
import { StaticImage } from 'gatsby-plugin-image'
import cloudHeroThree from '../assets/images/cloud_hero-three.svg'
import cloudHeroOne from '../assets/images/cloud_hero-one.svg'
import cloudFloorHero from '../assets/images/cloud_floor-hero.svg'
import cloudEmphOne from '../assets/images/cloud_emphasis-one.svg'
import cloudEmphTwo from '../assets/images/cloud_emphasis-two.svg'
import cloudEmphThree from '../assets/images/cloud_emphasis-three.svg'
import cloudEmphFour from '../assets/images/cloud_emphasis-four.svg'
import cloudEmphFive from '../assets/images/cloud_emphasis-five.svg'
import cloudEmphSix from '../assets/images/cloud_emphasis-six.svg'

const HeroHeader = ({ children, type = "standard", className = "" }) => {
  if (type == "emphasis") {
    return (
      <section className={`${className} pb-[60px] relative bg-gradient-to-b from-[#495DA9] via-[#5776E5] to-[#6B8AFF]`}>
        <Header />
        <div className="content-container relative">
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-stretch">
            {children}
          </div>
        </div>
        <div className="-left-[5px] top-[275px] absolute z-10"><img src={cloudEmphOne} alt="Cloud One" /></div>
        <div className="-left-[10px] top-[515px] absolute z-10"><img src={cloudEmphTwo} alt="Cloud Two" /></div>
        <div className="left-[315px] top-[440px] absolute z-10"><img src={cloudEmphThree} alt="Cloud Three" /></div>
        <div className="right-[270px] top-[680px] absolute z-10"><img src={cloudEmphFour} alt="Cloud Four" /></div>
        <div className="-right-[60px] top-[260px] absolute z-10"><img src={cloudEmphFive} alt="Cloud Five" /></div>
        <div className="-right-[20px] top-[550px] absolute z-10"><img src={cloudEmphSix} alt="Cloud Six" /></div>
      </section>
    )
  }
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
