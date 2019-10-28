
import React from 'react'
import PropTypes from 'prop-types'
import fields from './fields'

import DisposalLabel from "./DisposalLabel/DisposalLabel";


import './style.sass'

const DisposalGroup = () => {

    return (
        <ul className='disposal-labels-container container'>
            <div className='disposal-subheader'>
                <h4>1. Select any types of disposal</h4>
            </div>
            <div className="disposal-items">
            {Object.entries(fields.options).map(entry => {

                console.log(entry)

                return(
                    <DisposalLabel
                        key={entry[0]}
                        label={entry[1]}
                    />
                )
            })}
            </div>
        </ul>
    )
}

const test = ({onClick}) => {

}


DisposalGroup.propTypes = {
    // onClick: PropTypes.func
}

export default DisposalGroup