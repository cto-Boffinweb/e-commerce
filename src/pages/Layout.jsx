import  { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import boffin from '../assets/boffin.webp'
import logo from '../assets/image.png'

import {
  FaBars,
  FaChartBar,
  FaCog,
  FaHome,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/adlogin";
  };

  return (
<div className="d-flex vh-100" style={{ overflowX: "hidden"}}>

      {/* Sidebar */}
      <div
  className=" p-1 shadow"
  style={{
    width: collapsed ? "70px" : "230px",
    transition: "0.3s",
    overflowY: "auto", 
    whiteSpace: "nowrap",
    flexShrink: 0,
    backgroundColor:'whitesmoke'
  }}
>

<div className="text-center mt-2 ">
  {collapsed ? (
    <span><img src={logo} alt="" /></span>
  ) : (
    <img
      src={boffin}
      alt="Boffin Logo"
      className="img-fluid"
      style={{ maxHeight: "30px" }}
    />
  )}
</div>

        <ul className="nav flex-column list-unstyled" style={{fontSize:'14px'}}>
          <li className="shadow my-2">
            <Link to="/" className="nav-link text-decoration-none text-secondary ">
              <FaHome className="me-2" /> {!collapsed && "Dashboard"}
            </Link>
          </li>
          <li className="shadow my-2">
            <Link to="/category" className="nav-link text-decoration-none text-secondary">
              <FaUsers className="me-2" /> {!collapsed && "Manage Category"}
            </Link>
          </li>
          <li className="shadow my-2">
            <Link to="/Brands" className="nav-link text-decoration-none text-secondary">
              <FaChartBar className="me-2" /> {!collapsed && "Manage Brands"}
            </Link>
          </li>
          <li className="shadow my-2">
            <Link to="/product" className="nav-link text-decoration-none text-secondary">
              <FaCog className="me-2" /> {!collapsed && "Manage Products"}
            </Link>
          </li>
          <li className="shadow my-2">
            <Link to="/productdata" className="nav-link text-decoration-none text-secondary">
              <FaCog className="me-2" /> {!collapsed && "Product Data"}
            </Link>
          </li>
          <li className="mt-5 shadow my-2">
            <button
              onClick={handleLogout}
              className="nav-link  btn btn-link text-decoration-none text-secondary"
            >
              <FaSignOutAlt className="me-2" /> {!collapsed && "Logout"}
            </button>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex-grow-1  d-flex flex-column ">
        {/* Header */}
        <div className="p-2 text-secondary shadow d-flex align-items-center justify-content-between" style={{backgroundColor:'whitesmoke'}}>
  
  {/* Left: Toggle Button + Title */}
  <div className="d-flex align-items-center">
    <button
      className="btn btn-light mx-3"
      onClick={() => setCollapsed(!collapsed)} style={{fontSize:'10px'}}
    >
      <FaBars/>
    </button>
  </div>

  {/* Right: User Circle */}
  <div className="dropdown ">
    <button
      className="btn btn-dark rounded-circle dropdown-toggle p-0 me-5"
      type="button"
      id="userDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style={{ width: "30px", height: "30px",color:'black' }}
    >
      <img
        src={logo} 
        alt="User"
        className="rounded-circle w-100 h-100"
      />
    </button>
    <ul
      className="dropdown-menu dropdown-menu-end"
      aria-labelledby="userDropdown"
    >
      <li>
        <Link className="dropdown-item" to="/profile">
          Profile
        </Link>
      </li>
      <li>
        <button
          className="dropdown-item"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/adlogin";
          }}
        >
          Logout
        </button>
      </li>
    </ul>
  </div>

</div>


        {/* Page Content */}
        <div className="p-4 flex-grow-1 overflow-auto bg-light shadow rounded ">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
