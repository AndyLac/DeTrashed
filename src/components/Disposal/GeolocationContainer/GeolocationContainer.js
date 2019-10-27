
import React from 'react'
import PropTypes from 'prop-types'
import DisposalLabel from "../DisposalGroup/DisposalLabel/DisposalLabel";

const GeolocationContainer = () => {

    return (
        <li className="geolocation-container container">
            <ul>
                <DisposalLabel
                    label={"Geolocation"}
                />
            </ul>
            {/*<input {...fields.geolocation.props} onClick={e => {*/}
            {/*this.getGeolocation(e)*/}
            {/*}}/>*/}
        </li>
    )
}

export default GeolocationContainer