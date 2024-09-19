import { createContext, useRef } from "react";


export const PortfolioContext = createContext(null);

const PortfolioContextProvider = (props) => {

  const home = useRef(null)
  const about = useRef(null)
  const portfolio = useRef(null)
  const contact = useRef(null)
  const footer = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const contextValue = {
    home,
    about,
    portfolio,
    contact,
    footer,
    scrollToSection
  }

  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContextProvider