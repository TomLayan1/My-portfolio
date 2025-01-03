import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Navbar';
import Home from './Pages/Home';
import PortfolioContextProvider from './Context/Context';
import Resume from './Components/Resume';
import About from './Pages/About';
import Footer from './Components/Footer';

function App() {

  return (
    <PortfolioContextProvider>
      <BrowserRouter>
        <Header />
        <div className='w-full max-h-[100vh] overflow-y-scroll scrollBar scroll-smooth'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-me' element={<About />} />
            <Route path='/résumé' element={<Resume />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </PortfolioContextProvider>
  );
}

export default App;
