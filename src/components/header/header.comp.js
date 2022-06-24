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
    visibility: ${p => (typeof window !== `undefined` 
        ? window.scrollY === 0 
            ? 'visible'
            : p.show 
                ? 'visible' 
                : 'hidden'
        : 'visible' )};
    /* visibility: ${p => (p.show ? 'visible' : 'hidden')}; */
    
    transition: all 500ms ${p => (p.show ? 'ease-in' : 'ease-out')};
    /* transition: all 500ms 'ease-in'; */
    transform: ${p => (p.show ? 'none' : 'translate(0, -100%)')};

    /* padding-top: 9rem; */
    /* background: ${p => p.theme.primary}; */
    /* background: linear-gradient(to right, ${p => p.theme.primary}, ${p => p.theme.secondaryBackground}); */
    background: ${p => p.theme.secondaryBackground};
    border-bottom: .2rem solid ${p => p.theme.primaryHeader};
    /* transition: 1s; */

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
        font-weight: 700;
        line-height: 100%;
        top: 0;
        margin: 3rem 0;
        color: ${p => p.theme.primaryHeader};
       /* background: -webkit-linear-gradient(130deg, rgba(242,247,255,1) 10%, rgba(128,215,255,1) 20%, rgba(242,247,255,1) 30%, rgba(242,247,255,1) 40%, rgba(128,215,255,1) 50%, rgba(242,247,255,1) 60%, rgba(242,247,255,1) 70%, rgba(128,215,255,1) 80%, rgba(242,247,255,1) 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
        transition: 1s;
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

export const Toggle = styled.img`
    height: 4rem;
    width: 4rem;
    margin-right: 1.5rem;
    cursor: pointer;

    @media (min-width: 481px) {
        height: 5rem;
        width: 5rem;
    }
`

export const NavLogo = styled.img`
    height: 6rem;
    width: 22rem;
`

export const NavTitle = styled.h1`
    text-align: center;
    line-height: 100%;
    top: 0;
    margin: 3rem 0;
    color: ${p => p.theme.mainHeader}
`

