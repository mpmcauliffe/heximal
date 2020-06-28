import React, { Fragment, } from 'react'
import StylesProvider from '../context/StylesProvider'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Dump, Layout, Content, HexLink, SpreadContainer, } from '../components'


export default ({ data, pageContext }) => {
    const { frontmatter, body } = data.mdx
    const { previous, next } = pageContext


    return (
        <StylesProvider>
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
                                    <p>&#8592;&nbsp;{previous.frontmatter.title}</p>
                                </HexLink>
                            )}
                        </Fragment>
                    )}
                    {next === false ? null : (
                        <Fragment>
                            {next && (
                                <HexLink to={next.fields.slug}>
                                    <p>{next.frontmatter.title}&nbsp;&#8594;</p>
                                </HexLink>
                            )}
                        </Fragment>
                    )}
                </SpreadContainer>
            </Layout>
        </StylesProvider>
    )
}


export const query = graphql`
    query Slug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
                caption
            }
            body
        }
    }
`
