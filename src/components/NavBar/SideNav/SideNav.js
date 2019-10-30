
import React from 'react'
import fields from '../fields'
import './style.sass'

const SideNav = () => {

    return (
        <div className='sidenav-container'>
            <div className='container'>
                <ul className='close-btn-container'>
                    <li className='close-btn'>
                        X
                    </li>
                </ul>
                <ul className='mobile-nav-item-container container'>
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
