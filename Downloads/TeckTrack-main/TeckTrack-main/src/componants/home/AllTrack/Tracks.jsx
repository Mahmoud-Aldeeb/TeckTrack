import React from 'react'
import Info from './Info'
import Circles from './Circles'

const Tracks = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 items-center justify-center w-11/12 mt-10 mb-10 '>
            <Circles />
            <Info />
        </div>
    )
}

export default Tracks
