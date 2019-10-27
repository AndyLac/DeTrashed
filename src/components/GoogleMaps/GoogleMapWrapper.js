
import React from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

import './style.sass'

const GoogleMapWrapper = ({lat, long, places}) => {

    return(
        compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `400px` }} />,
                mapElement: <div style={{ height: `100%` }} />,
            }),
            withScriptjs,
            withGoogleMap
        )((props =>

            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: lat, lng: long}}
            >

            </GoogleMap>
        ))
    )
}

export default GoogleMapWrapper