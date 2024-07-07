import { useSelector } from 'react-redux';
import {
  selectFilteredAdverts,
  selectIsLoading,
} from '../../redux/adverts/selectrors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import Modals from '../../components/Modals/Modals';

function CatalogPage() {
  const adverts = useSelector(selectFilteredAdverts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <main>
      <AdvertsList adverts={adverts} loading={isLoading} />
      <Modals />
    </main>
  );
}

export default CatalogPage;
