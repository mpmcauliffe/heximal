import * as React from 'react'
import { useState, } from 'react'
import styled from 'styled-components'


const GridContainer = styled.section`
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28.3rem, 1fr));
    grid-gap: 1rem;
    row-gap: 1rem;

    .grid-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const GridStructure = ({ itemCount, modifier, extension, }) => {

    const [contentArray, setContentArray] 
        = useState([...Array(itemCount)].map((_, i) => i)) 


    return (
            <GridContainer>  
                {contentArray.map((item, i) => 
                    <div 
                        key={`${item}`} 
                        className='grid-item'>
                        <img
                            alt={`image-${i+1}`} 
                            src={require(`../../aux-content/${i+modifier}.${extension}`).default} />
                    </div>)}
            </GridContainer>
    )
}
