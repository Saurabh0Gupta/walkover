import React from 'react'

const Page3Sub = (props) => {
  return (
    <>
        <div className='w-full h-42 mb-5'>
            <div className='w-16 md:mb-2'>
                <img src={props.imgUrl} alt="" />
            </div>
            <p className='text-base'>{props.para1}</p>
            <p className='mt-2 font-semibold'>{props.para2}</p>
            <a className='text-blue-400' href="">know more</a>
        </div>
    </>
  )
}

export default Page3Sub