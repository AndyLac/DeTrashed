
import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const DisposalLabel = ({value, label, onClick}) => {
    return (
        <li className="disposal-label-container"
            onClick={() => {
                onClick(value)
        }}>
            <ul className="label-content">
                <label className="disposal-label">
                    {label}
                </label>
            </ul>
        </li>
    )
}

DisposalLabel.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default DisposalLabel