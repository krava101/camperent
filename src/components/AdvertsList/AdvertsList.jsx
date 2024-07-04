import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/selectrors';
import AdvertsCard from '../AdvertsCard/AdvertsCard';
import scss from './AdvertsList.module.scss';

function AdvertsList() {
  const adverts = useSelector(selectAdverts);
  return (
    <ul className={scss.list}>
      {adverts.map(ad => (
        <li key={ad._id}>
          <AdvertsCard advert={ad} />
        </li>
      ))}
    </ul>
  );
}

export default AdvertsList;
