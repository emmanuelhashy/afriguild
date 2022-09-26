import React from 'react'

const Tab = () => {
  return (
    <div className='grid md:grid-cols-3 text-center text-white font-bold md:text-lg cursor-pointer'>
        <div className='bg-pink-600 col-span-1 py-2'><p>Latest Tournaments</p></div>
        <div className='bg-gray-700 col-span-1 py-2'><p>Upcoming Tournaments</p></div>
        <div className='bg-gray-500 col-span-1 py-2'><p>In-progress Tournaments</p></div>
    </div>
  )
}

export default Tab