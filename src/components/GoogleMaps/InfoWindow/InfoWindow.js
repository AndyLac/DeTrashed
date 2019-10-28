
import React from 'react'
import './style.sass'


const InfoWindow = ({image, name, address}) => {

    return (
        <div className='info-window'>
            <ul className='info-content'>
                <li className='info-image'>
                    <img src={image}/>
                </li>
                <li className='info-name'>
                    <h4>{name}</h4>
                </li>
                <li className='info-address'>
                    <h4>{address}</h4>
                </li>
            </ul>
        </div>
    )
}

export default InfoWindow