import React from 'react'
import Button from './Button'
const Center = () => {
  return (
    <>
        <div className='w-full  h-screen md:h-[100vh] md:flex md:flex-row-reverse md:justify-center md:items-start md:pt-32'>
            <div className='w-full min-h-72 pt-10'>
                <img className='' src="https://walkover.in/assets/images/innovation.gif" alt="" />
            </div>
            <div className='w-full min-h-96  pl-5 md:px-44'>
                <h1 className='text-4xl leading-relaxed font-semibold md:text-3xl md:leading-relaxed md:font-medium'>We are a team of <br /> Developer, Designers,Innovators...</h1>
                <h2 className='text-2xl font-semibold mt-6 md:text-6xl md:mt-10'>We are Walkover.</h2>
                <h2 className='text-2xl md:text-2xl md:font-semibold md:mt-3'>A journey to innovation!</h2>
              <Button/>
            </div>
        </div>
    </>
  )
}

export default Center