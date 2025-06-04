import axios from 'axios';
const AxiosInstance = axios.create({
  baseURL: `https://${process.env.REACT_APP_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
