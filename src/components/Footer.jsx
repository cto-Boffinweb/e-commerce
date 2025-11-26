import React from 'react'
import logo from '../assets/logo.png'
export default function Footer() {
  return (
    <div>
          <div className="row mt-5" style={{backgroundColor:'#F5F5F5'}}>
  <div className="col-sm-10 mx-auto">
    <div className="row text-center">

      <div className="col-lg-3 col-md-6 col-sm-6 my-5">
        <div className="box ">
<i className="fa-solid fa-plane icon"></i>       
        </div>
        <h6 className="my-2">FREE SHIPPING WORLD WIDE</h6>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="box mt-5">
<i className="fa-solid fa-money-check icon"></i> </div>
        <h6 className="my-2">100% MONEY BACK GUARANTEE</h6>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="box mt-5">
<i className="fa-solid fa-credit-card icon"></i>        </div>
        <h6 className="my-2">MONEY PAYMENT GATEWAYS</h6>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="box mt-5">
<i className="fa-solid fa-headset icon"></i>        </div>
        <h6 className="my-2">24/7 HOURS SUPPORT</h6>
      </div>

    </div>
  </div>
</div>
<div className="row my-4">
    <div className="col-sm-10 mx-auto">
        <div className="row" style={{fontSize:'14px',marginTop:'15px'}}>
    <div className="col-lg-3 col-sm-6 "style={{ paddingLeft: 0 }}>
        <img src={logo} alt="" />
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
    </div>
    <div className="col-lg-3 col-sm-6 "style={{ paddingLeft: 0 }}>
        <h5>QUICK LINKS</h5>
        <ul style={{listStyle:'none', padding: 0, margin: 0}}>
            <li>About Us</li>
<li>FAQ's</li>
<li>Customer Services</li>
<li>Contact Us</li>
        </ul>
    </div>
    <div className="col-lg-3 col-sm-6"style={{ paddingLeft: 0 }}><h5>INFORMATION</h5>
    <ul style={{listStyle:'none', padding: 0, margin: 0}}>
            <li>About Us</li>
<li>FAQ's</li>
<li>Customer Services</li>
<li>Contact Us</li>
        </ul>
    </div>
    <div className="col-lg-3 col-sm-6"style={{ paddingLeft: 0 }}>
        <h5>CONTACT US</h5>
        <ul style={{listStyle:'none', padding: 0, margin: 0}}>
            <li>Location: 2750 Quadra Street Victoria, Canada</li>
<li>Call Us: (+123) 456-7898</li>
<li>Email Us: support@comero.com</li>
<li>Fax: +123456</li>
        </ul>
    </div>
</div></div>
    </div></div>
  )
}
