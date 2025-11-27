import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import LeftBar from './components/LeftBar'
import Topnav from './components/Header/Topnav'
import FullCard from './components/FullCard'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Mycart from './components/Header/Mycart'
import Checkout from './components/Checkout'

function App() {
const [cartCount, setCartCount] = useState(0);

  return (
    <>

    <div className="container-fluid">
      
      <BrowserRouter>
<Topnav cartCount={cartCount} />
      <Routes>
        
                <Route path='/' element={<Home/>}/>
                <Route path='/leftbar' element={<LeftBar/>}/>
<Route path='/fullcard' element={<FullCard setCartCount={setCartCount} />} />
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/mycart' element={<Mycart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
