
import React from 'react'
import SectionHeader from "../SectionHeader/SectionHeader";

import getGeolocationPromise from './helper'

import './style.sass'
import GoogleMapWrapper from "../GoogleMaps/GoogleMapWrapper";
import DisposalLabel from "./DisposalGroup/DisposalLabel/DisposalLabel";
import AddressContainer from "./AddressContainer/AddressContainer";
import GeolocationContainer from "./GeolocationContainer/GeolocationContainer";
import DisposalGroup from "./DisposalGroup/DisposalGroup";

class Disposal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            disposal: 'disposal',

            lat: null,
            lng: null,

            street: null,
            city: null,
            state: null,
            country: null
        }

        this.getGeolocation = this.getGeolocation.bind(this)
        this.setDisposal = this.setDisposal.bind(this)
        this.findDisposal = this.findDisposal.bind(this)
    }

    getGeolocation(event) {
        event.preventDefault()
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

            let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.lat + ',' + this.state.lng + '&radius=1500&keyword=metal-disposal&key=' + api

            console.log(url)
        })



    }

    setDisposal(event, disposal) {
        //Set type of disposal
        event.preventDefault()

        this.setState({
            ...this.state,
            disposal: disposal
        })
    }

    setAddress(event) {
        event.preventDefault()

        //Google API here, use either geolocation or location
        this.setState({
            ...this.state,

            street: event.value.street,
            city: event.value.city,
            state: event.value.state,
            country: event.value.country
        })
    }

    findDisposal(event) {

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
                   <DisposalGroup />
                    <ul className="location-container">
                        <AddressContainer />
                        <GeolocationContainer />

                    </ul>
                    <ul className="google-maps">
                       Test
                    </ul>
                </section>
            </div>
        )
    }
}

export default Disposal