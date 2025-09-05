import React from 'react'
import { Link } from 'gatsby'

const ResourceLink = () => {
  return (
    <Link to="/resource-center" className="text-pharm-blue hover:text-pharm-light-blue font-normal text-[18px]">
      ← Back to Resource Center
    </Link>
  )
}

export default ResourceLink
