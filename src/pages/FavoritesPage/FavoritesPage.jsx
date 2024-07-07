import { useSelector } from 'react-redux';
import { selectFavoritesAdverts } from '../../redux/favoritesAdverts/selectors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import Modals from '../../components/Modals/Modals';

function FavoritesPage() {
  const adverts = useSelector(selectFavoritesAdverts);

  return (
    <main>
      <AdvertsList adverts={adverts} />
      <Modals />
    </main>
  );
}

export default FavoritesPage;
