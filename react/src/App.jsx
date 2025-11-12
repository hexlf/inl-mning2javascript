import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Booking from './pages/Booking'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/booking' element={<Booking />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App
