import { Link } from 'react-router-dom';
import scss from './FavoritesEmptyState.module.scss';

function FavoritesEmptyState() {
  return (
    <div className={scss.message}>
      <h3>
        Your Favorite <span>Campers</span>
      </h3>
      <p>
        Here you will see the campers you have added to your favorites. To add a
        camper to your favorites, go to the <Link to="/catalog">catalog</Link>{' '}
        and click on the heart icon next to the camper you like.
      </p>
    </div>
  );
}

export default FavoritesEmptyState;
