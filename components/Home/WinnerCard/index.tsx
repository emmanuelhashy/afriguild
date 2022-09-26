import React from 'react'
import Image from 'next/image'
import {IoMdRibbon} from 'react-icons/io'
import {BsArrowDown} from 'react-icons/bs'


const WinnerCard = () => {
  return (
        <div className='w-full  rounded-lg'>
            <div className='flex space-x-2 items-center ml-3 -mb-6'>
                <div className='rounded-full border-4 flex justify-center items-center border-pink-600 '><Image src={"/Avatar.svg"} height={60} width={60}/></div>
                <p className='font-semibold text-white -mt-3'>@Saintino</p>
            </div>
            <div className='bg-gray-900 rounded-lg px-2 pt-8 pb-4'>
                <div className="flex space-x-2">
                    <div className='flex flex-col items-center'>
                        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-pink-600">
                            <IoMdRibbon color='white'/>
                        </div>
                        <BsArrowDown size={20} color='rgb(219 39 119)'/>
                    </div>
                    <div className='text-white'>
                        <p className='text-xs'>Recent win:</p>
                        <p className='capitalize font-semibold text-sm'>The Axie Final Stand #4</p>
                    </div>
                </div>
                <p className='text-pink-600 text-xs font-semibold'>Tournaments won this week: 3</p>
            </div>
        </div>
  )
}

export default WinnerCard