import urls from '@/common/urls';
import apiClient from './AxiosClient';

export default {
  getRoles() {
    return apiClient.get(urls.rolesUrl);
  }
};
