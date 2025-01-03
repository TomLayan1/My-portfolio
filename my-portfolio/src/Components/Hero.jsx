import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiLineVerticalThin } from "react-icons/pi";
// import { PortfolioContext } from '../Context/Context';
import me from '../Assets/me.jpg'

const Hero = () => {

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.3
      }
    }
  }

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
    <section id='home' className='w-full relative overflow-hidden h-[100vh] md:h-[40vh] lg:h-auto py-28 flex items-center'>
      <div className='container'>
        <div className='p-8 flex flex-col items-center justify-center'>
          <div className='mb-8 overflow-hidden'>
            <motion.h1 
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.5 }}
              className='text-center text-6xl md:text-8xl font-bold tracking-widest'>Tomisin</motion.h1>
          </div>
          <div className='mb-8 overflow-hidden'>
            <motion.h1
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-center text-6xl md:text-8xl font-bold tracking-widest'>Afolayan</motion.h1>
          </div>
        </div>
        {/* <div className='lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-0'>

          <div className='w-full md:w-[50%] flex items-center gap-3'>
            <div className='w-[15%] flex flex-col items-center gap-4'>
              <p className='text-2xl'><PiLineVerticalThin /></p>
              <a href='https://www.linkedin.com/in/afolayan-oluwatomisin-428a86206/' className='text-2xl cursor-pointer'><FaLinkedin /></a>
              <a href='https://github.com/TomLayan1' target='_blank' className='text-2xl cursor-pointer'><FaGithub /></a>
              <p className='text-2xl'><PiLineVerticalThin /></p>
            </div>

            <div className='w-[85%] lg:w-[60%]'>
              <h1 className='text-3xl lg:text-6xl font-bold text-primaryColor tracking-widest flex items-center mb-2'>TOMISIN<span className='text-2xl'>👋</span></h1>
              <h2 className='text-xl md:text-[29px] font-bold text-secondaryColor mb-2 subText'>Front-end Developer</h2>
              <p className='text-[14px] leading-7 mb-4'>I enjoy creating robust and scalable front-end applications that provide excellent user experiences.</p>
              <div className='w-[170px] h-[40px] flex border-2 border-primaryColor relative overflow-hidden cursor-pointer button-container'>
                <div className='w-full h-full bg-primaryColor absolute transform -translate-x-full duration-300 ease-linear button-slide'></div>
                <div className='w-full h-full transform absolute -translate-x-0 duration-300 ease-linear flex items-center justify-center button'>Download Résumé</div>
              </div>
            </div>
          </div>

          <div className='w-[80%] md:w-[30%] lg:w-[30%] h-[440px] bg-gradient-to-tr from-black via-white to-white p-[4px] rounded-tr-3xl rounded-bl-3xl'>
            <img src={me} alt='Ria' className='w-full h-full rounded-tr-3xl rounded-bl-3xl' />
          </div>
        </div> */}
      </div>
      <div className='text absolute bottom-0 p-0 w-full hidde md:block'>
        <motion.h1
          variants={textSliderVariant}
          initial='initial'
          animate='animate'
          className='text-[70px] md:text-[80px] lg:text-[120px] whitespace-nowrap font-bold opacity-20'>I build user interfaces for web applications.</motion.h1>
      </div>
    </section>
  )
}

export default Hero