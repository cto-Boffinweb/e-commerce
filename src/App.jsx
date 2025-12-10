
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import Brands from './pages/Brands'
import Product from './pages/Product'
import Table from './components/Table'
import ProductData from './pages/ProductData'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout />}>
<Route index element={<Dashboard />} />
<Route path='category' element={<Category/>} />
<Route path='brands' element={<Brands/>} />
<Route path='product' element={<Product/>} />
<Route path='productdata' element={<ProductData/>} />

</Route>

     <Route path='/table' element={<Table/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
