import * as React from 'react'
import { Fragment, useState, useEffect, useContext, } from 'react'
import { useLocation } from '@reach/router'
import StylesContext from '../../context/stylesContext'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { Header } from '../../components'


export const Layout = props => {
    const { title, description }                          = useSiteMetadata()
    const stylesContext                                   = useContext(StylesContext)
    const { MainContainer, OuterContainer, Footer, }      = stylesContext

    const location                            = useLocation()
    const [isArticle, setIsArticle]           = useState(false)

    useEffect(() => {
        if (location.pathname.includes('blog')) { setIsArticle(true) }
    
    }, [isArticle])


    return (
        <Fragment>
            <Header siteTitle={title} siteDescription={description} />
            <div id='header' />
            {/**<Parallax
                alt='parallax'
                src={require('../../context/darkHex-backer.svg')} /> */}
            
            <OuterContainer>
                <MainContainer isArticle={isArticle}>    
                    {props.children}
                </MainContainer>

                {/*
                <Stamp
                    alt='hexAscent'
                    src={require(`./stamps/dark-gray_md.png`).default} />*/}

                <Footer>
                    <p>&copy; Michael P McAuliffe {new Date().getFullYear()}</p>
                    <p>&nbsp;Built with&nbsp;
                        <a  style={{ color: '#c1beff' }}
                            href='https://www.gatsbyjs.com'> 
                            Gatsby
                        </a></p>
                </Footer>
            </OuterContainer>
        </Fragment>  
    )
}
