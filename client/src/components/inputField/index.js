import TextField from '@mui/material/TextField';
import { ErrorMessage, Field } from 'formik';

export default function InputField({ name, label, error }) {
  return (
    <Field
      required
      fullWidth
      error={error}
      name={name}
      label={label}
      as={TextField}
      autoComplete="off"
      helperText={<ErrorMessage name={name} />}
      variant="outlined"
      margin="normal"
    />
  );
}
