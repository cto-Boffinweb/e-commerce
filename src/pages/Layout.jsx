import { useState } from "react";
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
import { RiCoupon4Line } from "react-icons/ri";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openProductMenu, setOpenProductMenu] = useState(false);
  const [openWebsiteMenu, setOpenWebsiteMenu] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/adlogin";
  };

  return (
    <div className="d-flex vh-100" style={{ overflowX: "hidden" }}>

      {/* Sidebar */}
      <div
        className=" p-1 shadow"
        style={{
          width: collapsed ? "70px" : "230px",
          transition: "0.3s",
          overflowY: "auto",
          whiteSpace: "nowrap",
          flexShrink: 0,
          backgroundColor: 'whitesmoke'
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

        <ul className="nav flex-column list-unstyled" style={{ fontSize: '14px' }}>
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

            {/* TOGGLE BUTTON */}
            <div
              className="nav-link text-secondary d-flex justify-content-between align-items-center text-decoration-none"
              onClick={() => setOpenProductMenu(!openProductMenu)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <FaCog className="me-2" /> {!collapsed && "Manage Products"}
              </div>

              {!collapsed && <span style={{ fontSize: "12px" }}>
                {openProductMenu ? "▲" : "▼"}
              </span>}
            </div>

            {/* MENU ITEMS */}
            {openProductMenu && !collapsed && (
              <ul className="list-unstyled ms-4 mt-1">
                <li>
                  <Link className="nav-link text-secondary text-decoration-none" to="/product">
                    ➤ Add Product
                  </Link>
                </li>

                <li>
                  <Link className="nav-link text-secondary text-decoration-none" to="/productlist">
                    ➤ Product List
                  </Link>
                </li>

                <li>
                  <Link className="nav-link text-secondary text-decoration-none" to="/productstock">
                    ➤ Product Stock
                  </Link>
                </li>
              </ul>
            )}

          </li>
          <li className="shadow my-2">
            <Link to="/coupon" className="nav-link text-decoration-none text-secondary">
              <RiCoupon4Line className="me-2" /> {!collapsed && "Manage Coupons"}
            </Link>
          </li>

          <li className="shadow my-2">
            {/* TOGGLE BUTTON */}
            <div
              className="nav-link text-secondary d-flex justify-content-between align-items-center text-decoration-none"
              onClick={() => setOpenWebsiteMenu(!openWebsiteMenu)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <MdOutlineAppSettingsAlt className="me-2" /> {!collapsed && "Manage Website"}
              </div>

              {!collapsed && <span style={{ fontSize: "12px" }}>
                {openWebsiteMenu ? "▲" : "▼"}
              </span>}
            </div>

            {/* MENU ITEMS */}
            {openWebsiteMenu && !collapsed && (
              <ul className="list-unstyled ms-4 mt-1">
                <li>
                  <Link className="nav-link text-secondary text-decoration-none" to="/slidersetting">
                    ➤ Slider Settings
                  </Link>
                </li>

                <li>
                  <Link className="nav-link text-secondary text-decoration-none" to="/trendingsetting">
                    ➤ Top Trending
                  </Link>
                </li>

                <li>
                  <Link className="nav-link text-secondary text-decoration-none" to="/popularsetting">
                    ➤ Popular Item
                  </Link>
                </li>
              </ul>
            )}
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
        <div className="p-2 text-secondary shadow d-flex align-items-center justify-content-between" style={{ backgroundColor: 'whitesmoke' }}>

          {/* Left: Toggle Button + Title */}
          <div className="d-flex align-items-center">
            <button
              className="btn btn-light mx-3"
              onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '10px' }}
            >
              <FaBars />
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
              style={{ width: "30px", height: "30px", color: 'black' }}
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
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
