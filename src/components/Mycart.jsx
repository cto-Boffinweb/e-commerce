import React, { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function MyCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Men Chino Pants",
      size: "L",
      price: 1000,
      qty: 1,
      image: img1,
    },
    {
      id: 2,
      name: "Chino trousers premium",
      size: "M",
      price: 1200,
      qty: 1,
      image: img2,
    },
  ]);

  // Increase Qty
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease Qty
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // Delete Item
  const deleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <div className="row bg-light mb-4">
        <div className="col-sm-10 mx-auto p-0">
          <p className="my-2">
            <Link to="/">Home</Link> / <Link to="/mycart">Cart</Link>
          </p>
        </div>
      </div>

      <div className="container">
        <table
          className="table "
          style={{ fontSize: "14px" }}
        >
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>NAME</th>
              <th>UNIT PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="align-middle">
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    height={150}
                    width={120}
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </td>

                <td>
                  {item.name}
                  <p className="text-muted mb-0">Size: {item.size}</p>
                </td>

                <td>₹ {item.price.toFixed(2)}</td>

                {/* Quantity */}
                <td>
                  <div
                    className="d-flex align-items-center gap-2"
                    style={{
                      border: "1px solid #ddd",
                      width: "120px",
                      justifyContent: "center",
                      padding: "6px",
                      borderRadius: "4px",
                    }}
                  >
                    <button
                      className="btn btn-sm"
                      onClick={() => decreaseQty(item.id)}
                    >
                      –
                    </button>

                    <span>{item.qty}</span>

                    <button
                      className="btn btn-sm"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td>₹ {(item.qty * item.price).toFixed(2)}</td>

                {/* DELETE ICON */}
                <td>
                  <button style={{border:'none',backgroundColor:'transparent'}}
                    onClick={() => deleteItem(item.id)}
                  >
<RiDeleteBin6Line className="text-danger"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
<div className="row">
    <div className="card shadow my-5">
    <h6 className="text-center my-4 fw-bold">Cart Totals</h6>
    <table className="table" style={{border:'1px solid #DEE2E6'}}>
<tbody style={{fontSize:'14px'}}>
    <tr  >
        <td><b>Subtotals</b></td>
        <td className="text-end"> ₹ {subtotal.toFixed(2)}</td>
    </tr>
    <tr>
        <td><b>Delivery Charge</b></td>
        <td className="text-end">▼</td>
    </tr>
     <tr>
        <td><b>Totals</b></td>
        <td className="text-end"> ₹ {subtotal.toFixed(2)}</td>
    </tr>
    
</tbody>
    </table>
     <div class="d-flex justify-content-around mb-4" >
      <button class="btn btn-outline-dark no-radius">CONTINUE SHOPPING</button>
      <Link to='/checkout'><button class="btn btn-outline-dark no-radius">PROCEED TO CHECKOUT</button></Link>
    </div>
</div>
</div>
        <style>
            {`
           
  .no-radius {
  border-radius: 0 !important;
}
  


            `}
        </style>
      </div>
    </>
  );
}
