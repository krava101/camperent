import React from 'react';
import scss from './CustomInput.module.scss';
import icons from '../../assets/sprite.svg';

function CustomInput({ value, onClick }, ref) {
  return (
    <button className={scss.input} onClick={onClick} ref={ref} type="button">
      {value ? (
        <span>{value}</span>
      ) : (
        <span className={scss.placeholder}>Booking date</span>
      )}
      <svg>
        <use href={`${icons}#icon-calendar`}></use>
      </svg>
    </button>
  );
}

const CustomInputRef = React.forwardRef(CustomInput);
export default CustomInputRef;
