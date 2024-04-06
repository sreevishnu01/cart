import React from "react";
import Image from "next/image";

function OrderItem({ item, removeFromCart, quantity }) {
  return (
    <div>
      <div>
        <div className="order-item">
          <div className="img">
            <Image
              src={"/assets/card/card1.png"}
              alt="Picture of the author"
              fill
              style={{ aspectRatio: "calc(400/300)" }}
            />
            {/* <div className="remove" onClick={() => removeFromCart(item)}>
              <Image
                src="/assets/icons/remove.png"
                alt="Picture of the author"
                width={30}
                height={30}
                style={{ aspectRatio: "calc(400/300)" }}
              />
            </div> */}
          </div>
          <div className="info">
            <h2 className="product-name">{item.title}</h2>
            <p className="price">AED 20.27</p>
          </div>

          <p className="price">x{quantity}</p>
          <p>AED 20.27</p>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => removeFromCart(item)}
          >
            <Image
              src="/assets/icons/delete.png"
              alt="Picture of the author"
              width={20}
              height={20}
              style={{ aspectRatio: "calc(400/300)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
