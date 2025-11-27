import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout() {
  return (
    <div>
      <div className="row bg-light">
        <div className="col-sm-10 mx-auto p-0 ">
          <p className='my-2'>
            <Link to='/'>Home</Link> / <Link to='/mycart'>My Cart</Link>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row bg-white shadow py-2 my-5" style={{borderTop:'3px solid black'}}>
          <div style={{fontSize:'14px', display:'flex'}}>
            <h6>Returning Customer?</h6>
            <p className="ms-2">Click here to login</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card p-4 shadow">
              <h4 className="mb-4 text-center">Billing Details</h4>

              <form>
                <div className="mb-3">
                  <label className="form-label">Country *</label>
                  <select className="form-select" required>
                    <option value="">Select Country</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name *</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address *</label>
                  <input type="text" className="form-control" required />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Town / City *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">State / County *</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Postcode / Zip *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-control" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone *</label>
                  <input type="tel" className="form-control" required />
                </div>

                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="createAccount" />
                  <label className="form-check-label" htmlFor="createAccount">
                    Create an account?
                  </label>
                </div>

                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="differentAddress" />
                  <label className="form-check-label" htmlFor="differentAddress">
                    Ship to a different address?
                  </label>
                </div>

              </form>
            </div>
          </div>

          <div className="col-lg-6">
                            {/* <button type="submit" className="btn btn-dark w-100">Place Order</button> */}

          </div>
        </div>
      </div>
    </div>
  )
}
