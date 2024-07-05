import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/currentAdvert/selectors';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import scss from './ModalCategoriesList.module.scss';

function ModalCategoriesList() {
  const categories = useSelector(selectCategories);
  return (
    <ul className={scss.list}>
      {categories.reduce((acc, { key, value }, i) => {
        if (value) {
          acc.push(
            <CategoriesItem
              key={i}
              title={key}
              value={
                key === 'water' || key === 'gas'
                  ? key
                  : typeof value === 'string'
                  ? value
                  : value > 1
                  ? `${value} ${key}`
                  : key
              }
            />
          );
        }
        return acc;
      }, [])}
    </ul>
  );
}

export default ModalCategoriesList;
