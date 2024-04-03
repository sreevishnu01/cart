import React from 'react';
import Dropdown from './Dropdown';
import styles from '../style/category.module.css';
const Category = () => {
  return (
    <div className={styles.category}>
      <h2>Category</h2>
      <Dropdown />
    </div>
  );
};

export default Category;
