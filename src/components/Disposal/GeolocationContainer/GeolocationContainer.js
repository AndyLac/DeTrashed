
import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const GeolocationContainer = ({getGeolocation}) => {

    return (
        <ul className='geolocation-container container'>
            <li className='geolocation-subheader'>
                <h4>Use your geolocation by clicking the button below</h4>
            </li>
            <li className='geolocation-content'>
                <ul className="label-content" onClick={e => {
                    getGeolocation()
                }}>
                    <label className="geolocation-label">
                        <h5>Get Geolocation</h5>
                    </label>
                </ul>
            </li>
        </ul>
    )
}

GeolocationContainer.propTypes = {
    getGeolocation: PropTypes.func.isRequired
}

export default GeolocationContainer