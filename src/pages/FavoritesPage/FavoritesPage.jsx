import { useSelector } from 'react-redux';
import { selectFavoritesAdverts } from '../../redux/favoritesAdverts/selectors';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import Modals from '../../components/Modals/Modals';
import FavoritesEmptyState from '../../components/FavoritesEmptyState/FavoritesEmptyState';

function FavoritesPage() {
  const adverts = useSelector(selectFavoritesAdverts);

  return (
    <main>
      {!adverts.length ? (
        <FavoritesEmptyState />
      ) : (
        <AdvertsList adverts={adverts} />
      )}
      <Modals />
    </main>
  );
}

export default FavoritesPage;
