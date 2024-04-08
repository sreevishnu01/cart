import React from "react";
import Image from "next/image";

function Releated({ item, addtocart }) {
  return (
    <div className="order-item">
      <div className="img">
        <Image
          src={item.img ? item.img : "/assets/card/card1.png"}
          alt="Picture of the author"
          fill
          style={{ aspectRatio: "calc(400/300)" }}
        />
      </div>
      <div className="info">
        <h2 className="product-name">{item.title}</h2>
        <p className="price">AED 20.27</p>
      </div>
      <div
        className="btn"
        onClick={() => addtocart(item)}
        style={{ cursor: "pointer" }}
      >
        <p>Add To Cart</p>
      </div>
    </div>
  );
}

export default Releated;
