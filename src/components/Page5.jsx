import React from 'react'
import Button from './Button'

const Page5 = () => {
  return (
    <>
        <div className='w-full h-[150vh] md:h-[115vh] pt-10 md:pt-5 px-5 md:px-44'>
            <div className='md:hidden'>
                <Button caption="Apply Now"/>
            </div>
            <div className='text-7xl font-bold leading-tight mb-5 hidden md:block'>
                <h1>You are at the <br /> right place</h1>
            </div>
            <div>
                <h3 className='text-xl mb-10 md:text-3xl'>We believe in hiring passionate humans who can help in making
                other people’s lives better—we are currently hiring for remote
                working designing and software jobs. If that sounds potential to
                you, then get ready to innovate with one of the best IT
                startups.</h3>
            </div>
            <div>
                <h4 className='text-2xl font-semibold mb-5 md:font-medium'>Sane hours to balance work and passion</h4>
            </div>
            <div>
                <p className='text-xl '>Flexibility while we work comes ahead of everything. We work
                immensely hard, but we also understand that to come out with
                their best version, our team needs their space.</p>
            </div>
            <div>
                <h4 className='text-2xl font-semibold mb-10'>The way you do anything is the way you do everything.</h4>
            </div>
            <div>
                <p className='text-xl mb-10'>How you work on any experience in your life or even your daily
                tasks, is how you probably handle all of it. We try and do it
                all with a smile :)</p>
            </div>
            <div>
                <p className='text-xl mb-10'>What’s most rewarding for us is to collaborate with smart,
                intelligent, witty people across any part of the world.</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold md:hidden mb-20'>You are at the right place</h1>
            </div>
            <div className='hidden md:block'>
                <Button caption="Apply Now"/>
            </div>
            <div>
                <h2 className='text-4xl md:text-3xl'>Freedom + Responsibility at Walkover</h2>
            </div>
        </div>
    </>
  )
}

export default Page5