import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Navbar';
import Home from './Pages/Home';
import Resume from './Components/Resume';
import About from './Pages/About';
import ScrollToTop from './Hooks/ScrollToTop';

function App() {

  const MainRoutes = () => {

    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<About />} />
          <Route path='/résumé' element={<Resume />} />
        </Routes>
      </>
    )
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
