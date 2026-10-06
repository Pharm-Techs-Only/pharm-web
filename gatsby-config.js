/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: `Pharm Techs Only!`,
    description: `The premier global community, professional network, and educational resource hub built by pharmacy technicians, for pharmacy technicians. Access free CEUs, career tools, professional directories, and connect with peers worldwide.`,
    siteUrl: `https://www.pharmtechsonly.com`,
    author: `Courtney Miller`,
    keywords: `pharmacy technician, pharmacy tech, CPhT, PTCB, ExCPT, free CEUs, pharmacy continuing education, TechConnect, pharmacy careers`,
    image: `/og-image.png`,
    twitterUsername: `@pharmtechsonly`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
        excludes: ["/privacy", "/privacy/", "/terms", "/terms/", "/404", "/404/", "/404.html"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => ({ ...page }))
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: "weekly",
            priority: path === "/" ? 1.0 : path.includes("/resource-center/blog/") ? 0.7 : 0.8,
          }
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-YVBVKF9KLX"
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PharmTechs Only!`,
        short_name: `PTO!`,
        start_url: `/`,
        background_color: `#09447E`,
        theme_color: `#5776D3`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `none`,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    }
  ]
};


