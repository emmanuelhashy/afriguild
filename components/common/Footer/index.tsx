import React from 'react'

const Footer = () => {
    return (
        <footer className=" px-8 bg-gray-900">
            <div className="border-b border-white flex flex-col flex-wrap px-4 py-8 mx-auto sm:items-start sm:flex-row sm:flex-nowrap">
                <div className="flex-shrink-0 w-1/2 sm:w-64 mx-auto text-center sm:mx-0 sm:text-left">
                    <a className="flex items-center justify-center text-4xl font-bold text-white sm:justify-start">
                        afriguild
                    </a>
                </div>
                <div className="space-x-2 w-full text-center sm:text-left sm:flex">
                    <div className="w-full sm:w-2/5 md:w-3/12">
                        <h2 className="mb-2 uppercase font-bold tracking-widest text-white">
                            Explore
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-white hover:text-red-400 cursor-pointer">Explor</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-400 cursor-pointer">Leaderboard</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-400 cursor-pointer">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-2/5 md:w-3/12">
                        <h2 className="mb-2 uppercase font-bold tracking-widest text-white">
                            Learn More
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <a className="text-white hover:text-red-400 cursor-pointer">About</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-400 cursor-pointer">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-400 cursor-pointer">Terms of Service</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-400 cursor-pointer">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-4 justify-center sm:justify-start mx-auto">
                <p className="text-base uppercase text-white">
                    @2022 afriguild
                </p>
            </div>
        </footer>
    )
}

export default Footer