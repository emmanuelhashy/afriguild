import React from 'react'
import {BsDiscord} from 'react-icons/bs'
const Banner = () => {
  return (
    <div className='w-full my-8 p-8 justify-between items-center sm:flex bg-gray-900 border-t-4 border-pink-600 rounded-t-lg'>
        <div className='text-white'>
            <h1 className='font-bold md:text-2xl'>Join the AFRIGUILD community on DISCORD</h1>
            <p className='text-gray-300 text-sm'>Get instant updates, tips and exclusive freebies</p>
        </div>
        <button className='flex cursor-pointer space-x-2 items-center bg-purple-500 p-4 rounded-md'>
            <BsDiscord size={30} color='rgb(255 255 255)'/>
            <p className='uppercase text-white text-sm md:text-base'>click to join our discord</p>
        </button>
    </div>
  )
}

export default Banner