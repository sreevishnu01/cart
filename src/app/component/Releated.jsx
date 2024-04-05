import React from "react";
import Image from "next/image";

function Releated() {
  return (
    <div className="order-item">
      <div className="img">
        <Image
          src={"/assets/card/card1.png"}
          alt="Picture of the author"
          fill
          style={{ aspectRatio: "calc(400/300)" }}
        />
      </div>
      <div className="info">
        <h2 className="product-name">Conference chair</h2>
        <p className="price">AED 20.27</p>
      </div>
      <div className="btn">
        <p>View</p>
      </div>
    </div>
  );
}

export default Releated;
