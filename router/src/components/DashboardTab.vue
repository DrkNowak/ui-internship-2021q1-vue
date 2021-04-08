<template>
  <div class="tab">
    <h2 class="tab__header">{{ tabTitle }} Management</h2>
    <div class="tab__inside">
      <DashboardInfo :tab-title="tabTitle" :tab-content="tabContent" />
      <div class="tab__buttons">
        <CButton :button-title="'add ' + tabTitle" button-icon="fa-plus" />
        <CButton button-title="performance" button-icon="fa-clone" />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardInfo from '@/components/DashboardInfo';
import CButton from '@/components/CButton';

export default {
  name: 'DashboardTab',

  components: {
    DashboardInfo,
    CButton
  },

  props: {
    tabTitle: {
      type: String,
      default: ''
    },

    tabContent: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style>
.tab {
  text-transform: uppercase;
}
</style>

<style scoped>
.tab {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 150px;
  margin: 3%;
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
