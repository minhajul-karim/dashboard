import { useFormik } from 'formik';

export default function AddProductForm() {
  const formik = useFormik({
    initialValues: {
      productName: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form>
      <input
        id="productName"
        name="productName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.productName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
