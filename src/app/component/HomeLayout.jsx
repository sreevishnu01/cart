'use client';
import React, { useState } from 'react';
import Category from './Category';
import Filteredlist from './Filteredlist';
import Orderlist from './Orderlist';
import styles from '../style/homelayout.module.css';
import Bar from './Bar';
const HomeLayout = () => {
  const [cart, setCart] = useState([]);

  const addtocart = (item) => {
    setCart((prev) => [...prev, item]);
  };
  console.log(cart);
  return (
    <div className={styles.maincontainer}>
      <Bar />
      <div className={styles.mainlayout}>
        <Category cart={cart} />
        <Filteredlist addtocart={addtocart} />
        <div className="desktop">
          <Orderlist cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
