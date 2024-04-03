import React from 'react';
import styles from '../style/bottomFilterComponent.module.css';
import { category } from '../utilss/data';
import CheckBoxInput from './CheckBoxInput';
const BottomFilterComponet = () => {
  const onChange = () => {};
  return (
    <div className={styles.bottomFilterComponet}>
      <div className={styles.filterContainer}>
        {category[0].submenu.map((item, index) => (
          <CheckBoxInput label={item.title} onChange={onChange} key={index} />
        ))}
      </div>

      <button className={styles.applyBtn}>Apply</button>
    </div>
  );
};

export default BottomFilterComponet;
