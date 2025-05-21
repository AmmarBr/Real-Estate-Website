import React from 'react'
import NavBar from './NavBar'
import { motion } from 'framer-motion'
export default function Header() {
  return (
    <div
      className='min-h-screen  bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: `url('/header_img.png')` }} id='Header'>
      <NavBar />
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      className='container mx-auto flex flex-col items-center justify-center h-full text-center py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-4xl md:text-6xl lg:text-8xl inline-block max-w-4xl font-semibold text-white text-center'>
          Explore homes that fit your lifestyle
        </h2>
        <div className='space-x-6 mt-16'>
          <a href="#Projects" className="hover:text-gray-400 cursor-pointer border border-white px-8 py-3 rounded">Projects</a>
          <a href="#Contact" className="hover:text-gray-400  cursor-pointer bg-blue-500 px-8 py-3 rounded">Contact us</a>
        </div>
      </motion.div>
    </div>
  )
}
