import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';

export default function AlertDialog() {
  const dispatch = useDispatch();
  const { isError, isSuccess } = useSelector((appState) => appState.product);
  const { closeAlertDialog } = bindActionCreators(productActions, dispatch);

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={isSuccess || isError}
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
          <CheckBoxIcon sx={{ marginRight: '10px' }} />
          {isSuccess && 'Awesome!'}
          {isError && 'Error!'}
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {isSuccess && 'Product saved.'}
          {isError && 'Product did not save.'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAlertDialog}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
