import * as React from 'react'
import { Fragment, useContext } from 'react'
import StylesContext from '../../context/stylesContext'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { Header } from '../../components'


export const Layout = props => {
    const { title, description } = useSiteMetadata()
    const stylesContext = useContext(StylesContext)

    const { MainContainer, OuterContainer, Footer, } = stylesContext


    return (
        <Fragment>
            <Header siteTitle={title} siteDescription={description} />
            {/**<Parallax
                alt='parallax'
                src={require('../../context/darkHex-backer.svg')} /> */}
            
            <OuterContainer>
                <MainContainer article={props.article}>    
                    {props.children}
                </MainContainer>

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
