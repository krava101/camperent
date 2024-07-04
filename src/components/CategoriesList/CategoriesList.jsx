import icons from '../../assets/sprite.svg';
import scss from './CategoriesList.module.scss';

function CategoriesList({ categories }) {
  return (
    <ul className={scss.list}>
      <li>
        <svg>
          <use href={`${icons}#icon-adults`}></use>
        </svg>
        <p>{categories.adults} adults</p>
      </li>
      <li>
        <svg>
          <use xlinkHref={`${icons}#icon-transmission`}></use>
        </svg>
        <p>{categories.transmission}</p>
      </li>
      <li>
        <svg>
          <use xlinkHref={`${icons}#icon-engine`}></use>
        </svg>
        <p>{categories.engine}</p>
      </li>
      {categories.kitchen && (
        <li>
          <svg>
            <use xlinkHref={`${icons}#icon-kitchen`}></use>
          </svg>
          <p>kitchen</p>
        </li>
      )}
      {categories.beds && (
        <li>
          <svg>
            <use xlinkHref={`${icons}#icon-beds`}></use>
          </svg>
          <p>{categories.beds} beds</p>
        </li>
      )}
      {categories.airConditioner && (
        <li>
          <svg>
            <use xlinkHref={`${icons}#icon-ac`}></use>
          </svg>
          <p>AC</p>
        </li>
      )}
    </ul>
  );
}

export default CategoriesList;
