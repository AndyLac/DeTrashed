
import React from 'react'
import PropTypes from 'prop-types'
import DisposalLabel from "../DisposalGroup/DisposalLabel/DisposalLabel";

import './style.sass'

const GeolocationContainer = ({getGeolocation}) => {

    return (
        <ul className='geolocation-container container'>
            <li className='geolocation-subheader'>
                <h4>Use your geolocation by clicking the button below</h4>
            </li>
            <li className='geolocation-content'>
                <ul>
                    <DisposalLabel
                        label={"Geolocation"}
                        onClick={getGeolocation}
                    />
                </ul>
            </li>
        </ul>
    )
}

export default GeolocationContainer