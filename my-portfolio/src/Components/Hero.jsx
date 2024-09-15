import react from 'react'
import ria from '../Assets/ria.png'
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiLineVerticalThin } from "react-icons/pi";
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
    <div className='w-full relative overflow-hidden h-[90vh] md:h-[40vh] lg:h-[90vh] py-[10px] flex items-center'>
      <div className='container'>
        <div className='flex flex-col md:flex-row items-center gap-10 lg:gap-0 mb-6'>
          <div className='w-full md:w-[60%] flex items-center gap-3'>
            <div className='w-[15%] flex flex-col items-center gap-4'>
              <p className='text-2xl'><PiLineVerticalThin /></p>
              <p className='text-2xl'><FaLinkedin /></p>
              <p className='text-2xl'><FaGithub /></p>
              <p className='text-2xl'><PiLineVerticalThin /></p>
            </div>
            <div className='w-[85%] lg:w-[50%]'>
              <h1 className='text-3xl lg:text-6xl font-bold tracking-widest flex items-center mb-2'>TOMSIN<span className='text-2xl'>👋</span></h1>
              <h2 className='text-xl font-bold mb-2'>Front-end Developer</h2>
              <p className='text-[14px] mb-4'>I enjoy creating robust and scalable front-end applications that provide excellent user experiences.</p>
              <div className='w-[170px] h-[40px] flex border-2 border-primaryColor relative overflow-hidden cursor-pointer button-container'>
                <div className='w-full h-full bg-primaryColor absolute transform -translate-x-full duration-300 ease-linear button-slide'></div>
                <div className='w-full h-full transform absolute -translate-x-0 duration-300 ease-linear flex items-center justify-center button'>Download Resume</div>
              </div>
            </div>
          </div>
          <div className='w-[80%] md:w-[30%] lg:w-[25%] bg-purple-300'>
            <img src={ria} alt='Ria' className='w-full h-full' />
          </div>
        </div>
      </div>
      <div className='text absolute bottom-0 p-0 w-full hidden md:block'>
        <motion.h1
          variants={textSliderVariant}
          initial='initial'
          animate='animate'
          className='text-[80px] lg:text-[120px] whitespace-nowrap font-bold opacity-10'>I build user interfaces for web applications.</motion.h1>
      </div>
    </div>
  )
}

export default Hero