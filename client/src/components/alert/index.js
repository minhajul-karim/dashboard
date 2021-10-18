import { useEffect } from 'react';
import Box from '@mui/material/Box';
import AlertMUI from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

export default function Alert() {
  const open = true;
  const { isLoading, isError, isSuccess } = useSelector((appState) => appState.product);

  useEffect(() => {
    console.log('scroll to top');
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <AlertMUI
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={() => {}}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {!isLoading && isSuccess && 'Awesome! Product Saved'}
          {!isLoading && isError && 'Error!'}
        </AlertMUI>
      </Collapse>
    </Box>
  );
}
