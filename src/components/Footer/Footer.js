
import React from 'react'
import './style.sass'

const Footer = () => {

    let date = new Date().getFullYear()

    return (
        <div className="footer">
            <section className="container">
                <footer>
                    <h5>&copy; Copyright {date}, DeTrashed</h5>
                </footer>
            </section>
        </div>
    )
}

export default Footer