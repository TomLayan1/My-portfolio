import nexus from '../Assets/nexus.png'
import driveLux from '../Assets/drive-luxury.png'
import techTD from '../Assets/tech-trend-digest.png'
import coinwise from '../Assets/coinwise.png'
import cityscape from '../Assets/city-scape.png'


export const projects = [
  {
    name: 'City Scape',
    image: cityscape,
    description: 'City Scape is a modern real estate platform that allows users search for rental properties and homes for sale. It features a dedicated property details page that provides in-depth information, including an interactive image carousel for a comprehensive view of each listing. Built with React.js, TypeScript, and Tailwind CSS, It delivers a responsive and visually appealing experience. Property data is dynamically fetched from Rapid API, ensuring up-to-date listings and accurate details.',
    links: {
      github: 'https://github.com/TomLayan1/Real-estate/tree/main/real-estate',
      website: 'https://cityscapeng.netlify.app/'
    },
    stack: [
      'React', 'TypeScript', 'Tailwind'
    ]
  },
  {
    name: 'DriveLuxury',
    image: driveLux,
    description: 'DriveLuxury is a premium car rental web application allowing users to rent luxury vehicles for both personal and business purposes. Leveraging React JS for dynamic functionality and Tailwind CSS for modern, responsive design.',
    links: {
      github: 'https://github.com/TomLayan1/Car-rental/tree/main/car-rental',
      website: 'https://driveluxury.netlify.app'
    },
    stack: [
      'React', 'Tailwind'
    ]
  },
  {
    name: 'Coinwise',
    image: coinwise,
    description: 'Coinwise, a cryptocurrency web app that displays live market prices and historical trends. Using Tailwind CSS for responsive design, Rapid API for real-time data, Moment for precise time formatting, and Chart JS for interactive visualizations.Crypto data is dynamically fetched from Rapid API, ensuring up-to-date and accurate details.',
    links: {
      github: 'https://github.com/TomLayan1/Coinwise/tree/main/coinwise',
      website: 'coinwiseng.netlify.app'
    },
    stack: [
      'React', 'Tailwind'
    ]
  },
  {
    name: 'Tech Trend Digest',
    image: techTD,
    description: 'Tech Trend Digest is a blog website focused on the latest in tech trends. Built using React JS and Tailwind CSS, this project demonstrates my skills in creating responsive, modern web interfaces as a frontend developer.',
    links: {
      github: 'https://github.com/TomLayan1/Blog/tree/main/blog',
      website: 'https://techtrenddigest.netlify.app'
    },
    stack: [
      'React', 'Tailwind'
    ]
  },
  {
    name: 'Nexus',
    image: nexus,
    description: 'Nexus is an e-commerce web app, utilizing React JS for dynamic user interfaces, CSS for responsive design, and Day JS for date handling. It highlights my frontend development skills by delivering a seamless shopping experience with a responsive design and efficient date management.',
    links: {
      github: 'https://github.com/TomLayan1/Nexus/tree/main/nexus',
      website: 'https://nexusng.netlify.app/'
    },
    stack: [
      'React', 'CSS'
    ]
  },
]


export const resume = [
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
        role: ['Frontend Developer'],
        year: '2024'
      }
    ]
  }
]