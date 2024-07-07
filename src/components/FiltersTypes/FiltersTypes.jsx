import scss from './FiltersTypes.module.scss';
import icons from '../../assets/sprite.svg';
import { useState } from 'react';
import clsx from 'clsx';
import { vehicleType } from '../../redux/filter/constants';

function FiltersTypes({ onSelect }) {
  const [active, setActive] = useState('');

  const handleSelect = filter => {
    if (active !== filter) {
      onSelect(filter);
      setActive(filter);
    } else {
      onSelect('');
      setActive('');
    }
  };

  return (
    <div className={scss.types}>
      <h2>Vehicle type</h2>
      <hr />
      <ul>
        <li
          className={clsx(scss.item, active === vehicleType.van && scss.active)}
        >
          <button type="button" onClick={() => handleSelect(vehicleType.van)}>
            <svg>
              <use href={`${icons}#icon-van`}></use>
            </svg>
            <p>Van</p>
          </button>
        </li>
        <li
          className={clsx(
            scss.item,
            active === vehicleType.full && scss.active
          )}
        >
          <button type="button" onClick={() => handleSelect(vehicleType.full)}>
            <svg>
              <use href={`${icons}#icon-fully-van`}></use>
            </svg>
            <p>Fully Integrated</p>
          </button>
        </li>
        <li
          className={clsx(
            scss.item,
            active === vehicleType.alcove && scss.active
          )}
        >
          <button
            type="button"
            onClick={() => handleSelect(vehicleType.alcove)}
          >
            <svg>
              <use href={`${icons}#icon-alcove`}></use>
            </svg>
            <p>alcove</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FiltersTypes;
