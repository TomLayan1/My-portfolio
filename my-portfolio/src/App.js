import './App.css';
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className='w-full max-h-[100vh] overflow-y-scroll scrollBar'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
