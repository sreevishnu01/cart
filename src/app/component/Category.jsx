import React from "react";
import Dropdown from "./Dropdown";
import styles from "../style/category.module.css";
import Image from "next/image";
import DropdownMobile from "./DropdownMobile";

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.title}>
        <h2>Category</h2>
        <div className={styles.icon_container}>
          <div className={styles.icon}>
            <Image
              src="/assets/icons/cart.svg"
              alt="Picture of the author"
              fill
              style={{ aspectRatio: "calc(400/300)" }}
            />
          </div>
        </div>
      </div>
      <DropdownMobile />
      <div className="desktop">
        <Dropdown />
      </div>
    </div>
  );
};

export default Category;
