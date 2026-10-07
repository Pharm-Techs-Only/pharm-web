import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import HeroHeader from "../../components/HeroHeader"
import SEO from "../../components/SEO"

export default function BlogPostTemplate({ data, pageContext }) {
  const post = data.dropInBlogPost
  const recentPosts = data.recentPosts?.nodes || []
  const { prev, next } = pageContext || {}

  return (
    <Layout includeCTA="default">
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] pb-[40px] md:pb-[80px] w-full px-4 text-center max-w-4xl mx-auto">
          <h1>
            {post.title}
          </h1>
        </div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-pharm-blue transition-colors">Home</Link>
            <span>/</span>
            <Link to="/resource-center" className="hover:text-pharm-blue transition-colors">Resource Center</Link>
            <span>/</span>
            <Link to="/resource-center/blog" className="hover:text-pharm-blue transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium truncate max-w-[260px] sm:max-w-md">{post.title}</span>
          </nav>

          <article className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12">
            <header className="mb-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 text-gray-500 mb-8 text-sm">
                <span className="flex items-center">
                  <img
                    src={post.author?.photo || "/icons/icon-48x48.png"}
                    alt={post.author?.name || "Courtney Miller, CPhT"}
                    className="w-9 h-9 rounded-full mr-2.5 object-cover border border-blue-200"
                  />
                  <span className="font-semibold text-gray-800">{post.author?.name || "Courtney Miller, CPhT"}</span>
                </span>
                {post.publishedAt && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>{post.publishedAt}</span>
                  </>
                )}
                {post.readtime && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>{post.readtime.includes('read') ? post.readtime : `${post.readtime} min read`}</span>
                  </>
                )}
              </div>

              {post.featuredImage && (
                <div className="mb-10 rounded-xl overflow-hidden shadow-md">
                  <img src={post.featuredImage} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                </div>
              )}
            </header>

            {/* DIB injects standard HTML, we render it directly using dangerouslySetInnerHTML */}
            <div
              className="prose prose-lg max-w-none prose-blue prose-headings:text-pharm-blue prose-a:text-pharm-light-blue hover:prose-a:text-pharm-blue"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Platform Cross-Link Banner */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-pharm-blue !mb-1">Advance Your Pharmacy Technician Career</h3>
                <p className="text-sm text-gray-600 !mb-0">Access 100% free accredited CEUs, salary benchmarks, and connect with 26,000+ peers.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 shrink-0">
                <Link
                  to="/resource-center/free-ceus"
                  className="px-4 py-2.5 bg-pharm-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
                >
                  Free CEU Directory
                </Link>
                <a
                  href="https://tc.pharmtechsonly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white text-pharm-blue border border-pharm-blue/30 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
                >
                  Join TechConnect™
                </a>
              </div>
            </div>

            {/* Author Bio Box (E-E-A-T) */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-gray-50/70 p-6 rounded-xl">
              <img
                src={post.author?.photo || "/icons/icon-96x96.png"}
                alt={post.author?.name || "Courtney Miller, CPhT"}
                className="w-16 h-16 rounded-full object-cover border-2 border-pharm-light-blue shrink-0 shadow-sm"
              />
              <div className="text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  <h4 className="text-base font-bold text-gray-900 !mb-0">{post.author?.name || "Courtney Miller, CPhT"}</h4>
                  <span className="text-xs bg-blue-100 text-pharm-blue font-semibold px-2.5 py-0.5 rounded-full">Founder & Advocate</span>
                </div>
                <p className="text-sm text-gray-600 !mb-3 leading-relaxed">
                  Courtney has over 30 years of frontline experience as a certified pharmacy technician across retail, hospital, and leadership settings. She founded Pharm Techs Only! to empower, elevate, and support pharmacy technicians worldwide.
                </p>
                <Link to="/about" className="text-xs text-pharm-blue hover:text-pharm-light-blue font-semibold inline-flex items-center gap-1">
                  Learn more about our mission &rarr;
                </Link>
              </div>
            </div>

            {/* Next / Previous Article Navigation */}
            {(prev || next) && (
              <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-200 pt-8" aria-label="Previous and Next Articles">
                {prev ? (
                  <Link
                    to={`/resource-center/blog/${prev.slug}`}
                    className="p-4 bg-white border border-gray-200 rounded-lg hover:border-pharm-blue hover:shadow-sm transition-all group flex flex-col text-left"
                  >
                    <span className="text-xs text-gray-500 font-semibold mb-1 group-hover:text-pharm-blue">&larr; Previous Article</span>
                    <span className="text-sm font-bold text-gray-800 line-clamp-2">{prev.title}</span>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    to={`/resource-center/blog/${next.slug}`}
                    className="p-4 bg-white border border-gray-200 rounded-lg hover:border-pharm-blue hover:shadow-sm transition-all group flex flex-col text-right sm:ml-auto w-full"
                  >
                    <span className="text-xs text-gray-500 font-semibold mb-1 group-hover:text-pharm-blue">Next Article &rarr;</span>
                    <span className="text-sm font-bold text-gray-800 line-clamp-2">{next.title}</span>
                  </Link>
                ) : <div />}
              </nav>
            )}
          </article>

          {/* Related / Recent Articles Grid (Internal Link Graph) */}
          {recentPosts && recentPosts.length > 0 && (
            <section className="mb-16">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-pharm-blue !mb-1">Explore More Articles</h3>
                  <p className="text-sm text-gray-600 !mb-0">Helpful guides, career trends, and insights for pharmacy technicians.</p>
                </div>
                <Link to="/resource-center/blog" className="text-sm text-pharm-light-blue hover:text-pharm-blue font-semibold hidden sm:inline-block">
                  View all articles &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentPosts.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/resource-center/blog/${related.slug}`}
                    className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group"
                  >
                    {related.featuredImage && (
                      <div className="h-36 overflow-hidden bg-gray-100">
                        <img
                          src={related.featuredImage}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-grow">
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-pharm-blue transition-colors line-clamp-2 !mb-2">
                        {related.title}
                      </h4>
                      {related.summary && (
                        <p className="text-xs text-gray-600 line-clamp-2 !mb-4 flex-grow">
                          {related.summary}
                        </p>
                      )}
                      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                        {related.publishedAt && <span>{related.publishedAt}</span>}
                        <span className="text-pharm-light-blue font-semibold group-hover:text-pharm-blue">Read &rarr;</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  )
}

// Query current post detail + recent articles for internal linking
export const query = graphql`
  query($slug: String!) {
    dropInBlogPost(slug: { eq: $slug }) {
      slug
      title
      content
      summary
      featuredImage
      publishedAt
      publishedAtIso8601
      updatedAtIso8601
      seoTitle
      seoDescription
      readtime
      author {
        name
        photo
      }
    }
    recentPosts: allDropInBlogPost(
      limit: 3
      filter: { slug: { ne: $slug } }
    ) {
      nodes {
        slug
        title
        summary
        featuredImage
        publishedAt
        readtime
      }
    }
  }
`

export const Head = ({ data }) => {
  const post = data?.dropInBlogPost
  if (!post) return null

  const pageTitle = post.seoTitle 
    ? `${post.seoTitle} – Pharm Techs Only!`
    : `${post.title} – Pharm Techs Only! Blog`
  const pageDesc = post.seoDescription || post.summary || `Read ${post.title} on the Pharm Techs Only! blog for pharmacy technicians.`
  const canonicalPath = `/resource-center/blog/${post.slug}/`
  const canonicalUrl = `https://www.pharmtechsonly.com${canonicalPath}`
  const datePublished = post.publishedAtIso8601 || post.publishedAt
  const dateModified = post.updatedAtIso8601 || post.publishedAtIso8601 || post.publishedAt

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    headline: post.title,
    description: pageDesc,
    image: post.featuredImage || 'https://www.pharmtechsonly.com/og-image.png',
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Courtney Miller',
      jobTitle: 'Founder & Certified Pharmacy Technician',
      worksFor: {
        '@type': 'Organization',
        name: 'Pharm Techs Only!',
        url: 'https://www.pharmtechsonly.com',
      },
      url: 'https://www.pharmtechsonly.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pharm Techs Only!',
      url: 'https://www.pharmtechsonly.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.pharmtechsonly.com/icons/icon-512x512.png',
      },
    },
    isPartOf: { '@id': 'https://www.pharmtechsonly.com/resource-center/blog#webpage' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pharmtechsonly.com' },
        { '@type': 'ListItem', position: 2, name: 'Resource Center', item: 'https://www.pharmtechsonly.com/resource-center' },
        { '@type': 'ListItem', position: 3, name: 'Blog', item: 'https://www.pharmtechsonly.com/resource-center/blog' },
        { '@type': 'ListItem', position: 4, name: post.title, item: canonicalUrl },
      ],
    },
  }

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <SEO
        title={pageTitle}
        description={pageDesc}
        path={canonicalPath}
        ogType="article"
        ogImage={post.featuredImage || undefined}
      />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    </>
  )
}

