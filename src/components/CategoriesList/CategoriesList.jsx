import scss from './CategoriesList.module.scss';
import CategoriesItem from '../CategoriesItem/CategoriesItem';

function CategoriesList({ categories }) {
  return (
    <ul className={scss.list}>
      <CategoriesItem value={`${categories.adults} adults`} title="adults" />
      <CategoriesItem value={categories.transmission} title="transmission" />
      <CategoriesItem value={categories.engine} title="engine" />
      {categories.kitchen && <CategoriesItem value="kitchen" title="kitchen" />}
      {categories.beds && (
        <CategoriesItem value={`${categories.beds} beds`} title="beds" />
      )}
      {categories.airConditioner && <CategoriesItem value="AC" title="AC" />}
    </ul>
  );
}

export default CategoriesList;
