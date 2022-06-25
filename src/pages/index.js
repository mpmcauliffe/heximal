import * as React from 'react'
import { useContext, } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import StylesContext from '../context/stylesContext'
import { Buffer, Layout, Post, Seo, } from '../components'


const IndexWrapper = styled.main`
    margin: 0 auto;

    @media (min-width: 769px) {
        margin: 5rem auto;
    }
`

const BlogPage = ({ data }) => {
    const stylesContext             = useContext(StylesContext)
    const { Stamp, isDarkTheme, }   = stylesContext
    // console.log(data.allMdx.nodes)
    
    return (
        <Layout>
            <Seo title={`hexBox`} />
            <IndexWrapper>    
                {data.allMdx.nodes.map(node => (
                    <Post 
                        key={node.id}
                        linkTo={node.slug}
                        frontmatter={node.frontmatter}
                        readTime={node.fields.readingTime.text} />))}

                <Buffer thickness={9} />
                <Stamp 
                    alt='hexAscent'
                    src={isDarkTheme
                        ? require(`./stamps/dark-gray_md.png`).default
                        : require(`./stamps/light-gray_md.png`).default} /> 
            </IndexWrapper>
        </Layout>    
    )
}


export const query = graphql`
  query {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {published: {eq: true}}}
  ) {
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
      fields {
        readingTime {
          text
        }
      }
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

// return (
//     <Layout>
//         <IndexWrapper>    
//             {data.allMdx.nodes.map(node => (
//                 <article key={node.id}>
//                     <h2>
//                         <Link to={`/blog/${node.slug}`}>
//                             {node.frontmatter.title}
//                         </Link>
//                     </h2>
//                     <p>Posted: {node.frontmatter.date}</p>
//                 </article>))}
//         </IndexWrapper>
//     </Layout>
// )
