import React from 'react'
import Button from './Button'

const Page4 = () => {
  return (
    <>

        <div className='w-full h-[110vh] md:h-screen bg-stone-50 pt-32 px-5 md:flex md:flex-row-reverse md:justify-between md:px-44'>
            <div className=''>
                <img src="https://walkover.in/assets/images/simple_culture_image.svg" alt="" />
            </div>
            <div className=' md:w-2/3 pt-5 pr-6'>
                <h1 className='text-2xl font-semibold mb-4 md:text-7xl md:leading-tight'>Be it a Success or a Learning, we simply Walkover :)</h1>
                <p className='text-xl font-normal mb-16 md:text-2xl md:mt-7 md:mb-10'>A team of 150+ Spartans working remotely, we put people first,
                    pursue passions, embrace failures, conduct responsibly & strive
                    to be a force of change. And, yes, we choose to be HAPPY, HEARTY
                    & HEALTHY!</p>
                    <Button/>
            </div>
        </div>
    </>
  )
}

export default Page4