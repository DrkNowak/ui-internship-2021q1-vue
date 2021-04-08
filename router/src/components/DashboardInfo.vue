<template>
  <article class="info">
    <h3 class="info__header">{{ tabTitle }} created</h3>
    <p class="info__amount">{{ getAmount }}</p>
    <div class="info__show">
      <p class="info__show-all">show all {{ tabTitle }}</p>
      <i class="fas fa-chevron-right"></i>
    </div>
  </article>
</template>

<script>
export default {
  name: 'DashboardInfo',

  props: {
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
    getAmount() {
      return this.tabContent.amount;
    }
  }
};
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  padding: 5px 20px 5px 10px;
  border: 1px solid #ccc;
}

.info__header {
  font-size: 15px;
  color: #666;
}

.info__amount {
  margin: 10px 0;
  font-size: 50px;
  font-family: sans-serif;
}

.info__show {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  text-transform: capitalize;
  color: rgb(130, 130, 255);
}

.info__show-all {
  font-family: sans-serif;
}
</style>
