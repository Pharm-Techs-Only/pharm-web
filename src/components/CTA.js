import React from 'react'
import { Link } from 'gatsby'

const CTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-500">
      <div className="content-container text-center">
        <h2 className="text-3xl font-bold text-pharm-blue mb-4">
          Ready to advance your career
        </h2>
        <p className="text-xl text-pharm-grey mb-8">
          Join thousands of pharmacy technicians who are already using our resources to grow professionally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/careers"
            className="bg-pharm-green text-white hover:bg-pharm-green/90 px-8 py-3 rounded-md font-medium transition-colors"
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
      </div>
    </section>
  )
}

export default CTA
