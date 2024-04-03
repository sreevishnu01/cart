"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import styles from "../style/category.module.css";
import Image from "next/image";
import DropdownMobile from "./DropdownMobile";
import Modal from "./Modal";
import Orderlist from "./Orderlist";

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCartOpen, setIsModalCartOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModalCart = () => {
    setIsModalCartOpen(!isModalCartOpen);
  };
  return (
    <div className={styles.category}>
      <div className={styles.title}>
        <h2>Category</h2>
        <div className={styles.icon_container} onClick={toggleModalCart}>
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

      {isModalCartOpen && (
        <Modal onClose={toggleModalCart}>
          <Orderlist ismobile={true} />
        </Modal>
      )}
    </div>
  );
};

export default Category;
