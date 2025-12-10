import React from 'react'
import { Link } from 'react-router-dom'
import about1 from '../assets/image.png'
import about2 from '../assets/image copy.png'

export default function About() {
  return (
    <div>
      <div className="row bg-light ">
        <div className="col-sm-10 mx-auto " style={{fontSize:'14px',color:'gray',padding:'11px 0'}}>
            <Link to='/'>Home</Link> / <Link to='/about'>About Us</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 mx-auto">
            <div className="row">
            <div className="col-lg-6 col-md-12 my-5" >
<h4 style={{marginTop:'120px'}}>About Our Store</h4>
<div  style={{fontSize:'15px',fontFamily:'math',marginTop:'20px',color:'gray',lineHeight:'1.8'}}>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="about-image position-relative ">
<img src={about1} alt=""  className='position-absolute' height={370} style={{right:'-100px',top:'50px',zIndex:'0'}}/>
<img src={about2} alt="" className='position-absolute' height={400} style={{zIndex:'1',top:'130px',right:'230px'}}/>
</div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}
