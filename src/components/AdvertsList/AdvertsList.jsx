import AdvertsCard from '../AdvertsCard/AdvertsCard';
import AdvertsLoader from '../AdvertsLoader/AdvertsLoader';
import scss from './AdvertsList.module.scss';

function AdvertsList({ adverts, loading }) {
  return (
    <>
      {!loading && !adverts.length ? (
        <p className={scss.text}>
          We apologize, but there are no campers available for your request at
          the moment :(
        </p>
      ) : (
        <>
          {loading ? (
            <AdvertsLoader />
          ) : (
            <ul className={scss.list}>
              {adverts.map(ad => (
                <li key={ad._id}>
                  <AdvertsCard advert={ad} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}

export default AdvertsList;
