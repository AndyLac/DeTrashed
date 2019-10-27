
import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const DisposalLabel = ({label}) => {

    return (
        <li className="disposal-label-container">
            <ul className="label-content">
                <label className="disposal-label">
                    {label}
                </label>
            </ul>
        </li>
    )
}

DisposalLabel.propTypes = {
    label: PropTypes.string
}

export default DisposalLabel