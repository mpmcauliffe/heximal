import * as React from 'react'
import { useState, useRef, useContext, } from 'react'
import StylesProvider from '../../context/stylesContext'
// import { Link } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { HexLink } from '../../components'
import { Navbar, NavGroup, Toggle, } from './header.comp'


export const Header = ({ siteTitle, }) => {
    const stylesProvider                        = useContext(StylesProvider)
    const { isDarkTheme, handleThemeChange, }   = stylesProvider

    const [hideOnScroll, setHideOnScroll]       = useState(true)
    // const rendersCount                          = useRef(0)

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y
            if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll],
        false,
        false,
        300
    )


    return (
        <Navbar show={hideOnScroll}>
            <NavGroup>
                <HexLink to="/">
                    <h1>{siteTitle}</h1>
                    {/**<p>{siteDescription}</p> */}
                </HexLink>

                <Toggle
                    alt='theme-sun-moon' 
                    src={isDarkTheme
                        ? require(`./svg/silverMoon.svg`)
                        : require(`./svg/blackSun.svg`)}
                    onClick={handleThemeChange} />
            </NavGroup>
        </Navbar>
    )       
}
