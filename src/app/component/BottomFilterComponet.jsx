import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import styles from '../style/bottomFilterComponent.module.css';
import { category } from '../utilss/data';
import CheckBoxInput from './CheckBoxInput';

const BottomFilterComponent = () => {
  const onChange = () => {};

  return (
    <motion.div
      className={styles.bottomFilterComponent}
      initial={{ y: 100 }} // Initial position, start from the bottom
      animate={{ y: 0 }} // Animation to move to the top
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className={styles.filterContainer}>
        {category[0].submenu.map((item, index) => (
          <CheckBoxInput label={item.title} onChange={onChange} key={index} />
        ))}
      </div>

      <button className={styles.applyBtn}>Apply</button>
    </motion.div>
  );
};

export default BottomFilterComponent;
