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
import Footer from './Footer';

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
          <img src={banner} alt="banner" className="banner-img img-fluid p-0" />

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

      {/* 3 Image Section */}
      <div className="container">
        <div className="row my-5 g-3">
          <div className="col-md-4 col-12">
            <img src={capwomen} alt="" className="img-fluid w-100 rounded " />
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
      {/* 4 cards section */}
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
      {/* trending section */}
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
        {/* best seller section */}
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
        {/* services section  */}
   <Footer/>
{/* carousel */}
<div 
  className="static-slider-bg" 
  style={{ backgroundImage: `url(${banner})` }}
>
  <Splide
    options={{
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      arrows: false,
      pagination: true,
    }}
  >
    {[
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...",
        name: "Jason Statham",
        role: "Founder at Brand"
      },
      {
        text: "Donec gravida urna ac risus aliquet convallis. Nam pretium urna...",
        name: "Angelina Jolie",
        role: "CEO at FashionPro"
      },
      {
        text: "Integer dignissim metus sed nibh dictum, eget fringilla eros feugiat.",
        name: "Chris Evans",
        role: "Marketing Head"
      }
    ].map((item, idx) => (
      <SplideSlide key={idx}>
        <div className="slider-text">
          <p>{item.text}</p>
          <h4>{item.name}</h4>
          <span>{item.role}</span>
        </div>
      </SplideSlide>
    ))}
  </Splide>
</div>




    </>
  );
}
