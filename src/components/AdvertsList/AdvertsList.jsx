import AdvertsCard from '../AdvertsCard/AdvertsCard';
import AdvertsLoader from '../AdvertsLoader/AdvertsLoader';
import scss from './AdvertsList.module.scss';

function AdvertsList({ adverts, loading }) {
  return (
    <>
      {!adverts.length ? (
        <AdvertsLoader />
      ) : (
        <>
          <ul className={scss.list}>
            {adverts.map(ad => (
              <li key={ad._id}>
                <AdvertsCard advert={ad} />
              </li>
            ))}
          </ul>
          {loading && <AdvertsLoader />}
        </>
      )}
    </>
  );
}

export default AdvertsList;
