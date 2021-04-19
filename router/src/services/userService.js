import urls from '@/common/urls';
import apiClient from './AxiosClient';

export default {
  getUsers() {
    return apiClient.get(urls.usersUrl);
  }
};
