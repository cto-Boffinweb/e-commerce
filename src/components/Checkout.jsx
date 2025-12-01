import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {users} from '../components/Userdata'
export default function Checkout() {
  const [user, setUser] = useState(null);
const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    setUser(loggedInUser);
    setSelectedAddress(loggedInUser.addresses?.[0] || null);
  }
}, []);


  // Map ke liye form fields ka array
  const billingFields = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Company Name", name: "company", type: "text" },
    { label: "Address", name: "address", type: "text" },
    { label: "Town / City", name: "city", type: "text" },
    { label: "State / County", name: "state", type: "text" },
    { label: "Postcode / Zip", name: "postcode", type: "text" },
    { label: "Email Address", name: "email", type: "email" },
    { label: "Phone", name: "phone", type: "tel" }
  ];

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
         <div className="col-lg-6 my-5">

  {user ? (
    <div>
      <div className="p-3 border mb-3 rounded" style={{ fontSize: "14px" }}>
        <h5 className="mb-3">Your Details</h5>

        <p className="m-0"><b>Name:</b> {user.firstName} {user.lastName}</p>
        <p className="m-0"><b>Email:</b> {user.email}</p>
        <p className="m-0"><b>Phone:</b> {user.phone}</p>
        <p className="m-0"><b>Company:</b> {user.company}</p>
      </div>

      {/* ADDRESS RADIO LIST */}
      <div className="p-3 border rounded" style={{ fontSize: "14px" }}>
        <h5 className="mb-3">Select Delivery Address</h5>

       {user.addresses?.map((addr, i) => (
  <div
    key={i}
    className={`form-check p-2 mb-2 rounded border 
    ${selectedAddress?.label === addr.label ? "border-dark bg-light" : "border-secondary"}`}
    style={{ cursor: "pointer" }}
    onClick={() => setSelectedAddress(addr)}
  >
    <input
      type="radio"
      name="address"
      className="form-check-input mt-1"
      checked={selectedAddress?.label === addr.label}
      onChange={() => setSelectedAddress(addr)}
    />

    <label className="form-check-label ms-2">
      <b>{addr.label}:</b>  
      {addr.address}, {addr.city}, {addr.state} {addr.postcode}, {addr.country}
    </label>
  </div>
))}


        <button className="btn btn-dark btn-sm mt-3">+ Add New Address</button>
      </div>
    </div>
  ) : (
    /* SHOW BILLING FORM IF NOT LOGGED IN */
    <div className="card p-4 shadow" style={{ fontSize: "14px" }}>
      <h4 className="mb-4 text-center">Billing Details</h4>

      <form className="checkout-form">
        <div className="row">
          {billingFields.map((field) => (
            <div className="col-md-6 mb-3" key={field.name}>
              <label className="form-label required">{field.label}</label>
              <input type={field.type} className="form-control" />
            </div>
          ))}
        </div>
      </form>
    </div>
  )}

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
                  <label htmlFor="online" className="form-check-label"><b>Online Payment</b></label>
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
  );
}
