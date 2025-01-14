import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20 h-auto md:h-screen">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-red-500 to-yellow-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discuss web development projects.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-orange-400 mr-2'></FaEnvelope>
                <a href="mailto:gothankarhitesh05@gmail.com" className='hover:underline'>
                    gothankarhitesh05@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-orange-400 mr-2'></FaPhone>
                <span> 9076054060</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-orange-400 mr-2'></FaMapMarkedAlt>
                <span>Dahisar Mumbai Maharashtra</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-orange-200'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label className='block mb-2'>Email</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-orange-200'
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-orange-200'
                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                <button className='bg-gradient-to-r from-red-500 to-yellow-400 text-white md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default Contact