import React from 'react'

const Button = ({caption="Join us now"}) => {
  return (
    <div>
        <button className='w-fit h-fit px-8 py-2 text-lg bg-red-600 text-white mt-10 mb-10'>{caption}</button>
    </div>
  )
}

export default Button