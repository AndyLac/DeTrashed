
import React from 'react'
import PropTypes from 'prop-types'

import fields from './fields'

import './style.sass'

const AddressContainer = () => {
    return (
        <li className="regional-container container">
            <form className="regional-form">
                <ul>
                    <li className='address-input'>
                        <input {...fields.regional.props}/>
                    </li>
                    <li className='address-submit'>
                        <input {...fields.submit.props} />
                    </li>
                </ul>
            </form>
        </li>
    )
}

export default AddressContainer