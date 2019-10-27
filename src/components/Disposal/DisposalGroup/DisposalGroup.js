
import React from 'react'
import PropTypes from 'prop-types'
import fields from './fields'

import DisposalLabel from "./DisposalLabel/DisposalLabel";


import './style.sass'

const DisposalGroup = ({onClick}) => {

    return (
        <ul className='disposal-container container'>
            {Object.keys(fields).map(key => {


                return(
                    <DisposalLabel
                        key={key}
                        label={fields[key]}
                    />
                )
            })}
        </ul>
    )

}


DisposalGroup.propTypes = {
    onClick: PropTypes.func
}

export default DisposalGroup