import React, { useState } from 'react';
import { Box } from '../base';
import Image from "next/image"
import logo from "./../../public/risidio_logo_white.svg"
import discord from "./../../public/discord.svg"
import twitter from "./../../public/twitter.svg"
import instagram from "./../../public/instagram.svg"
import Link from 'next/link';

function Navbar() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <Box className='px-4 py-2 flex justify-between items-center '>


      <nav className='flex w-full md:flex items-center justify-between h-14'>

        <Link href="/"><Image src={logo} alt="risidio logo" className='w-[140px] h-[55px] inline' /></Link>

        {isOpenMenu ?
          <Box className='bg-black h-screen md:hidden z-10 mt-16 fixed w-full left-0 top-[-0px] transition-all ease-in duration-500 flex flex-col items-center justify-evenly'>
            <ul className='flex flex-col items-center md:hidden'>
              <li className='text-white mx-4 my-6 md:my-0 text-2xl font-[200]'><Link href="/ourwork">Our work</Link></li>
              <li className='text-white mx-4 my-6 md:my-0 text-2xl font-[200]'><Link href="/about">About</Link></li>
              <li className='text-white mx-4 my-6 md:my-0 text-2xl font-[200]'><Link href="/sustainability">Sustainability</Link></li>
              <li className='text-[#5fbdc1] mx-4 my-6 md:my-0 text-2xl font-medium'><Link href="/contact">Contact</Link></li>
            </ul>
            <Box className='flex justify-between'>
              <Link href="https://discord.com/invite/sQaKVft">
                <Image src={discord} alt='discord logo' className='w-[18.75px] h-[15px]' />
              </Link>
              <Link href="https://twitter.com/Risidio1">
                <Image src={twitter} alt='twitter logo' className='w-[18.75px] h-[15px]' />
              </Link>
              <Link href="https://www.instagram.com/risidio_official/">
                <Image src={instagram} alt='instagram logo' className='w-[18.75px] h-[15px]' />
              </Link>
            </Box>
            <Box className='flex text-white font-light text-xs'>Terms & conditions • Privacy policy</Box>
          </Box>
          : <></>}

        <ul className='hidden bg-black md:mt-0 md:flex md:flex-row md:items-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 md:opacity-100 md:transition-none'>
          <li className='text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] ml-10'><Link href="/ourwork">Our work</Link></li>
          <li className='text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] ml-10'><Link href="/about">About</Link></li>
          <li className='text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] ml-10'><Link href="/sustainability">Sustainability</Link></li>
        </ul>

        <div className='inline-block md:hidden text-[hsla(0,0%,100%,.5)] border border-[hsla(0,0%,100%,.1);] py-1 px-3 h-[40px]'>
          <button className='flex items-center' onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' w-[30px] h-[30px] '>
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <Link href="/contact" className='hidden md:flex md:ml-auto'>
          <div className='hidden mr-4 px-1.5 py-px rounded-full md:flex justify-center items-center bg-[#ffffff33] w-32 h-10 hover:bg-white'>
            <button className='rounded-full bg-transparent text-[#5fbdc1] text-button'>Contact</button>
          </div>
        </Link>
        
      </nav>
    </Box >
  );
}

export default Navbar;
