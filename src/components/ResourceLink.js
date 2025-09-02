import React from 'react'
import { Link } from 'gatsby'

const ResourceLink = () => {
  return (
    <Link to="/resource-center" className="text-pharm-blue hover:underline font-normal">
      ← Back to Resource Center
    </Link>
  )
}

export default ResourceLink
