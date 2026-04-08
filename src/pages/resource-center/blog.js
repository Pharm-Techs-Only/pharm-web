import React, { useState } from 'react'
import Layout from '../../components/Layout'
import HeroHeader from '../../components/HeroHeader'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import heroBlog from '../../assets/images/hero_blog.svg'
import ResourceLink from '../../components/ResourceLink'

const BlogPage = ({ data }) => {
  const posts = data?.allDropInBlogPost?.edges || []
  const [visibleCount, setVisibleCount] = useState(9)

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9)
  }

  const visiblePosts = posts.slice(0, visibleCount)

  return (
    <Layout includeCTA="default">
      {/* Hero Section */}
      <HeroHeader>
        <div className="pt-[60px] md:pt-[80px] py-0 lg:pt-[100px] xl:py-[170px] w-[100%] md:w-[70%] lg:w-[50%] pr-0 lg:pr-[120px]">
          <h1>
            Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay current with the latest news for Pharmacy Technicians and industry trends on our blog.
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Updated regularly with articles, tips, and resources to help you advance your career.
          </p>
        </div>
        <div className="flex justify-center w-[100%] md:w-[70%] lg:w-[50%] relative px-12">
          <img src={heroBlog} alt="Pharm Techs Only Blog" className="lg:!absolute -bottom-[20px]" />
        </div>
      </HeroHeader>

      <div className="content-container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-8">
            <ResourceLink />
          </nav>
          
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No blog posts found. Please add some via DropInBlog!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map(({ node }) => (
                <Link 
                  key={node.slug} 
                  to={`/resource-center/blog/${node.slug}`}
                  className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                >
                  {node.featuredImage && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={node.featuredImage} 
                        alt={node.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-pharm-blue mb-3 line-clamp-2">
                      {node.title}
                    </h2>
                    {node.summary && (
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">
                        {node.summary}
                      </p>
                    )}
                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                      {node.publishedAt && (
                        <span>{node.publishedAt}</span>
                      )}
                      <span className="text-pharm-light-blue font-semibold group-hover:text-pharm-blue transition-colors">
                        Read post &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {visibleCount < posts.length && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="bg-pharm-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-pharm-dark-blue transition-colors shadow-sm"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allDropInBlogPost {
      edges {
        node {
          slug
          title
          summary
          featuredImage
          publishedAt
        }
      }
    }
  }
`

export default BlogPage

export const Head = () => (
  <>
    <title>Blog - PharmTechs Only</title>
    <meta name="description" content="Stay current with your PharmTech career through our blog featuring the latest news, tips, and resources for pharmacy technicians." />
  </>
)
