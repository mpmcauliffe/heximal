import * as React from 'react'
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
    text-decoration: none;
    color: white;
    cursor: pointer;
`


export const HexLink = props => {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    )
}
