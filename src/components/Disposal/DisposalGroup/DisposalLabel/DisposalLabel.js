
import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const DisposalLabel = ({value, label, onClick}) => {
    return (
        <li className="disposal-label-container"
            onClick={e => {
                onClick(value)

                const current = e.currentTarget
                const active = e.currentTarget.parentNode.getElementsByClassName('active')[0]

                if(active) {
                    current.className = current.className.concat(' active')
                    active.className = active.className.replace(' active', '')
                } else {
                    current.className = current.className + ' active'
                }
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