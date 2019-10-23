
import React from 'react'
import SectionHeader from "../SectionHeader/SectionHeader";

import getGeolocationPromise from './helper'
import fields from './fields'

import './style.sass'

class Disposal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            disposal: 'disposal',

            latitude: null,
            longitude: null,

            street: null,
            city: null,
            state: null,
            country: null
        }

        this.getGeolocation = this.getGeolocation.bind(this)
        this.setDisposal = this.setDisposal.bind(this)
        this.findDisposal = this.findDisposal.bind(this)
    }

    getGeolocation() {
        let geolocation = getGeolocationPromise()

        //Store geolocation data into state
        geolocation.then((position) => {
            this.setState({
                ...this.state,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
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

    findDisposal(event) {
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

    render() {


        return(
            <div className="disposal-container">
                <section className="container">
                    <SectionHeader
                        title={"Disposal Center"}
                        color={"black"}
                    />
                    <ul className="disposal-selection">
                        Test
                    </ul>
                    <ul className="location-container">
                        <li className="regional">
                            Test
                        </li>
                        <li className="geolocation">
                            Test
                        </li>
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