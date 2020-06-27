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
        height: 100vh;
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
    p {
        font-size: 1.7rem;
        font-weight: 400;
    }
`
