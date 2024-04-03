import React from "react";
import ReactDOM from "react-dom";
import styles from "../style/modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className="mobile">
        <div className={styles.close} onClick={onClose}>
          X
        </div>
      </div>
      {children}
    </div>
  );
};

export default Modal;
