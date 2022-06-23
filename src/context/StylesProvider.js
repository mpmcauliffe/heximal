import React, { useState, } from 'react'
import styled from 'styled-components'
import { ThemeProvider, } from 'styled-components'
import stylesContext from './stylesContext'
import { GlobalStyles } from './globalStyles'
import { darkTheme, lightTheme } from './theme'
import { Link as GatsbyLink } from 'gatsby'
import { GatsbyImage, } from 'gatsby-plugin-image'


// CONTAINERS
const IndexWrapper = styled.main`
    margin: 0 auto;

    @media (min-width: 769px) {
        margin: 5rem auto;
    }
`

const OuterContainer = styled.div`
    position: absolute;
    min-height: 110vh;
    width: 100vw;
    top: 0;
    padding-bottom: 20rem;
    background-color: ${p => p.theme.secondaryBackground};
    transition: 1s;
`

const MainContainer = styled.main`
    width: ${p => p.isArticle ? '90vw' : '100vw'}; 
    margin: ${p => p.isArticle ? '15rem auto 13rem auto' : '8.4rem auto 6rem auto'};
    /* padding: ${p => p.isArticle ? '.2rem' : 0}; */

    h6 {
        text-align: center;
        margin-bottom: 3rem;
    }
    h1, h2, h3, h4, h5, h6, p, li {
        color: ${p => p.theme.primaryHeader};
        transition: 1s;
    }

    @media (min-width: 769px) {
        width: 75%;
        margin: 15rem auto 0 auto;
    }
    @media (min-width: 1025px) {
        width: 60%;
        /* margin: 25rem auto 0 auto; */
        margin: ${p => p.isArticle ? '25rem auto 0 auto' : '15rem auto 0 auto'};
    }
    @media (min-width: 1281px) {
        width: 55%;
    }
    @media (min-width: 1601px) {
        width: 55%;
        margin: 25rem auto 0 auto;
    }
`
const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15rem;
    margin-bottom: .2rem;
    padding: 2rem;
    background-color: ${p => p.theme.primaryBackground};
    transition: 1s;

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
        margin: .7rem 0;
        border-radius: .5rem;
    }
    @media (min-width: 1025px) {
        height: 20rem;
        margin: 1.5rem 0;

        div > h3 { margin-bottom: .5rem; }
    }
    @media (min-width: 1025px) {
        height: 25rem;
        margin: 2rem 0;
    }
    @media (min-width: 1601px) {
        height: 30rem;
        /* margin: 7rem 0; */
    }

    @media (max-width: 480px) {
        height: 13.5rem;
        div > div { 
            display: flex;
            flex-direction: column;
            justify-content: space-between; 
            height: 9rem;    
        }
        div > h3 { font-size: 1.6rem; }
        div > p { font-size: 1.4rem; }
    }
`
const Footer = styled.section`
    position: absolute;
    bottom: 0;
    width: 100%;

    p { 
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        color: ${p => p.theme.primaryHeader}; 
    }
    a { text-decoration: none; }
`
const SmallContainer = styled.section`
    margin: 15rem auto;
    width: 100%;

    display: flex;
    flex-direction: ${p => p.direction};
    justify-content: ${p => p.justify};
    align-items: ${p => p.align};

    @media (min-width: 769px) { margin: 21rem auto; }
    @media (min-width: 1280px) { margin: 25rem auto; }
`

// TEXT
const ArticleTitle = styled.h1`
    font-size: 6rem;
    line-height: 8rem;
    margin: 0 0 0 -0.4rem;

    @media (max-width: 480px) {
        font-size: 5rem;
        line-height: 6rem;
    }
`
const AuxInfo = styled.p`
    margin: 0 0 0 0;
    font-weight: 300;
    /* font-style: italic; */
`
const Caption = styled.p`
    line-height: 100%;
    margin-bottom: 2rem;
    /* border-left: 1rem solid ${p => p.theme.primary}; */
    border-left: 1rem solid ${p => p.theme.accent};
    padding-left: 1rem;
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
    text-decoration: none;
    color: ${p => p.theme.mainContent};
    cursor: pointer;
`
const HexLink = props => {
    return (
        <StyledLink 
            {...props}>
            {props.children}
        </StyledLink>
    )
}

// BUTTONS
const RegularButton = styled.button`
    width: 100%;
    padding: 2rem 5rem;
    
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${p => p.theme.mainContent};

    outline: none;
    background: transparent;
    border: .3rem solid ${p => p.theme.mainContent};
    border-radius: 2rem;

    cursor: pointer;

    /* @media (min-width: 541px) { width: 70%; } */
    @media (min-width: 769px) { width: 33rem; }
`

// IMAGES
const Thumbnail = styled(GatsbyImage)`
    /* */height: 8rem;
    width: 11rem;
    border-radius: .5rem;
    object-fit: cover;

    @media (min-width: 481px) {
        height: 14rem;
        width: 18rem;
    }
    @media (min-width: 769px) {
        height: 17rem;
        width: 22rem;
    }
    @media (min-width: 1025px) {
        height: 20rem;
        width: 27rem;
    }
    @media (min-width: 1601px) {
        height: 27rem;
        width: 33rem;
    } 
`
const ProfilePic = styled.img`
    display: inline-block;
    height: 6.6rem;
    margin-right: 1.2rem;
    padding: .1rem;
    border: .1rem solid ${p => p.theme.accent};
    /* border-radius: 50%;     */
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
`

// PROVIDER COMPONENT
const StylesProvider = props => {
    const [isDarkTheme, setIsDarkTheme] = useState(true)

    const handleThemeChange = () => setIsDarkTheme(!isDarkTheme)

    return (
        <stylesContext.Provider
            value={{
                IndexWrapper,
                OuterContainer,
                MainContainer,
                SmallContainer,
                PostWrapper,
                Footer,

                HexLink,

                RegularButton,

                ArticleTitle,
                AuxInfo,
                Caption,

                Thumbnail,
                ProfilePic,
                Parallax,

                isDarkTheme,
                handleThemeChange,
            }}>
            <ThemeProvider 
                theme={isDarkTheme 
                    ? darkTheme
                    : lightTheme }>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </stylesContext.Provider>
    )
}


export default StylesProvider
