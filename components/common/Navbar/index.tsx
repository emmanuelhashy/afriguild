import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => {
    setShowMenu(!showMenu)
    console.log("hello")
  }
  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-gray-800
          md:bg-transparent
        "
      >
        <div className='flex items-center space-x-4'>
          <a href="#" className=' text-2xl md:text-4xl sm:text-3xl text-white font-semibold'>
            afriguild
          </a>
          <div className="relative items-center hidden md:flex w-full h-8 rounded-full focus-within:shadow-lg  search overflow-hidden">
            <div className="grid place-items-center h-full w-10 search text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-white pr-2 search"
              type="text"
              id="search"
              placeholder="Find a tournament" />
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          onClick={toggle}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div className={`${!showMenu ? "hidden" : ""} w-full md:flex md:items-center md:w-auto`} id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:items-center
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block text-white hover:text-purple-400" href="#"
              >My Wallet</a
              >
            </li>
            <li>
              <div className='py-2 md:p-4'>
                <div className='w-8 h-8 flex justify-center items-center rounded-full relative bg-gray-300'>
                  <IoIosNotificationsOutline size={20} />
                  <p className='bg-red-500 w-3 h-3 top-1 right-1 flex justify-center items-center rounded-full absolute text-xsm'>5</p>
                </div>
              </div>
            </li>
            <li>
              <div className='py-2 md:p-4'>
                <div className=" relative items-center md:hidden flex w-full h-10 rounded-full focus-within:shadow-lg search overflow-hidden">
                  <div className="grid place-items-center h-full w-10 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    className="peer h-full w-full outline-none text-sm text-white pr-2 search"
                    type="text"
                    id="search"
                    placeholder="Find a tournament" />
                </div>
              </div>
            </li>
            <li className="">
              <div
                className="flex relative space-x-3 items-center w-48 md:w-full  px-4 py-2 font-medium text-white rounded-md outline-none  focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Image src="/Avatar.svg" height={"30px"} width={"30px"} />
                <p>stanleywest</p>
                <FaAngleDown />
              </div>
              <div
                className={`${dropdownOpen ? "flex flex-col" : "hidden"} p-2 mt-1 bg-white rounded-md shadow  md:right-0 absolute`}
                onClick={() => setDropdownOpen(false)}
              >
                <ul className="space-y-2 lg:w-52">
                  <li>
                    <a
                      href="#"
                      className="flex p-2 font-medium text-gray-600 rounded-md  hover:bg-gray-100 hover:text-black"
                    >Categories</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex p-2 font-medium text-gray-600 rounded-md  hover:bg-gray-100 hover:text-black"
                    >Inventories</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex p-2 font-medium text-gray-600 rounded-md  hover:bg-gray-100 hover:text-black"
                    >Brands</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar