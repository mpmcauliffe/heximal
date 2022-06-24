import * as React from 'react'
import { useState, useContext, } from 'react'
import StylesProvider from '../../context/stylesContext'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Navbar, NavGroup, NavLogo, Toggle, } from './header.comp'


export const Header = ({ siteTitle, }) => {
    const stylesProvider                                 = useContext(StylesProvider)
    const { HexLink, isDarkTheme, handleThemeChange, }   = stylesProvider

    const [hideOnScroll, setHideOnScroll]                = useState(true)

    useScrollPosition(
        ({ prevPos, currPos }) => {            
            let isShow = currPos.y > prevPos.y
            if (currPos.y > -200) { isShow = true }
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
                    <NavLogo 
                        alt='hexAscent'
                        src={isDarkTheme
                            ? require(`./logos/white_sm.png`).default
                            : require(`./logos/black_sm.png`).default} />
                    {/**<p>{siteDescription}</p> <h1>{siteTitle}</h1>*/}
                </HexLink>

                <Toggle
                    alt='theme-sun-moon' 
                    src={isDarkTheme
                        ? require(`./svg/silverMoon.svg`).default
                        : require(`./svg/blackSun.svg`).default}
                    onClick={handleThemeChange} />
            </NavGroup>
        </Navbar>
    )       
}
