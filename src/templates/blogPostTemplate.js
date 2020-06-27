import React, { Fragment, } from 'react'
import StylesProvider from '../context/StylesProvider'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Dump, Layout, Titlebar, } from '../components'


export default ({ data, pageContext }) => {
    const { frontmatter, body } = data.mdx
    const { previous, next } = pageContext


    return (
        <StylesProvider>
            <Layout article>
                {/**<Dump previous={previous} />
                <Dump next={next} /> */}
                
                <Titlebar 
                    title={frontmatter.title}
                    date={frontmatter.date}
                    caption={frontmatter.caption}
                    body={body} />
                
                {previous === false ? null : (
                    <Fragment>
                        {previous && (
                            <Link to={previous.fields.slug}>
                            <p>{previous.frontmatter.title}</p>
                            </Link>
                        )}
                    </Fragment>
                )}
                {next === false ? null : (
                    <Fragment>
                        {next && (
                            <Link to={next.fields.slug}>
                            <p>{next.frontmatter.title}</p>
                            </Link>
                        )}
                    </Fragment>
                )}
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
