import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import StylesContext from '../../context/stylesContext'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { Header } from '../../components'


export const Layout = props => {
    const { title, description } = useSiteMetadata()
    const stylesContext = useContext(StylesContext)

    const { MainContainer, Parallax, } = stylesContext


    return (
        <Fragment>
            <Header siteTitle={title} siteDescription={description} />
            {/**<Parallax
                alt='parallax'
                src={require('../../context/darkHex-backer.svg')} /> */}
            
            <MainContainer article={props.article}>    
                {props.children}
            </MainContainer>    
        </Fragment>  
    )
}
