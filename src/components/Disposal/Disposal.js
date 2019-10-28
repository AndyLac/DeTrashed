
import React from 'react'
import SectionHeader from "../SectionHeader/SectionHeader";

import getGeolocationPromise from './helper'

import GoogleMapProvider from "../GoogleMaps/GoogleMapProvider";
import AddressContainer from "./AddressContainer/AddressContainer";
import GeolocationContainer from "./GeolocationContainer/GeolocationContainer";
import DisposalGroup from "./DisposalGroup/DisposalGroup";

import fields from './DisposalGroup/fields'

import './style.sass'

class Disposal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            disposal: null,

            lat: null,
            lng: null,

            address: null,

            places: []
        }


        this.getGeolocation = this.getGeolocation.bind(this)
        this.setDisposal = this.setDisposal.bind(this)
        this.setAddress = this.setAddress.bind(this)
    }

    getGeolocation() {
        let promise = getGeolocationPromise()

        //Store geolocation data into state
        promise.then((position) => {
            this.setState({
                ...this.state,
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })

        }).then(() => {
            let api = process.env.REACT_APP_GOOGLE_MAPS_SECRET

            //TODO: Implement clean fix... so far it overrides CORS
            const proxyurl = "https://cors-anywhere.herokuapp.com/";

            let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.lat + ',' + this.state.lng + '&radius=1500&type=needle&keyword=disposal&key=' + api

            fetch(proxyurl + url)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        ...this.state,
                        places: data.results
                    })
                }).catch(error => {
                    console.log(error)
            })
        })
    }

    setDisposal(value) {
        //Set type of disposal
        this.setState({
            ...this.state,
            disposal: value
        })
    }

    setAddress(event) {
        event.preventDefault()

        //Google API here, use either geolocation or location
        this.setState({
            ...this.state,

            address: event.value.address
        })
    }

    render() {
        return(
            <div className="disposal-container">
                <section className="container">
                    <ul>
                        <SectionHeader
                            title={"Disposal Center"}
                            color={"black"}
                        />
                        <li>
                            <h4>Find a disposal center near you!</h4>
                        </li>
                    </ul>
                   <DisposalGroup
                        setDisposal={this.setDisposal}
                   />
                    <div>
                        <h4>2. Use one of the two options below</h4>
                    </div>
                    <ul className="location-container">

                        <AddressContainer />
                        <GeolocationContainer
                            getGeolocation={this.getGeolocation}
                        />
                    </ul>
                    <ul className="google-maps">
                       <GoogleMapProvider
                            lat={this.state.lat}
                            lng={this.state.lng}
                            places={this.state.places}
                       />
                    </ul>
                </section>
            </div>
        )
    }
}

export default Disposal