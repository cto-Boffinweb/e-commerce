import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import Topnav from "./Topnav";
import banner from "../assets/main-banner2.jpg";
import capwomen from "../assets/capwomen.jpg";
import blur from "../assets/blur.jpg";
import mens from "../assets/offer-men.jpg";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import image7 from "../assets/img7.jpg";
import image8 from "../assets/img8.jpg";
import cat1 from '../assets/cate1.jpg';
import cat2 from '../assets/cate2.jpg';
import cat3 from '../assets/cate3.jpg';
import cat4 from '../assets/cate4.jpg';
import trend1 from '../assets/trending1.jpg';
import trend2 from '../assets/trending2.jpg';
import trend3 from '../assets/trending3.jpg';
import trend4 from '../assets/trending4.jpg';
import best1 from '../assets/best1.jpg';
import best2 from '../assets/best2.jpg';
import best3 from '../assets/best3.jpg';
import best4 from '../assets/best4.jpg';

import "./Home.css";
import { GrSquare } from "react-icons/gr";
import Card from "./Card";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaMoneyCheck, FaPlane } from "react-icons/fa";

export default function Home() {
  const carouselOptions = {
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  nav: false,
};
const sliderImages = [banner, capwomen, mens];

  return (
    <>
      <Topnav />

      {/* Banner Section */}
      <div className="row m-0 p-0">
        <div className="image-container p-0">
          <img src={banner} alt="banner" className="banner-img" />

          <div className="banner-text fw-bold">
            <p>new inspiration 2024</p>
            <h2>CLOTHING MADE FOR YOU</h2>
            <p>Trending from men and women style collection</p>

            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              <button type="button" className="btn btn-outline-dark">
                Shop Women's
              </button>
              <button type="button" className="btn btn-outline-dark">
                Shop Men's
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Image Grid Section */}
      <div className="container">
        <div className="row my-5 g-3">
          <div className="col-md-4 col-12">
            <img src={capwomen} alt="" className="img-fluid w-100 rounded" />
          </div>
          <div className="col-md-4 col-12">
            <img src={blur} alt="" className="img-fluid w-100 rounded" />
          </div>
          <div className="col-md-4 col-12">
            <img src={mens} alt="" className="img-fluid w-100 rounded" />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="row my-5">
        <div className="col-md-10 mx-auto bg-light d-flex flex-wrap justify-content-center align-items-center py-3 fs-6 gap-4 text-center">
          <span><GrSquare /> Latest Products</span>
          <span><GrSquare /> Special Products</span>
          <span><GrSquare /> Featured Products</span>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={image1} title="Lilen crochet trim t-shirt" price="$ 191.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={image2} title="Neck empire sleeve t-shirts" oldPrice="$400.00" price="$300.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={image3} title="Mermaid pencil midi lace" price="$166.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={image4} title="Criss-cross V neck bodycon" price="$200.00" stars={4} />
          </div>

        </div>
         <div className="row g-4 my-2">

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={image5} title="Lilen crochet trim t-shirt" price="$ 191.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={image6} title="Neck empire sleeve t-shirts" oldPrice="$400.00" price="$300.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={image7} title="Mermaid pencil midi lace" price="$166.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={image8} title="Criss-cross V neck bodycon" price="$200.00" stars={4} />
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-4">
            <img src={cat1} alt="" />
          </div>
    <div className="col-sm-8">
  <div className="row g-4">

    <div className="col-6">
      <img src={cat2} alt=""  />
    </div>

    <div className="col-6">
      <img src={cat3} />
    </div>

  </div>
  <div className="row mt-4">
      <img src={cat4} />
  </div>
</div>


        </div>
      </div>
      <div className="container bg-light py-2 my-5 text-center">
<h5><GrSquare /> Trending Products</h5>
      </div>
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={trend1} title="Lilen crochet trim t-shirt" price="$ 191.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={trend2} title="Neck empire sleeve t-shirts" oldPrice="$400.00" price="$300.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={trend3} title="Mermaid pencil midi lace" price="$166.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={trend4} title="Criss-cross V neck bodycon" price="$200.00" stars={4} />
          </div>

        </div>
        </div>
        <div className="container bg-light py-2 my-5 text-center">
<h5><GrSquare /> Best Sellers</h5>
      </div>
       <div className="container">
        <div className="row g-4">

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={best1} title="Lilen crochet trim t-shirt" price="$ 191.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={best2} title="Neck empire sleeve t-shirts" oldPrice="$400.00" price="$300.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={best3} title="Mermaid pencil midi lace" price="$166.00" stars={4} />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card image={best4} title="Criss-cross V neck bodycon" price="$200.00" stars={4} />
          </div>

        </div>
        </div>
       <div className="row mt-5" style={{backgroundColor:'#F5F5F5'}}>
  <div className="col-sm-10 mx-auto">
    <div className="row text-center">

      <div className="col-lg-3 col-md-6 col-sm-6 my-5">
        <div className="box ">
<i class="fa-solid fa-plane icon"></i>       
        </div>
        <h6 className="my-2">FREE SHIPPING WORLD WIDE</h6>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="box mt-5">
<i class="fa-solid fa-money-check icon"></i> </div>
        <h6 className="my-2">100% MONEY BACK GUARANTEE</h6>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="box mt-5">
<i class="fa-solid fa-credit-card icon"></i>        </div>
        <h6 className="my-2">MONEY PAYMENT GATEWAYS</h6>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="box mt-5">
<i class="fa-solid fa-headset icon"></i>        </div>
        <h6 className="my-2">24/7 HOURS SUPPORT</h6>
      </div>

    </div>
  </div>
</div>
<Splide
  options={{
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: false,
    pagination: true,
  }}
>
  {sliderImages.map((img, index) => (
    <SplideSlide key={index}>
      <div className="slider-bg" style={{ backgroundImage: `url(${img})` }}>
        <div className="slider-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...</p>
          <h4>Jason Statham</h4>
          <span>Founder at Brand</span>
        </div>
      </div>
    </SplideSlide>
  ))}
</Splide>




    </>
  );
}
