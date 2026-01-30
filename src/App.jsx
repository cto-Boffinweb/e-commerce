import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'

import Table from './components/Table'
import ProductData from './pages/ProductData'
import ProductList from './pages/ProductList'
import Coupons from './pages/Coupon'
import SliderSetting from './pages/SliderSetting'
import Trendingsetting from './pages/Trendingsetting'
import Popularsetting from './pages/Popularsetting'
import AddProduct from './pages/AddProduct'
import ManageCategory from './pages/ManageCategory'
import ManageBrands from './pages/ManageBrands'
import ManageSubcate from './pages/ManageSubcate';
import AdminRoutes from './routes/AdminRoutes';
import AdminLogin from './pages/AdminLogin';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Layout/>}>

            <Route index element={<Dashboard />} />
            <Route path='managecategory' element={<ManageCategory/>} />
                        <Route path='managesubcategory' element={<ManageSubcate/>} />

            <Route path='managebrands' element={<ManageBrands/>} />

            <Route path='addproduct' element={<AddProduct/>} />
            <Route path="/editproduct/:id" element={<AddProduct />} />


            <Route path='productlist' element={<ProductList />} />
            <Route path='coupon' element={<Coupons />} />
            <Route path='slidersetting' element={<SliderSetting />} />
            <Route path='trendingsetting' element={<Trendingsetting/>} />
            <Route path='popularsetting' element={<Popularsetting/>} />
          </Route>

          <Route path='/table' element={<Table />} />
          <Route path='/productdata' element={<ProductData />} /> */}
                     <Route path="/" element={<AdminLogin/>} />

        <Route path="/admin/*" element={<AdminRoutes/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App