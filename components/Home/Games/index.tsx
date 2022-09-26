import React from 'react'
import ScrollableCard from '../scrollableCard'

const Games = () => {
    return (
        <div className=' space-y-6'>
            <h3 className='text-xl text-white font-medium'><span className='font-semibold'>Games</span> curated for you</h3>
            <ScrollableCard isGame={true} isTournament={false} />
        </div>
    )
}

export default Games