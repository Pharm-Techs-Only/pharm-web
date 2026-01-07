/**
 * Gatsby Node Configuration
 * 
 * Creates client-side routing for Drop In Blog posts.
 * This allows blog post URLs like /resource-center/blog/post-slug to work
 * by serving the blog page component and letting DIB handle the routing.
 */

const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // Create a client-only route for blog posts
  // This catches all paths under /resource-center/blog/* and serves the blog component
  // The Drop In Blog script will then render the appropriate content based on the URL
  createPage({
    path: "/resource-center/blog",
    matchPath: "/resource-center/blog/*",
    component: path.resolve("src/pages/resource-center/blog.js"),
  })
}

// Ensure trailing slashes are handled consistently
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Handle the blog page to support client-side routing
  if (page.path === "/resource-center/blog/") {
    deletePage(page)
    createPage({
      ...page,
      matchPath: "/resource-center/blog/*",
    })
  }
}
