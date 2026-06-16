import React from 'react'
import { Link } from 'gatsby'
import Donate from './Donate'
import { StaticImage } from 'gatsby-plugin-image'

const CTA = ({ type = "default" }) => {
  return (
    <section className={`${type === "ceus" ? "py-8 mb-8" : "py-16"} px-4 sm:px-6 lg:px-8 relative z-20 bg-white`}>
      <div className="content-container text-center">
        {(type === "default") ? (
          <>
            <h2 className="text-3xl font-bold text-pharm-blue mb-4">
              Ready to advance your career
            </h2>
            <p className="text-xl text-pharm-grey mb-8">
              Join thousands of pharmacy technicians who are already using our resources to grow professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="https://tc.pharmtechsonly.com/careers"
                className="btn text-white px-8 py-3 rounded-md font-medium transition-all"
              >
                Explore Career Opportunities
              </Link>
              <Link
                to="https://tc.pharmtechsonly.com/"
                className="bg-pharm-light-blue hover:bg-pharm-blue text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </>
        ) : (type === "ceus") ? (
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex items-center">
              <StaticImage src="../assets/images/cta_ceu.png" alt="TechConnect" />
            </div>
            <div className="items-center">
              <h2 className="text-3xl font-bold text-pharm-blue mb-4">
                🚀 Join the TechConnect&trade; Community
              </h2>
              <p className="text-xl text-pharm-grey mb-8">
                You're already investing in your career through CE, take the next step and connect with Pharmacy Technicians worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 wrap items-center justify-center mb-8">
                <div className="text-xl font-bold">🤝 Network</div>
                <div className="text-xl font-bold">📖 Learn</div>
                <div className="text-xl font-bold">📈 Grow</div>
                <div className="text-xl font-bold">💕 Support Each Other</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="https://tc.pharmtechsonly.com/"
                  className="bg-pharm-light-blue hover:bg-pharm-blue text-white px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Join Our Community
                </Link>
                <Link
                  to="https://tc.pharmtechsonly.com/careers"
                  className="btn text-white px-8 py-3 rounded-md font-medium text-center transition-all"
                >
                  Explore Career Opportunities
                </Link>
              </div>
            </div>
          </div>

        ) : (
          <>
            <h2 className="text-3xl font-bold text-pharm-blue mb-4">
              Support Pharmacy Technicians
            </h2>
            <p className="text-xl text-pharm-grey mb-8">
              Your contribution helps us provide valuable resources and support to pharmacy technicians across the globe.
            </p>
            <Donate />
          </>
        )}
      </div>
    </section>
  )
}

export default CTA
