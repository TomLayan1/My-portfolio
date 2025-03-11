import React from 'react';
import { resume } from '../Data/data';

const Resume = () => {
  const myResume = resume;

  return (
    <section id='resume' className='py-4 md:py-12 bg-primaryColor'>
      <div className='container font-serif'>
        {myResume?.map(item => (
        <div key={item.id} className='flex flex-col lg:flex-row justify-between py-4'>
          <h1 className='text-lg text-white font-bold'>{item.category}</h1>
          <div className='lg:w-[80%] border-0 border-white border-b-[1px]'>
            {item.list.map((list, i) => (
              <div key={i} className='w-full flex flex-col md:flex-row gap-2 md:gap-10 mb-3'>
                <div className='w-[80%]'>
                  <a href={list.url} target='_blank' rel='noreferrer' className='text-white mb-5 font-bold'>{list.institution}</a>
                  {list.role.map(role => (
                    <p key={role} className='text-white'>{role}</p>
                  ))}
                </div>
                <p className='text-white'>{list.year}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Resume