import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div className='pt-10 pb-12 px-4 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-900' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center '>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="Logo" />
          <p className='text-gray-500 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quis doloremque minus. Doloribus
            dolorem nobis hic qui magnam suscipit nulla eos? Nesciunt optio asperiores vero perferendis sed, modi delectus nihil?
          </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-lg font-bold text-white mb-4'>
            Company
          </h3>
          <ul className='flex flex-col gap-2'>
            <li><a href="#Header" className='text-gray-500 hover:text-white'>Home</a></li>
            <li><a href="#About" className='text-gray-500 hover:text-white'>About</a></li>
            <li><a href="#Projects" className='text-gray-500 hover:text-white'>Projects</a></li>
            <li><a href="#" className='text-gray-500 hover:text-white'>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-lg font-bold text-white mb-4'>
            Subscribe to our Newsletter
          </h3>
          <p className='text-gray-500 mb-4 max-w-80'>Stay updated with our latest news and offers, Sent directly to your inbox.</p>
          <div className='flex flex-col md:flex-row gap-4'>
            <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-white placeholder-gray-500' />
            <button className='bg-blue-600 text-white py-2 px-4 rounded'>Subscribe</button>
          </div>

        </div>
      </div>
      <div className='text-center text-gray-500 mt-8 '>
        copyright &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  )
}
