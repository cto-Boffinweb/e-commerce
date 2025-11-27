import React from 'react'
import logo from '../assets/logo.png'
import visa from '../assets/visa.png'
import visa2 from '../assets/visa2.png'
import master1 from '../assets/mastercard.png'
import master2 from '../assets/mastercard2.png'
import express from '../assets/expresscard.png'

import { FaLocationDot, } from 'react-icons/fa6'
import { FaEnvelope, FaFax, FaPhoneAlt } from 'react-icons/fa'
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
        <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
    </div>
    <div className="col-lg-3 col-sm-6 position-relative"style={{ paddingLeft: 0 }}>
        <h6>QUICK LINKS</h6><hr style={{height:'2px', width:'50px',backgroundColor:'gray', position:'absolute',top:'10px'}}/>
        <ul className='mt-4' style={{listStyle:'none', padding: 0, margin: 0}}>
            <li>About Us</li>
<li>FAQ's</li>
<li>Customer Services</li>
<li>Contact Us</li>
        </ul>
    </div>
    <div className="col-lg-3 col-sm-6 position-relative"style={{ paddingLeft: 0 }}>
      <h6>INFORMATION</h6><hr style={{height:'2px', width:'50px',backgroundColor:'gray', position:'absolute',top:'10px'}}/>
    <ul className='mt-4' style={{listStyle:'none', padding: 0, margin: 0}}>
            <li>About Us</li>
<li>FAQ's</li>
<li>Customer Services</li>
<li>Contact Us</li>
        </ul>
    </div>
    <div className="col-lg-3 col-sm-6 position-relative"style={{ paddingLeft: 0 }}>
        <h6>CONTACT US</h6><hr style={{height:'2px', width:'50px',backgroundColor:'gray', position:'absolute',top:'10px'}}/>
        <ul className='mt-4' style={{listStyle:'none', padding: 0, margin: 0}}>
            <li><FaLocationDot/> Location: 2750 Quadra Street Victoria, Canada</li>
<li><FaPhoneAlt/> Call Us: (+123) 456-7898</li>
<li><FaEnvelope/> Email Us: support@comero.com</li>
<li><FaFax/> Fax: +123456</li>
        </ul>
    </div>
</div></div>
    </div>
    <div className="row bg-light">
      <div className="col-lg-10 mx-auto my-3">
        <div className="row">
          <div className="col-lg-6 col-sm-6">© Comero is Proudly Owned by <b>EnvyTheme</b>
</div>
          <div className="col-sm-6 text-end">
            <img src={visa} alt="" />
                        <img src={visa2} alt="" />
            <img src={master1} alt="" />
            <img src={master2} alt="" />
            <img src={express} alt="" />

          </div>
        </div>
</div>
    </div>
    </div>
  )
}
