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
            <div className="card p-4 shadow" style={{ border: "none", boxShadow: "none" ,fontSize:'14px'}}>
              <h4 className="mb-4 text-center">Billing Details</h4>

              <form className='checkout-form' style={{fontSize:'14px'}}>
                <div className="mb-3">
                  <label className="form-label required">Country</label>
                  <select className="form-select" required>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label required">First Name </label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label required">Last Name </label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label required">Company Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label required">Address </label>
                  <input type="text" className="form-control" required />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label required">Town / City </label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label required">State / County </label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label required">Postcode / Zip </label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label required">Email Address </label>
                    <input type="email" className="form-control" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label required">Phone </label>
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
<textarea name="" id="" placeholder='Order Notes' className='w-100'></textarea>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
<div className="card p-4 shadow mt-4" style={{ border: "none", boxShadow: "none" ,fontSize:'14px'}}>
  <h4 className="mb-3">Your Order</h4>

  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Product Name</th>
        <th className="text-end">Total</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Smart Watch</td>
        <td className="text-end">$30.00</td>
      </tr>
      <tr>
        <td>TV</td>
        <td className="text-end">$30.00</td>
      </tr>
      <tr>
        <td>Book</td>
        <td className="text-end">$30.00</td>
      </tr>
      <tr>
        <td>Smart Watch</td>
        <td className="text-end">$30.00</td>
      </tr>
      <tr>
        <td>TV</td>
        <td className="text-end">$30.00</td>
      </tr>
      <tr>
        <td>Book</td>
        <td className="text-end">$30.00</td>
      </tr>

      <tr>
        <td><b>Cart Subtotal</b></td>
        <td className="text-end"><b>$210.00</b></td>
      </tr>

      <tr>
        <td><b>Shipping</b></td>
        <td className="text-end"><b>$5.00</b></td>
      </tr>

      <tr>
        <td><b>Order Total</b></td>
        <td className="text-end"><b>$215.00</b></td>
      </tr>
    </tbody>
  </table>

  {/* Payment Methods */}
  <div className="mt-4">
    <h5>Payment Methods</h5>

    <div className="form-check mt-2">
      <input type="radio" name="payment" className="form-check-input" id="bank" />
      <label htmlFor="bank" className="form-check-label"><b>Direct Bank Transfer</b></label>
    </div>
    <p className="text-muted ps-4">
      Make your payment directly into our bank account.  
      Please use your Order ID as the payment reference.  
      Your order will not be shipped until the funds have cleared.
    </p>

    <div className="form-check">
      <input type="radio" name="payment" className="form-check-input" id="paypal" />
      <label htmlFor="paypal" className="form-check-label"><b>PayPal</b></label>
    </div>

    <div className="form-check mt-2">
      <input type="radio" name="payment" className="form-check-input" id="cod" />
      <label htmlFor="cod" className="form-check-label"><b>Cash on Delivery</b></label>
    </div>

  </div>

  <button className="btn btn-dark w-100 mt-3">Place Order</button>
</div>

          </div>
        </div>
      </div>
     <style>
{`

.checkout-form input,
.checkout-form select,
.checkout-form textarea {
  border-radius: 0 !important;
}
  
  .required::after {
  content: " *";
  color: red;
  font-weight: bold;
}


`}
</style>

    </div>
    
  )
}
