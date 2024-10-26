import React, { useState } from 'react'
import hamburgerimg from '../assets/hamburgermenu.png'
import crossimg from '../assets/crossimg.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglemenu = () =>{
      setIsOpen(!isOpen);
    }
  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between p-4 bg-orange-600 text-white'>
            <div className='text-2xl font-bold cursor-pointer'>Hitesh</div>
            <div className='block lg:hidden'>
              <button onClick={togglemenu} className='focus:outline-none'>{isOpen ? (<img src={crossimg} height={40} width={40}/>) : (<img src={hamburgerimg} height={20} width={20}/>) }</button>
            </div>
            <ul className={`flex-col lg:flex-row lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'flex' : 'hidden'} lg:visible`}>
              <li>
              <Link to="/" className='block px-2 py-1 hover:text-yellow-400 rounded'>Home</Link>
              </li>
            <li>
            <Link to="/about" className='block px-2 py-1 hover:text-yellow-400 rounded'>About Me</Link>
            </li>

            <li>
            <Link to="/skills" className='block px-2 py-1 hover:text-yellow-400 rounded'>Skills</Link>
            </li>

            <li>
            <Link to="/projects" className='block px-2 py-1 hover:text-yellow-400 rounded'>Projects</Link>
            </li>

            <li>
            <Link to="/contact" className='block px-2 py-1 hover:text-yellow-400 rounded'>Contact</Link>
            </li>
            </ul>
    </nav>
  )
}

export default Navbar