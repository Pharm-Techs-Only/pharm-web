import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import MailchimpSubscribe from './MailchimpSubscribe'
import footerImage from '../assets/images/footer_image.svg'
import cloudFloorFooter from '../assets/images/cloud_floor-footer.svg'
import Donate from './Donate'

const Footer = () => {
  return (
    <footer className="relative pb-0">
      <div className="content-container relative">
        <div className="relative px-4 sm:px-6 lg:px-8 z-30 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-stretch">
          <div className="justify-center w-[100%] md:w-[70%] lg:w-[50%] px-12 pb-8 relative flex flex-col hidden lg:block lg:self-end">
            <img src={footerImage} alt="Pharmacy Technician" className="" />
          </div>

          {/* Right side - Links */}
          <div className="pt-[60px] md:pt-[80px] lg:pt-[120px] xl:pt-[170px] w-[100%] md:w-[70%] lg:w-[50%] px-20 lg:px-0 pb-0 pl-0 lg:pl-[120px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-semibold mb-3">Main</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-white text-shadow-2xs hover:underline transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-white text-shadow-2xs hover:underline transition-colors">About</Link></li>
                  <li><Link to="/store" className="text-white text-shadow-2xs hover:underline transition-colors">Store</Link></li>
                  <li><Link to="/contact" className="text-white text-shadow-2xs hover:underline transition-colors">Contact</Link></li>
                  <li><Link to="/privacy" className="text-white text-shadow-2xs hover:underline transition-colors">Privacy</Link></li>
                  <li><Link to="/terms" className="text-white text-shadow-2xs hover:underline transition-colors">Terms</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Resource Center</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li><Link to="/resource-center/free-ceus" className="text-white text-shadow-2xs hover:underline transition-colors">Free CEUs</Link></li>
                  <li><Link to="/resource-center/organizations" className="text-white text-shadow-2xs hover:underline transition-colors">Organizations</Link></li>
                  <li><Link to="/resource-center/conventions" className="text-white text-shadow-2xs hover:underline transition-colors">Conventions</Link></li>
                  <li><Link to="/resource-center/blog" className="text-white text-shadow-2xs hover:underline transition-colors">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Career Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/careers" className="text-white text-shadow-2xs hover:underline transition-colors">Global Career Center</Link></li>
                  <li><Link to="/resource-center/careers" className="text-white text-shadow-2xs hover:underline transition-colors">Career Resources</Link></li>
                </ul>
                <h4 className="font-semibold mb-3">Tech Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="https://tc.pharmtechsonly.com" className="text-white text-shadow-2xs hover:underline transition-colors">Join Now</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Employers</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-white text-shadow-2xs hover:underline transition-colors" target="_blank" rel="noreferrer">Post Jobs<br /><span className="text-sm italic">*coming soon*</span></a></li>
                  <li><a href="#" className="text-white text-shadow-2xs hover:underline transition-colors" target="_blank" rel="noreferrer">Search Candidates<br /><span className="text-sm italic">*coming soon*</span></a></li>
                  <li><Link to="/marketing-opps" className="text-white text-shadow-2xs hover:underline transition-colors" target="_blank" rel="noreferrer">Marketing Opportunities</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Subscribe and stay up-to-date with the latest community news.
              </h3>

              {/* Email signup form */}
              <div className="mb-6">
                <MailchimpSubscribe />
              </div>
              <div className="mb-6 flex md:flex-row justify-between mb-12 items-center xs:flex-col">
                {/* Social Links */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <a href="https://www.facebook.com/4PharmTechsOnly" target="_blank" rel="noreferrer" className="text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/pharmtechsonly" target="_blank" rel="noreferrer" className="text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/pharmtechsonly" target="_blank" rel="noreferrer" className="text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                  </a>
                  <a href="https://www.pinterest.com/pharmtechsonly/" target="_blank" rel="noreferrer" className="text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z"></path></svg>
                  </a>
                  <a href="https://www.tiktok.com/@pharmtechsonly" target="_blank" rel="noreferrer" className="text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path></svg>
                  </a>
                </div>
                <Donate />
              </div>
            </div>
            <p className="text-white text-sm">
              © {new Date().getFullYear()} PharmTechs Only. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full left-[0] bottom-[0] absolute z-10"><img src={cloudFloorFooter} alt="Cloud Floor" className="w-full" /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-blue)]/0 to-[var(--color-bg-white)]/100 pointer-events-none z-2"></div>
    </footer>
  )
}

export default Footer
