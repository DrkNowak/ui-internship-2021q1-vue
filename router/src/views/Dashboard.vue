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
import apiClient from '@/services/AxiosClient';

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
    this.getData();
  }
};
</script>

<style scoped>
.dashboard__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
