"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function OrderItem({
  item,
  removeFromCart,
  quantity,
  addtocart,
  removeFromCartOne,
}) {
  const [quantity1, setquantity1] = useState();

  const handleChange = (e) => {
    let quantity_value = e.target.value;

    console.log("qutityvlaue :", quantity_value, quantity1);
    if (quantity_value > 37) {
      alert("Quantity is limited to 37");
      return (e.target.value = 37);
    }
    setquantity1(quantity_value);

    if (quantity_value > quantity) {
      for (let index = quantity; index < quantity_value; index++) {
        addtocart(item);
      }
    }
    if (quantity_value === "") {
      return;
    }
    if (quantity_value < quantity) {
      for (let index = quantity; index > quantity_value; index--) {
        removeFromCartOne(item);
      }
    }
  };

  useEffect(() => {
    setquantity1(quantity);
  }, [quantity]);

  return (
    <div>
      <div>
        <div className="order-item">
          <div className="img">
            <Image
              src={item ? item.img : "/assets/card/card1.png"}
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
          <div className="quantity">
            <div className="btn" onClick={() => removeFromCartOne(item)}>
              -
            </div>
            {/* <span>{quantity}</span> */}
            <input
              type="text"
              className="quantity_input"
              placeholder={quantity}
              onChange={handleChange}
              max={37}
              min={0}
              value={quantity1}
            />
            <div className="btn" onClick={() => addtocart(item)}>
              +
            </div>
          </div>
          {/* <p className="price">x{quantity}</p>
          <p>AED 20.27</p> */}
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
