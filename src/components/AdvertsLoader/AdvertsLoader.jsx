import scss from './AdvertsLoader.module.scss';
import icons from '../../assets/sprite.svg';

function AdvertsLoader() {
  return (
    <>
      <ul className={scss.loadingList}>
        {Array.from({ length: 4 }, (_, i) => (
          <li key={i}>
            <div className={scss.imgWrap}></div>
            <div className={scss.advert}>
              <div>
                <div className={scss.advertTitle}>
                  <h2></h2>
                  <p>
                    <span></span>
                    <svg>
                      <use href={`${icons}#icon-like`}></use>
                    </svg>
                  </p>
                </div>
                <div className={scss.advertInfo}>
                  <div className={scss.rating}></div>
                  <div className={scss.location}></div>
                </div>
              </div>
              <p className={scss.description}></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className={scss.btn}></div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AdvertsLoader;
