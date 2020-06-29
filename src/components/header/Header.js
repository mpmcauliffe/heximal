import React, { useState, useContext, } from 'react'
import StylesProvider from '../../context/stylesContext'
import { Link } from 'gatsby'
import { HexLink } from '../../components'
import { Navbar, NavGroup, Toggle, } from './header.comp'


export const Header = ({ siteTitle, }) => {
    const stylesProvider = useContext(StylesProvider)
    const { isDarkTheme, handleThemeChange, } = stylesProvider


    return (
        <Navbar>
            <NavGroup>
                <HexLink to="/">
                    <h1>{siteTitle}</h1>
                    {/**<p>{siteDescription}</p> */}
                </HexLink>

                <Toggle
                    alt='theme-sun-moon' 
                    src={isDarkTheme
                        ? require(`./svg/moon.svg`)
                        : require(`./svg/sun.svg`)}
                    onClick={handleThemeChange} />
            </NavGroup>
        </Navbar>
    )
}
