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
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';

export default function AlertDialog() {
  const dispatch = useDispatch();
  const { isError, error } = useSelector((appState) => appState.product);
  const { reset } = bindActionCreators(productActions, dispatch);

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={isError}
      onClose={reset}
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
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography component="div">{isError && error}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={reset}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
