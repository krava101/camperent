import { useSelector } from 'react-redux';
import { selectReviews } from '../../redux/currentAdvert/selectors';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import scss from './ReviewsList.module.scss';
import { useState } from 'react';

function ReviewsList() {
  const revs = useSelector(selectReviews);
  const [reviews] = useState(revs);
  return (
    <div className={scss.listWrap}>
      <ul className={scss.list}>
        {reviews.map((e, i) => (
          <ReviewsItem key={i} review={e} />
        ))}
      </ul>
    </div>
  );
}

export default ReviewsList;
