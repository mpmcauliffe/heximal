import * as React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout } from '../components'


// LIAN LAW/EXPLORE.COM/COURTESY OF KATMAI NATIONAL PARK AND PRESERVE

const IndexWrapper = styled.main`
    margin: 0 auto;

    @media (min-width: 769px) {
        margin: 5rem auto;
    }
`

//x.substring(x.indexOf('_') + 1)
const BlogPage = ({ data }) => {
    return (

        <IndexWrapper>
            <Layout>
                {data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>))}
            </Layout>
        </IndexWrapper>
        
    )
}


export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`


export default BlogPage

// // Step 1: Import React
// import * as React from 'react'
// // import { Link } from 'gatsby'
// import { StaticImage, } from 'gatsby-plugin-image'
// import { Layout, } from '../components'
// // Step 2: Define your component

// const IndexPage = () => {
//     return (
//       <Layout pageTitle="Home Page">
//         <p>I'm making this by following the Gatsby Tutorial.</p>
//         <StaticImage
//             alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
//             src={`../images/bear.jpg`} />
//       </Layout>
//     )
//   }

// // Step 3: Export your component
// export default IndexPage
