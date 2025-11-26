import { Link } from 'react-router-dom'
import './Topnav.css'
import logo from '../assets/logo.png'
import { FaBalanceScale, FaHeart, FaShoppingBag } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';

export default function Topnav() {
  return (
    <>
      {/* topnav upper */}
      <div className="row">
        <div className="col-12 bg-black text-center py-2 topnavupper">
          <i><b>Enjoy an extra 20% off</b> select sales style</i> 
           <Link to="/">Read More</Link>
        </div>
      </div>

      {/* topnav lower */}
      <div className="row" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="col-10 mx-auto py-2 topnavlower">
          <div className="row align-items-center">
            
            {/* LEFT LINKS */}
            <div className="col-lg-7 col-md-6 col-12 text-center text-md-start mb-2 mb-md-0">
              <Link to="/about">About</Link> | 
              <Link to="/stores"> Our Stores</Link> | 
              <Link to="/faq"> FAQ's</Link> | 
              <Link to="/contact"> Contact</Link>
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
      <div className="row bg-white py-2">
<div className="col-sm-10 mx-auto">
    <div className="row " style={{fontFamily:'emoji'}}>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo}alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
       
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            HOME
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Home One</a></li>
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
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SHOP
          </a>
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
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GALLERY
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            WOMEN'S
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MEN'S
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PAGES
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOG
          </a>
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
   <Link className='px-2'>
     <IoSearch /> </Link>
 |<Link className='px-2'>LOGIN</Link> 
 | <Link className='px-2'> CART</Link> <FaShoppingBag/>
 
</nav>

</div>
</div>
      </div>
      {/* navbar end */}
      
    </>
  )
}
