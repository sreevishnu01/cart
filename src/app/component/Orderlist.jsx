import React from "react";
import OrderItem from "./OrderItem";
import styles from "../style/orderedlist.module.css";
const Orderlist = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.headingcontainer}>
        <h2>Order List</h2>
        <p>View all</p>
      </div>
      <div className={styles.itemcontainer}>
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
};

export default Orderlist;
