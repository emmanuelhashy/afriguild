import React from 'react'
import { RiHomeFill } from 'react-icons/ri'
import { IoMdRibbon, IoLogoGameControllerB } from 'react-icons/io'
import { MdLeaderboard } from 'react-icons/md'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'

const SideNav = () => {
    return (
        <div className='bg-gray-900 p-4 w-full h-full rounded-lg'>
            <div className='space-y-3'>
                <div className='flex cursor-pointer hover:text-pink-400 text-pink-600 space-x-2 items-center'>
                    <div className='rounded-lg p-1.5 bg-pink-600'>
                        <RiHomeFill size={14} color={"white"} />
                    </div>
                    <p className='whitespace-nowrap text-base font-bold'>Home</p>
                </div>
                <div className='flex cursor-pointer hover:text-pink-400 text-gray-300 space-x-2 items-center'>
                    <div className='rounded-lg p-1.5 bg-gray-500'>
                        <IoMdRibbon size={14} color={"white"} />
                    </div>
                    <p className='whitespace-nowrap text-base font-bold'>Tournament</p>
                </div>
                <div className='flex cursor-pointer hover:text-pink-400 text-gray-300 space-x-2 items-center'>
                    <div className='rounded-lg p-1.5 bg-gray-500'>
                        <IoLogoGameControllerB size={14} color={"white"} />
                    </div>
                    <p className='whitespace-nowrap text-base font-bold'>Games</p>
                </div>
                <div className='flex cursor-pointer hover:text-pink-400 text-gray-300 space-x-2 items-center'>
                    <div className='rounded-lg p-1.5 bg-gray-500'>
                        <MdLeaderboard size={14} color={"white"} />
                    </div>
                    <p className='whitespace-nowrap text-base font-bold'>Leaderboard</p>
                </div>
            </div>
            <div className='py-8 border-b border-pink-600'>
                <button className='bg-pink-600 px-2 py-2 space-x-1 rounded-full text-white flex items-center text-sm'>
                    <AiOutlinePlusCircle size={20} />
                    <p className=''>Create Tournament</p>
                </button>
            </div>
            <button className='flex cursor-pointer space-x-2 mt-4 items-center bg-gray-50 py-1 px-2 rounded-lg'>
                <BsDiscord size={30} color=' rgb(96 165 250)' />
                <div className='text-left'>
                    <p className='uppercase text-black font-medium text-xsm'>click to join our</p>
                    <p className='font-bold uppercase text-blue-400'>Discord</p>
                </div>
            </button>
        </div>
    )
}

export default SideNav