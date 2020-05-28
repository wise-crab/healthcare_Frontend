import React from 'react';
import '../assets/styles/sass/components/_checkbox.scss';

const Checkbox = ({ text = '', value = '' }) => (
  <label className='checkbox-container'>
    {text}
    <input type='checkbox' value={value} />
    <span className='checkmark'></span>
  </label>
);

export default Checkbox;
