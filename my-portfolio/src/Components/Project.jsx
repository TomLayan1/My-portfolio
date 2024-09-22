import React, { useContext} from 'react'
import projects from '../Data/data'
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { PortfolioContext } from '../Context/Context'


const Project = () => {
  // From context
  // const { portfolio } = useContext(PortfolioContext)

  return (
    <section id='portfolio' className='py-12 pb-16 md:py-14 md:pb-14 lg:py-24 lg:pb-24'>
      <div className='container'>
        <div className='w-[70%] lg:w-[80%] mx-auto'>
          <h1 className='text-2xl md:text-4xl text-primaryColor text-center font-bold tracking-widest mb-2'>Portfolio</h1>
          <p className='text-center text-primaryColor tracking-widest mb-6 lg:mb-14 subText'>Recent Works</p>
          <div className='grid md:grid-cols-2 gap-5 md:gap-10'>
            {projects.map(project => (
            <div key={project.name} className='border border-slate-400 overflow-hidden rounded-xl shadow-customShadow'>
              <div className='main-bx flex items-center relative overflow-hidden w-full cursor-pointer'>
                <img className='image  duration-700 rounded-tl-xl rounded-tr-xl' src={project.image} alt='demo' />
                <div className='slide-bx h-full md:px-4 absolute flex items-center bg-hoverBg -translate-x-0 translate-y-full duration-500 rounded-tl-xl rounded-tr-xl'>
                  <div className='text-white'>
                    <p className='text-[14px] md:text-base text-center font-bold uppercase tracking-widest mb-2'>{project.name}</p>
                    <p className='text-[14px] text-center'>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center py-3 px-2 md:px-4'>
                {/* <p className='text-[14px] md:text-base tracking-widest mb-2'>{project.name}</p> */}
                <div className='flex justify-between gap-4 mb-2'>
                  {project.stack.map((stack, index) => (
                    <p key={index} className='text-[13px] md:text-base text-center font-bold'>{stack}</p>
                  ))}
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <a href={project.links.github} target='_blank' className='text-[14px] flex items-center gap-1 cursor-pointer'>Code <FaGithub size={16} /></a>
                  <a href={project.links.website} target='_blank' className='text-[14px]  flex items-center gap-1 cursor-pointer'>Live Demo <GoLinkExternal size={16} /></a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project