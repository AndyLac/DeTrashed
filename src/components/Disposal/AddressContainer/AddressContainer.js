
import React from 'react'
import PropTypes from 'prop-types'

import fields from './fields'

import './style.sass'

const AddressContainer = ({address, setAddress, findDisposalByAddress}) => {
    return (
        <ul className='regional-container container'>
            <li className='regional-subheader'>
                <h4>Input your address below and hit submit</h4>
            </li>
            <li className='regional-form-container'>
                <form className="regional-form" onSubmit={e => {
                    findDisposalByAddress(e)
                }}>
                    <li className='address-container'>
                        <ul className='address-input'>
                            <li>
                                <input {...fields.regional.props} name='address' value={address} onChange={e => {
                                    setAddress(e)
                                }}/>
                            </li>

                        </ul>
                        <ul className='address-submit'>
                            <li>
                                <input {...fields.submit.props} />
                            </li>
                        </ul>
                    </li>
                </form>
            </li>
        </ul>
    )
}

AddressContainer.propTypes = {
    address: PropTypes.string,
    setAddress: PropTypes.func.isRequired,
    findDisposalByAddress: PropTypes.func.isRequired
}

export default AddressContainer