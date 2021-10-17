import * as React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'


const AnchorSpan = styled.span`
    a, a:visited {
        color: ${p => p.theme.primaryLight};
        text-decoration: none;
    }
`

export const BasicLink = ({ destination, text, }) => {
    return (
        <AnchorSpan>
            <a href={destination}>&nbsp;{text}&nbsp;</a>
        </AnchorSpan>
    )
}

BasicLink.propTypes = { 
    destination: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired, 
}

BasicLink.defaultProps = { 
    destination: '#',
    text: 'link',
}
