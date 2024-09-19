import React, { useContext } from 'react'
import ria from '../Assets/ria.png'
import css from '../Assets/css-3.png'
import html from '../Assets/html-5.png'
import js from '../Assets/js.png'
import reactjs from '../Assets/React.png'
import tailwind from '../Assets/Tailwind CSS.png'
import typescript from '../Assets/typescript.png'
import { PortfolioContext } from '../Context/Context'



const About = () => {

  // From context
  // const { about } = useContext(PortfolioContext)

  const stack = [html, css, js, reactjs, tailwind, typescript]

  return (
    <section id='about' className='bg-primaryColor py-12 pb-16 md:py-14 md:pb-14 lg:py-28 lg:pb-24'>
      <div className='container'>
        <div className='lg:w-[80%] mx-auto'>
          <h1 className='text-2xl md:text-4xl text-white tracking-widest text-center font-bold mb-2'>About Me</h1>
          <p className='text-center text-white tracking-widest mb-6 lg:mb-14 subText'>Introduction</p>
          <div className='flex items-center justify-between'>
            <img className='hidden md:block w-[30%] lg:w-[%] rounded-xl' src={ria} />
            <div className='md:w-[60%]'>
              <p className='text-[14px] text-white leading-7 mb-5 tracking-wide'>I am a junior frontend web developer passionate about building clean, responsive, and user-friendly websites. Skilled in HTML, CSS, Tailwind, JavaScript, React, and TypeScript, I love bringing design concepts to life through functional and interactive interfaces. I aim to create digital experiences that are both visually appealing and intuitive. I thrive in collaborative settings, embracing teamwork and open communication to overcome challenges. Always eager to learn and share knowledge, I am dedicated to contributing my expertise to develop impactful products.</p>
              <div className='flex items-center gap-2'>
                <h5 className='text-white md:text-xl w-[20%] font-bold subText'>Stack |</h5>
                <div className='w-[80%] flex items-center justify-between'>
                  {stack.map((stack, index) => (
                    <img className='w-[30px]' key={index} src={stack} alt='stack' />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About