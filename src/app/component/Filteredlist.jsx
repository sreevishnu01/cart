"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "../style/filteredlist.module.css";
import { product } from "../utilss/data";
const items = [];
const Filteredlist = ({ addtocart }) => {
  const [search, setSearch] = useState("");
  const [productItems, setProductItems] = useState(product);

  const filterProduct = (searchinput) => {
    return product.filter((item) =>
      item.title.toLowerCase().includes(searchinput.toLowerCase())
    );
  };

  useEffect(() => {
    const data = filterProduct(search);
    setProductItems(data);
  }, [search]);
  return (
    <div className={styles.container}>
      <div className={styles.headingcontainer}>
        <h2 className="desktop">Filtered Result</h2>
        <div className={styles.search_container}>
          <input
            type="text"
            className={styles.searchbar}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={styles.search_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M7.985 8.5155C7.2455 9.1345 6.293 9.508 5.2545 9.508C2.906 9.508 1 7.602 1 5.254C1 2.906 2.906 1 5.2545 1C7.602 1 9.5085 2.906 9.5085 5.254C9.5085 6.293 9.135 7.246 8.516 7.9845L10.8905 10.3595C10.9635 10.4325 11 10.5285 11 10.625C11 10.9185 10.7315 11 10.625 11C10.529 11 10.433 10.9635 10.3595 10.89L7.985 8.5155ZM5.2545 1.7505C3.3205 1.7505 1.751 3.3205 1.751 5.254C1.751 7.1875 3.3205 8.7575 5.2545 8.7575C7.1875 8.7575 8.758 7.1875 8.758 5.254C8.758 3.3205 7.1875 1.7505 5.2545 1.7505Z"
                fill="#0E0E0E"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.gridcontainer}>
        {productItems.map((items, index) => (
          <div key={index}>
            <Card item={items} img={items.img} addtocart={addtocart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filteredlist;
