import * as React from 'react'
import { Fragment, useState, } from 'react'
import { PropTypes } from 'prop-types'


export const BrokenLine = ({ thickness }) => {
    const [numberOfLines, setNumberOfLines] = useState([...Array(thickness)].map((_, i) => i))
    
    return (
        <Fragment>
            {numberOfLines.map(line => <br key={line} />)}
        </Fragment>
    )
}

BrokenLine.propTypes = { thickness: PropTypes.number.isRequired, }

BrokenLine.defaultProps = { thickness: 1, }
