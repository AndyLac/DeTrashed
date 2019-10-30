
import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const ErrorLabel = ({label}) => {

    return(
        <div className='error-container'>
            <span className='error-label'>{label}</span>
        </div>
    )
}

ErrorLabel.propTypes = {
    label: PropTypes.string.isRequired
}

export default ErrorLabel