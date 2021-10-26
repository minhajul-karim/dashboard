import Axios from 'axios';
import { Home } from './pages';

Axios.defaults.baseURL = 'http://localhost:5000/api/';

export default function App() {
  return <Home />;
}
