
import React from 'react'
import './style.sass'

const SectionHeader = ({title, color}) => {

    return (
        <section className={"section-header container"} style={{color: color}}>
            <h1>{title}</h1>
        </section>
    )
}

export default SectionHeader