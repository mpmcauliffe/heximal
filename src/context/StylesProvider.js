import React from 'react'
import styled from 'styled-components'
import { ThemeProvider, } from 'styled-components'
import stylesContext from './stylesContext'
import { GlobalStyles } from './globalStyles'
import { darkTheme } from './darkTheme'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'

// ${p => p.article ? '90%' : '100vw'}
// CONTAINERS
const MainContainer = styled.main`
    width: ${p => p.article ? '90vw' : '100vw'}; 
    margin: 0 auto;
    /* opacity: .3; */

    @media (min-width: 769px) {
        width: 90%;
    }
    @media (min-width: 1025px) {
        width: 80%;
    }
    @media (min-width: 1601px) {
        width: 70%;
    }
`
const PostWrapper = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    height: 15rem;
    /* width: 100vw; */
    /* margin: 2rem 0; */
    border: .1rem solid ${p => p.theme.sky};
    padding: 2rem;
    background-color: ${p => p.theme.darkPrime};

    >div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        padding-right: .5rem;
    }

    div > h3, div > p {
        margin: 0;
        line-height: 100%;
    }

    @media (min-width: 769px) {
        margin: 2rem 0;
    }
    @media (min-width: 1025px) {
        height: 20rem;
        margin: 5rem 0;

        div > h3 { 
            margin-bottom: .5rem;
            font-size: 4rem; 
        }
        div > p { font-size: 2.1rem; }
    }
    @media (min-width: 1025px) {
        height: 25rem;
        margin: 7rem 0;
    }
    @media (min-width: 1601px) {
        height: 30rem;
        margin: 7rem 0;

        div > h3 { font-size: 5rem; }
        div > p { font-size: 2.6rem; }
    }
`

// TEXT
const ArticleTitle = styled.h2`
    font-size: 7rem;
    margin: 12rem 0 0 0;
`
const ArticleDate = styled.p`
    margin: -1rem 0 3rem 0;
`
const Caption = styled.p`
    /* font-size: 1.8rem; */
    line-height: 100%;
    /* margin: 3rem 0; */
    margin-bottom: 4rem;
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
    color: ${p => p.theme.sky};
    cursor: pointer;
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

    @media (min-width: 481px) {
        width: 16rem;
    }
    @media (min-width: 769px) {
        width: 19rem;
    }
    @media (min-width: 1025px) {
        width: 24rem;
    }
    @media (min-width: 1601px) {
        width: 29rem;
    }
`
const Parallax = styled.img`
    background-image: url('./darkHex-backer.svg');
    top: 0;
    position: fixed;
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* z-index: -10; */
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
                Parallax,
            }}>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </stylesContext.Provider>
    )
}


export default StylesProvider
