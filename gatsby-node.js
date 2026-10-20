const path = require("path")

// Standard Node fetch is available natively in Node 18+
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const dropInBlogID = "2e37eb85-3320-46a6-adb0-28174e06195c"
  
  console.log(`SourceNodes: Fetching DropInBlog posts for ID ${dropInBlogID}...`)
  
  try {
    // 1. Fetch author profiles with rich bios for E-E-A-T
    let authorsMap = {}
    try {
      const authorsRes = await fetch(`https://api.dropinblog.com/v1/json/authors/?b=${dropInBlogID}`)
      if (authorsRes.ok) {
        const authorsData = await authorsRes.json()
        if (authorsData.status === "success" && Array.isArray(authorsData.data?.authors)) {
          authorsData.data.authors.forEach(author => {
            if (author.slug) authorsMap[author.slug] = author
            if (author.name) authorsMap[author.name] = author
          })
          console.log(`SourceNodes: Loaded ${authorsData.data.authors.length} DropInBlog author profile(s).`)
        }
      }
    } catch (err) {
      console.warn("SourceNodes: Warning fetching DropInBlog authors:", err)
    }

    let allPosts = []
    let page = 1
    let totalPages = 1
    
    // 2. Fetch all pages of the post list
    while (page <= totalPages) {
      console.log(`SourceNodes: Fetching DropInBlog page ${page} of ${totalPages}...`)
      const response = await fetch(`https://api.dropinblog.com/v1/json/?b=${dropInBlogID}&page=${page}`)
      if (!response.ok) {
        throw new Error(`DropInBlog API list error: ${response.status}`)
      }
      
      const resData = await response.json()
      if (resData.status === "success" && resData.data) {
        if (page === 1 && resData.data.lastPage) {
          totalPages = resData.data.lastPage
        }
        if (resData.data.posts) {
          allPosts = allPosts.concat(resData.data.posts)
        }
      }
      page++
    }

    console.log(`SourceNodes: Found ${allPosts.length} total posts. Fetching full contents...`)

    // 3. Fetch full details for each post to populate "content"
    const limit = 5;
    for (let i = 0; i < allPosts.length; i += limit) {
      const chunk = allPosts.slice(i, i + limit);
      await Promise.all(chunk.map(async (basicPost) => {
        try {
          const detailRes = await fetch(`https://api.dropinblog.com/v1/json/post/?b=${dropInBlogID}&post=${basicPost.slug}`)
          if (detailRes.ok) {
            const detailData = await detailRes.json()
            if (detailData.status === "success" && detailData.data && detailData.data.post) {
              Object.assign(basicPost, detailData.data.post)
            }
          }
        } catch (err) {
          console.warn(`Failed to fetch detail for ${basicPost.slug}`, err)
        }
      }))
    }

    // 4. Create Gatsby nodes with enriched author bios
    if (allPosts.length > 0) {
      allPosts.forEach(post => {
        const postAuthor = post.author || {}
        const matchedAuthor = (postAuthor.slug && authorsMap[postAuthor.slug]) || (postAuthor.name && authorsMap[postAuthor.name]) || {}
        
        post.author = {
          name: postAuthor.name || matchedAuthor.name || null,
          photo: postAuthor.photo || matchedAuthor.photo || null,
          slug: postAuthor.slug || matchedAuthor.slug || null,
          bio: matchedAuthor.bio || null,
        }

        const node = {
          ...post,
          id: createNodeId(`DropInBlogPost-${post.slug}`),
          internal: {
            type: "DropInBlogPost",
            contentDigest: createContentDigest(post),
          },
        }
        createNode(node)
      })
      console.log(`SourceNodes: Successfully created ${allPosts.length} DropInBlog nodes with full content and author bios.`)
    } else {
      console.warn("DropInBlog returned no posts.")
    }
  } catch (error) {
    console.error("Failed to source DropInBlog data:", error)
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type DropInBlogPostAuthor {
      name: String
      photo: String
      slug: String
      bio: String
    }
    type DropInBlogPost implements Node {
      slug: String!
      title: String!
      content: String
      summary: String
      featuredImage: String
      publishedAt: String
      publishedAtIso8601: String
      updatedAtIso8601: String
      readtime: String
      seoTitle: String
      seoDescription: String
      author: DropInBlogPostAuthor
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allDropInBlogPost {
        edges {
          node {
            slug
            title
            summary
            featuredImage
            publishedAt
            readtime
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data?.allDropInBlogPost?.edges || []
  const postTemplate = path.resolve(`src/pages/resource-center/blog-post.js`)

  const STOPWORDS = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
    'from', 'as', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'should', 'can', 'could', 'may', 'might', 'must',
    'it', 'its', 'they', 'them', 'their', 'what', 'which', 'who', 'whom', 'this', 'that',
    'these', 'those', 'how', 'why', 'when', 'where', 'all', 'any', 'both', 'each', 'few',
    'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
    'than', 'too', 'very', 'just', 'should', 'now', 'guide', 'tips',
    'pharmacy', 'technician', 'technicians', 'tech', 'techs'
  ])

  function extractKeywords(text) {
    if (!text) return []
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, ' ')
      .split(/[\s-]+/)
      .filter(w => w.length > 2 && !STOPWORDS.has(w))
  }

  const allPostNodes = posts.map(e => e.node)
  const relatedPostsMap = new Map()

  allPostNodes.forEach((currentPost, idx) => {
    const currentWords = new Set([
      ...extractKeywords(currentPost.title),
      ...extractKeywords(currentPost.summary).slice(0, 10)
    ])

    const candidates = allPostNodes
      .filter(p => p.slug !== currentPost.slug)
      .map(candidate => {
        const candidateWords = new Set([
          ...extractKeywords(candidate.title),
          ...extractKeywords(candidate.summary).slice(0, 10)
        ])
        let score = 0
        for (const w of currentWords) {
          if (candidateWords.has(w)) score += 2
        }
        return { post: candidate, score }
      })

    candidates.sort((a, b) => b.score - a.score)

    const selected = []
    // 1. Take top keyword matches (up to 2)
    for (const c of candidates) {
      if (selected.length >= 2) break
      if (c.score > 0) {
        selected.push(c.post)
      }
    }

    // 2. Add coprime-stride distributed post (stride = 37) to guarantee 100% link equity across all 108 posts
    const strideOffset = (idx + 37) % allPostNodes.length
    const fallback1 = allPostNodes[strideOffset]
    if (fallback1.slug !== currentPost.slug && !selected.some(s => s.slug === fallback1.slug)) {
      selected.push(fallback1)
    }

    // 3. Fill remaining slot if needed
    let candidateIdx = 0
    while (selected.length < 3 && candidateIdx < candidates.length) {
      const nextCandidate = candidates[candidateIdx].post
      if (!selected.some(s => s.slug === nextCandidate.slug)) {
        selected.push(nextCandidate)
      }
      candidateIdx++
    }

    const formattedRelated = selected.slice(0, 3).map(p => ({
      slug: p.slug,
      title: p.title,
      summary: p.summary || null,
      featuredImage: p.featuredImage || null,
      publishedAt: p.publishedAt || null,
      readtime: p.readtime || null,
    }))

    relatedPostsMap.set(currentPost.slug, formattedRelated)
  })

  posts.forEach(({ node }, index) => {
    const prev = index > 0 ? { slug: posts[index - 1].node.slug, title: posts[index - 1].node.title } : null
    const next = index < posts.length - 1 ? { slug: posts[index + 1].node.slug, title: posts[index + 1].node.title } : null

    createPage({
      path: `/resource-center/blog/${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug,
        prev,
        next,
        relatedPosts: relatedPostsMap.get(node.slug) || [],
      },
    })
  })
}

// Ensure the template file inside `src/pages` doesn't become a blank ghost route 
exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions
  // If Gatsby attempts to create a route for the template directly, we remove it
  if (page.path.match(/^\/resource-center\/blog-post\/?$/)) {
    deletePage(page)
  }
}

// Post-build hook to ensure standard SEO and AEO assets are synchronized
exports.onPostBuild = async () => {
  const fs = require("fs")
  
  // 1. Ensure sitemap.xml exists alongside sitemap-index.xml
  const sitemapIndexPath = path.join(__dirname, "public", "sitemap-index.xml")
  const sitemapXmlPath = path.join(__dirname, "public", "sitemap.xml")
  if (fs.existsSync(sitemapIndexPath)) {
    try {
      fs.copyFileSync(sitemapIndexPath, sitemapXmlPath)
      console.log("onPostBuild: Successfully synchronized sitemap.xml with sitemap-index.xml")
    } catch (err) {
      console.warn("onPostBuild: Warning syncing sitemap.xml:", err)
    }
  }

  // 2. Ensure /llm.txt is an identical copy of /llms.txt for tools expecting either filename
  const llmsPath = path.join(__dirname, "public", "llms.txt")
  const llmPath = path.join(__dirname, "public", "llm.txt")
  if (fs.existsSync(llmsPath)) {
    try {
      fs.copyFileSync(llmsPath, llmPath)
      console.log("onPostBuild: Successfully synchronized llm.txt from llms.txt")
    } catch (err) {
      console.warn("onPostBuild: Warning syncing llm.txt:", err)
    }
  }
}
