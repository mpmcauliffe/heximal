import React, { useEffect, useContext, } from 'react'
import { Link } from 'gatsby'
import StylesProvider from '../context/StylesProvider'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { HexLink, Layout, Post, } from '../components'


const IndexWrapper = styled.main`
    margin: 0 auto;

    @media (min-width: 769px) {
        margin: 10rem auto;
    }
`

export default ({ data }) => {
    return (
        <StylesProvider>
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
            </Layout>
        </StylesProvider>
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
                        childImageSharp {
                            sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                                ...GatsbyImageSharpSizes_tracedSVG
                            }
                        }
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



// <HexLink to={fields.slug} key={id}>
//     <PostWrapper >
//         <div>
//             <h3>{frontmatter.title}</h3>
//             <p>{frontmatter.date}</p>
//             <p>{frontmatter.caption}</p>
//         </div>
//         <div>
//             {!!frontmatter.cover 
//                 ? (<Image sizes={frontmatter.cover.childImageSharp.sizes} />) 
//                 : null}
//         </div>
//     </PostWrapper>
    
// </HexLink>