import styled from 'styled-components'


export const Navbar = styled.nav`
    display: flex;
    height: 8rem;
    width: 100vw;

    justify-content: center;
    align-items: center;

    background: ${p => p.theme.primary};

    a > h1 {
        line-height: 100%;
        top: 0;
        margin: 3rem 0;
        color: ${p => p.theme.whiteSec};
    }

    @media (min-width: 1025px) {
        height: 11rem;

        a > h1 { font-size: 6rem; }
    }
    @media (min-width: 1601px) {
        height: 16rem;

        a > h1 { font-size: 7rem; }
    }

`

export const NavTitle = styled.h1`
    text-align: center;
    line-height: 100%;
    top: 0;
    margin: 3rem 0;
    color: ${p => p.theme.whiteSec}
`

