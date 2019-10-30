
import React from 'react'
import InfoPanel from './InfoPanel/InfoPanel.js'
import SectionHeader from '../SectionHeader/SectionHeader'

import fields from './fields'


import './style.sass'

const Start = () => {
    return (
        <section className="start-container" id='start'>
            <ul className="section-header">
                <li>
                    <SectionHeader
                        title={"How to Start"}
                        color={"white"}
                    />
                </li>
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