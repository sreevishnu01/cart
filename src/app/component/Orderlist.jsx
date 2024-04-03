import React from "react";
import Image from "next/image";

function Orderlist() {
  return (
    <div>
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

        <p className="price">x1</p>
        <p>AED 20.27</p>
      </div>
    </div>
  );
}

export default Orderlist;
