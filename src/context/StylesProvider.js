import React from 'react'
import styled from 'styled-components'
import stylesContext from './stylesContext'
import { GlobalStyles } from './globalStyles'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'

// ${p => p.article ? '90%' : '100vw'}
// CONTAINERS
const MainContainer = styled.main`
    width: ${p => p.article ? '90vw' : '100vw'}; 
    margin: 0 auto;
`
const PostWrapper = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    height: 15rem;
    width: 100vw;
    margin: 2rem 0;
    padding: 2rem;
    background-color: darkgray;

    >div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        padding-right: 2rem;
    }

    div > h3, div > p {
        margin: 0;
        line-height: 100%;
    }
`

// TEXT
const ArticleTitle = styled.h2`
    /* font-size: 4rem; */
    margin: 7rem 0 0 0;
`
const ArticleDate = styled.p`
    margin: 0 0 3rem 0;
`
const Caption = styled.p`
    /* font-size: 1.8rem; */
    line-height: 100%;
    margin: 3rem 0;
`

// LINK
const Link = ({ children, ...props }) => {
    return (
        <GatsbyLink {...props}>
            {children}
        </GatsbyLink>
    )
}
const StyledLink = styled(Link)`
    /* width: 100%; */
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
        
    }
`
const HexLink = props => {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    )
}

// IMAGES
const Thumbnail = styled(Img)`
    border-radius: .5rem;
    width: 13rem;
`

// PROVIDER COMPONENT
const StylesProvider = props => {

    return (
        <stylesContext.Provider
            value={{
                MainContainer,
                PostWrapper,

                HexLink,

                ArticleTitle,
                ArticleDate,
                Caption,

                Thumbnail,
            }}>
            <GlobalStyles />
            {props.children}
        </stylesContext.Provider>
    )
}


export default StylesProvider
