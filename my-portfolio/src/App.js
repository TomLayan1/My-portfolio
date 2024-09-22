import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import PortfolioContextProvider from './Context/Context';
import Resume from './Components/Resume';

function App() {

  return (
    <PortfolioContextProvider>
      <BrowserRouter>
        <Header />
        <div className='w-full max-h-[100vh] overflow-y-scroll scrollBar scroll-smooth'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/résumé' element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PortfolioContextProvider>
  );
}

export default App;
