import React, { useContext } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { PortfolioContext } from '../Context/Context'
import { Link } from 'react-router-dom';


const Footer = () => {
  // From context
  // const { footer } = useContext(PortfolioContext)

  return (
    <footer id='footer' className='bg-primaryColor text-white w-full py-16 lg:pb-20 lg:pt-32'>
      <div className='container'>
        <div className='md:w-[90%] lg:w-[80%] mx-auto'>
          <p className='mb-3 tracking-widest subText'>SAY HELLO</p>
          <div className='flex flex-col md:flex-row gap-6 md:gap-32 lg:mb-10'>
            <p className='mb-6 block tracking-widest cursor-pointer'>afolayantomisin1919@gmail.com</p>
            <div className='flex flex-col gap-4 mb-16'>
              <a href='#home' className='tracking-widest cursor-pointer'>Home</a>
              <a href='#about' className='tracking-widest cursor-pointer'>About Me</a>
              <a href='#portfolio' className='tracking-widest cursor-pointer'>Portfolio</a>
              <Link className='tracking-widest cursor-pointer'>My Résumé</Link>
            </div>
          </div>
          <hr className='border-1 border-white mb-10' />
          <div className='flex items-center gap-40 lg:justify-between'>
            <p>&copy; Tomisin Afolayan 2024</p>
            <div className='hidden w-auto md:flex flex-row items-center gap-4'>
              <p className='text-4xl'><MdOutlineHorizontalRule /></p>
              <p className='text-2xl'><FaLinkedin /></p>
              <a href='https://github.com/TomLayan1' target='_blank' className='text-2xl'><FaGithub /></a>
              <p className='text-4xl'><MdOutlineHorizontalRule /></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer