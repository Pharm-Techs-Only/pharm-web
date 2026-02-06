/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Pharm Techs Only!`,
    siteUrl: `https://www.pharmtechsonly.com`,
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, {
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
