import styled from 'styled-components'


export const Navbar = styled.nav`
    position: fixed;
    display: flex;
    z-index: 1;
    overflow: hidden;
    top: 0;
    height: 8rem;
    width: 100vw;

    justify-content: center;
    /* padding-top: 9rem; */
    background: ${p => p.theme.primary};

    transition: .6s;

    /* @media (min-width: 1025px) { height: 11rem; }
    @media (min-width: 1601px) { height: 16rem; } */
`
export const NavGroup = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    a > h1 {
        font-size: 4rem;
        line-height: 100%;
        top: 0;
        margin: 3rem 0;
        color: ${p => p.theme.whiteSec};
    }

    @media (min-width: 481px) {
        a > h1 { font-size: 5rem; }
    }

    @media (min-width: 1025px) {
        width: 80%;

        /* a > h1 { font-size: 6rem; } */
    }
    @media (min-width: 1601px) {
        width: 70%;

        /* a > h1 { font-size: 7rem; } */
    }
`

export const Toggle = styled.div`
    height: 4.5rem;
    width: 4.5rem;
    margin-right: .6rem;
    background-color: ${p => p.theme.whiteSec};
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border-radius: 2rem;
    transition: 700ms;

    /* &:hover {
        cursor: pointer;
        background: ${props => props.theme.secondary};
        background: #E09F3E;
        transform: rotate(180deg);
        clip-path: polygon(87% 0, 87% 61%, 100% 61%, 50% 100%, 0 61%, 13% 61%, 13% 0);
        transform: rotate(180deg);
    } */
`

export const NavTitle = styled.h1`
    text-align: center;
    line-height: 100%;
    top: 0;
    margin: 3rem 0;
    color: ${p => p.theme.whiteSec}
`

