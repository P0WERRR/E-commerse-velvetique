import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-40' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    At our store, we believe in providing the best quality products and exceptional customer service. Join us on our journey to bring you the latest trends and timeless classics.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>

                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul  className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-6789</li>
                    <li>contact@velvetique.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright 2025@ velvetique.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer