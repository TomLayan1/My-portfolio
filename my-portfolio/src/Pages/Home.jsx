import React, { useContext} from 'react'
import Hero from '../Components/Hero'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import { PortfolioContext } from '../Context/Context'
import { FaRegCircle } from "react-icons/fa";
import Service from '../Components/Service'
import Footer from '../Components/Footer'
const Home = () => {

  return (
    <>
      <Hero />
      <Project />
      <Service />
      <Contact  />
      <Footer />
    </>
  )
}

export default Home