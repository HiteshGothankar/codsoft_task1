import React from 'react'
import profileimg from '../assets/Profileimg.jpeg'
import resume from '../assets/Hitesh_Gothankar_Resume.pdf'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center md:h-screen py-16'>
        <img src={profileimg} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Hitesh Gothankar</span>
            , Frontend Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I am passionate about building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='text-lg bg-gradient-to-r from-yellow-600 to-orange-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-7 py-3 rounded-full'>
              <a href={resume} download="resume">Resume</a></button>
        </div>

    </div>
  )
}

export default Hero