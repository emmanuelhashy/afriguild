import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Filter = () => {
    return (
        <div className='bg-gray-900 space-y-3 p-4 w-full md:w-72 rounded-lg'>
            <div className='flex space-x-2 text-white items-center'>
                <p className='whitespace-nowrap'>Filter by</p>
                <div className='bg-pink-600 h-0.5 w-full'></div>
            </div>
            <div className='px-4 space-y-3 '>
                {[1,2,3,4,5].map((idx) => (
                    <div key={idx} className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center px-2 text-gray-700">
                            <AiOutlineSearch size={20} color="rgb(255 255 255 )"/>
                        </div>
                        <select
                            className="block appearance-none w-full h-12 bg-gray-800  text-base text-gray-400 pl-14 py-3   rounded-full leading-tight focus:outline-none"
                            id="grid-state"
                        >
                            <option>Game</option>
                            <option>Challenge</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-400">
                            <svg
                                className="fill-current h-6 w-6  rounded-full"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                ))
                }
                <div className='flex justify-center'>
                    <button className='bg-pink-600 px-3 py-2 rounded-lg text-white font-semibold text-lg'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Filter