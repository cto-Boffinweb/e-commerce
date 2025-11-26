import React from 'react'
import Topnav from './Topnav'
import { Link } from 'react-router-dom'
import image2 from "../assets/img2.jpg";
import { FaAmazon, FaCcMastercard, FaEnvelope, FaHeart, FaPaypal, FaRegStar, FaShippingFast, FaSquare, FaStar } from 'react-icons/fa';
import Footer from './Footer';
import { MdFormatSize } from 'react-icons/md';
import { SiVisa, SiZedindustries } from 'react-icons/si';
import { FaCartFlatbed, FaCartShopping, FaScaleBalanced } from 'react-icons/fa6';
import { RiVisaLine } from 'react-icons/ri';

export default function FullCard() {
    return (
        <div>
            <Topnav />
            <div className="row bg-light">
                <div className="col-sm-10 mx-auto bg-light">
                    <p className='my-2 '><Link to='/'>Home</Link> / <Link>Lilen Chrochet</Link></p>

                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 p-0">
                        <img src={image2} alt="" style={{ height: '650px', width: '550px' }} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h5>Belted chino trousers polo</h5>
                        <h6>$191.00</h6>
                        <div style={{ color: 'goldenrod' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /> 3 reviews</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                        Vendor: <b>Lereve</b><br />
                        Availability: <b>In stock (7 items)</b><br />
                        Product Type: <b>T-Shirt</b><br />
                        Color:
                    <div className='d-flex'>
                        <span className="color-box bg-dark m-1"></span>
                        <span className="color-box bg-danger m-1"></span>
                        <span className="color-box bg-primary m-1"></span>
                        <span className="color-box bg-warning m-1"></span>
                        <span className="color-box bg-success m-1"></span></div><br />
                        Size:
                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Xs</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">S</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">M</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">L</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Xl</button><br /><br />
                        <div><span className='mx-2'><SiZedindustries /> Size guide </span><span className='mx-2'> <FaShippingFast/> Shipping </span><span className='mx-2'> <FaEnvelope/> Ask about this product</span></div>
                        <div className='d-flex my-3'>
<button type="button" className="btn btn-light  mx-2">-&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; +</button>   <button type="button" className="btn btn-dark mx-2"><FaCartShopping/> ADD TO CART</button>
</div>
<div className='my-2'><button type="button" className="btn btn-outline-dark mx-2"><FaHeart/> ADD TO WISHLIST</button>
<button type="button" className="btn btn-outline-dark mx-2"><FaScaleBalanced/>ADD TO COMPARE</button>
</div>
<input type="checkbox" name="" id="" /> I agree with the term and conditions <br />
<div className="row  my-2">
<button type="button" className='btn btn-dark' >BUY IT NOW!</button></div>
<p>Guaranteed safe checkout:</p>
<div className='d-flex'>
    <span className='smallbox'><FaAmazon/></span>
        <span className='smallbox'><RiVisaLine style={{color:'blue'}}/></span>
    <span className='smallbox'><FaCcMastercard style={{color:'red'}}/></span>
    <span className='smallbox'><FaPaypal style={{color:'blue'}}/></span>
    <span className='smallbox'><FaAmazon/></span>

</div>

                    </div>
                  <div className="row my-5 "style={{borderBottom:'1px dotted grey'}}>
    <div className="col-sm-12 my-3">
        <span className='mx-5'><FaSquare/> DESCRIPTION</span>
                <span className='mx-5'><FaSquare/> ADDITIONAL INFORMATION</span>
        <span className='mx-5'><FaSquare/> SHIPPING</span>
        <span className='mx-5'><FaSquare/> WHY BUY FOR US</span>
        <span className='mx-2'><FaSquare/> REVIEWS</span>


    </div>
</div>  
    <p style={{fontSize:'14px', padding: 0, margin: 0}}>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p>

<div className="row my-3" style={{fontSize:'14px'}}>
    <div className="col-sm-6">
        <ul style={{ padding: 0, margin: 0}}>
            <li>Fabric 1: 100% Polyester</li>
<li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li>
<li>Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane

</li>
        </ul>
    </div>
    <div className="col-sm-6">
        <ul style={{ padding: 0, margin: 0}}>
            <li>
                Fabric 1: 75% Polyester, 20% Viscose, 5% Elastane</li>
<li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li>
<li>Fabric 3: 100% Polyester</li>
        </ul>
    </div>
</div>
                </div>
            </div>
            <style>{`
        .color-box {
          width: 25px;
          height: 25px;
          border-radius:50%;

        }
          .smallbox {
  height: 25px;
  width: 40px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px; 
  margin: 3px;
  border-radius: 5px;
}

      `}
            </style>
            <Footer />
        </div>

    )
}
