import React from 'react'
import me from '../Assets/me.jpg'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'
import Growth from '../Components/Growth'


const About = () => {
   const about = [
    { id: 1,
      heading: 'About Me',
       content: 'I am Tomisin Afolayan a frontend web developer passionate about building clean, responsive, and user-friendly websites. Skilled in HTML, CSS, Tailwind, JavaScript, React, and TypeScript, I love bringing design concepts to life through functional and interactive interfaces. I aim to create digital experiences that are both visually appealing and intuitive. I thrive in collaborative settings, embracing teamwork and open communication to overcome challenges. Always eager to learn and share knowledge, I am dedicated to contributing my expertise to develop impactful products.'
    }
   ]

  return (
    <>
      <section className='w-full pt-20 pb-12'>
        <div className='container'>
          <div className='w-[80%] h-[550px] mx-auto mb-20 hidden md:flex flex-col items-cente justify-center'>
            <div className='overflow-hidden'>
              <motion.h2
                initial={{ translateY: 70 }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='md:text-7xl'
              >Transforming creative ideas</motion.h2>
              </div>
              <div className='overflow-hidden'>
                <motion.h2
                  initial={{ translateY: 70 }}
                  whileInView={{ translateY: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='md:text-7xl text-right'
                >into exceptional creations</motion.h2>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-cente gap-4 lg:gap-12'>
            <div className='overflow-hidden w-[250px] h-[250px] lg:w-[25%] lg:h-[450px] shadow-customShadow rounded-full lg:rounded-[30px]'>
              <img src={me} alt='Tomisin' />
            </div>
            <div className='w-full lg:w-[70%] py-3 px-5'>
              <div>
                {about.map((item, i) => (
                  <div key={i} className='mb-11'>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6}}
                        className={`text-2xl md:text-4xl tracking-widest font-bold mb-5 ${ item.id % 2 !== 0 ? 'text-left' : 'text-right' }`}
                      >{item.heading}</motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className='text-[15px] text-justify font-serif'
                      >{item.content}</motion.p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>
      <Growth />
      <Footer />
    </>
  )
}

export default About