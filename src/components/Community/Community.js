
import React from 'react'
import Loader from 'react-loader-spinner'

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

        let url = 'https://www.reddit.com/r/detrashed.json'

        const posts = fetch(url, {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                this.setState({
                    posts: data
                }, function() {
                    console.log(this.state.posts)
                })
            })
            .catch(error => {
                this.setState({
                    posts: {}
                })
                console.error(error)
            })
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
                        {this.state.posts == null ?
                            <Loader
                                type="TailSpin"
                                color="dodgerblue"
                                height={100}
                                width={50}
                            />  :
                            <div>
                                Placeholder
                            </div>
                        }
                    </ul>
                </section>
            </div>
        )
    }
}

export default Community