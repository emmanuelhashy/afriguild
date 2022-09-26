import React from 'react'

const GameCard: React.FC<{ scrollable: boolean }> = ({ scrollable }) => {
    return (
        <div className={` rounded-lg ${scrollable && 'mr-[2%] min-w-[20rem] sm:min-w-[17rem] md:min-w-[20rem] lg:min-w-[30%]'}`} >
            <div className='h-60 bg-game-card rounded-t-lg bg-cover'>

            </div>
            <div className='px-4 rounded-b-lg bg-gray-900 pt-4 pb-8'>
                <div className='text-white'>
                    <h2 className='capitalize font-semibold'><span className='uppercase'>FIFA</span> grand Masters of lagos</h2>
                    <p className='text-sm ml-1.5'>Fifa 22</p>
                </div>
            </div>
        </div>
    )
}

export default GameCard