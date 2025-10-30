import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../common/Button'
const Info = () => {
    return (
        <div className='w-full lg:w-1/2 flex flex-col items-center  lg:items-start justify-center px-4 md:px-8 lg:px-12'>
            <p className='bg-primary-light w-64 text-text-primary font-medium rounded-4xl h-10 flex items-center justify-center text-[16px]'>Your Tech Journey Starts Here</p>
            <div className='my-6 flex gap-5 flex-col'>
                <h1 className='text-neutral-800 text-4xl font-bold text-center lg:text-start leading-normal'>Explore Your Personalized Tech  Career Roadmaps</h1>
                <p className='text-2xl font-medium leading-normal'>Find the perfect learning path for your tech career where each roadmap shows you the key skills to master and the latest technologies used in every track while guiding you through engaging intro videos and real projects so you can confidently prepare for the most common interview questions all in one place.</p>
            </div>
            <PrimaryButton to='/tracks'>View All Tracks</PrimaryButton>
        </div>
    )
}

export default Info