import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden min-h-screen'
            id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About
                <span className='underline underline-offset-4 decoration-1 under font-light'> Our Company</span>
            </h1>
            <p
                className='text-gray-500 max-w-xl text-center mb-8'>
                Passionate about real estate and dedicated to helping our clients find their dream homes.
            </p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
                <img src={assets.brand_img} alt='About Our Company' className='w-full sm:w-1/2 h-auto max-w-lg' />
                <div className='flex flex-col items-center md:items-start gap-4 md:gap-8'>
                    <div className='grid grid-cols-2  gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-500'>10+</p>
                            <p className=''>Years of Experience</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-500'>12+</p>
                            <p className=''>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-500'>20+</p>
                            <p className=''>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-500'>25+</p>
                            <p className=''>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='text-gray-500 my-10 max-w-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam ad, cum, iusto tenetur fugiat
                        voluptate saepe architecto nihil expedita debitis tempore voluptatibus qui rerum officia iure rem eos corrupti.
                    </p>
                    <button className='bg-blue-600 text-white py-2 px-8 rounded'>Learn More</button>
                </div>

            </div>
        </motion.div>
    )
}
