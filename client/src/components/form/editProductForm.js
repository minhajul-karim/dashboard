import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InputField from '../inputField';
import * as productActions from '../../redux/actions/productActions';
import Spinner from '../spinner';
import AlertDialog from '../alertDialog';
import AddProductSchema from './productSchema';

const initialValues = {
  productName: '',
  skuCode: '',
  productDescription: '',
  category: '',
  weight: '',
  cost: '',
  price: '',
};

export default function EditProductForm() {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, shouldRedirect } = useSelector((appState) => appState.product);
  const { updateProduct } = bindActionCreators(productActions, dispatch);
  const history = useHistory();

  const handleSubmit = (values) => {
    updateProduct(values, productId);
  };

  useEffect(() => {
    shouldRedirect && history.push('/products/all');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRedirect]);

  // Show the spinner when data is saving
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AddProductSchema}
    >
      {function Render({ dirty, isValid, touched, errors, setFieldValue }) {
        const [isFormLoading, setIsFormLoading] = useState(true);
        useEffect(() => {
          let isMounted = true;
          axios
            .get(`products/${productId}`)
            .then((resp) => {
              const product = resp.data;
              const fields = [
                'productName',
                'skuCode',
                'productDescription',
                'category',
                'weight',
                'cost',
                'price',
              ];
              fields.forEach((field) => setFieldValue(field, product[field], true));
              isMounted && setIsFormLoading(false);
            })
            .catch((err) => console.log(err));
          return () => {
            isMounted = false;
          };
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        if (isFormLoading) {
          return <Spinner />;
        }

        return (
          <Form>
            <AlertDialog />
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
        );
      }}
    </Formik>
  );
}
