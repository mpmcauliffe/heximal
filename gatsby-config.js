const siteMetadata = {
    title: `hexAscent`,
    description: `This is my coding blog where I write about my coding journey.`,
    icon: './hex-short-indigo.png',
}
  
module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280,
                        },
                    },
                ],
                plugin: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280,
                        },
                    },
                ],
            },
        }, {
            resolve: `gatsby-source-filesystem`,
            options: { path: `${__dirname}/posts`, name: `posts` },
        }, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `hexAscent`,
                short_name: `hexAscent`,
                icon: `./hex-indigo-lt.png`,
            },
        }, {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Martel`,
                        variants: [`700`]
                    }, {  
                        family: `Cormorant Infant`,
                        variants: [`500i`, `300`]
                    }, {  
                        family: `Catamaran`,
                        variants: [`600`,`400`, `100`]
                    }, {
                        family: 'Montserrat',
                        variants: [`700`, `600`, `400`, `100`]
                    }
                ],
            }, 
        }, //{
        //     resolve: `gatsby-transformer-remark`,
        //     options: {
        //         plugins: [`gatsby-remark-responsive-iframe`],
        //     },
        // },
    ],
}
