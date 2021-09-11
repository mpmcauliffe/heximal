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
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: `Play`,
                            variants: [`400`,`700`]
                        }, {
                            family: `Fira Sans Condenced`,
                            variants: [`500`]
                        }, {
                            family: 'Montserrat',
                            variants: [`700`, `600`, `400`, `300`, `100`]
                        }
                    ]
                },
            }, 
        }, //{
        //     resolve: `gatsby-transformer-remark`,
        //     options: {
        //         plugins: [`gatsby-remark-responsive-iframe`],
        //     },
        // },
    ],
}

// {
//     resolve: `gatsby-plugin-webfonts`,
//     options: {
//       fonts: {
//         google: [
//           {
//             family: "Roboto",
//             variants: ["300", "400", "500"],
//             //subsets: ['latin']
//             //text: 'Hello'
//             //fontDisplay: 'swap',
//             //strategy: 'selfHosted' // 'base64' || 'cdn'
//           },
//         ],
//       },
//       // formatAgents: {
//       //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
//       //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
//       //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
//       //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
//       // },
//       //formats: ['woff2', 'woff'],
//       //useMinify: true,
//       //usePreload: true,
//       //usePreconnect: false,
//     },
//   },
