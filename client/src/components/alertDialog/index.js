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
  const { isError, errorMsg } = useSelector((appState) => appState.product);
  const { closeAlertDialog } = bindActionCreators(productActions, dispatch);

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={isError}
      onClose={closeAlertDialog}
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
          {/* <CheckBoxIcon sx={{ marginRight: '10px' }} /> */}
          <Typography variant="h5">{isError && 'Error!'}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="h6">{isError && errorMsg}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closeAlertDialog}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
