import { useSelector } from 'react-redux';
import {
  selectFilteredAdverts,
  selectIsLastPage,
  selectIsLoading,
} from '../../redux/adverts/selectrors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import Modals from '../../components/Modals/Modals';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import scss from './CatalogPage.module.scss';

function CatalogPage() {
  const adverts = useSelector(selectFilteredAdverts);
  const isLoading = useSelector(selectIsLoading);
  const isLastPage = useSelector(selectIsLastPage);
  return (
    <main>
      <section className={scss.catalog}>
        <AdvertsList adverts={adverts} loading={isLoading} />
        {!isLastPage && <LoadMoreBtn />}
      </section>
      <Modals />
    </main>
  );
}

export default CatalogPage;
