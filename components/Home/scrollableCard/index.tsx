import React, { useRef } from 'react'
import TournamentCard from '../TournamentCard';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import GameCard from '../GameCard';

const ScrollableCard: React.FC<{isGame:boolean, isTournament: boolean}>  = ({isGame, isTournament}) => {
    const bidRef = useRef<HTMLDivElement>(null);

    const setBifScrollPosition = (shift: number, status: string) => {

        if (bidRef.current!.scrollWidth - 1300 <= bidRef.current!.scrollLeft && status == 'plus') bidRef.current!.scrollLeft = 10;

        else if (bidRef.current!.scrollLeft == 0 && status == 'minus') bidRef.current!.scrollLeft = bidRef.current!.scrollWidth - 200;

        else bidRef.current!.scrollLeft += shift;

    }
    return (
        <div className="relative w-full">

            <div className='flex w-full top-48 items-center absolute justify-between'>
                <button className="p-2 rounded-full bg-pink-600" onClick={() => setBifScrollPosition(-400, 'minus')}><FaAngleLeft color='white'/></button>
                <button className="p-2 rounded-full bg-pink-600" onClick={() => setBifScrollPosition(400, 'plus')}><FaAngleRight color='white'/></button>
            </div>

            <div className="flex flex-nowrap  overflow-hidden scroll-smooth snap-mandatory snap-x" ref={bidRef}>
                {isTournament && [1,2,3,4,5,6].map((idx: number) => (
                    <TournamentCard key={idx} scrollable={true} />

                ))}
                {isGame && [1,2,3,4,5,6].map((idx: number) => (
                    <GameCard key={idx} scrollable={true} />

                ))}
            </div>
        </div>
    )
}

export default ScrollableCard