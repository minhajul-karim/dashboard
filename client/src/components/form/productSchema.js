import * as Yup from 'yup';

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

export default AddProductSchema;
