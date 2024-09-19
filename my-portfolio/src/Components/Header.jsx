import React, { useState, useContext } from 'react'
import { FiHome } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { LuSendHorizonal } from "react-icons/lu";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { PortfolioContext } from '../Context/Context'


const Header = () => {

  // From context
  const { home, about, portfolio, contact, scrollToSection } = useContext(PortfolioContext)


  const menu = [
    {
      id: '#home',
      icon: <FiHome />,
      name: 'Home',
    },
    {
      id: '#about',
      icon: <IoPersonOutline />,
      name: 'About Me',
    },
    {
      id: '#portfolio',
      icon: <AiOutlinePicture />,
      name: 'Portfolio',
    },
    {
      id: '#contact',
      icon: <LuSendHorizonal />,
      name: 'Contact',
    }
  ]

  const [showMenu, setShowMenu] = useState(false);

  const [currentMenu, setCurrentMenu] = useState('Home')



  const handleMenu = (name) => {
    const selectedMenu = menu.find(menu =>  menu.name === name );
    setCurrentMenu(selectedMenu.name)
    setShowMenu(false)
  }

  return (
    <header id='home' className='bg-white border lg:fixed z-40 top-0 left-0 lg:w-[99.6%]'>
      <div className='container'>
        <div className='w-full py-4 flex items-center justify-between relative text-primaryColor'>
          <h1 className='text-4xl font-extrabold tracking-widest uppercas'><span className='text-secondaryColor text-4xl'>T</span>ómisìn</h1>

          <div className={`flex flex-col gap-5 lg:flex-row lg:gap-8 fixed z-50 lg:static top-0 right-0 pt-20 lg:pt-0 px-[1rem] bg-white w-full h-[100vh] md:w-[50%] lg:w-auto lg:h-auto ${showMenu ? '' : 'transform translate-x-full lg:translate-x-0'} duration-500 ease-in-out`}>
            {menu.map(menu => (
              <a href={menu.id} onClick={()=>handleMenu(menu.name)} key={menu.name} className={`flex items-center gap-1 py-[1px] cursor-pointer ${currentMenu === menu.name? 'lg:border-b-2 border-primaryColor' : ''}`}>
                <p className='lg:hidden'>{menu.icon}</p>
                <p className='font-semibold'>{menu.name}</p>
              </a>
            ))}     
          </div>

          <div onClick={() => setShowMenu(!showMenu)} className='z-50 lg:hidden'>
            {showMenu ? <LiaTimesSolid size={30} /> : <HiOutlineBars3BottomRight size={30} />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header