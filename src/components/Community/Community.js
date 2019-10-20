
import React from 'react'
import Loader from 'react-loader-spinner'
import Cards from '../Cards/Cards'
import SectionHeader from '../SectionHeader/SectionHeader'
import './style.sass'

class Community extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let url = 'https://www.reddit.com/r/DeTrashed/top.json?sort=top&t=week'

        fetch(url, {method: 'GET'})
            .then(res => res.json())
            .then(json => {

                this.setState({
                    posts: json.data.children
                })
            })
            .catch(error => {
                this.setState({
                    posts: []
                })
                console.error(error)
            })
    }

    render() {

        return (
            <div className="community-container">
                <section className="container">
                    <ul className="community-text">
                        <SectionHeader
                            title={"Community"}
                            color={"black"}
                        />
                        <li className="community-msg">
                            <h3>Come see everyone's work!</h3>
                            <h5>Courtesy of <a href="https://www.reddit.com/r/detrashed">Reddit's Detrashed Community</a></h5>
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
                            <Cards entries={this.state.posts}/>
                        }
                    </ul>
                </section>
            </div>
        )
    }
}

export default Community