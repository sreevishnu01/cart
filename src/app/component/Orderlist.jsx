import React from 'react';
import OrderItem from './OrderItem';
import styles from '../style/orderedlist.module.css';
const Orderlist = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.itemcontainer}>
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
};

export default Orderlist;
