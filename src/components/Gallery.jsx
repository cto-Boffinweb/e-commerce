import React from 'react'
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';

export default function Gallery() {
  return (
    <div>
<div className="container">
    <div className="row bg-light text-center my-5">
        <h6 className='py-2'>▣ Gallery</h6>
        </div>
<div className="row">
    <div className="col-lg-4 col-md-6 col-sm-6 p-0">
        <img src={g2} alt=""  className='img-fluid'/>
                <img src={g3} alt=""  className='img-fluid'/>
        <img src={g4} alt=""  className='img-fluid'/>

    </div>
     <div className="col-lg-4 col-md-6 col-sm-6 p-0">
        <img src={g3} alt=""  className='img-fluid'/>
                <img src={g2} alt=""  className='img-fluid'/>
        <img src={g4} alt=""  className='img-fluid'/>

    </div> <div className="col-lg-4 col-md-6 col-sm-6 p-0">
        <img src={g4} alt=""  className='img-fluid'/>
                <img src={g3} alt=""  className='img-fluid'/>
        <img src={g2} alt=""  className='img-fluid'/>

    </div>
</div>

</div>
    </div>
  )
}
