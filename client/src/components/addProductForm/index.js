import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputField from '../inputField';
import * as productActions from '../../state/actions/productActions';

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
  weight: Yup.number().typeError('Weight must be a number').required('Required'),
  cost: Yup.number()
    .typeError('Cost must be a number')
    .min(0, 'Must provide a number')
    .required('Required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .min(0, 'Must provide a number')
    .required('Required'),
});

export default function AddProductForm() {
  const dispatch = useDispatch();
  const { addProduct } = bindActionCreators(productActions, dispatch);

  const handleSubmit = (values) => {
    addProduct(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AddProductSchema}
    >
      {({ dirty, isValid, touched, errors }) => (
        <Form>
          <InputField
            name="productName"
            label="Product Name"
            error={touched.productName && Boolean(errors.productName)}
          />
          <InputField
            name="skuCode"
            label="SKU Code"
            error={touched.skuCode && Boolean(errors.skuCode)}
          />
          <InputField
            name="productDescription"
            label="Product Description"
            error={touched.productDescription && Boolean(errors.productDescription)}
          />
          <InputField
            name="category"
            label="Category"
            error={touched.category && Boolean(errors.category)}
          />
          <InputField
            name="weight"
            label="Weight(kg)"
            error={touched.weight && Boolean(errors.weight)}
          />
          <InputField name="cost" label="Cost" error={touched.cost && Boolean(errors.cost)} />
          <InputField name="price" label="Price" error={touched.price && Boolean(errors.price)} />
          <Button
            sx={{ mt: '10px' }}
            disabled={!dirty || !isValid}
            variant="contained"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
