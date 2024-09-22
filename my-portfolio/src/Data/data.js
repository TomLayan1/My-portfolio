import nexus from '../Assets/nexus.png'
import driveLux from '../Assets/drive-luxury.png'
import techTD from '../Assets/tech-trend-digest.png'
import coinwise from '../Assets/coinwise.png'


const projects = [
  {
    name: 'Nexus',
    image: nexus,
    description: 'Nexus is an e-commerce web app, utilizing React JS for dynamic user interfaces, CSS for responsive design, and Day JS for date handling. It highlights my frontend development skills by delivering a seamless shopping experience with a responsive design and efficient date management.',
    links: {
      github: 'https://github.com/TomLayan1/Nexus',
      website: 'https://nexusng.netlify.app/'
    },
    stack: [
      'React', 'CSS'
    ]
  },
  {
    name: 'Tech Trend Digest',
    image: techTD,
    description: 'Tech Trend Digest is a blog website focused on the latest in tech trends. Built using React JS and Tailwind CSS, this project demonstrates my skills in creating responsive, modern web interfaces as a frontend developer.',
    links: {
      github: 'https://github.com/TomLayan1/Blog',
      website: 'https://techtrenddigest.netlify.app'
    },
    stack: [
      'React', 'Tailwind'
    ]
  },
  {
    name: 'Coinwise',
    image: coinwise,
    description: 'Coinwise, a cryptocurrency web app that displays live market prices and historical trends. Using Tailwind CSS for responsive design, Rapid API for real-time data, Moment for precise time formatting, and Chart JS for interactive visualizations, this project demonstrates my ability to integrate advanced tools in frontend development.',
    links: {
      github: 'https://github.com/TomLayan1/Coinwise',
      website: 'coinwiseng.netlify.app'
    },
    stack: [
      'React', 'Tailwind'
    ]
  },
  {
    name: 'DriveLuxury',
    image: driveLux,
    description: 'DriveLuxury is a premium car rental web application allowing users to rent luxury vehicles for both personal and business purposes. Leveraging React JS for dynamic functionality and Tailwind CSS for modern, responsive design.',
    links: {
      github: 'https://github.com/TomLayan1/Car-rental',
      website: 'https://driveluxury.netlify.app'
    },
    stack: [
      'React', 'Tailwind'
    ]
  }
]

export default projects