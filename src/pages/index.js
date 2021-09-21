import React from 'react'
// import { Link } from 'gatsby'
// import Img from 'gatsby-image'
import styled from 'styled-components'
import { Layout, Post, } from '../components'


const IndexWrapper = styled.main`
    margin: 0 auto;

    @media (min-width: 769px) {
        margin: 10rem auto;
    }
`

export default ({ data }) => {
    return (
        <Layout>
            <IndexWrapper>
                {/* <Dump data={data}></Dump> */}
                {data.allMdx.nodes.map(
                    ({ id, excerpt, frontmatter, fields }) => (
                        <Post 
                            key={id}
                            linkTo={fields.slug}
                            frontmatter={frontmatter} />
                    )
                )}
            </IndexWrapper>
            <h6>&copy; Michael P McAuliffe 2020</h6>
        </Layout>
    )
}


export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "MMMM Do, YYYY")
                    caption
                    cover {
                        publicURL
                        
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
`

// date(formatString: "MMMM Do, YYYY")

// childImageSharp {
//     sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
//         ...GatsbyImageSharpSizes_tracedSVG
//     }
// }
