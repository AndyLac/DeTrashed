
import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card/Card'

import { isImage } from './helper.js'

import './style.sass'

const Cards = ({entries}) => {

    return (
        <div className="cards-container">
            <section>
                {Object.keys(entries).map(key => {

                    let post = entries[key]

                    if(!isImage(post.data.url)) {
                        return
                    } else {

                        //Retrieve necessary info from entries
                        const img = post.data.url
                        const user = post.data.author
                        const caption = post.data.title
                        const link = post.data.permalink

                        return (
                            <Card
                                key={key}

                                img={img}
                                user={user}
                                caption={caption}
                                link={link}
                            />
                        )
                    }
                })}
            </section>
        </div>
    )
}

Cards.propTypes = {
    entries: PropTypes.array
}

export default Cards

