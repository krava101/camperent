import { useSelector } from 'react-redux';
import {
  selectFilteredAdverts,
  selectIsLoading,
  selectIsLastPage,
} from '../../redux/adverts/selectrors';
import AdvertsList from '../AdvertsList/AdvertsList';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import scss from './Catalog.module.scss';

function Catalog() {
  const adverts = useSelector(selectFilteredAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isLastPage = useSelector(selectIsLastPage);

  return (
    <section className={scss.catalog}>
      <AdvertsList adverts={adverts} loading={isLoading} />
      {!isLastPage && <LoadMoreBtn />}
    </section>
  );
}

export default Catalog;
