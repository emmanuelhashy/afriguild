import React from 'react'
import WinnerCard from '../WinnerCard'

const Winners = () => {
    return (
        <div className='py-10 space-y-6'>
            <h3 className='text-white text-xl'><span className='font-bold'>This week&apos;s stars</span> on Afriguild</h3>
            <div className='sm:grid gap-4 grid-cols-12'>
                {[1, 2, 3, 4].map(idx => (
                    <div key={idx} className='md:col-span-3 sm:col-span-6'>
                        <WinnerCard />
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Winners