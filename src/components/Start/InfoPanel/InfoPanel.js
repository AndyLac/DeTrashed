
import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const InfoPanel = ({description, img}) => {
   return(
    <li className="info-container">
        <ul>
            <li className="info-icon">
                <img src={img}/>
            </li>
            <li className="info-description">
                <h5>{description}</h5>
            </li>
        </ul>
    </li>
   )
}


InfoPanel.propTypes = {
    description: PropTypes.string,
    img: PropTypes.string
}

export default InfoPanel

