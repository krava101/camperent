import scss from './ReviewsItem.module.scss';
import icons from '../../assets/sprite.svg';
import clsx from 'clsx';

function ReviewsItem({ review }) {
  return (
    <li className={scss.review}>
      <div className={scss.reviewInfo}>
        <span className={scss.avatar}>{review.reviewer_name[0]}</span>
        <div>
          <p>{review.reviewer_name}</p>
          <ul>
            {Array.from({ length: 5 }, (_, i) => (
              <li key={i}>
                <svg
                  className={clsx(
                    scss.star,
                    review.reviewer_rating > i ? scss.full : scss.empty
                  )}
                >
                  <use href={`${icons}#icon-star`}></use>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={scss.text}>{review.comment}</p>
    </li>
  );
}

export default ReviewsItem;
