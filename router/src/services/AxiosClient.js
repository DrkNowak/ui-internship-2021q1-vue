import axios from 'axios';
import urls from '@/common/urls';

const apiClient = axios.create({
  baseURL: urls.baseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
});

export default apiClient;
