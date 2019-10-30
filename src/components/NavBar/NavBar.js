
import React from 'react'
import fields from './fields'

import './style.sass'
import Hamburger from "./Hamburger/Hamburger";

const NavBar = () => (
    <div className="nav-bar">
        <ul className="container">
            <li className="logo-container">
                <ul className="logo-box">
                    <li className="logo">
                        <h1 className="logo-placeholder">DeTrashed</h1>
                    </li>
                </ul>
            </li>
            <li className="nav-item-container">
                <ul className="button-group">
                    {Object.entries(fields.options).map(entry => (

                        <li
                            className='nav-item'
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
                <ul className='hamburger-container'>
                    <Hamburger/>
                </ul>
            </li>
        </ul>
    </div>
)

export default NavBar

