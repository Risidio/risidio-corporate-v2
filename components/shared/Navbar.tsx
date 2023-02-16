import React, { useState } from 'react';
import { Box, Text } from '../base';
import { Button } from '../base/button';
import Image from "next/image"
import logo from "./../../public/risidio_logo_white.svg"
import discord from "./../../public/discord.svg"

function Navbar() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <Box className='px-4 py-2 flex justify-between items-center bg-black'>


      <nav className='flex bg-black w-full md:flex items-center justify-between h-14'>

        <Image src={logo} alt="risidio logo" className='w-[140px] h-[55px] inline' />

        {isOpenMenu ?
          <ul className='bg-black flex flex-col items-center z-10 mt-16 absolute w-full left-0 top-[-0px] transition-all ease-in duration-500 md:hidden'>
            <li className='text-white mx-4 my-6 md:my-0 text-2xl font-[200]'>Our work</li>
            <li className='text-white mx-4 my-6 md:my-0 text-2xl font-[200]'>About</li>
            <li className='text-white mx-4 my-6 md:my-0 text-2xl font-[200]'>Sustainability</li>
            <li className='text-[#5fbdc1] mx-4 my-6 md:my-0 text-2xl font-[200]'>Contact</li>
          </ul>
          : <></>}


        <ul className='hidden bg-black md:mt-0 md:flex md:flex-row md:items-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 md:opacity-100 md:transition-none'>
          <li className='text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] ml-10'>Our work</li>
          <li className='text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] ml-10'>About</li>
          <li className='text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] ml-10'>Sustainability</li>
        </ul>


        <div className='inline-block md:hidden text-[hsla(0,0%,100%,.5)] border border-[hsla(0,0%,100%,.1);] py-1 px-3 h-[40px]'>
          <button className='flex items-center' onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' w-[30px] h-[30px] '>
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className='hidden ml-auto mr-4 px-1.5 py-px rounded-full md:flex justify-center items-center bg-[#ffffff33] w-32 h-10 hover:bg-white'>
          <button className='rounded-full bg-transparent text-[#5fbdc1] text-button'>Contact</button>
        </div>
      </nav>
    </Box >
  );
}

export default Navbar;
