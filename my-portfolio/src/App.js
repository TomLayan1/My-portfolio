import './App.css';
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Header from './Components/Header';

function App() {
  return (
    <div className='w-full max-h-[100vh] overflow-y-scroll scrollBar'>
      <Header />
    </div>
  );
}

export default App;
