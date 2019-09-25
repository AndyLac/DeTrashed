
import React from 'react'
import './style.sass'

class Community extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            tweets: null
        }
    }

    componentDidMount() {
        fetch("https://api.twitter.com/1.1/search/tweets.json?q=%23trashtag&result_type=popular", {mode: 'cors'})
            .then(response => response.json())
            .then(data => {

                console.log(data)
                this.setState({
                    tweets: data
                })

            })
            .catch(
                this.setState({
                    tweets: []
                })
        )
    }

    render() {
        return (
            <div className="container">
                <section className="community-header">
                    <ul>
                        <li>
                            Community
                        </li>
                        <li>
                            <h5>Come see everyone's work!</h5>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Community