/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Pharm Techs Only!`,
    siteUrl: `https://www.pharmtechsonly.com`,
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-transformer-sharp", {
    resolve: "gatsby-plugin-sitemap",
    options: {
      output: "/",
      excludes: ["/privacy", "/terms", "/sitemap", "/404"],
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
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
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

