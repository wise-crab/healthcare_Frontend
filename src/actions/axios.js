import axios from 'axios';
import getCookie from '../functions/getCookie';

const token = getCookie('token');

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export default axios;
