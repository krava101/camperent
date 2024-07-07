import scss from './FiltersTypes.module.scss';
import icons from '../../assets/sprite.svg';
import { useState } from 'react';
import clsx from 'clsx';

function FiltersTypes({ onSelect }) {
  const [active, setActive] = useState('');

  const handleSelect = filter => {
    onSelect(filter);
    setActive(filter);
  };

  return (
    <div className={scss.types}>
      <h2>Vehicle type</h2>
      <hr />
      <ul>
        <li className={clsx(scss.item, active === 'van' && scss.active)}>
          <button type="button" onClick={() => handleSelect('van')}>
            <svg>
              <use href={`${icons}#icon-van`}></use>
            </svg>
            <p>Van</p>
          </button>
        </li>
        <li className={clsx(scss.item, active === 'fully' && scss.active)}>
          <button type="button" onClick={() => handleSelect('fully')}>
            <svg>
              <use href={`${icons}#icon-fully-van`}></use>
            </svg>
            <p>Fully Integrated</p>
          </button>
        </li>
        <li className={clsx(scss.item, active === 'alcove' && scss.active)}>
          <button type="button" onClick={() => handleSelect('alcove')}>
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
