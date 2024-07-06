import AdvertsForm from '../AdvertsForm/AdvertsForm';
import ReviewsList from '../ReviewsList/ReviewsList';
import scss from './AdvertsReviews.module.scss';

function AdvertsReviews() {
  return (
    <section className={scss.reviews}>
      <ReviewsList />
      <AdvertsForm />
    </section>
  );
}

export default AdvertsReviews;
