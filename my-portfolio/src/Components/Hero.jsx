import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiLineVerticalThin } from "react-icons/pi";

const Hero = ({ homeRef, footerInView }) => {

  const textSliderVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-230%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 50,
        delay: 0.5
      }
    }
  }
  
  return (
    <section ref={homeRef} id='home' className='w-full relative overflow-hidden h-[100vh] md:h-[40vh] lg:h-auto py-32 flex items-center'>
      <div className='container mb-16'>
        <div className='p-8 flex flex-col items-center justify-center'>
          <div className='mb-8 overflow-hidden'>
            <motion.h1 
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.5 }}
              className='text-white text-center text-5xl md:text-8xl font-extrabold tracking-widest'>Tomisin</motion.h1>
          </div>
          <div className='mb-8 overflow-hidden'>
            <motion.h1
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-white text-center text-5xl md:text-8xl font-extrabold tracking-widest'>Afolayan</motion.h1>
          </div>
        </div>

        <div className='fixed w-[60px] h-[100vh] top-0 left-0 flex items-center justify-center z-20'>
          <div className={`w-full flex flex-col items-center gap-4 py-3 text-white bg-buttonBg rounded-tr-2xl rounded-br-2xl shadow-customShadow ${footerInView ? 'hidden' : ''} duration-500`}>
            <p className='text-2xl'><PiLineVerticalThin /></p>
            <a href='https://www.linkedin.com/in/afolayan-oluwatomisin-428a86206/' target='_blank' rel="noreferrer" className='text-2xl cursor-pointer'><FaLinkedin /></a>
            <a href='https://github.com/TomLayan1' target='_blank' rel='noreferrer' className='text-2xl cursor-pointer'><FaGithub /></a>
            <p className='text-2xl'><PiLineVerticalThin /></p>
          </div>
        </div>
      </div>
      <div className='text absolute bottom-0 p-0 w-full hidde md:block'>
        <motion.h1
          variants={textSliderVariant}
          initial='initial'
          animate='animate'
          className='text-[70px] text-[#4c749c] font-serif md:text-[80px] lg:text-[120px] whitespace-nowrap font-bold opacity-40'>I build user interfaces for web applications.</motion.h1>
      </div>
    </section>
  )
}

export default Hero