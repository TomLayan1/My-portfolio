import React, { useState } from 'react'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [currentMenu, setCurrentMenu] = useState('home')

  const handleMenu = (name) => {
    setCurrentMenu(name);
    setShowMenu(false)
  }

  return (
    <header className='lg:fixed z-40 top-0 left-0 lg:w-[99.6%]'>
      <div className='w-full py-6 px-9 flex items-center justify-between'>
        <Link to={'/'} className='text-4xl font-bold z-50 text-buttonBg'>TA</Link>

        <div className={`w-full h-[100vh] fixed top-0 right-0 z-40 bg-white ${showMenu ? '' : 'transform translate-x-full'} duration-500 ease-in flex items-center justify-center`}>
          <p className='text-primaryColor text-8xl font-extrabold opacity-50'>TA</p>
          <div className={`w-full h-[100vh] fixed top-0 right-0 z-40 bg-secondaryColor flex flex-col  gap-4 items-center justify-center ${showMenu ? '' : 'transform translate-x-full'} duration-1000 ease-in`}>
            <Link to={'/'} onClick={() => {handleMenu('home')}}><motion.p
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * 0 }}
              className={`text-2xl font-semibold text-white mb-4 ${currentMenu === 'home' ? 'border-0 border-b-2 border-white' : ''}`}
            >Home</motion.p></Link>

            <HashLink smooth to={'/#projects'} onClick={() => { handleMenu('work')}}><motion.p
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * 1 }}
              className={`text-2xl font-semibold text-white mb-4 ${currentMenu === 'work' ? 'border-0 border-b-2 border-white' : ''}`}
            >Projects</motion.p></HashLink>

            <Link to={'/about-me'} onClick={() => { handleMenu('about-me')}}><motion.p
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * 2 }}me
              className={`text-2xl font-semibold text-white mb-4 ${currentMenu === 'about-me' ? 'border-0 border-b-2 border-white' : ''}`}
            >About Me</motion.p></Link>

            <HashLink smooth to={'/#contact'} onClick={() => { handleMenu('contact')}}><motion.p 
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * 4 }}
              className={`text-2xl font-semibold text-white mb-4 ${currentMenu === 'contact' ? 'border-0 border-b-2 border-white' : ''}`}
            >Contact</motion.p></HashLink>
          </div>
        </div>

        <div className='flex items-center gap-5'>
          <div className='w-[140px] lg:w-[220px] h-[40px] flex border-2 border-buttonBg relative overflow-hidden cursor-pointer button-container z-30'>
            <div className='w-full h-full bg-buttonBg absolute transform -translate-x-full duration-300 ease-linear button-slide'></div>
            <a href='tomisin.pdf' download='tomisin resume.pdf' className='w-full h-full transform absolute -translate-x-0 duration-300 ease-linear flex items-center justify-center button'>
              <button className='text-buttonBg hover:text-white flex items-center gap-3 py-2 px-5 cursor-pointer'>Get Résumé <BsArrowUpRightCircleFill size={20} /></button>
            </a>
          </div>
          <div onClick={() => setShowMenu(!showMenu)} className='text-buttonBg cursor-pointer z-50'>
            {showMenu ? <LiaTimesSolid size={35} /> : <HiOutlineBars3BottomRight size={35} />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header