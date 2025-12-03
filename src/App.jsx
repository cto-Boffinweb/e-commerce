import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import LeftBar from './components/LeftBar'
import Topnav from './components/Header/Topnav'
import FullCard from './components/FullCard'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Mycart from './components/Mycart'
import Checkout from './components/Checkout'
import Login from './components/Login'
import About from './components/About'
import FAQ from './components/FAQ'
import Privacy from './components/Privacy'
import Return from './components/Return'
import Register from './components/Register'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlacedOrder from './components/PlacedOrder'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0) // scroll top on route change
  }, [pathname])

  return null
}
function App() {
const [cartCount, setCartCount] = useState(0);

  return (
    <>

    <div className="container-fluid">
      
      <BrowserRouter>
      <ScrollToTop/>
<Topnav cartCount={cartCount} />
      <Routes>
        
                <Route path='/' element={<Home/>}/>
                <Route path='/leftbar' element={<LeftBar/>}/>
<Route path='/fullcard' element={<FullCard setCartCount={setCartCount} />} />
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/mycart' element={<Mycart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/faq' element={<FAQ/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/return' element={<Return/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/placedOrder' element={<PlacedOrder/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
