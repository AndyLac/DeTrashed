import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
    return(
        <Loader
            type="TailSpin"
            color="dodgerblue"
            height={100}
            width={50}
        />
    )
}

export default Loading()