import nexus from '../Assets/nexus.png'
import driveLux from '../Assets/drive-luxury.png'
import techTD from '../Assets/tech-trend-digest.png'
import coinwise from '../Assets/coinwise.png'
import portfolio from '../Assets/my-portfolio.png'


const projects = [
  {
    name: 'Nexus',
    image: nexus,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl.',
    links: {
      github: 'https://github.com/TomLayan1/Nexus',
      website: 'https://nexusng.netlify.app/'
    },
    stack: [
      'React', 'CSS', 'Day JS'
    ]
  },
  {
    name: 'Tech Trend Digest',
    image: techTD,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl.',
    links: {
      github: '',
      website: ''
    },
    stack: [
      'React', 'Tailwind', 'Framer Motion'
    ]
  },
  {
    name: 'Coinwise',
    image: coinwise,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl.',
    links: {
      github: '',
      website: 'https://coinwiseng.netlify.app'
    },
    stack: [
      'React', 'Tailwind', 'Framer Motion', 'Chart JS'
    ]
  },
  {
    name: 'DriveLuxury',
    image: driveLux,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl.',
    links: {
      github: 'https://github.com/TomLayan1/Car-rental',
      website: 'https://driveluxury.netlify.app'
    },
    stack: [
      'React', 'Tailwind', 'Framer Motion', 'Swiper JS'
    ]
  },
  {
    name: 'My Portfolio',
    image: portfolio,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl.',
    links: {
      github: '',
      website: ''
    },
    stack: [
      'React', 'Tailwind', 'Framer Motion'
    ]
  }
]

export default projects