import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import HeroHeader from "../../components/HeroHeader"
export default function BlogPostTemplate({ data }) {
  const post = data.dropInBlogPost

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
          <nav className="mb-8">
            <Link to="/resource-center/blog" className="text-pharm-blue hover:text-pharm-light-blue font-semibold inline-flex items-center gap-2">
              &larr; Back to Blog
            </Link>
          </nav>

          <article className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12">
            <header className="mb-10 text-center">
              <div className="flex items-center justify-center space-x-4 text-gray-500 mb-8">
                {post.author && (
                  <span className="flex items-center">
                    {post.author.photo && (
                      <img src={post.author.photo} alt={post.author.name} className="w-10 h-10 rounded-full mr-3" />
                    )}
                    <span className="font-medium text-gray-700">{post.author.name}</span>
                  </span>
                )}
                {post.publishedAt && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>{post.publishedAt}</span>
                  </>
                )}
                {post.readtime && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span>{post.readtime} min read</span>
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
          </article>
        </div>
      </div>
    </Layout>
  )
}

// Ensure you query the specific fields the plugin provides
export const query = graphql`
  query($slug: String!) {
    dropInBlogPost(slug: { eq: $slug }) {
      title
      content
      summary
      featuredImage
      publishedAt
      readtime
      author {
        name
        photo
      }
    }
  }
`
