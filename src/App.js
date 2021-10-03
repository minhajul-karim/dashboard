import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Dashboard from './pages/Dashboard';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return <Dashboard />;
}
