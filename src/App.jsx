import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import Brands from './pages/Brands'
import Product from './pages/Product'
import Table from './components/Table'
import ProductData from './pages/ProductData'
import ProductList from './pages/ProductList'
import Coupons from './pages/Coupon'
import SliderSetting from './pages/SliderSetting'
import Trendingsetting from './pages/Trendingsetting'
import Popularsetting from './pages/Popularsetting'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Dashboard />} />
            <Route path='category' element={<Category/>} />
            <Route path='brands' element={<Brands />} />
            <Route path='product' element={<Product />} />
            <Route path='productlist' element={<ProductList />} />
            <Route path='coupon' element={<Coupons />} />
            <Route path='slidersetting' element={<SliderSetting />} />
            <Route path='trendingsetting' element={<Trendingsetting/>} />
            <Route path='popularsetting' element={<Popularsetting/>} />
          </Route>

          <Route path='/table' element={<Table />} />
          <Route path='/productdata' element={<ProductData />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App