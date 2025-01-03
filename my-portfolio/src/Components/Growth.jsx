import React from 'react'

const Growth = () => {
  const growth = [
    {
      id: 1,
      category: 'EDUCATION',
      list: [
        {
          institution: 'University of Ilorin, Nigeria.',
          role: ['B.Sc. Geology and Mineral Science'],
          year: '2019 - 2024'
        },
        {
          institution: 'FreeCodeCamp. Online',
          role: ['Responsive Web Design', 'Javascript Algorithm And Data Structure'],
          url: 'https://www.freecodecamp.org/',
          year: '2023 - 2024'
        }
      ]
    },
    {
      id: 2,
      category: 'EXPERIENCE',
      list: [
        {
          institution: 'ExamCompassNG, Lagos, Nigeria.',
          role: ['Frontend Developer Intern'],
          year: '2024'
        }
      ]
    }
  ]
  return (
    <section className='py-12 '>
      <div className='container font-serif'>
      {growth?.map(item => (
        <div key={item.id} className='flex flex-col lg:flex-row justify-between py-4'>
          <h1>{item.category}</h1>
          <div className='lg:w-[80%] border-0 border-black border-b-[1px]'>
            {item.list.map((list, i) => (
              <div key={i} className='w-full flex flex-col md:flex-row gap-2 md:gap-10 mb-3'>
                <div className='w-[80%]'>
                  <a href={list.url} target='_blank' className='mb-5 font-bold'>{list.institution}</a>
                  {list.role.map(role => (
                    <p key={role} className=''>{role}</p>
                  ))}
                </div>
                <p>{list.year}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Growth