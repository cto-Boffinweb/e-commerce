import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import banner from "../../assets/main-banner2.jpg";
import capwomen from "../../assets/capwomen.jpg";
import blur from "../../assets/blur.jpg";
import mens from "../../assets/offer-men.jpg";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";
import image5 from "../../assets/img5.jpg";
import image6 from "../../assets/img6.jpg";
import image7 from "../../assets/img7.jpg";
import image8 from "../../assets/img8.jpg";
import cat1 from '../../assets/cate1.jpg';
import cat2 from '../../assets/cate2.jpg';
import cat3 from '../../assets/cate3.jpg';
import cat4 from '../../assets/cate4.jpg';
import trend1 from '../../assets/trending1.jpg';
import trend2 from '../../assets/trending2.jpg';
import trend3 from '../../assets/trending3.jpg';
import trend4 from '../../assets/trending4.jpg';
import best1 from '../../assets/best1.jpg';
import best2 from '../../assets/best2.jpg';
import best3 from '../../assets/best3.jpg';
import best4 from '../../assets/best4.jpg';
import client1 from '../../assets/client1.jpg';
import "./Home.css";
import Card from "../Card";
import { useState } from 'react';

export default function Home() {
    const [activeTab, setActiveTab] = useState("latest");

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

      {/* Banner Section */}
      <div className="row">
        <div className="image-container">
          <img src={banner} alt="banner" className="banner-img img-fluid"/>

          <div className="banner-text fw-bold">
            <p>new inspiration 2024</p>
            <h2>CLOTHING MADE FOR YOU</h2>
            <p>Trending from men and women style collection</p>

            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              <button type="button" className="btn btn-outline-dark rounded-0">
                Shop Women's
              </button>
              <button type="button" className="btn btn-outline-dark rounded-0">
                Shop Men's
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Image Section */}
      <div className="container">
        <div className="row my-5 g-4">
                    <div className="col-md-4 col-12 category-box ">

  <img src={capwomen} className="cat-img img-fluid w-100 " />

  <div className="glass-box-outer">
    <div className="glass-inner">
      <h6 className="cat-title">WOMEN'S</h6>

      <ul className="cat-menu text-secondary">
        <h6 className='text-black '>Women's</h6>
        <li className='mb-1'>Woman Accessories</li>
        <li className='mb-1'>Man Accessories</li>
        <li className='mb-1'>Sunglasses</li>
        <li className='mb-1'>Belts</li>
        <li className='mb-1'>Hats</li>
        <li className='mb-1'>Scarfs</li>
      </ul>

    </div>
  </div>
</div>

          <div className="col-md-4 col-12 category-box">
            <img src={blur} alt="" className="img-fluid w-100 cat-img" />
            <div className="glass-box-outer">
    <div className="glass-inner">
       <h6 className="cat-title">ACCESSORIES</h6>

      <ul className="cat-menu text-secondary">
        <h6 className='text-black '>Women's</h6>
        <li className='mb-1'>Woman Accessories</li>
        <li className='mb-1'>Man Accessories</li>
        <li className='mb-1'>Sunglasses</li>
        <li className='mb-1'>Belts</li>
        <li className='mb-1'>Hats</li>
        <li className='mb-1'>Scarfs</li>
      </ul>
      </div>
    </div>
          </div>
          <div className="col-md-4 col-12 category-box">
            <img src={mens} alt="" className="img-fluid w-100 cat-img" />
             <div className="glass-box-outer">
    <div className="glass-inner">
       <h6 className="cat-title">MEN'S</h6>

      <ul className="cat-menu text-secondary">
        <h6 className='text-black '>Women's</h6>
        <li className='mb-1'>Woman Accessories</li>
        <li className='mb-1'>Man Accessories</li>
        <li className='mb-1'>Sunglasses</li>
        <li className='mb-1'>Belts</li>
        <li className='mb-1'>Hats</li>
        <li className='mb-1'>Scarfs</li>
      </ul>
      </div>
    </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="row ">
        <div className="col-md-10 mx-auto ">
          <div className="tabs bg-light d-flex flex-wrap justify-content-center align-items-center py-3 fs-6 gap-4 text-center">
        <span
          className={`tab ${activeTab === "latest" ? "active" : ""}`}
          onClick={() => setActiveTab("latest")}
        >
         ▣ Latest Products
        </span>
         <span
          className={`tab ${activeTab === "special" ? "active" : ""}`}
          onClick={() => setActiveTab("special")}
        >
         ▣ Special Products
        </span>
        <span
          className={`tab ${activeTab === "featured" ? "active" : ""}`}
          onClick={() => setActiveTab("featured")}
        >
        ▣ Featured Products
        </span>
      </div>
       <div className="tab-content">
        {activeTab === "latest" && (
  <>
    <div className="row g-4 my-5">
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
  </>
)}

        {activeTab === "special" && (
          <>
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
    <div className="row g-4 my-5">
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
        </>
      )}
        {activeTab === "featured" && (<>
         <div className="row g-4 my-5">
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
        </>)}
      </div>
        </div>
      </div>

      
      {/* 4 cards section */}
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-4">
            <img src={cat1} alt="" className='img-fluid'/>
          </div>
    <div className="col-sm-8">
  <div className="row g-4">

    <div className="col-6">
      <img src={cat2} alt=""  className='img-fluid' />
    </div>

    <div className="col-6">
      <img src={cat3} className='img-fluid'/>
    </div>

  </div>
  <div className="row mt-4">
      <img src={cat4} className='img-fluid'/>
  </div>
</div>


        </div>
      </div>
      {/* trending section */}
      <div className="container bg-light py-2 my-5 text-center">
<h5>▣ Trending Products</h5>
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
<h5>▣ Best Sellers</h5>
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
        img:client1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...",
        name: "Jason Statham",
        role: "Founder at Brand"
      },
      {
                img:client1,

        text: "Donec gravida urna ac risus aliquet convallis. Nam pretium urna...",
        name: "Angelina Jolie",
        role: "CEO at FashionPro"
      },
      {
                img:client1,

        text: "Integer dignissim metus sed nibh dictum, eget fringilla eros feugiat.",
        name: "Chris Evans",
        role: "Marketing Head"
      }
    ].map((item, idx) => (
      <SplideSlide key={idx}>
        <div className="slider-text">
                    <img src={item.img} className='slider-img' style={{height:'80px',width:'80px',borderRadius:'50%'}}/>

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
