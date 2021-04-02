<template>
  <div class="cars">
    <div class="cars__table cars__table--headers">
      <p v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>
    <div v-for="(row, index) in content" :key="index" class="cars__table">
      <p v-for="value in row" :key="value">{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableGen',

  props: {
    headers: {
      type: Array,
      default: () => {
        return [];
      }
    },
    content: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.cars > :nth-child(odd) {
  background-color: #ccc;
}

.cars__table {
  width: 50%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
  border: 1px solid black;
  border-top: none;
}

.cars__table--headers {
  border-top: 1px solid black;
}
</style>
