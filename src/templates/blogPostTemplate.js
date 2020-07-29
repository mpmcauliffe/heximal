import React, { Fragment, } from 'react'
import { graphql, } from 'gatsby'
// import Img from 'gatsby-image'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout, Content, HexLink, SpreadContainer, Thumbnail, } from '../components'

// 2:19  warning  'Link' is defined but never used         no-unused-vars  
// 3:10  warning  'MDXRenderer' is defined but never used  no-unused-vars  
// 4:10  warning  'Dump' is defined but never used         no-unused-vars


export default ({ data, pageContext }) => {
    const { frontmatter, body } = data.mdx
    const { previous, next } = pageContext

    return (
        <Layout article>
            {/**<Dump previous={previous} />
            <Dump next={next} /> */}
            
            <Content 
                title={frontmatter.title}
                date={frontmatter.date}
                caption={frontmatter.caption}
                body={body} />
            
            <SpreadContainer>
                {previous === false ? null : (
                    <Fragment>
                        {previous && (
                            <HexLink to={previous.fields.slug}>
                                <p style={{ marginBottom: '-1.5rem', }}><em>&#8592;&nbsp;Previous</em></p>
                                <p style={{ width: '40%', marginLeft: '2.3rem', }}>{previous.frontmatter.title}</p>
                            </HexLink>
                        )}
                    </Fragment>
                )}
                {next === false ? null : (
                    <Fragment>
                        {next && (
                            <HexLink
                                to={next.fields.slug}
                                style={{ textAlign: 'right', width: '40%', }}>
                                <p style={{ marginBottom: '-1.5rem', }}><em>Next&nbsp;&#8594;</em></p>
                                <p style={{ marginRight: '2.3rem', }}>{next.frontmatter.title}</p>
                            </HexLink>
                        )}
                    </Fragment>
                )}
            </SpreadContainer>
            <h6>&copy; Michael P McAuliffe 2020</h6>
        </Layout>
    )
}


export const query = graphql`
    query Slug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
                caption
                cover {
                    publicURL
                }
            }
            body
        }
    }
`
