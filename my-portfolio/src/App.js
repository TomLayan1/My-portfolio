import './App.css';
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import PortfolioContextProvider from './Context/Context';

function App() {

  return (
    <PortfolioContextProvider>
      <div className='w-full max-h-[100vh] overflow-y-scroll scrollBar scroll-smooth'>
        <Header />
        <Home />
      </div>
    </PortfolioContextProvider>
  );
}

export default App;
