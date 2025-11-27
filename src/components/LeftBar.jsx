import React from 'react'
import Topnav from './Header/Topnav'
import { Link } from 'react-router-dom'
import { GrSquare } from 'react-icons/gr'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Card from "./Card";
import best1 from "../assets/best1.jpg";

import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import image7 from "../assets/img7.jpg";
import image8 from "../assets/img8.jpg";
import Footer from './Footer'
export default function LeftBar() {
    return (
        <>
            {/* <Topnav /> */}
            <div className="row bg-light">
                <div className="col-sm-10 mx-auto ">
                    <p className='my-2'><Link to='/'>Home</Link> / <Link>Women's</Link></p>
                </div>
            </div>
            <div className="container my-5">
                <div className="row bg-light py-2">
                    <h5 className='text-center'><GrSquare /> Women's</h5>
                </div>
                <div className="row my-5">
                    <div className="col-lg-4 col-md-5 col-sm-12 mb-4">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <h6>CURRENT SELECTIONS</h6>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">44 x</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Xl x</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Clothing x</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Shoes x</button> <br />
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Accessories x</button><br />
                                        <RiDeleteBin6Line /><u>Clear all</u>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        <h6>COLLECTIONS</h6>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        <ul style={{ listStyle: 'none' }}>
                                            <li>Women’s</li>
                                            <li>Men</li>
                                            <li>Clothing</li>
                                            <li>Shoes</li>
                                            <li>Accessories</li>
                                            <li>Uncategorized</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <h6>BRANDS</h6>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <ul style={{ listStyle: 'none' }}>
                                            <li>Addidas</li>
                                            <li>Nike</li>
                                            <li>Reebok</li>
                                            <li>Shoes</li>
                                            <li>Ralph lauren</li>
                                            <li>Delpozo</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <h6>SIZE</h6>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">20</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">24</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">30</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">36</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Xs</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">S</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">M</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">L</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Xl</button>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <h6>PRIZE</h6>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <ul style={{ listStyle: 'none' }}>
                                            <li> $10 - $100</li>
                                            <li>$100 - $200</li>
                                            <li>$200 - $300</li>
                                            <li>$300 - $400</li>
                                            <li>$400 - $500</li>
                                            <li>$500 - $600</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <h6>COLOR</h6>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body p-0 d-flex flex-wrap" >
                                        <span className="color-box bg-dark m-1"></span>
                                        <span className="color-box bg-danger m-1"></span>
                                        <span className="color-box bg-primary m-1"></span>
                                        <span className="color-box bg-warning m-1"></span>
                                        <span className="color-box bg-success m-1"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <h6>POPULAR TAGS</h6>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Vintage</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Black</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Discount</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Good</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Jeans</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Summer</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Winter</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <h6>POPULAR PRODUCTS</h6>
                            <div className="col-sm-12">
                                <div className="row my-4">
                                    <div className="col-sm-6 d-flex">
                                        <img src={image4} alt="" height={150} />
                                    </div>
                                    <div className="col-sm-6 my-3">
                                        <p> Men's</p>
                                        <h6>Belted chino trousers polo</h6>
                                        <h6>$191.00 $291.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="row my-4">
                                    <div className="col-sm-6 d-flex">
                                        <img src={image2} alt="" height={150} />
                                    </div>
                                    <div className="col-sm-6 my-3">
                                        <p> Men's</p>
                                        <h6>Belted chino trousers polo</h6>
                                        <h6>$191.00 $291.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="row my-4">
                                    <div className="col-sm-6 d-flex">
                                        <img src={image3} alt="" height={150} />
                                    </div>
                                    <div className="col-sm-6 my-3">
                                        <p> Men's</p>
                                        <h6>Belted chino trousers polo</h6>
                                        <h6>$191.00 $291.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <img src={best1} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 col-sm-12">

                        <div className="row g-4">

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                               <Link to='/fullcard'> <Card image={image2} title="Lilen crochet trim t-shirt" price="$ 191.00" stars={4} /></Link>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image1} title="Neck empire sleeve t-shirts" oldPrice="$400.00" price="$300.00" stars={4} />
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image3} title="Mermaid pencil midi lace" price="$166.00" stars={4} />
                            </div>


                        </div>
                        <div className="row g-4 my-2">

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image5} title="Lilen crochet trim t-shirt" price="$ 191.00" stars={4} />
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image6} title="Neck empire sleeve t-shirts" oldPrice="$400.00" price="$300.00" stars={4} />
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image7} title="Mermaid pencil midi lace" price="$166.00" stars={4} />
                            </div>



                        </div>
                        <div className="row g-4 my-2">

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image5} title="Lilen crochet trim t-shirt" price="$ 191.00" stars={4} />
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image6} title="Neck empire sleeve t-shirts" oldPrice="$400.00" price="$300.00" stars={4} />
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image7} title="Mermaid pencil midi lace" price="$166.00" stars={4} />
                            </div>

                        </div>
                        <div className="row g-4 my-2">

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image5} title="Lilen crochet trim t-shirt" price="$ 191.00" stars={4} />
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image6} title="Neck empire sleeve t-shirts" oldPrice="$400.00" price="$300.00" stars={4} />
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <Card image={image7} title="Mermaid pencil midi lace" price="$166.00" stars={4} />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .color-box {
          width: 25px;
          height: 25px;
          border-radius:50%;
          border: 1px solid #ccc;

        }
      `}</style>

        </>
    )
}
