import { Link } from 'react-router-dom'
import './Topnav.css'
import logo from '../../assets/logo.png';
import { FaBalanceScale, FaHeart, FaShoppingBag } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';
import { useEffect, useState } from "react";


export default function Topnav({ cartCount }) {
 const [showFixed, setShowFixed] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setShowFixed(true);
    } else {
      setShowFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <>
      {/* topnav upper */}
      <div className="row">
        <div className="col-12 bg-black text-center py-2 topnavupper position-static ">
          <i><b>Enjoy an extra 20% off</b> select sales style</i> 
           <Link to="/">Read More</Link>
        </div>
      </div>

      {/* topnav lower */}
      <div className="row" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="col-10 mx-auto py-2 topnavlower position-static">
          <div className="row align-items-center">
            
            {/* LEFT LINKS */}
            <div className="col-lg-7 col-md-6 col-12 text-center text-md-start mb-2 mb-md-0">
              <Link to="/about" className='mx-2'>About</Link> | 
              <Link to="/stores" className='mx-2'> Our Stores</Link> | 
              <Link to="/faq"className='mx-2'> FAQ's</Link> | 
              <Link to="/contact"className='mx-2'> Contact</Link>
            </div>

            {/* RIGHT OPTIONS */}
            <div className="col-lg-5 col-md-6 col-12 text-center text-md-end">
              Wishlist <FaHeart /> | 
              Compare <FaBalanceScale /> | Eng
            </div>

          </div>
        </div>
      </div>
      
      {/* Navbar start */}
<div className={`row bg-white py-2 ${showFixed ? "navbar-fixed jump" : ""}`}>
<div className="col-sm-10 mx-auto">
    <div className="row " style={{fontFamily:'emoji'}}>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"><img src={logo}alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
       
        <li className="nav-item dropdown mx-2">
<Link className="nav-link dropdown-toggle" to="#">
            HOME
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Home One</Link></li>
            <li><a className="dropdown-item" href="#">Home Two</a></li>
            <li><a className="dropdown-item" href="#">Home Three </a></li>
            <li><a className="dropdown-item" href="#">Home Four </a></li>
            <li><a className="dropdown-item" href="#">Home Five </a></li>
            <li><a className="dropdown-item" href="#">Home Six </a></li>
            <li><a className="dropdown-item" href="#">Home Seven </a></li>
            <li><a className="dropdown-item" href="#">Home Eight </a></li>
            <li><a className="dropdown-item" href="#">Home Nine </a></li>
            <li><a className="dropdown-item" href="#">Home Ten </a></li>
            <li><a className="dropdown-item" href="#">Home Eleven </a></li>

          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
<Link className="nav-link dropdown-toggle" to="#">
            SHOP
          </Link>
          <ul className="dropdown-menu" style={{height:'500px',width:'300px'}}>
            <h5 className='mx-2'>COLLECTION LAYOUTS</h5>
            <li><a className="dropdown-item" href="#">Collections Type 1</a></li>
            <li><a className="dropdown-item" href="#">Collections Type 2</a></li>
            <li><a className="dropdown-item" href="#">Collections Type 3</a></li>
            <li><a className="dropdown-item" href="#">Collections Type 4</a></li>
            <li><Link className="dropdown-item" to="/leftbar">left Sidebar</Link></li>

          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
<Link className="nav-link dropdown-toggle" to="#">
            GALLERY
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
<Link className="nav-link dropdown-toggle" to="#">
            WOMEN'S
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
<Link className="nav-link dropdown-toggle" to="#">
            MEN'S
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
<Link className="nav-link dropdown-toggle" to="#">
            PAGES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/about">About Us</Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
<Link className="nav-link dropdown-toggle" to="#">
            BLOG
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
     
    </div>
  </div>
  <div className="d-flex  justify-content-center">
  <Link className="mx-2"><IoSearch size={20} /></Link>
  <Link className="mx-2" to='/login'>LOGIN</Link>
  <Link to="/mycart" className="mx-2 position-relative">
  <FaShoppingBag size={22} />

  <span
    style={{
      position: "absolute",
      top: "-6px",
      right: "-8px",
      background: "red",
      color: "#fff",
      fontSize: "10px",
      padding: "1px 4px",
      borderRadius: "50%"
    }}
  >
    {cartCount}
  </span>
</Link>



</div>

</nav>

</div>
</div>
      </div>
      {/* navbar end */}
      <style>
        {`
      .navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.jump {
  animation: jumpDown 0.50s ease-out;
}

@keyframes jumpDown {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

        `}
      </style>
    </>
  )
}
