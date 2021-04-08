<template>
  <div class="dashboard">
    <DashboardTab
      v-for="(item, title) in tabContent"
      :key="title"
      :tab-title="title"
      :tab-content="item"
    />
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
      tabTitles: []
    };
  },

  async mounted() {
    try {
      const { data = {} } = (await ApiClient.get()) || {};
      const tabContent = [];

      for (const item in data) {
        tabContent.push(data[item]);
      }

      this.tabContent = data;
      this.tabTitles = Object.keys(data);
    } catch (error) {
      console.log(error);
      this.isError = !this.isError;
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: space-between;
}
</style>
