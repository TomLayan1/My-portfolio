import React, { useContext} from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import { PortfolioContext } from '../Context/Context'


const Home = () => {
  // From context
  const { home, about, portfolio, contact, footer } = useContext(PortfolioContext)

  return (
    <>
      <Hero />
      <About />
      <Project />
      <hr />
      <Contact  />
      <Footer />
    </>
  )
}

export default Home