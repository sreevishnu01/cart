import React from "react";
import Category from "./Category";
import Filteredlist from "./Filteredlist";
import Orderlist from "./Orderlist";
import styles from "../style/homelayout.module.css";
import Bar from "./bar";
const HomeLayout = () => {
  return (
    <div className={styles.maincontainer}>
      <Bar />
      <div className={styles.mainlayout}>
        <Category />
        <Filteredlist />

        <div className="desktop">
          <Orderlist />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
