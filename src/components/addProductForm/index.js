import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  productName: '',
  skuCode: '',
  productDescription: '',
  category: '',
  weight: '',
  cost: '',
  price: '',
};

const AddProductSchema = Yup.object().shape({
  productName: Yup.string()
    .min(3, 'Must be longer than 3 characters')
    .max(30, 'Product Name should not be longer than 30 characters')
    .required('Required'),
  skuCode: Yup.string()
    .min(4, 'Must be longer than 4 characters')
    .max(20, 'SKU Code should not be longer than 20 characters')
    .required('Required'),
  productDescription: Yup.string().required('Required'),
  category: Yup.string()
    .min(3, 'Must be longer than 3 characters')
    .max(30, 'Category should not be longer than 30 characters')
    .required('Required'),
  weight: Yup.number().required('Required'),
  cost: Yup.number().min(0, 'Must provide a number').required('Required'),
  price: Yup.number().min(0, 'Must provide a number').required('Required'),
});

export default function AddProductForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AddProductSchema}
    >
      {({ dirty, isValid }) => (
        <Form>
          <Field
            required
            fullWidth
            name="productName"
            label="Product Name"
            as={TextField}
            autoComplete="off"
            helperText={<ErrorMessage name="productName" />}
            variant="outlined"
            margin="normal"
          />
          <Field
            required
            fullWidth
            name="skuCode"
            label="SKU Code"
            as={TextField}
            autoComplete="off"
            helperText={<ErrorMessage name="skuCode" />}
            variant="outlined"
            margin="normal"
          />
          <Field
            required
            fullWidth
            name="productDescription"
            label="Product Description"
            as={TextField}
            autoComplete="off"
            helperText={<ErrorMessage name="productDescription" />}
            variant="outlined"
            margin="normal"
          />
          <Field
            required
            fullWidth
            name="category"
            label="Category"
            as={TextField}
            autoComplete="off"
            helperText={<ErrorMessage name="category" />}
            variant="outlined"
            margin="normal"
          />
          <Field
            required
            fullWidth
            name="weight"
            label="Weight"
            as={TextField}
            autoComplete="off"
            helperText={<ErrorMessage name="weight" />}
            variant="outlined"
            margin="normal"
          />
          <Field
            required
            fullWidth
            name="cost"
            label="Cost"
            as={TextField}
            autoComplete="off"
            helperText={<ErrorMessage name="cost" />}
            variant="outlined"
            margin="normal"
          />
          <Field
            required
            fullWidth
            name="price"
            label="Price"
            as={TextField}
            autoComplete="off"
            helperText={<ErrorMessage name="price" />}
            variant="outlined"
            margin="normal"
          />
          <Button disabled={!dirty || !isValid} variant="contained" size="large">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
