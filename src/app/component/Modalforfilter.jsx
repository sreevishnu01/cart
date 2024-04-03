import React from "react";
import ReactDOM from "react-dom";
import styles from "../style/modal.module.css";

const Modalforfilter = ({ children, onClose }) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default Modalforfilter;
