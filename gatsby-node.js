const path = require("path")

// Standard Node fetch is available natively in Node 18+
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const dropInBlogID = "2e37eb85-3320-46a6-adb0-28174e06195c"
  
  console.log(`SourceNodes: Fetching DropInBlog posts for ID ${dropInBlogID}...`)
  
  try {
    let allPosts = []
    let page = 1
    let totalPages = 1
    
    // 1. Fetch all pages of the post list
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

    // 2. Fetch full details for each post to populate "content"
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

    // 3. Create Gatsby nodes
    if (allPosts.length > 0) {
      allPosts.forEach(post => {
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
      console.log(`SourceNodes: Successfully created ${allPosts.length} DropInBlog nodes with full content.`)
    } else {
      console.warn("DropInBlog returned no posts.")
    }
  } catch (error) {
    console.error("Failed to source DropInBlog data:", error)
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allDropInBlogPost {
        edges {
          node {
            slug
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

  posts.forEach(({ node }) => {
    createPage({
      path: `/resource-center/blog/${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug,
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
