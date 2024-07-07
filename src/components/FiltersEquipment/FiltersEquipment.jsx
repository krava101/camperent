import scss from './FiltersEquipment.module.scss';
import icons from '../../assets/sprite.svg';
import { useState } from 'react';
import clsx from 'clsx';

function FiltersEquipment({ onSelect }) {
  const [active, setActive] = useState('');

  const handleSelect = filter => {
    onSelect(filter);
    setActive(filter);
  };

  return (
    <div className={scss.equipment}>
      <p>Filters</p>
      <h2>Vehicle equipment</h2>
      <hr />
      <ul>
        <li className={clsx(scss.item, active === 'ac' && scss.active)}>
          <button type="button" onClick={() => handleSelect('ac')}>
            <svg>
              <use href={`${icons}#icon-ac`}></use>
            </svg>
            <p>AC</p>
          </button>
        </li>
        <li className={clsx(scss.item, active === 'automatic' && scss.active)}>
          <button type="button" onClick={() => handleSelect('automatic')}>
            <svg>
              <use href={`${icons}#icon-transmission`}></use>
            </svg>
            <p>automatic</p>
          </button>
        </li>
        <li className={clsx(scss.item, active === 'kitchen' && scss.active)}>
          <button type="button" onClick={() => handleSelect('kitchen')}>
            <svg>
              <use href={`${icons}#icon-kitchen`}></use>
            </svg>
            <p>kitchen</p>
          </button>
        </li>
        <li className={clsx(scss.item, active === 'tv' && scss.active)}>
          <button type="button" onClick={() => handleSelect('tv')}>
            <svg>
              <use href={`${icons}#icon-tv`}></use>
            </svg>
            <p>TV</p>
          </button>
        </li>
        <li className={clsx(scss.item, active === 'bathroom' && scss.active)}>
          <button type="button" onClick={() => handleSelect('bathroom')}>
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
