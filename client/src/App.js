import Axios from 'axios';
import { Home } from './pages';

// eslint-disable-next-line no-unused-vars
const developmentApiURL = 'http://localhost:5000/api/';
const remoteApiURL = 'https://gooods.herokuapp.com/api/';

Axios.defaults.baseURL = remoteApiURL;

export default function App() {
  return <Home />;
}
