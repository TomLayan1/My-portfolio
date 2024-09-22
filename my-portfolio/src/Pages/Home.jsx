import React, { useContext} from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import { PortfolioContext } from '../Context/Context'
import { FaRegCircle } from "react-icons/fa";
import { FaSquareFull } from "react-icons/fa";
import Header from '../Components/Header'
const Home = () => {
  // From context
  const { home, about, portfolio, contact, footer } = useContext(PortfolioContext)

  return (
    <>
      <Header />
      <div className='container'>
        <div className='text-secondaryColor hidden lg:flex flex-col gap-4 fixed right-16 bottom-16'>
          <FaRegCircle />
          <FaRegCircle />
          <FaRegCircle />
          <FaRegCircle />
        </div>
      </div>
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