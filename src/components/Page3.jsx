import React from 'react'
import Page3Sub from './Page3Sub'

const Page3 = () => {
  return (
    <>
        <div className='w-full h-[130vh] md:h-screen pt-20 md:flex md:flex-row-reverse md:justify-between md:items-start md:px-44'>
            <div className=''>
                <img src="https://walkover.in/assets/images/lab.gif" alt="" />
            </div>
            <div className='px-5 md:w-[95vh]'>
                <h1 className='text-3xl font-semibold md:text-6xl'>Our Experiments!</h1>
                <h3 className='text-xl md:text-2xl mt-10'>We believe in simplicity; so we design and build impactful, user-friendly IT products. We majorly stand on the three pillars- DESIGN, CULTURE & TECHNOLOGY.</h3>
                <div className='mt-5 md:flex md:justify-between md:gap-5 md:mt-20'>
                    <Page3Sub 
                    imgUrl='https://walkover.in/assets/images/msg91_logo.svg' para1="Cloud communication platform delivering 1+ billion SMS every
                    month." 
                    para2="PHP, MySQL, MongoDB, AWS, NGINX and Python."/>
                    <Page3Sub 
                    imgUrl='https://walkover.in/assets/images/socket_logo.svg' para1="Third-party integrations made super easy."
                    para2="ROR, Angular, ES6, pgSQL and Node.
                    5000 API hits free/month."/>
                    <Page3Sub imgUrl='https://walkover.in/assets/images/space_logo.svg'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page3