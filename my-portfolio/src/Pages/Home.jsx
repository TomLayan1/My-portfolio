import React, { useEffect, useRef } from 'react'
import Hero from '../Components/Hero'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import Service from '../Components/Service'
import Footer from '../Components/Footer'
import useInView from '../Hooks/UseInview'
const Home = () => {

  const home = useRef(null)
  const work = useRef(null)
  const service = useRef(null)
  const contact = useRef(null)
  const footer = useRef(null)

  const homeInView = useInView(home, { threshold: 0.5 });
  const workInView = useInView(work, { threshold: 0.5 });
  const serviceInView = useInView(service, { threshold: 0.5 });
  const contactInView = useInView(contact, { threshold: 0.5 });
  const footerInView = useInView(footer, { threshold: 0.5 });

  useEffect(() => {
    if (homeInView) console.log('Hero is in view');
    if (workInView) console.log('Project is in view');
    if (serviceInView) console.log('Service is in view');
    if (contactInView) console.log('Contact is in view');
    if (footerInView) console.log('Footer is in view');
  }, [homeInView, workInView, serviceInView, contactInView, footerInView]);

  return (
    <main className='bg-primaryColor'>
      <Hero homeRef={home} footerInView={footerInView} />
      <Project workRef={work} />
      <Service serviceRef={service} />
      <Contact contactRef={contact} />
      <Footer footerRef={footer} />
    </main>
  )
}

export default Home