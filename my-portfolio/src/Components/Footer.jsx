import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = ({ footerRef }) => {

  return (
    <footer ref={footerRef} id='footer' className='bg-primaryColor text-white w-full py-12 lg:pb-20 lg:pt-32'>
      <div className='container'>
        <div className='md:w-[90%] lg:w-[80%] mx-auto'>
          <p className='mb-3 tracking-widest subText'>SAY HELLO</p>
          <div className='flex flex-col md:flex-row gap-6 md:gap-32 lg:mb-10'>
            <a href='mailto:afolayantomisin1919@gmail.com' className='mb-6 block tracking-widest cursor-pointer'>afolayantomisin1919@gmail.com</a>
            <div className='flex flex-col gap-4 mb-16'>
              <Link to={'/'} className='tracking-widest cursor-pointer'>Home</Link>
              <Link to={'/about'} className='tracking-widest cursor-pointer'>About Me</Link>
              <a href='#portfolio' className='tracking-widest cursor-pointer'>Portfolio</a>
              <Link className='tracking-widest cursor-pointer'>My Résumé</Link>
            </div>
          </div>
          <hr className='border-1 border-white mb-10' />
          <div className='flex flex-col-reverse md:flex-row md:items-center gap-5 md:gap-48 lg:justify-between'>
            <p>&copy; Tomisin Afolayan 2024</p>
            <div className='hidde w-auto flex flex-row items-center gap-4'>
              <p className='text-4xl'><MdOutlineHorizontalRule /></p>
              <a href='https://www.linkedin.com/in/afolayan-oluwatomisin-428a86206/' className='text-2xl'><FaLinkedin /></a>
              <a href='https://github.com/TomLayan1' target='_blank' rel='noreferrer' className='text-2xl'><FaGithub /></a>
              <p className='text-4xl'><MdOutlineHorizontalRule /></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer