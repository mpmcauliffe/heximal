import React from 'react'
import styled from 'styled-components'
import { ThemeProvider, } from 'styled-components'
import stylesContext from './stylesContext'
import { GlobalStyles } from './globalStyles'
import { darkTheme } from './darkTheme'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'


// CONTAINERS
const MainContainer = styled.main`
    width: ${p => p.article ? '90vw' : '100vw'}; 
    margin: 8.2rem auto;
    /* opacity: .3; */

    @media (min-width: 769px) {
        width: 90%;
        margin: 15rem auto;
    }
    @media (min-width: 1025px) {
        width: 60%;
        margin: 20rem auto;
    }
    @media (min-width: 1601px) {
        width: 50%;
        margin: 25rem auto;
    }
`
const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15rem;
    margin-bottom: .2rem;
    /* border-top: .1rem solid ${p => p.theme.sky}; */
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
        /* border: .1rem solid ${p => p.theme.sky}; */
        border-radius: .5rem;
    }
    @media (min-width: 1025px) {
        height: 20rem;
        margin: 5rem 0;

        div > h3 { margin-bottom: .5rem; }
    }
    @media (min-width: 1025px) {
        height: 25rem;
        margin: 7rem 0;
    }
    @media (min-width: 1601px) {
        height: 30rem;
        margin: 7rem 0;
    }
`

// TEXT
const ArticleTitle = styled.h2`
    font-size: 7rem;
    color: ${p => p.theme.sky};
    margin: 12rem 0 0 0;
`
const ArticleDate = styled.p`
    margin: -1rem 0 3rem 0;
    color: ${p => p.theme.sky};
    font-style: italic;
`
const Caption = styled.p`
    /* font-size: 1.8rem; */
    color: ${p => p.theme.sky};
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
    width: 15rem;

    @media (min-width: 481px) {
        width: 18rem;
    }
    @media (min-width: 769px) {
        width: 22rem;
    }
    @media (min-width: 1025px) {
        width: 33rem;
    }
    @media (min-width: 1601px) {
        width: 37rem;
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
