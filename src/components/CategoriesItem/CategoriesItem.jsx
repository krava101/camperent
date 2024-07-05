import icons from '../../assets/sprite.svg';
import scss from './CategoriesItem.module.scss';

function CategoriesItem({ title, value }) {
  return (
    <li className={scss.item}>
      <svg>
        <use href={`${icons}#icon-${title.toLowerCase()}`}></use>
      </svg>
      <p>{value}</p>
    </li>
  );
}

export default CategoriesItem;
