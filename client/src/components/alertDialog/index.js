import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';

export default function AlertDialog({ calleeComponent }) {
  const dispatch = useDispatch();
  const { isSuccess, isError, successMsg, errorMsg } = useSelector((appState) => appState.product);
  const { reset } = bindActionCreators(productActions, dispatch);
  const history = useHistory();

  const closeHandler = () => {
    reset();
    // Redirect users if product update is successful
    if (isSuccess && successMsg && calleeComponent === 'EditProductForm') {
      history.push('/products/all');
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={(isSuccess && successMsg) || (isError && errorMsg)}
      onClose={closeHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">{isError && 'Error!'}</Typography>
          <Typography variant="h5">{isSuccess && 'Awesome!'}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography component="div">{isError && errorMsg}</Typography>
          <Typography component="div">{isSuccess && successMsg}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closeHandler}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
