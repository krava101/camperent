import { Form, Formik } from 'formik';
import FiltersEquipment from '../FiltersEquipment/FiltersEquipment';
import FiltersLocation from '../FiltersLocation/FiltersLocation';
import FiltersTypes from '../FiltersTypes/FiltersTypes';
import scss from './Filters.module.scss';
import { setFilters } from '../../redux/filter/slice';
import { useDispatch } from 'react-redux';

const initialValues = {
  location: '',
  equipment: '',
  type: '',
};

function Filters() {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(setFilters(values));
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
