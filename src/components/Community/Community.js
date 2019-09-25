
import React from 'react'
import './style.sass'

class Community extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        //Testing React
        // let uri = 'https://api.twitter.com/1.1/search/tweets.json?q=%23trashtag&src=typed_query&f=image'

        //https://www.reddit.com/r/DeTrashed/top/?sort=top&t=month

        let uri = 'https://www.reddit.com/r/detrashed.json'
        if(uri){
            fetch(uri)
                .then(function(data){
                    return data.json()
                })
                .then(function(data){
                    console.log(data)
                })
                .catch(function(error){ console.log(error) }) }
    }

    render() {
        return (
            <div className="container">
                <section className="community-container">
                    <ul className="community-text">
                        <li className="community-header">
                            <h1>Community</h1>
                        </li>
                        <li className="community-msg">
                            <h3>Come see everyone's work!</h3>
                        </li>
                    </ul>
                    <ul>

                    </ul>
                </section>
            </div>
        )
    }
}

export default Community