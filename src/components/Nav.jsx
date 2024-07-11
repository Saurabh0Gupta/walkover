import React from 'react'

const Nav = () => {
  return (
    <>
        <div className='w-full h-24 flex justify-between items-center md:px-44 py-5'>
            <div className='md:w-full md:h-full'>
                <img className='' src="https://walkover.in/assets/images/walkover_logo.svg" alt="" />
            </div>
            <div className='md:hidden'>
                <h1>menu</h1>
            </div>
            <div className='hidden md:block '>
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