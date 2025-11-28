import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import image7 from "../assets/img7.jpg";



import { FaAmazon, FaCcMastercard, FaEnvelope, FaHeart, FaPaypal, FaRegStar, FaShippingFast, FaSquare, FaStar } from 'react-icons/fa';
import { SiVisa, SiZedindustries } from 'react-icons/si';
import { FaCartFlatbed, FaCartShopping, FaScaleBalanced } from 'react-icons/fa6';
import { RiVisaLine } from 'react-icons/ri';
import { useState } from 'react';

export default function FullCard({ setCartCount }) {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const images = [image2, image3, image4, image1, image5, image6, image7];
    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size!');
            return;
        }
        const cartItem = { name: "Belted chino trousers polo", price: 191, size: selectedSize, quantity };
        console.log("Added to cart:", cartItem);
        alert(`Added to cart: ${quantity} x ${cartItem.name} (Size: ${selectedSize})`);
    };


    return (
        <div>
            <div className="row bg-light">
                <div className="col-sm-10 mx-auto bg-light">
                    <p className='my-2 '><Link to='/'>Home</Link> / <Link>Lilen Chrochet</Link></p>

                </div>
            </div>
            <div className="container">
                <div className="row my-5 gx-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 p-0">
                        {/* BIG IMAGE CAROUSEL */}
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 1,
                                pagination: false,
                                arrows: true,
                                height: "650px",
                                autoplay: true,
                                interval: 2000,
                                sync: "#thumb-slider",
                            }}
                            id="main-slider"
                        >
                            {images.map((src, i) => (
                                <SplideSlide key={i}>
                                    <img
                                        src={src}
                                        className="img-fluid"
                                        style={{ width: "100%", height: "650px", objectFit: "cover", borderRadius: "10px" }}
                                    />
                                </SplideSlide>
                            ))}
                        </Splide>


                        {/* THUMBNAIL SLIDER */}
                        <Splide
                            id="thumb-slider"
                            options={{
                                fixedWidth: 80,
                                fixedHeight: 80,
                                gap: 10,
                                pagination: false,
                                cover: true,
                                isNavigation: true,
                                focus: false,
                                interval: 2000,
                                rewind: true,
                                autoplay: true,

                            }}
                            className="mt-3"
                        >
                            {images.map((src, i) => (
                                <SplideSlide key={i}>
                                    <img
                                        src={src}
                                        style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                                    />
                                </SplideSlide>
                            ))}
                        </Splide>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
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
                        {['Xs', 'S', 'M', 'L', 'Xl'].map(size => (
                            <button
                                key={size}
                                type="button"
                                className={`btn btn-sm mx-1 ${selectedSize === size ? 'btn-dark' : 'btn-outline-secondary'}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                        <br /><br />
                        <div><span className='mx-2'><SiZedindustries /> Size guide </span><span className='mx-2'> <FaShippingFast /> Shipping </span><span className='mx-2'> <FaEnvelope /> Ask about this product</span></div>
                        <div className='d-flex my-3'>
                            <div className='d-flex my-3 align-items-center gap-2'>
                                <button className="btn btn-light" onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>-</button>
                                <span>{quantity}</span>
                                <button className="btn btn-light" onClick={() => setQuantity(prev => prev + 1)}>+</button>
                                <button 
  className="btn btn-dark"
  onClick={() => setCartCount(prev => prev + 1)}
>
  Add to Cart
</button>

                            </div>


                        </div>
                        <div className='my-2'><button type="button" className="btn btn-outline-dark mx-2"><FaHeart /> ADD TO WISHLIST</button>
                            <button type="button" className="btn btn-outline-dark mx-2"><FaScaleBalanced />ADD TO COMPARE</button>
                        </div>
                       <div className='my-2'>
  <input type="checkbox" id="terms" />{' '}
  <label htmlFor="terms">I agree with the terms and conditions</label>
</div>

<div className="my-2">
  <button className='btn btn-dark w-100'>BUY IT NOW!</button>
</div>

                        <p>Guaranteed safe checkout:</p>
                        <div className='d-flex'>
                            <span className='smallbox'><FaAmazon /></span>
                            <span className='smallbox'><RiVisaLine style={{ color: 'blue' }} /></span>
                            <span className='smallbox'><FaCcMastercard style={{ color: 'red' }} /></span>
                            <span className='smallbox'><FaPaypal style={{ color: 'blue' }} /></span>
                            <span className='smallbox'><FaAmazon /></span>

                        </div>

                    </div>
                    <div className="row my-5 border-bottom">
                        <div className="col-12 my-3 d-flex flex-wrap justify-content-around ">
                            <span className="d-flex align-items-center">
                                <FaSquare className="me-1" /> DESCRIPTION
                            </span>
                            <span className="d-flex align-items-center">
                                <FaSquare className="me-1" /> ADDITIONAL INFORMATION
                            </span>
                            <span className="d-flex align-items-center">
                                <FaSquare className="me-1" /> SHIPPING
                            </span>
                            <span className="d-flex align-items-center">
                                <FaSquare className="me-1" /> WHY BUY FOR US
                            </span>
                            <span className="d-flex align-items-center">
                                <FaSquare className="me-1" /> REVIEWS
                            </span>
                        </div>
                    </div>

                    <p style={{ fontSize: '14px', padding: 0, margin: 0 }}>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p>

                    <div className="row my-3" style={{ fontSize: '14px' }}>
                        <div className="col-sm-6">
                            <ul style={{ padding: 0, margin: 0 }}>
                                <li>Fabric 1: 100% Polyester</li>
                                <li>Fabric 2: 100% Polyester,Lining: 100% Polyester</li>
                                <li>Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane

                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul style={{ padding: 0, margin: 0 }}>
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

        </div>

    )
}
