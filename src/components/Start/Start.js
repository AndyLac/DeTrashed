
import React from 'react'
import InfoPanel from './InfoPanel/InfoPanel.js'
import fields from './fields'


import './style.sass'

const Start = () => {
    return (
        <section>
            <ul>
                {Object.keys(fields).map(key => {
                    console.log(fields[key].img)

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