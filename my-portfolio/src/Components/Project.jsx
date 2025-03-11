import React from 'react'
import { projects } from '../Data/data';
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';


const Project = ({ workRef }) => {

  return (
    <section ref={workRef} id='projects' className='py-12 pb-16 md:py-14 md:pb-14 lg:py-24 lg:pb-24'>
      <div className='container'>
        <div className='w-[95%] lg:w-[80%] mx-auto'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl text-white text-center font-bold tracking-widest mb-20'>Projects</h1>
          <div className='grid md:grid-cols-2 gap-5 md:gap-10'>
            {projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 * i }}
                key={project.name} className='bg-[#ffffff16] border border-[#2d3847] overflow-hidden rounded-xl shadow-customShadow'>
              <div className='main-bx flex items-center relative overflow-hidden w-full cursor-pointer'>
                <img className='image  duration-700 rounded-tl-xl rounded-tr-xl' src={project.image} alt='demo' />
                <div className='slide-bx h-full md:px-4 absolute flex items-center bg-hoverBg -translate-x-0 translate-y-full duration-500 rounded-tl-xl rounded-tr-xl'>
                  <div className='text-white'>
                    <p className='text- text-center'>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center py-3 px-2 md:px-4'>
                <div className='flex justify-between gap-4 mb-2'>
                  {project.stack.map((stack, index) => (
                    <p key={index} className='text-[13px] text-white md:text-base text-center font-bold'>{stack}</p>
                  ))}
                </div>
                <div className='flex items-center justify-center gap-3 text-white'>
                  <a href={project.links.github} target='_blank' rel='noreferrer' className='text-[14px] flex items-center gap-1 cursor-pointer'>Code <FaGithub size={16} /></a>
                    <a href={project.links.website} target='_blank' rel='noreferrer' className='text-[14px]  flex items-center gap-1 cursor-pointer'>Live Demo <GoLinkExternal size={16} /></a>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project