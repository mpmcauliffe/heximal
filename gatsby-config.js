module.exports = {
    siteMetadata: {
        title: `hexAscent`,
        description: `A coding and user experience journey.`,
        author: `Michael P McAuliffe`,
        image: `src/images/hex.png`,
        // siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    flags: {
        DEV_SSR: false,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-mdx`,
        `gatsby-plugin-styled-components`,
        'gatsby-remark-reading-time',
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
        }, {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            // This will impact how browsers show your PWA/website
            // https://css-tricks.com/meta-theme-color-and-trickery/
            // theme_color: `#663399`,
            display: `minimal-ui`,
            // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            icon: `src/images/hex-small.png`,
          },
        }, 
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
