
import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const DisposalLabel = ({label}) => {

    return (
        <li className="disposal-label-container">
            <ul className="label-content">
                <input
                    type="radio"
                    id={label}
                    value={label}
                    className="radio-button"
                />
                <label className="disposal-label">
                    {label}
                </label>
            </ul>
        </li>
    )
}

DisposalLabel.propTypes = {
    label: PropTypes.string.required
}

export default DisposalLabel