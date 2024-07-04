import scss from './AdvertsCard.module.scss';
import icons from '../../assets/sprite.svg';

function AdvertsCard({ advert }) {
  const categories = {
    ...advert.details,
    adults: advert.adults,
    children: advert.children,
  };
  console.dir(categories);
  return (
    <div className={scss.card}>
      <div
        className={scss.imgWrap}
        style={{ backgroundImage: `url(${advert.gallery[0]})` }}
      ></div>
      <div className={scss.advert}>
        <div>
          <div className={scss.advertTitle}>
            <h2>{advert.name}</h2>
            <p>
              €{advert.price}
              <button className={scss.likeBtn} type="button">
                <svg>
                  <use href={`${icons}#icon-like`}></use>
                </svg>
              </button>
            </p>
          </div>
          <div className={scss.advertInfo}>
            <div className={scss.rating}>
              <svg>
                <use href={`${icons}#icon-star`}></use>
              </svg>
              <p>{`${advert.rating}(${advert.reviews.length} Reviews)`}</p>
            </div>
            <div className={scss.location}>
              <svg>
                <use href={`${icons}#icon-pin`}></use>
              </svg>
              <p>{advert.location}</p>
            </div>
          </div>
        </div>
        <p className={scss.description}>{advert.description}</p>
      </div>
    </div>
  );
}

export default AdvertsCard;
