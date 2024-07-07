import { ErrorMessage, Field, Form, Formik } from 'formik';
import Calendar from '../Calendar/Calendar';
import * as Yup from 'yup';
import scss from './AdvertsForm.module.scss';

const schema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .max(40, 'Name must contain less than 40 characters'),
  email: Yup.string().email().required('Email is required'),
  bookingDate: Yup.string().required('Booking date is required'),
});

const initialValues = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

function AdvertsForm() {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    window.location.pathname = '/catalog';
  };

  return (
    <div className={scss.form}>
      <div className={scss.formHeader}>
        <p>Book your campervan now</p>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="p" className={scss.error} />

            <Field type="text" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="p" className={scss.error} />

            <Calendar
              onChange={date =>
                setFieldValue(
                  'bookingDate',
                  new Date(date).toISOString().split('T')[0]
                )
              }
              selected={
                values.bookingDate ? new Date(values.bookingDate) : null
              }
            />
            <ErrorMessage
              name="bookingDate"
              component="p"
              className={scss.error}
            />

            <Field
              as="textarea"
              type="text"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage name="comment" component="p" className={scss.error} />
            <button className={scss.btn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AdvertsForm;
