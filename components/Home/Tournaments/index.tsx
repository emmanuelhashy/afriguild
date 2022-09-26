import { Tab } from '@components/common'
import {FaAngleDoubleRight} from 'react-icons/fa'
import React from 'react'
import Filter from '../Filter'
import ScrollableCard from '../scrollableCard'

const Tournaments = () => {
  return (
    <div className='py-16 space-y-10'>
        <Tab/>
        <div className='md:grid grid-cols-12'>
            <div className="md:col-span-4 lg:col-span-3 ">
                <Filter/>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
                <ScrollableCard isGame={false} isTournament={true}/>
                <div className='flex justify-end mt-4'>
                    <div className='flex space-x-2 items-center cursor-pointer'>
                        <p className='text-pink-600 font-semibold text-base'>See more</p>
                        <FaAngleDoubleRight size={20} color='rgb(219 39 119)'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tournaments