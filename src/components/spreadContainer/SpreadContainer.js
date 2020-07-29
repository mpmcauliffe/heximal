import React from 'react'
import styled from 'styled-components'


const Shell = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15rem;

    >div {
        display: flex;
        align-items: center;
        height: 10rem;
        width: 100%;
        padding: 1rem;
        border-radius: .5rem;
        background-color: ${p => p.theme.primaryBackground};
    }
    div:first-of-type {
        margin-right: 1rem;
    }
    div:last-of-type {
        justify-content: flex-end;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        div { margin: 0 0 1rem 0; }
    }
    @media (min-width: 1024px) {
        div { height: 15rem; }
    }
`

export const SpreadContainer = props => {
    return (
        <Shell>
            {props.children}
        </Shell>
    )
}
