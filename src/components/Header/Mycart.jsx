import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import { Link } from "react-router-dom";

export default function MyCart() {
    const cartItems = [
        {
            id: 1,
            name: "Belted chino trousers polo",
            color: "Blue",
            size: "XS",
            qty: 1,
            price: 191,
            image: img1,
        },
        {
            id: 2,
            name: "Chino trousers premium",
            color: "Black",
            size: "M",
            qty: 1,
            price: 250,
            image: img2,
        },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="container d-flex justify-content-center align-items-center py-5">
            <div className="card shadow p-4" style={{ width: "450px" }}>
                <h3 className="text-center mb-4">
                    My Cart ({cartItems.length})
                </h3>

                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="d-flex mb-3 pb-3 border-bottom"
                    >
                        <img
                            src={item.image}
                            className="rounded"
                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />

                        <div className="ms-3">
                            <h5 className="mb-1">{item.name}</h5>
                            <small className="text-muted">
                                {item.color} / {item.size}
                            </small>
                            <p className="mb-0 mt-1">
                                1 x ${item.price}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h5>Subtotal</h5>
                    <h5>${subtotal}</h5>
                </div>

                <Link to="/checkout"> <button className="btn btn-outline-dark w-100 mt-3">
                    Proceed to Checkout
                </button></Link >
                <Link> <button className="btn btn-outline-dark w-100 mt-3">
                    View Shopping Cart
                </button></Link>
            </div>
        </div>
    );
}
