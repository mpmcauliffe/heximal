import React from 'react'
import styled from 'styled-components'


const Shell = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15rem;
`

export const SpreadContainer = props => {
    return (
        <Shell>
            {props.children}
        </Shell>
    )
}
