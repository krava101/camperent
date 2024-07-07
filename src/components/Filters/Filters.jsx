import { Form, Formik } from 'formik';
import FiltersEquipment from '../FiltersEquipment/FiltersEquipment';
import FiltersLocation from '../FiltersLocation/FiltersLocation';
import FiltersTypes from '../FiltersTypes/FiltersTypes';
import scss from './Filters.module.scss';

const initialValues = {
  location: '',
  equipment: '',
  type: '',
};

function Filters() {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <aside className={scss.filters}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <FiltersLocation
              onChange={loc => setFieldValue('location', loc.trim())}
            />
            <FiltersEquipment onSelect={eq => setFieldValue('equipment', eq)} />
            <FiltersTypes onSelect={type => setFieldValue('type', type)} />
            <button className={scss.btn} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </aside>
  );
}

export default Filters;
