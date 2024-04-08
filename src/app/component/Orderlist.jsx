import React from "react";
import OrderItem from "./OrderItem";
import styles from "../style/orderedlist.module.css";
import Releated from "./Releated";
import { releated } from "../utilss/data";
const Orderlist = ({
  cart,
  ismobile,
  addtocart,
  removeFromCart,
  recommended,
  removeFromCartOne,
}) => {
  // const cartLengthv = cart.length();

  const releted = [1, 2, 3, 4];

  const uniqueCart = cart.filter((item, index) => cart.indexOf(item) === index);
  // const itemCount = cart.filter((cartItem) => cartItem.id === item.id).length;

  const carsWithQuantity = cart.reduce((acc, car) => {
    const existingIndex = acc.findIndex((item) => item.id === car.id);

    if (existingIndex !== -1) {
      
      acc[existingIndex].quantity = (acc[existingIndex].quantity || 0) + 1; // Increment quantity for existing item
    } else {
      acc.push({ ...car, quantity: 1 }); // Create new object with quantity 1
    }

    return acc;
  }, []);

  

  return (
    <div className={styles.maincontainer}>
      <div className="desktop">
        <div className={styles.headingcontainer}>
          <h2>Recommended</h2>
          {ismobile ? null : <p>View all</p>}
        </div>

        <div>
          {releated[recommended].map((item, index) => (
            <div key={index} className={styles.itemcontainer1}>
              <Releated addtocart={addtocart} item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.headingcontainer}>
        <h2>Order List</h2>
        {ismobile ? null : <p>View all</p>}
      </div>
      {cart?.length > 0 ? (
        <div>
          <div>
            {carsWithQuantity?.map((item, index) => (
              <div key={index} className={styles.itemcontainer1}>
                <OrderItem
                  quantity={item.quantity}
                  item={item}
                  removeFromCart={removeFromCart}
                  addtocart={addtocart}
                  removeFromCartOne={removeFromCartOne}
                />
              </div>
            ))}
          </div>
          <div>
            <hr
              style={{
                width: "100%",
                height: "1px",
                background: "#C1C1C1",
                border: "none",
                marginBlock: "24px",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              <p>Sub total</p>
              <p
                style={{
                  color: "#383838",
                }}
              >
                {cart?.length ? cart.length * 20.27 : null}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              <p>Vat</p>
              <p
                style={{
                  color: "#383838",
                }}
              >
                5%
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                <h3>Total</h3>
                <h
                  style={{
                    color: "#383838",
                  }}
                >
                  {cart?.length ? Math.round(cart.length * 20.27 * 1.05) : null}
                </h>
              </div>
            </div>

            <button className={styles.checkoutBtn}>Checkout</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Your Cart is Empty!</p>
        </div>
      )}
    </div>
  );
};

export default Orderlist;
