
import React from 'react'
import PropTypes from 'prop-types'

import Marker from './Marker/Marker'
import GoogleMapReact from 'google-map-react'

import './style.sass'

const GoogleMapProvider = ({lat, lng, places}) => {

    if(lat == null || lng == null) {
        lat = 40.730610
        lng = -73.935242
    }

   return(
       <div style={{ height: '75vh', width: '100%' }}>
           <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_SECRET}}
                defaultZoom={13}
                defaultCenter={{lat: lat, lng: lng}}
                center={{lat: lat, lng: lng}}
           >

               {places.map(place => {

                   console.log(place)

                   return(
                       <Marker
                        key={place.id}
                        lat={place.geometry.location.lat}
                        lng={place.geometry.location.lng}
                       />
                   )
               })}
           </GoogleMapReact>
       </div>
   )
}

GoogleMapProvider.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    places: PropTypes.array,
}

export default GoogleMapProvider