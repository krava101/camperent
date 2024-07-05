import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAdvert } from '../../redux/currentAdvert/selectors';
import icons from '../../assets/sprite.svg';
import scss from './AdvertsModal.module.scss';
import { setIsAdvertsModalOpen } from '../../redux/controls/slice';
import { resetCurrentAdvert } from '../../redux/currentAdvert/slice';
import { useState } from 'react';

function AdvertsModal() {
  const dispatch = useDispatch();
  const adv = useSelector(selectCurrentAdvert);
  const [advert] = useState(adv);

  const handleClose = () => {
    dispatch(setIsAdvertsModalOpen(false));
    dispatch(resetCurrentAdvert());
  };

  return (
    <div className={scss.modal}>
      <div className={scss.container}>
        <div className={scss.titleWrap}>
          <div className={scss.title}>
            <h2>{advert.name}</h2>
            <button
              className={scss.closeModal}
              type="button"
              onClick={handleClose}
            >
              <svg>
                <use href={`${icons}#icon-close`}></use>
              </svg>
            </button>
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
          <p>€{advert.price}</p>
        </div>
        <ul className={scss.gallery}>
          {advert.gallery.map((e, i) => (
            <li key={i} style={{ backgroundImage: `url(${e})` }}></li>
          ))}
        </ul>
        <p className={scss.description}>{advert.description}</p>
      </div>
    </div>
  );
}

export default AdvertsModal;
