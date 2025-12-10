import React from "react";

export default function ProductData() {
  return (
    <div className="container " style={{ color: 'grey', fontSize: '14px' }}>
      <div className="row ">

        {/* LEFT SIDE  Tabs */}
        <div className="card p-0">
          <div className="card-header ">
            <h5>Product data</h5>
            {/* Tabs nav */}
            <ul className="nav nav-tabs card-header-tabs ">
              <li className="nav-item">
                <a href="#shipping" className="nav-link active" data-bs-toggle="tab">Shipping</a>
              </li>
              <li className="nav-item">
                <a href="#linked" className="nav-link" data-bs-toggle="tab">Linked products</a>
              </li>
              <li className="nav-item">
                <a href="#attributes" className="nav-link" data-bs-toggle="tab">Attributes</a>
              </li>
              <li className="nav-item">
                <a href="#variations" className="nav-link" data-bs-toggle="tab">Variations</a>
              </li>
              <li className="nav-item">
                <a href="#general" className="nav-link" data-bs-toggle="tab">General</a>
              </li>
            </ul>
          </div>

          <div className="card-body tab-content">
            <div className="tab-pane fade show active" id="shipping">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
<div className="col-12 col-md-4 col-lg-4 mb-3">
                      <label>Weight (kg)</label>
                      <input type="text" className="form-control" />
                    </div>
<div className="col-12 col-md-4 col-lg-4 mb-3">
                      <label>Length (cm)</label>
                      <input type="text" className="form-control" />
                    </div>
<div className="col-12 col-md-4 col-lg-4 mb-3">
                      <label>Width (cm)</label>
                      <input type="text" className="form-control" />
                    </div>
<div className="col-12 col-md-4 col-lg-4 mb-3">
                      <label>Height (cm)</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">

                  <div className="card mb-4">
                    <div className="card-header">Product Image</div>
                    <div className="card-body text-center">
                      <div className="img-box">
                        400 × 400
                      </div>
                      <input type="file" className="my-2" />

                      <button className="btn btn-link text-danger p-0">Remove</button>
                    </div>
                  </div>


                  <div className="card mb-4">
                    <div className="card-header">Gallery Images</div>
                    <div className="card-body">
                      <button className="btn btn-outline-primary btn-sm">Add images</button>
                    </div>
                  </div>

                  <div className="text-end">
                    <button className="btn btn-success w-25">Publish</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade text-secondary" id="linked">
              <h5 className=" mt-2">Upsells(products IDs)</h5>
              <input type="text" placeholder="Search product by names" className="form-control my-3 te" />
            </div>
            <div className="tab-pane fade text-secondary" id="attributes">
              <h5>Attributes name</h5>
              <input type="text" placeholder="e.g. Color" className="form-control" />
              <h5 className="my-2">Values (Comma Seprated)</h5>
              <input type="text" placeholder="e.g. Red,Blue,Green" className="form-control" /> <br />
              <button className="btn btn-outline-primary  my-2"> Add Attribute </button>

            </div>
            <div className="tab-pane fade text-secondary" id="variations">
              <p className="mt-2 ">Generates variations from attributes.(Click on Button to get varients table)</p>
              <button className="btn btn-outline-primary">Generates Variation</button>
            </div>
            <div className="tab-pane fade text-secondary" id="general">
              <form>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Product Code</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>SKU</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Manage Stock?</label>
                    <select className="form-control">
                      <option value="no"></option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>


                  <div className="col-md-6 mb-3">
                    <label>Stock Quantity?</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Is Delivery Charge?</label><br />

                    <select className="form-control ">
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>

                  </div> <div className="col-md-6 mb-3">
                    <label>Manage Stock?</label>
                    <select className="form-control">
                      <option value="no"></option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>





                  <div className="col-md-6 mb-3">
                    <label>Delivery charge</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </form>
            </div>



          </div>
        </div>

        {/* RIGHT SIDE - Image Upload */}

      </div>
      <style>
        {`
        .img-box{
  width: 100%;
  max-width: 200px;
  height: 200px;
  display: flex;
  background-color: lightgrey;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 6px;
}

      .nav-tabs .nav-link {
  color: grey !important;
  text-decoration: none !important;

}  
        .nav-tabs .nav-link.active {
  color: black !important;
    text-decoration: none !important;

}
    .nav-tabs .nav-link:hover{
      color: black !important;

    }
        `}
      </style>
    </div>
  );
}
