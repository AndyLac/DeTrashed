
import React from 'react'
import './style.sass'

const Hamburger = () => {

    return (
        <div className='hamburger' onClick={e => {

            let sidenav = document.getElementById('sidenav-container')

            console.log(sidenav)

            // if(sidenav.className.includes('active')) {
            //
            //     sidenav.className = sidenav.className.replace(' active', '')
            //     sidenav.style.width =  "0px"
            // } else {
            //     sidenav.className = sidenav.className.concat(' active')
            //     sidenav.style.width = "100vw"
            // }
        }}>
            <div className='bar-1'/>
            <div className='bar-2'/>
            <div className='bar-3'/>
        </div>
    )
}

export default Hamburger

