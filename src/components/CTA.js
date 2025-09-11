import React from 'react'
import { Link } from 'gatsby'
import Donate from './Donate'

const CTA = (type = "default") => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-20 bg-white">
      <div className="content-container text-center">
        {(type == "default") ? (
          <>
            <h2 className="text-3xl font-bold text-pharm-blue mb-4">
              Ready to advance your career
            </h2>
            <p className="text-xl text-pharm-grey mb-8">
              Join thousands of pharmacy technicians who are already using our resources to grow professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="btn text-white px-8 py-3 rounded-md font-medium transition-all"
              >
                Explore Career Opportunities
              </Link>
              <Link
                to="/tech-connect"
                className="bg-pharm-light-blue hover:bg-pharm-blue text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </>
        ) : (
          <Donate />
        )}
      </div>
    </section>
  )
}

export default CTA
