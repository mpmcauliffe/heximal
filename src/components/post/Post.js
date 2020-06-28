import React, { useContext, } from 'react'
import styled from 'styled-components'
import StylesContext from '../../context/stylesContext'
import Img from 'gatsby-image'
import { truncate } from '../../helpers/truncate'


export const Post = ({ frontmatter, linkTo }) => {
    const stylesContext = useContext(StylesContext)
    const { HexLink, PostWrapper, Thumbnail } = stylesContext

    return (
        <HexLink to={linkTo}>
            <PostWrapper>
                <div>
                    <div>
                        <h3>{frontmatter.title}</h3>
                        <p>{frontmatter.date}</p>
                    </div>
                    <p>{truncate(frontmatter.caption)}</p>
                </div>
                <div>
                    {!!frontmatter.cover 
                        ? (<Thumbnail sizes={frontmatter.cover.childImageSharp.sizes} />) 
                        : null}
                </div>
            </PostWrapper>
        </HexLink>
    )
}
