/**
 * SEO Component for Gatsby Head API
 * Renders comprehensive head tags: Canonical, Robots directives, Open Graph, Twitter Cards.
 */
import React from 'react'

const SITE_URL = 'https://www.pharmtechsonly.com'
const SITE_NAME = 'Pharm Techs Only!'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`
const DEFAULT_OG_ALT = 'Pharm Techs Only! - The Premier Global Community for Pharmacy Technicians'

const normalizePath = (path) => {
  if (!path || path === '/') return '/'
  // Ensure leading slash
  let clean = path.startsWith('/') ? path : `/${path}`
  // If not ending in extension (like .xml or .html), ensure trailing slash for Gatsby consistency
  if (!clean.includes('.') && !clean.endsWith('/')) {
    clean = `${clean}/`
  }
  return clean
}

const SEO = ({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_ALT,
  ogType = 'website',
  noindex = false,
  keywords,
  author = 'Courtney Miller',
  children,
}) => {
  const canonicalUrl = `${SITE_URL}${normalizePath(path)}`
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`

  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Crawl Directives */}
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Author and Keywords */}
      {author && <meta name="author" content={author} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content={imageUrl.endsWith('.jpg') || imageUrl.endsWith('.jpeg') ? 'image/jpeg' : 'image/png'} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt || title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pharmtechsonly" />
      <meta name="twitter:creator" content="@pharmtechsonly" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt || title} />

      {/* Additional structured data or tags passed as children */}
      {children}
    </>
  )
}

export default SEO
