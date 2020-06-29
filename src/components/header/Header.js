import React, { useState, useEffect, } from 'react'
import { Link } from 'gatsby'
import { HexLink } from '../../components'
import { Navbar, NavGroup, Toggle, } from './header.comp'


export const Header = ({ siteTitle, siteDescription }) => {


    return (
        <Navbar>
            <NavGroup>
                <HexLink to="/">
                    <h1>{siteTitle}</h1>
                    {/**<p>{siteDescription}</p> */}
                </HexLink>

                <Toggle />
            </NavGroup>
        </Navbar>
    )
}
