<template>
  <div class="dashboard">
    <div v-if="!isLoading" class="dashboard__container">
      <DashboardTab
        v-for="(content, title) in tabContent"
        :key="title"
        :tab-title="title"
        :tab-content="content"
      />
    </div>
    <h1 v-else>Loading...</h1>
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
      tabContent: [],
      tabTitles: [],
      isLoading: false
    };
  },

  async mounted() {
    try {
      this.isLoading = true;
      const { data = {} } = (await ApiClient.get()) || {};

      this.tabContent = data;
      this.tabTitles = Object.keys(data);
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
