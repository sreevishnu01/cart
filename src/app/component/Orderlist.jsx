import React from "react";
import OrderItem from "./OrderItem";
import styles from "../style/orderedlist.module.css";
const Orderlist = ({ ismobile }) => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.headingcontainer}>
        <h2>Order List</h2>
        {ismobile ? null : <p>View all</p>}
      </div>
      <div className={styles.itemcontainer}>
        <OrderItem />
        <OrderItem />
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
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          <h3>Total</h3>
          <h3
            style={{
              color: "#383838",
            }}
          >
            AED 80.56
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Orderlist;
