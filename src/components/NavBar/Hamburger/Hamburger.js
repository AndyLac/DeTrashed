
import React from 'react'
import { toggleSideNav } from "../helpers";
import './style.sass'

const Hamburger = () => {

    return (
        <div className='hamburger' onClick={e => {
            toggleSideNav()
        }}>
            <div className='bar-1'/>
            <div className='bar-2'/>
            <div className='bar-3'/>
        </div>
    )
}

export default Hamburger

