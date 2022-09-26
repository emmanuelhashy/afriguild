import { SideNav } from '@components/common'
import React from 'react'
import GameDescription from '../Description'
import { SlideShow } from '..'

const Hero = () => {
  return (
    <div className='md:grid mt-4 space-y-4 sm:space-y-0 grid-cols-12'>
          <div className="lg:col-span-2 md:col-span-3">
            <SideNav />
          </div>
          <div className="lg:col-span-7 md:col-span-9">
            <div className='md:ml-6 lg:mr-2'>
              <SlideShow />
            </div>
          </div>
          <div className="col-span-3 md:hidden lg:block">
            <GameDescription />
          </div>
        </div>
  )
}

export default Hero