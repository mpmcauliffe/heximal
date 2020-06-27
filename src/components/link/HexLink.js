import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'


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


export const HexLink = props => {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    )
}
