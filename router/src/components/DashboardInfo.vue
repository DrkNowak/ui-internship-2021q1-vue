<template>
  <article class="info">
    <h3 class="info__header">{{ tabTitle }} created</h3>
    <div v-if="isLoading" class="lds-dual-ring"></div>
    <p v-else class="info__amount">{{ tabContent.amount }}</p>
    <div class="info__show">
      <p class="info__show-all">show all {{ tabTitle }}</p>
      <i class="fas fa-chevron-right" />
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
    },

    isLoading: Boolean
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

.lds-dual-ring {
  display: inline-block;
  width: 78px;
  height: 78px;
}

.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 50%;
  height: 50%;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
