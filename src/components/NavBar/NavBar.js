
import React from 'react'
import './style.sass'

const NavBar = () => (
    <div className="nav-bar">
        <ul className="container">
            <li className="logo-container">
                <ul className="logo-box">
                    <li className="logo-picture">
                        <h1 className="logo-placeholder">Test</h1>
                    </li>
                </ul>
            </li>
            <li className="nav-item-container">
                <ul className="button-group">
                    <li className="nav-item">
                        Community
                    </li>
                    <li className="nav-item">
                        Donation
                    </li>
                    <li className="nav-item">
                        How to Start
                    </li>
                    <li className="nav-item">
                        Facilities
                    </li>
                </ul>
            </li>
        </ul>
    </div>
)

export default NavBar

