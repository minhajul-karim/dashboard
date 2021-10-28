import Axios from 'axios';
import { Home } from './pages';

// eslint-disable-next-line no-unused-vars
const localApi = 'http://localhost:5000/api/';
const remoteApi = 'https://gooods.herokuapp.com/api/';

Axios.defaults.baseURL = remoteApi;

export default function App() {
  return <Home />;
}
