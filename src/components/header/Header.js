import React from 'react'
import { Link } from 'gatsby'
import { HexLink } from '../../components'
import { Navbar, NavTitle, } from './header.comp'


export const Header = ({ siteTitle, siteDescription }) => (
    <Navbar>
        <HexLink to="/">
            <h1>{siteTitle}</h1>
            {/**<p>{siteDescription}</p> */}
            
        </HexLink>
    </Navbar>
)
