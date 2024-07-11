import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='relative w-full h-[38vh] md:h-56 bg-red-600 pt-6 leading-normal text-center md:text-start  '>
            <div className='md:flex md:justify-between md:px-44 md:items-start'>
                <div>
                <p className='text-white text-center md:text-start mb-7 md:mb-3'>Walkover Web Solutions Pvt Ltd, <br />
                405-406, CAPTAIN C.S.NAYUDU ARCADE, <br />
                OLD PALASIA ROAD, INDORE, Madhya Pradesh
                </p>
                <a className='text-white' href="https://goo.gl/maps/M93XQRyqzzArWdxU9">see on map</a>
                </div>
                <div className='flex justify-center items-center gap-6 mt-4'>
                    <div className='bg-red-700 p-2 rounded-full text-xl text-white'>
                        <FaFacebookF/>
                    </div>
                    <div className='bg-red-700 p-2 rounded-full text-xl text-white'>
                        <FaTwitter/>
                    </div>
                    <div className='bg-red-700 p-2 rounded-full text-xl text-white'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='bg-red-700 p-2 rounded-full text-xl text-white'>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
            <div className='w-full md:h-14 h-24 bg-red-800 absolute bottom-0 left-0 md:px-44 md:pt-2 md:flex md:justify-between md:items-start pt-2'>
                <div className='px-5 '>
                    <h5 className='text-red-400 text-sm'>Walkover Web Solutions Pvt. Ltd. | All Rights Reserved | Privacy Policy</h5>
                </div>
                <div>
                    <p className='text-red-400 text-sm'>Maitain and develop by Saurabh Gupta</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer