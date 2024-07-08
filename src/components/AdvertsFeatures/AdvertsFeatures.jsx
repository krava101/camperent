import ModalCategoriesList from '../ModalCategoriesList/ModalCategoriesList';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import scss from './AdvertsFeatures.module.scss';

function AdvertsFeatures() {
  return (
    <section className={scss.features}>
      <ModalCategoriesList />
      <VehicleDetails />
    </section>
  );
}

export default AdvertsFeatures;
