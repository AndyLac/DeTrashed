
import React from 'react'

const toggleSideNav = () => {
    let sidenav = document.getElementsByClassName('sidenav-container')[0]

    if(sidenav.className.includes('active')) {

        sidenav.className = sidenav.className.replace(' active', '')
        sidenav.style.width =  "0px"
    } else {
        sidenav.className = sidenav.className.concat(' active')
        sidenav.style.width = "100vw"
    }
}

export {
    toggleSideNav
}