
import React from 'react'
import PropTypes from 'prop-types'
import ErrorLabel from "../../ErrorLabel/ErrorLabel";

import './style.sass'

const GeolocationContainer = ({disposal, getGeolocation}) => {

    return (
        <ul className='geolocation-container container'>
            <li className='geolocation-subheader'>
                <h4>2. Use your geolocation by clicking the button below</h4>
            </li>
            <li className='geolocation-content'>
                <ul className="label-content" onClick={() => {

                    let error = document.getElementsByClassName('geolocation-error')[0]

                    if(!disposal) {
                        error.className = error.className.replace(' hidden', '')

                    } else {
                        if(!error.className.includes('hidden')) {
                           error.className = 'geolocation-error hidden'
                        }

                        getGeolocation()
                    }
                }}>
                    <label className="geolocation-label">
                        <h5>Use Geolocation</h5>
                    </label>
                </ul>
            </li>
            <li className='geolocation-error hidden'>
                <ErrorLabel
                    label={"Disposal type is required"}
                />
            </li>
        </ul>
    )
}

GeolocationContainer.propTypes = {
    getGeolocation: PropTypes.func.isRequired
}

export default GeolocationContainer