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
  const { isSuccess, isError, successMsg, errorMsg, shouldShowDeleteDialog, productId } =
    useSelector((appState) => appState.product);
  const { reset, deleteProduct } = bindActionCreators(productActions, dispatch);
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
      open={
        (isSuccess && successMsg) ||
        (isError && errorMsg) ||
        (calleeComponent === 'EnhancedTable' && shouldShowDeleteDialog)
      }
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
          <Typography variant="h5" component="span">
            {isError && 'Error!'}
          </Typography>
          <Typography variant="h5" component="span">
            {isSuccess && 'Awesome!'}
          </Typography>
          {calleeComponent === 'EnhancedTable' && shouldShowDeleteDialog && (
            <Typography variant="h5" component="span">
              Are you sure?
            </Typography>
          )}
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography component="span">{isError && errorMsg}</Typography>
          <Typography component="span">{isSuccess && successMsg}</Typography>
          {calleeComponent === 'EnhancedTable' && shouldShowDeleteDialog && (
            <Typography component="span">This product is going to be deleted</Typography>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {calleeComponent === 'EnhancedTable' && shouldShowDeleteDialog ? (
          <>
            <Button variant="contained" color="error" onClick={() => deleteProduct(productId)}>
              Yes
            </Button>
            <Button variant="contained" onClick={closeHandler}>
              No
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={closeHandler}>
            Ok
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
