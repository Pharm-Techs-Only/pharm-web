/**
 * SEO Component
 * Renders common head tags: canonical, Open Graph, Twitter Cards.
 * Use this inside Gatsby's Head API export in each page.
 */
import React from 'react'

const SITE_URL = 'https://www.pharmtechsonly.com'
const SITE_NAME = 'Pharm Techs Only!'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

const SEO = ({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  children,
}) => {
  const canonicalUrl = `${SITE_URL}${path}`

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pharmtechsonly" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional structured data or tags passed as children */}
      {children}
    </>
  )
}

export default SEO
