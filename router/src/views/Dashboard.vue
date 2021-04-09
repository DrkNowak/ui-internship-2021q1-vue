<template>
  <div class="dashboard">
    <div class="dashboard__container">
      <DashboardTab
        v-for="(content, title) in tabContent"
        :key="title"
        :tab-title="title"
        :tab-content="content"
        :is-loading="isLoading"
      />
    </div>
  </div>
</template>

<script>
import DashboardTab from '@/components/DashboardTab.vue';
import ApiClient from '@/services/AxiosClient';

export default {
  name: 'Dashboard',

  components: {
    DashboardTab
  },

  data() {
    return {
      tabContent: {
        users: {},
        teams: {},
        roles: {}
      },
      isLoading: false
    };
  },

  async mounted() {
    try {
      this.isLoading = true;
      const { data = {} } = (await ApiClient.get()) || {};

      this.tabContent = data;
    } catch (error) {
      console.log(error);
      this.isError = !this.isError;
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.dashboard__container {
  display: flex;
  justify-content: space-between;
}
</style>
