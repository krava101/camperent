import { useSelector } from 'react-redux';
import {
  selectFilteredAdverts,
  selectIsLoading,
} from '../../redux/adverts/selectrors';
import AdvertsList from '../AdvertsList/AdvertsList';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import scss from './Catalog.module.scss';

function Catalog() {
  const adverts = useSelector(selectFilteredAdverts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <section className={scss.catalog}>
      <AdvertsList adverts={adverts} loading={isLoading} />
      {!!adverts.length && adverts.length % 4 === 0 && <LoadMoreBtn />}
    </section>
  );
}

export default Catalog;
