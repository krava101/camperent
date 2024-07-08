import { useState } from 'react';
import scss from './AdvertsModalDetails.module.scss';
import AdvertsFeatures from '../AdvertsFeatures/AdvertsFeatures';
import AdvertsReviews from '../AdvertsReviews/AdvertsReviews';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import AdvertsForm from '../AdvertsForm/AdvertsForm';

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
      <div className={scss.detailsWrap}>
        <div className={scss.animationWrap}>
          <AnimatePresence mode="wait">
            {nav === 'features' && (
              <motion.div
                key={'features'}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <AdvertsFeatures />
              </motion.div>
            )}
            {nav === 'reviews' && (
              <motion.div
                key={'reviews'}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <AdvertsReviews />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AdvertsForm />
      </div>
    </div>
  );
}

export default AdvertsModalDetails;
