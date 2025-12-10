import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Card(props) {

  const totalStars = 5;
  const filledStars = props.stars;
  const emptyStars = totalStars - filledStars;

  return (
    <div className="card shadow " style={{border:'none'}}>
      <img src={props.image} className="card-img-top" alt="" />

      <div className="card-body text-center">
        <p>{props.title}</p>

        {/* Price Section */}
        <p>
          {props.oldPrice && (
            <del style={{ color: "gray", marginRight: "8px" }}>
              {props.oldPrice}
            </del>
          )}

          <span style={{ fontWeight: "bold" }}>
            {props.price}
          </span>
        </p>

        {/* Stars */}
        <div style={{ fontSize: "18px" }}>
          {[...Array(filledStars)].map((_, i) => (
            <FaStar key={i} style={{ color: "#FFD700" }} />
          ))}

          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={i} style={{ color: "#FFD700" }} />
          ))}
        </div>

        <button type='button' className='btn btn-outline-dark mt-3'>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
