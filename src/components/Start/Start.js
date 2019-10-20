
import React from 'react'
import InfoPanel from './InfoPanel/InfoPanel.js'
import SectionHeader from '../SectionHeader/SectionHeader'

import fields from './fields'


import './style.sass'

const Start = () => {
    return (
        <section className="start-container">
            <ul className="section-header">
                <SectionHeader
                    title={"How to Start"}
                    color={"white"}
                />
            </ul>
            <ul className="container">
                {Object.keys(fields).map(key => {
                   return(
                       <InfoPanel
                            key={key}
                            img={fields[key].img}
                            description={fields[key].description}
                       />
                   )
                })}
            </ul>
        </section>
    )
}

export default Start