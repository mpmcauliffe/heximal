import * as React from 'react'
//import fs from 'fs-extra'
import { useState, } from 'react'


export const FlexStructure = ({ contentLocation, }) => {
    const [items, setItems] = useState([ ]) 

    return (
            <div
                styles={{
                    padding: 0,
                    margin: '4rem auto',
                    display: 'flex',
                    flexWrap: 'wrap', }}>
                    {/* <GatsbyImage alt='bears' image={getImage(props.localImages[0])} />
                    <GatsbyImage alt='bears' image={getImage(props.localImages[1])} />
                    <GatsbyImage alt='bears' image={getImage(props.localImages[2])} />
                    <GatsbyImage alt='bears' image={getImage(props.localImages[3])} />
                    <GatsbyImage alt='bears' image={getImage(props.localImages[4])} />
                    <GatsbyImage alt='bears' image={getImage(props.localImages[5])} />
                    <GatsbyImage alt='bears' image={getImage(props.localImages[6])} />
                    <GatsbyImage alt='bears' image={getImage(props.localImages[7])} /> */}
            </div>

    )
}
