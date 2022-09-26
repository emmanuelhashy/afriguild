import React from 'react'
import { AiOutlineCalendar, AiOutlineTrophy } from 'react-icons/ai'

const GameDescription = () => {
    return (
        <div className=' text-white px-4 h-full py-8 bg-gray-900 rounded-lg md:rounded-none md:rounded-r-2xl '>
            <div className='space-y-4'>
                <p className='text-pink-600 uppercase text-base font-semibold'>Thetan arena</p>
                <h1 className='font-bold text-3xl'>Global Series</h1>
                <div className='flex space-x-1 items-center'>
                    <AiOutlineCalendar size={24} color='white' />
                    <p>Ongoing</p>
                </div>
                <div className='flex space-x-1 items-center'>
                    <AiOutlineTrophy size={24} color='white'/>
                    <p className='uppercase text-base'>200 usdt</p>
                </div>
            </div>
            <button className='uppercase font-medium mt-10 bg-pink-600 py-2 px-4 rounded-xl'>play</button>
        </div>
    )
}

export default GameDescription