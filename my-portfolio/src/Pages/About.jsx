import React from 'react'
import me from '../Assets/me.jpg'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'
import Resume from '../Components/Resume'


const About = () => {

  return (
    <main>
      <section id='about' className='w-full bg-primaryColor pt-20 md:pb-12'>
        <div className='container'>
          <div className='w-full lg:w-[90%] h-[550px] mx-auto mb-10 md:mb-20 hidden md:flex flex-col items-cente justify-center'>
            <div className='mb-3 h-[100px overflow-hidden'>
              <motion.h2
                initial={{ translateY: 50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='md:text-6xl text-7xl text-white'
              >Transforming creative ideas</motion.h2>
              </div>
              <div className='mb-3 h-[100px overflow-hidden'>
                <motion.h2
                initial={{ translateY: 50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='md:text-6xl text-7xl text-white text-right'
                >into exceptional creations</motion.h2>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-cente gap-4 lg:gap-12'>
            <div className='overflow-hidden w-[250px] h-[250px] lg:w-[25%] lg:h-[450px] shadow-customShadow rounded-full lg:rounded-[30px]'>
              <img src={me} alt='Tomisin' />
            </div>
            <div className='w-full lg:w-[70%] py-3 px-5'>
              <div>
                <div className='mb-11'>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6}}
                    className='text-2xl text-white md:text-4xl tracking-widest font-bold mb-5'
                  >About Me</motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='text-lg text-justify font-serif text-white'
                  >Hi, I’m Tomisin Afolayan. I'm a front-end developer proficient in building high-performance web applications using React.JS with Typescript. My projects have consistently resulted in improved performance and user satisfaction. Eager to contribute to innovative software solutions with a focus on high performance as a dedicated developer.</motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Resume />
      <Footer />
    </main>
  )
}

export default About