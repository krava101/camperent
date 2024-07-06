import { useState } from 'react';
import scss from './AdvertsModalDetails.module.scss';
import AdvertsFeatures from '../AdvertsFeatures/AdvertsFeatures';
import AdvertsReviews from '../AdvertsReviews/AdvertsReviews';
import clsx from 'clsx';

function AdvertsModalDetails() {
  const [nav, setNav] = useState('features');
  return (
    <div>
      <div className={scss.navigation}>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => {
                setNav('features');
              }}
            >
              Features
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setNav('reviews');
              }}
            >
              Reviews
            </button>
          </li>
        </ul>
        <span className={clsx(scss.indicator, scss[nav])}></span>
        <hr />
      </div>
      {nav === 'features' && <AdvertsFeatures />}
      {nav === 'reviews' && <AdvertsReviews />}
    </div>
  );
}

export default AdvertsModalDetails;
