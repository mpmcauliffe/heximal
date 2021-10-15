import * as React from 'react'
import { useState, useEffect, useContext, } from 'react'
import { getImage } from 'gatsby-plugin-image'
import StylesContext from '../../context/stylesContext'
import { truncate } from '../../helpers/truncate'


export const Post = ({ frontmatter, linkTo }) => {
    const stylesContext                         = useContext(StylesContext)
    const { HexLink, PostWrapper, Thumbnail }   = stylesContext

    const [cap, setCap]                         = useState('')
    const [isMobile, setIsMobile]               = useState(false)

    const image                                 = getImage(frontmatter.hero_image)

    // console.log(frontmatter.hero_image)

    useEffect(() => {
        /** IMPORTANT FOR DEPLOYMENT
         *  window is `undefined` on serverside rendering
         *  this function prevents the truncate helper from firing 
         *  until this component mounts
         */
        setCap(truncate(frontmatter.caption))

        const windowModifier = typeof window !== `undefined` 
            ? window.innerWidth > 480 
                ? false
                : true
            : false 

        setIsMobile(windowModifier)

    // eslint-disable-next-line
    }, [isMobile])


    return (
        <HexLink to={`/blog/${linkTo}`}>
            <PostWrapper>
                <div  style={{ marginRight: '2rem', }}>
                    <div>
                        <h3>{frontmatter.title}</h3>
                        <p>{frontmatter.date}</p>
                    </div>
                    {/* <p>{cap}</p> */}
                    {!isMobile && <p>{cap}</p>}
                </div>
                <div>
                    {!!image 
                        ? (<Thumbnail 
                            image={image}
                            alt='thumbnail'
                            // sizes={frontmatter.hero_image.childImageSharp.sizes} 
                            />) 
                        : null}
                </div>
            </PostWrapper>
        </HexLink>
    )
}
