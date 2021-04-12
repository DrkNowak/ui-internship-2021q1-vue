import apiClient from '@/services/AxiosClient';

export default {
  methods: {
    async getData() {
      try {
        this.isLoading = true;
        const { data = {} } = (await apiClient.get()) || {};

        this.tabContent = data;
      } catch (error) {
        console.log(error);
        this.isError = !this.isError;
      } finally {
        this.isLoading = false;
      }
    }
  }
};
