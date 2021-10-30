import Axios from 'axios';
import { Home } from './pages';

Axios.defaults.baseURL =
  // eslint-disable-next-line no-constant-condition
  process.env.NODE_ENV === 'development' || 'test'
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_PROD_API_URL;

export default function App() {
  return <Home />;
}
