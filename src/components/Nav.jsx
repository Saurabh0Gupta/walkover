import React from 'react'
import { RiMenu2Line } from "react-icons/ri";

const Nav = () => {
  return (
    <>
        <div className='w-full h-24 flex justify-between items-center md:px-44 py-5 px-5'>
            <div className='md:w-full md:h-full'>
                <img className='' src="https://walkover.in/assets/images/walkover_logo.svg" alt="" />
            </div>
            <div className='md:hidden text-3xl text-red-600'>
                <RiMenu2Line/>
            </div>
            <div className='md:w-full hidden md:block'>
                <ul className='flex justify-center items-center gap-8 w-fit'>
                    <li>Happiness Newsletter</li>
                    <li>Products</li>
                    <li>Blogs</li>
                    <li>Handbook</li>
                    <li>Join Us</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Nav