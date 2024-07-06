import scss from './AdvertsCard.module.scss';
import icons from '../../assets/sprite.svg';
import CategoriesList from '../CategoriesList/CategoriesList';
import { useDispatch } from 'react-redux';
import { setIsAdvertsModalOpen } from '../../redux/controls/slice';
import { setCurrentAdvert } from '../../redux/currentAdvert/slice';
import { useCallback, useEffect } from 'react';

function AdvertsCard({ advert }) {
  const dispatch = useDispatch();
  const categoriesArr = [];
  const categories = {
    ...advert.details,
    adults: advert.adults,
    children: advert.children,
    engine: advert.engine,
    transmission: advert.transmission,
  };

  useEffect(() => {
    for (const key in categories) {
      key === 'airConditioner'
        ? categoriesArr.push({ key: 'AC', value: categories[key] })
        : categoriesArr.push({ key: key, value: categories[key] });
    }
  }, [categories]);

  const openAdvertsModal = () => {
    dispatch(setIsAdvertsModalOpen(true));
    dispatch(setCurrentAdvert({ advert, categories: categoriesArr }));
  };

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
        <CategoriesList categories={categories} />
        <button
          className={scss.modalBtn}
          type="button"
          onClick={openAdvertsModal}
        >
          Show more
        </button>
      </div>
    </div>
  );
}

export default AdvertsCard;
