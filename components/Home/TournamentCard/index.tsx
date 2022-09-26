import React from 'react'
import {GrTrophy} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineCalendar, AiOutlineLock} from 'react-icons/ai'
import Image from 'next/image'

const TournamentCard: React.FC<{scrollable:boolean}> = ({scrollable}) => {
  return (
        <div className={` rounded-lg ${scrollable && 'mr-[3%] min-w-[20rem] sm:min-w-[17rem] md:min-w-[20rem] lg:min-w-[40%]'}`} >
            <div className='h-60 bg-game-card rounded-t-lg bg-cover flex justify-end items-start p-1 border-b-4 border-pink-600'>
                <span className='border-2 border-pink-600 text-sm rounded-md bg-black text-white py-1 px-3'>1v1</span>
            </div>
            <div className='px-4 rounded-b-lg bg-gray-900 pt-4 pb-8 relative'>
                <div className='text-black absolute right-1 -top-5 flex items-center bg-pink-600 rounded-md space-x-1 font-semibold py-2 px-3 text-sm'>
                    <GrTrophy/>
                    <p>200 USDT</p>
                </div>
                <div className=''>
                    <p className='uppercase text-pink-600 text-sm'>Fifa 22</p>
                    <h2 className='capitalize font-semibold text-white'><span className='uppercase'>FIFA</span> grand Masters of lagos</h2>
                </div>
                <div className='flex  mt-6 justify-between text-white items-center'>
                    <div className='flex items-center space-x-1'>
                        <BsPerson size={20}/>
                        <p><span className='font-semibold'>24</span>/36</p>
                    </div>
                    <p className='capitalize p-1.5 font-medium bg-black rounded-md text-xs'>Single elimination</p>
                </div>

            </div>
            <div className='flex mt-4 justify-between items-start'>
                <div className='flex items-start space-x-2'>
                    <Image src={"/Avatar.svg"} classNamerounded-full height={30} width={30}/>
                    <div className='text-xs text-white'>
                        <p>Hosted by:</p>
                        <p className='font-medium text-white'>ESG Latam</p>
                        <div className='flex text-xs space-x-1 text-pink-600'>
                            <AiOutlineCalendar size={14} color='rgb(219 39 119)'/>
                            <p>Oct 17, 2:00PM</p>
                        </div>
                    </div>
                </div>
                <div className='text-white flex items-center bg-gray-800 border border-white rounded-md space-x-1 font-semibold py-1 px-2 text-sm'>
                    <AiOutlineLock size={16} color={"white"}/>
                    <p>0.6 USDT</p>
                </div>
            </div>
        </div>
  )
}

export default TournamentCard