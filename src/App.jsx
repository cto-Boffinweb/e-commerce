import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LeftBar from './components/LeftBar'
import Topnav from './components/Topnav'
import FullCard from './components/FullCard'

function App() {

  return (
    <>

    <div className="container-fluid">
      
      <BrowserRouter>
      <Routes>
        
                <Route path='/' element={<Home/>}/>
                <Route path='/leftbar' element={<LeftBar/>}/>
                <Route path='/fullcard' element={<FullCard/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
