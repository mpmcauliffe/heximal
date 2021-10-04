import React from 'react'
import styled from 'styled-components'


const Shell = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15rem;

    a { width: 49.5%; }

    a div {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        height: 10rem;
        width: 100%;
        padding: 1rem;
        border-radius: .5rem;
        background-color: ${p => p.theme.primaryBackground};
    }

    @media (max-width: 768px) {
        flex-direction: column;
        a { width: 100%; }
        a div { margin: 0 0 1rem 0; }
    }
    @media (min-width: 1024px) {
        a div { height: 15rem; }
    }
    @media (min-width: 1600px) {
        a div { height: 18rem; }
    }
`

export const SpreadContainer = props => {
    return (
        <Shell>
            {props.children}
        </Shell>
    )
}
