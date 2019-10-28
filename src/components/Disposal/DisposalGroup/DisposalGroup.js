
import React from 'react'
import PropTypes from 'prop-types'
import fields from './fields'

import DisposalLabel from "./DisposalLabel/DisposalLabel";

import './style.sass'

const DisposalGroup = ({setDisposal}) => {

    return (
        <ul className='disposal-labels-container container'>
            <div className='disposal-subheader'>
                <h4>1. Select any types of disposal</h4>
            </div>
            <div className="disposal-items">
            {Object.entries(fields.options).map(entry => {

                return(
                    <DisposalLabel
                        value={entry[0]}
                        key={entry[0]}
                        label={entry[1]}
                        onClick={setDisposal}
                    />
                )
            })}
            </div>
        </ul>
    )
}

DisposalGroup.propTypes = {
    setDisposal: PropTypes.func.isRequired
}

export default DisposalGroup