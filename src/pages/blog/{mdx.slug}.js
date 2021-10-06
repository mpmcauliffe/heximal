import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout, Frontmatter, HexLink, SpreadContainer, Thumbnail, } from '../../components'


const BlogPost = ({ data, pageContext }) => {

    const { frontmatter, body } = data.mdx 
    const image            = getImage(data.mdx.frontmatter.hero_image)

    //const { previous, next } = pageContext

    console.log(data.mdx)


    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Frontmatter 
                title={frontmatter.title}
                date={frontmatter.date}
                caption={frontmatter.caption} />

            {/* <p>{data.mdx.frontmatter.date}</p> */}
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt} />
            {/* <p>
                Photo Credit:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p> */}
             

            
            <MDXRenderer localImages={data.mdx.frontmatter.embeddedImages}>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        caption
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost

// export default ({ data, pageContext }) => {
//     const { frontmatter, body } = data.mdx
//    

//     return (
//         <Layout article>
//             {/**<Dump previous={previous} />
//             <Dump next={next} /> */}
            
//             <Content 
//                 title={frontmatter.title}
//                 date={frontmatter.date}
//                 caption={frontmatter.caption}
//                 body={body} />
            
//             <SpreadContainer>
//                 {previous === false ? null : (
//                     <Fragment>
//                         {previous && (
//                             <HexLink to={previous.fields.slug}>
//                                 <div>
//                                     <p style={{ margin: '0 0 -1.5rem 0', }}><strong><em>&#8592;&nbsp;Previous</em></strong></p>
//                                     <p style={{ margin: '2rem 0 0 2.3rem', }}>{previous.frontmatter.title}</p>
//                                 </div>
//                             </HexLink>
//                         )}
//                     </Fragment>
//                 )}
//                 {next === false ? null : (
//                     <Fragment>
//                         {next && (
//                             <HexLink
//                                 to={next.fields.slug}
//                                 style={{  }}>
//                                 <div style={{  }}>
//                                     <p style={{ textAlign: 'right', margin: '0 0 -1.5rem 0', }}><strong><em>Next&nbsp;&#8594;</em></strong></p>
//                                     <p style={{ textAlign: 'right', margin: '2rem 2.3rem 0 0', }}>{next.frontmatter.title}</p>
//                                 </div>
//                             </HexLink>
//                         )}
//                     </Fragment>
//                 )}
//             </SpreadContainer>
//             <h6>&copy; Michael P McAuliffe 2020</h6>
//         </Layout>
//     )
// }


// export const query = graphql`
//     query Slug($slug: String!) {
//         mdx(fields: { slug: { eq: $slug } }) {
//             frontmatter {
//                 title
//                 date(formatString: "MMMM Do, YYYY")
//                 caption
//             }
//             body
//         }
//     }
// `
