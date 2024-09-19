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
                  <p className='text-[14px] text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl.</p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center py-3 px-2 md:px-4'>
                <p className='text-[14px] md:text-base tracking-widest mb-2'>{project.name}</p>
                <div className='flex justify-between gap-4 mb-2'>
                  {project.stack.map((stack, index) => (
                    <p key={index} className='text-[13px] md:text-base text-center font-bold'>{stack}</p>
                  ))}
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <a href={project.links.github} target='_blank' className='text-lg cursor-pointer'><FaGithub /></a>
                  <a href={project.links.website} target='_blank' className='text-lg cursor-pointer'><GoLinkExternal /></a>
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