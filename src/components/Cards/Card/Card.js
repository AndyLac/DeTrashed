
import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const Card = ({img, user, caption, link}) => {

    return (
        <div className="card">
            <ul className="card-container">
                <li className="img-container">
                    <img src={img} alt={caption}/>
                </li>
                <li className="img-info-container">
                    <ul>
                        <li className="caption">
                            <h5><a href={"https://www.reddit.com" + link}>{caption}</a></h5>
                        </li>
                        <li className="user">
                            <h5>Original Creator: <a href={"https://www.reddit.com/u/" + user}>/u/{user}</a></h5>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    user: PropTypes.string,
    caption: PropTypes.string,
    link: PropTypes.string
}

export default Card
