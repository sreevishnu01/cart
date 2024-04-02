"use client";
import Image from "next/image";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0); // Initialize state for count

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1); // Decrement count and update state
    }
  };

  const handleIncrement = () => {
    setCount(count + 1); // Increment count and update state
  };

  return (
    <div className="card">
      <div className="img-container">
        <Image
          src="/assets/card/card1.png"
          alt="Picture of the author"
          fill
          style={{ aspectRatio: "calc(400/300)" }}
        />
      </div>
      <div className="content">
        <div>
          <div className="title">
            <p>Table</p>
            <p>T1</p>
          </div>
          <p className="discription">
            Aesthetic conference chair, elegant plywood curvature shell design
            is emphasized with interior padding for superior comfort.
          </p>
        </div>
        <p className="price">AED 20.27</p>

        <div className="btn-group">
          <div className="qutity">
            <div className="btn" onClick={handleDecrement}>
              -
            </div>
            <span>{count}</span>
            <div className="btn" onClick={handleIncrement}>
              +
            </div>
          </div>
          <button className="cart-btn">
            <p>Add To Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;