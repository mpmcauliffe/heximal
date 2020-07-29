import React, { useState, useRef, useContext, } from 'react'
import StylesProvider from '../../context/stylesContext'
// import { Link } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { HexLink } from '../../components'
import { Navbar, NavGroup, Toggle, } from './header.comp'

// 1:35  warning  'useMemo' is defined but never used                no-unused-vars
//    3:10  warning  'Link' is defined but never used                   no-unused-vars
//   14:11  warning  'rendersCount' is assigned a value but never used  no-unused-vars


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
                        ? require(`./svg/moon.svg`)
                        : require(`./svg/sun.svg`)}
                    onClick={handleThemeChange} />
            </NavGroup>
        </Navbar>
    )       
}
