import react, { useState } from 'react'
import { FiHome } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { LuSendHorizonal } from "react-icons/lu";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {

  const menu = [
    {
      icon: <FiHome />,
      name: 'Home'
    },
    {
      icon: <IoPersonOutline />,
      name: 'About Me'
    },
    {
      icon: <GiSkills />,
      name: 'Skills'
    },
    {
      icon: <AiOutlinePicture />,
      name: 'Portfolio'
    },
    {
      icon: <LuSendHorizonal />,
      name: 'Contact'
    }
  ]

  const [showMenu, setShowMenu] = useState(false);

  const [currentMenu, setCurrentMenu] = useState('Home')
  console.log(currentMenu)

  const handleMenu = (name) => {
    const selectedMenu = menu.find(menu =>  menu.name === name );
    setCurrentMenu(selectedMenu.name)
    setShowMenu(false)
  }

  return (
    <div className='border'>
      <div className='container'>
        <div className='w-full py-4 flex items-center justify-between relative text-primaryColor'>
          <h1 className='text-2xl font-extrabold tracking-widest uppercase'>Tomisin</h1>

          <div className={`flex flex-col gap-5 lg:flex-row lg:gap-8 fixed lg:static top-0 right-0 pt-20 lg:pt-0 px-[1rem] bg-white w-full md:w-[50%] lg:w-auto h-[100vh] lg:h-auto ${showMenu ? '' : 'transform translate-x-full lg:translate-x-0'} duration-500 ease-in-out`}>
            {menu.map(menu => (
              <div onClick={()=>handleMenu(menu.name)} key={menu.name} className="flex items-center gap-1 py-[6px]">
                <p className='lg:hidden'>{menu.icon}</p>
                <p className='font-semibold'>{menu.name}</p>
              </div>
            ))}     
          </div>

          <div onClick={() => setShowMenu(!showMenu)} className='z-30 lg:hidden'>
            {showMenu ? <LiaTimesSolid size={30} /> : <HiOutlineBars3BottomRight size={30} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header