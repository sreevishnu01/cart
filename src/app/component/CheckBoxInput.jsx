'use client';
import React, { useState } from 'react';

const CheckboxDiv = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked); // Call provided onChange function
    }
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default CheckboxDiv;
