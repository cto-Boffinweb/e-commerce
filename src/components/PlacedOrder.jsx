import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import success from "../assets/success.gif";

export default function PlacedOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isConfirmed } = location.state || { isConfirmed: false };

  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      <div className="row">
        <div className="col-sm-6 mx-auto text-center">
          {isConfirmed && (
            <img src={success} alt="Order Confirmed" style={{ height: 200, width: 200 }} />
          )}
          <h1 className="my-5" style={{ color: isConfirmed ? "black" : "red" }}>
            {isConfirmed ? "Your Order is Confirmed" : "Your Order is Not Confirmed"}
          </h1>
          {!isConfirmed && <p className="text-muted">Please select a payment method to place your order.</p>}
          <div className="d-flex justify-content-center my-5">
            {isConfirmed ? (
              <>
                <button className="btn btn-dark mx-2" style={{ width: 180 }} onClick={() => navigate("/trackOrder")}>
                  Track Order
                </button>
                <button className="btn btn-outline-dark mx-2" style={{ width: 180 }} onClick={() => navigate("/")}>
                  Continue Shopping
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-dark mx-2" style={{ width: 180 }} onClick={() => navigate(-1)}>
                  Go Back
                </button>
                <button className="btn btn-outline-dark mx-2" style={{ width: 180 }} onClick={() => navigate("/")}>
                  Continue Shopping
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
