
import React from 'react'
import fields from '../fields'

import { toggleSideNav } from "../helpers";

import './style.sass'

const SideNav = () => {

    return (
        <div className='sidenav-container'>
            <div className='close-btn-container'>
                <div className='close-btn'>
                    <span className='close' onClick={e => {
                        toggleSideNav()
                    }}>X</span>
                </div>
            </div>
            <div className='container'>
                <ul className='mobile-nav-item-container'>
                    {Object.entries(fields.options).map(entry => (
                        <li
                            className='mobile-nav-item'
                            key={entry[0]}
                            onClick={e => {
                                let element = document.getElementById(entry[0])

                                element.scrollIntoView({
                                    behavior: 'smooth'
                                })
                                document.getElementById(entry[0]).scrollTop += 40
                            }}
                        >
                            {entry[1]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideNav
