import ModalCategoriesList from '../ModalCategoriesList/ModalCategoriesList';
import AdvertsForm from '../AdvertsForm/AdvertsForm';
import scss from './AdvertsFeatures.module.scss';
import VehicleDetails from '../VehicleDetails/VehicleDetails';

function AdvertsFeatures() {
  return (
    <section className={scss.features}>
      <div>
        <ModalCategoriesList />
        <VehicleDetails />
      </div>
      <AdvertsForm />
    </section>
  );
}

export default AdvertsFeatures;
