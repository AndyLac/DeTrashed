

const getGeolocationPromise = () => {
    const geolocation = navigator.geolocation

    return new Promise((resolve, reject) => {

        if(!geolocation) {
            reject(new Error('Not Supported'))
        }

        geolocation.getCurrentPosition((position) => {
            resolve(position)
        }, () => {
            resolve(false)
        })

    })
}

export default getGeolocationPromise