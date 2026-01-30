// admin/routes/AdminRoutes.jsx
import { Routes, Route } from "react-router-dom";
import ProtectedAdmin from "./ProtectedAdmin";
import Layout from "../pages/Layout";
import ProductData from '../pages/ProductData'

import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/ProductList";
import AddProduct from "../pages/AddProduct";
import ManageCategory from "../pages/ManageCategory";
import ManageBrands from "../pages/ManageBrands";
import ManageSubcate from "../pages/ManageSubcate";
import SliderSetting from "../pages/SliderSetting";
import Trendingsetting from "../pages/Trendingsetting";
import Popularsetting from "../pages/Popularsetting";
import Table from "../components/Table";
import AdminLogin from "../pages/AdminLogin";
import Coupon from "../pages/Coupon";

function AdminRoutes() {
  return (
    <Routes>


      <Route
        path=""
        element={
          <ProtectedAdmin>
            <Layout/>
          </ProtectedAdmin>
        }
      >
              {/* <Route path="login" element={<AdminLogin/>} /> */}

        <Route index element={<Dashboard/>} />
        <Route path="addproduct" element={<AddProduct/>} />
        <Route path="editproduct/:id" element={<AddProduct/>} />
                    <Route path='productlist' element={<ProductList/>} />
        
        <Route path="managecategory" element={<ManageCategory/>} />
        <Route path="managesubcategory" element={<ManageSubcate/>} />
        <Route path="managebrands" element={<ManageBrands/>} />
         <Route path='coupon' element={<Coupon/>} />
                    <Route path='slidersetting' element={<SliderSetting/>} />
                    <Route path='trendingsetting' element={<Trendingsetting/>} />
                    <Route path='popularsetting' element={<Popularsetting/>} />
                    
      </Route>
<Route path='/table' element={<Table/>} />
          <Route path='/productdata' element={<ProductData/>} />

          
    </Routes>
  );
}

export default AdminRoutes;
