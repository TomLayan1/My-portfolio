import React, { useState, useContext } from 'react'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { PortfolioContext } from '../Context/Context'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Header = () => {

  // From context
  const { home, about, portfolio, contact, scrollToSection } = useContext(PortfolioContext)


  const menu = [
    {
      id: '#home',
      name: 'Home',
    },
    {
      id: '#about',
      name: 'About Me',
    },
    {
      id: '#portfolio',
      name: 'Portfolio',
    },
    {
      id: '#contact',
      name: 'Contact',
    },
    {
      id: 'resume',
      name: 'résumé'
    }
  ]

  const [showMenu, setShowMenu] = useState(false);

  const [currentMenu, setCurrentMenu] = useState('home')



  const handleMenu = (name) => {
    setCurrentMenu(name);
    setShowMenu(false)
  }

  return (
    <header className='lg:fixed z-40 top-0 left-0 lg:w-[99.6%]'>
      <div className='w-full py-6 px-9 flex items-center justify-between'>
        <a href='#home' className={`text-3xl z-50 ${showMenu ? 'text-white' : 'text-black'}`}>TA</a>

        <div className={`w-full h-[100vh] fixed top-0 right-0 z-40 bg-black flex flex-col  gap-4 items-center justify-center ${showMenu ? '' : 'transform translate-x-full'} duration-500 ease-in-out`}>
          <Link to={'http://localhost:3000/'} onClick={() => {handleMenu('home')}}><motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * 0 }}
            className={`text-2xl font-semibold text-white ${currentMenu === 'home' ? 'border-0 border-b-2 border-white' : ''}`}
          >Home</motion.p></Link>

          <a href='#work' onClick={() => { handleMenu('work')}}><motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * 1 }}
            className={`text-2xl font-semibold text-white ${currentMenu === 'work' ? 'border-0 border-b-2 border-white' : ''}`}
          >Work</motion.p></a>

          <Link to={'/about-me'} onClick={() => { handleMenu('about-Me')}}><motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * 2 }}
            className={`text-2xl font-semibold text-white ${currentMenu === 'about-me' ? 'border-0 border-b-2 border-white' : ''}`}
          >About Me</motion.p></Link>

          <Link to={'/résumé'} onClick={() => { handleMenu('resume')}}><motion.p 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * 3 }}
            className={`text-2xl font-semibold text-white ${currentMenu === 'resume' ? 'border-0 border-b-2 border-white' : ''}`}
          >Résumé</motion.p></Link>

          <a href='#contact' onClick={() => { handleMenu('contact')}}><motion.p 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * 4 }}
            className={`text-2xl font-semibold text-white ${currentMenu === 'contact' ? 'border-0 border-b-2 border-white' : ''}`}
          >Contact</motion.p></a>
        </div>

        <div onClick={() => setShowMenu(!showMenu)} className={`z-50 ${showMenu ? 'text-white' : 'text-black'}`}>
          {showMenu ? <LiaTimesSolid size={35} /> : <HiOutlineBars3BottomRight size={35} />}
        </div>
      </div>
    </header>
  )
}

export default Header