import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as zod from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import scss from './AdvertsForm.module.scss';

const schema = zod.object({
  name: zod.string().min(1).nonempty({ message: 'Name is required!' }),
  email: zod.string().nonempty({ message: 'Email is required!' }),
  bookingDate: zod
    .date()
    .nullable()
    .refine(date => date !== null, { message: 'Booking date is required!' })
    .refine(date => date > new Date(), {
      message: 'Booking date must be in the fututre!',
    }),
});

const initialValues = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

const handleSubmit = (values, action) => {
  console.log('submit');
  action.resetForm();
};

function AdvertsForm() {
  return (
    <div className={scss.form}>
      <div className={scss.formHeader}>
        <p>Book your campervan now</p>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="p" className={scss.error} />
          <Field type="text" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" className={scss.error} />
          <Field type="text" name="bookingDate" placeholder="Booking date" />
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
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AdvertsForm;
