import * as React from 'react'
import { Fragment, useContext, } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import StylesContext from '../../context/stylesContext'
import { Layout, Frontmatter, HexLink, Post, Seo, SpreadContainer, } from '../../components'


const BlogPost = ({ data, pageContext }) => {
    const stylesContext                                      = useContext(StylesContext)
    const { IndexWrapper, RegularButton, SmallContainer, }   = stylesContext 

    const { frontmatter, }     = data.mdx 
    const image                = getImage(data.mdx.frontmatter.hero_image)


    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Seo 
                title={frontmatter.title}
                author={`Michael P McAuliffe`}
                description={frontmatter.caption} />

            <Frontmatter 
                id='header'
                title={frontmatter.title}
                date={frontmatter.date}
                caption={frontmatter.caption} />

            {/*  */}
            <GatsbyImage
                image={image}
                style={{ width: '100%' }}
                alt={data.mdx.frontmatter.hero_image_alt} />
            {/*  */}
             

            
            <MDXRenderer localImages={data.mdx.frontmatter.embeddedImages}>
                {data.mdx.body}
            </MDXRenderer>

            <SmallContainer
                direction='row'
                justify='center'
                align='center'>

                <ScrollLink
                    to='header'
                    smooth={true}
                    duration={500}>

                    <RegularButton>Back To Top</RegularButton>
                </ScrollLink>
            </SmallContainer>
            
            

            <IndexWrapper>
                <h2>More Blogs</h2>
                {data.allMdx.nodes.map(node => (
                    <Fragment key={node.id}>
                        {node.frontmatter.title !== frontmatter.title 
                            ? <Post 
                                linkTo={node.slug}
                                frontmatter={node.frontmatter} />
                            : <hr />}
                    </Fragment>))}
            </IndexWrapper>   
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
    allMdx(sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {published: {eq: true}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          caption
          hero_image {
          	childImageSharp {
            	gatsbyImageData
          	}
         }
        }
        id
        slug
      }
    }
  }
` // 

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
