import React from 'react'
import css from '../Assets/css-3.png'
import html from '../Assets/html-5.png'
import js from '../Assets/js.png'
import reactjs from '../Assets/React.png'
import tailwind from '../Assets/Tailwind CSS.png'
import typescript from '../Assets/typescript.png'
import { motion } from 'framer-motion'


const Service = () => {

  const services = [
    {
      name: 'Frontend Development',
      description: 'With frontend, I\'m able to combine both my design capabilities with my problem- solving skills, and as I code, I am extensively exercising both simulataneously.I lean more into React frameworks, mainly Next.js, which allows me to increase web performance, optimize images and media much easier, and improve SEO rankings, and TypeScript for catching bugs and discrepanicies early, ensuring that my code is error - free and correct throughout.',
      stack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Git']
    }
  ]
  
  return (
    <section className='py-12 pb-16 md:py-14 md:pb-14 lg:py-28 lg:pb-24'>
      <div className='container'>
        <div className='h-[100vh] md:h-[550px] flex justify-center items-center overflow-hidden'>
          <motion.h1
            initial={{ translateX: 200 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='text-center mb-14 text-8xl md:text-9xl pb-48 pt-36'
          >SERVICE{services.length > 1 ? 'S' : ''}</motion.h1>
        </div>

        {services.map((service, i) => (
          <div key={i} className='lg:w-[80%] mx-auto mb-6'>
            <h3 className='text-2xl font-bold mb-2'>{service.name}</h3>
            <div className='flex flex-col md:flex-row gap-2 md:gap-14'>
              <div className='w-full md:w-[50%]'>
                <h1 className='text-[14px] text-justify font-sans leading-7 mb-5 tracking-wide'>{service.description} </h1>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='fle items-center gap-2 w-full md:w-[50%]'>
                <h5 className='text-white md:text-xl w-[20%] font-bold subText mb-2'>Stack</h5>
                <div className='w-[80%] flex flex-wrap items-center gap-2 md:gap-3'>
                  {service.stack.map((stack, index) => (
                    <div key={index} className='text-[14px] px-2 md:px-4 py-[2px] border-2 border-t-0 border-black rounded-full'>
                      <p>{stack}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service