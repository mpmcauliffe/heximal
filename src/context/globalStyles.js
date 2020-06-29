import { createGlobalStyle, } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        height: 100%;
        width: 100%;
        font-size: 62.5%;
    }
    body {
        margin: 0;
        font-family: sans-serif;
        overflow-x: hidden;
        
    }
    h1 {
        font-family: 'Martel', serif;
        font-size: 5rem;
        font-weight: 700;
    }
    h2 {
        font-family: 'Cormorant Infant', serif;
        font-style: italic;
        font-size: 3.5rem;
        font-weight: 500;
    }
    h3 {
        font-family: 'Martel', serif;
        font-size: 2.1rem;
        font-weight: 400;
    }
    h4, h5, h6, li, p {
        font-family: 'Catamaran', sans-serif;
    }
    h4 {
        font-size: 2rem;
        font-weight: 400;
    }
    h5 {
        font-size: 1.3rem;
    }
    h6 {
        font-size: 1rem;
        font-weight: 100;
    }
    p {
        font-size: 1.7rem;
        font-weight: 400;
    }
    pre {
        font-size: 1.7rem;
    }

    @media (min-width: 1025px) {
        h3 { 
            margin-bottom: .5rem;
            font-size: 4rem; 
        }
        h4 { font-size: 3.3rem; }
        h5 { font-size: 1.6rem; }
        h6 { font-size: 1.3rem; }
        p { font-size: 2.3rem; }
        pre { font-size: 2rem; }
    }
    @media (min-width: 1601px) {
        h3 { font-size: 5rem; }
        h4 { font-size: 4rem; }
        h5 { font-size: 1.8rem; }
        h6 { font-size: 1.6rem; }
        p { font-size: 2.6rem; }
        pre { font-size: 2.3rem; }
    }
`
