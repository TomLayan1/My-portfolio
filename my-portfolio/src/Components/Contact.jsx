import React, { useContext, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { TiArrowRight } from "react-icons/ti";
import { PortfolioContext } from '../Context/Context'


const Contact = () => {

  const myContacts = [
    {
      icon: <FaWhatsapp />,
      name: 'Email',
      linkText: 'afolayantomisin1919@gmail.com',
      link: 'mailto:afolayantomisin1919@gmail.com'
    },
    {
      icon: <RiMailSendLine />,
      name: 'Whatsapp',
      linkText: '08144180900',
      link: 'https://wa.me/qr/GNIHFY6HJKKUH1'
    }
  ]

  const [contact, setContact] = useState({
    user_name: '',
    user_mail: '',

  })


  return (
    <div id='contact' className='py-12 pb-16 md:py-14 md:pb-14 lg:py-28 lg:pb-28'>
      <div className='container'>
        <div className='lg:w-[80%] mx-auto flex flex-col gap-10 md:flex-row justify-between'>
          <div>
            <h3 className='text-2xl text-center font-bold mb-5 subText'>Talk to me</h3>
            <div className='flex flex-col gap-5 md:gap-7'>
              {myContacts.map(contact => (
                <div key={contact.name} className='border border-slate-400 p-5 w-[80%] md:w-full mx-auto rounded-xl flex flex-col items-center gap-3 shadow-customShadow'>
                  <div className='flex flex-col items-center'>
                    <p className='text-xl'>{contact.icon}</p>
                    <p className='text-[14px] font-semibold'>{contact.name}</p>
                    <p className=''>{contact.linkText}</p>
                  </div>
                  <a href={contact.link} target='_blank' className='flex items-center cursor-pointer'>Write me <TiArrowRight size={20} /></a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-2xl text-center font-bold mb-5 subText'>Write to me</h3>
            <form className='w-[80%] mx-auto text-[14px]'>
              <input
                type='text'
                className='w-full h-[40px] border border-slate-400 rounded-lg p-1 px-2 mb-5'
                placeholder='Name'
                required />
              <input
                type='email'
                className='w-full h-[40px] border border-slate-400 rounded-lg p-1 px-2 mb-5'
                placeholder='Email'
                required />
              <textarea
                className='w-full h-[120px] border border-slate-400 rounded-lg p-1 px-2 mb-5'
                placeholder='Message'
                required />
              <div className='w-[170px] lg:w-[220px] h-[40px] flex border-2 border-primaryColor relative overflow-hidden cursor-pointer button-container'>
                <div className='w-full h-full bg-primaryColor absolute transform -translate-x-full duration-300 ease-linear button-slide'></div>
                <div className='w-full h-full transform absolute -translate-x-0 duration-300 ease-linear flex items-center justify-center button'>
                  <button type='submit' className='w-full h-full'>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact