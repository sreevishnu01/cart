"use client";
import React, { useState } from "react";
import Category from "./Category";
import Filteredlist from "./Filteredlist";
import Orderlist from "./Orderlist";
import styles from "../style/homelayout.module.css";
import Bar from "./Bar";
const HomeLayout = () => {
  const [cart, setCart] = useState([]);
  const [recommended, setrecommended] = useState("em");

  const addtocart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(
      (prevCart) => prevCart.filter((item) => item.id !== itemId.id) // Filter out the item to remove
    );
  };
  const removeFromCartOne = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.slice(); // Create a copy of the cart
      const itemIndex = updatedCart.findIndex((item) => item.id === itemId.id);

      if (itemIndex !== -1) {
        updatedCart.splice(itemIndex, 1); // Remove one item at the found index
      }

      return updatedCart;
    });
  };

  return (
    <div className={styles.maincontainer}>
      <Bar />
      <div className={styles.mainlayout}>
        <Category
          cart={cart}
          removeFromCart={removeFromCart}
          addtocart={addtocart}
          recommended={recommended}
          removeFromCartOne={removeFromCartOne}
        />
        <Filteredlist addtocart={addtocart} setrecommended={setrecommended} />
        <div className="desktop">
          <Orderlist
            cart={cart}
            addtocart={addtocart}
            removeFromCart={removeFromCart}
            recommended={recommended}
            removeFromCartOne={removeFromCartOne}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
