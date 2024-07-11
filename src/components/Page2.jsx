import React from 'react'
import Button from './Button'
const Page2 = () => {
  return (
    <>
        <div className='w-full h-[90vh] bg-stone-50 pt-32 md:flex md:flex-row-reverse md:justify-between md:items-start md:px-44'>
            <div className=''>
                <img src="https://walkover.in/assets/images/growth1.gif" alt="" />
            </div>
            <div className='px-5 md:w-[80vh] '>
                <h1 className='text-3xl font-semibold md:text-7xl md:leading-tight'>Building a better World!</h1>
                <h3 className='text-xl md:text-2xl md:mt-5'>On a mission to help start-ups in their vision of making the world a better place.</h3>
                <Button/>
            </div>
        </div>
    </>
  )
}

export default Page2