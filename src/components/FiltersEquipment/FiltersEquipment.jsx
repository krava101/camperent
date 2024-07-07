import scss from './FiltersEquipment.module.scss';
import icons from '../../assets/sprite.svg';
import { useState } from 'react';
import clsx from 'clsx';
import { vehicleEquipment } from '../../redux/filter/constants';

function FiltersEquipment({ onSelect }) {
  const [active, setActive] = useState('');

  const handleSelect = filter => {
    if (active !== filter) {
      setActive(filter);
      onSelect(filter);
    } else {
      setActive('');
      onSelect('');
    }
  };

  return (
    <div className={scss.equipment}>
      <p>Filters</p>
      <h2>Vehicle equipment</h2>
      <hr />
      <ul>
        <li
          className={clsx(
            scss.item,
            active === vehicleEquipment.ac && scss.active
          )}
        >
          <button
            type="button"
            onClick={() => handleSelect(vehicleEquipment.ac)}
          >
            <svg>
              <use href={`${icons}#icon-ac`}></use>
            </svg>
            <p>AC</p>
          </button>
        </li>
        <li
          className={clsx(
            scss.item,
            active === vehicleEquipment.transmission && scss.active
          )}
        >
          <button
            type="button"
            onClick={() => handleSelect(vehicleEquipment.transmission)}
          >
            <svg>
              <use href={`${icons}#icon-transmission`}></use>
            </svg>
            <p>automatic</p>
          </button>
        </li>
        <li
          className={clsx(
            scss.item,
            active === vehicleEquipment.kitchen && scss.active
          )}
        >
          <button
            type="button"
            onClick={() => handleSelect(vehicleEquipment.kitchen)}
          >
            <svg>
              <use href={`${icons}#icon-kitchen`}></use>
            </svg>
            <p>kitchen</p>
          </button>
        </li>
        <li
          className={clsx(
            scss.item,
            active === vehicleEquipment.tv && scss.active
          )}
        >
          <button
            type="button"
            onClick={() => handleSelect(vehicleEquipment.tv)}
          >
            <svg>
              <use href={`${icons}#icon-tv`}></use>
            </svg>
            <p>TV</p>
          </button>
        </li>
        <li
          className={clsx(
            scss.item,
            active === vehicleEquipment.bathroom && scss.active
          )}
        >
          <button
            type="button"
            onClick={() => handleSelect(vehicleEquipment.bathroom)}
          >
            <svg>
              <use href={`${icons}#icon-shower`}></use>
            </svg>
            <p>Shower/WC</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FiltersEquipment;