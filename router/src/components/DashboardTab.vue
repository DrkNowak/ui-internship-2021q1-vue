<template>
  <div class="tab">
    <h2 class="tab__header">{{ tabTitle }} Management</h2>
    <div class="tab__inside">
      <DashboardInfo v-bind="dashboardProps" />
      <div class="tab__buttons">
        <CButton :button-title="`add ${tabTitle}`" button-icon="fa-plus" />
        <CButton button-title="performance" button-icon="fa-clone" />
      </div>
    </div>
  </div>
</template>

<script>
import CButton from '@/components/CButton';
import DashboardInfo from '@/components/DashboardInfo';

export default {
  name: 'DashboardTab',

  components: {
    DashboardInfo,
    CButton
  },

  props: {
    isLoading: {
      type: Boolean
    },

    tabTitle: {
      type: String,
      default: ''
    },

    tabContent: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    dashboardProps() {
      return {
        tabTitle: this.tabTitle,
        tabContent: this.tabContent,
        isLoading: this.isLoading
      };
    }
  }
};
</script>

<style scoped>
.tab {
  display: flex;
  flex-direction: column;
  min-width: 350px;
  margin: 40px 5px;
  padding: 20px 10px;
  border: 1px solid #ccc;
}

.tab__inside {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10%;
}

.tab__header {
  margin: 0 0 10px 0;
  font-size: 16px;
}

.tab__buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
