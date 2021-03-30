import urls from '@/common/urls';
import apiClient from './AxiosClient';

export default {
  getNames() {
    return apiClient.get(urls.allPokes);
  },
  getDetails(name) {
    return apiClient.get(`/pokemon/${name}`);
  }
};
