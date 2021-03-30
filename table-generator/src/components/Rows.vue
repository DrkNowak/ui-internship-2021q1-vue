<template>
  <div class="cars__rows">
    <div
      v-for="{ row, index } in rowsContentWithId"
      :key="index"
      class="cars__table"
    >
      <p v-for="cell in row" :key="cell">{{ cell }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rows',

  props: {
    rowsContent: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    rowsContentWithId() {
      const rowsContentWithId = [...this.rowsContent];

      return rowsContentWithId.map((row, index) => ({ row, index }));
    }
  }
};
</script>

<style>
.cars__table {
  width: 50%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
  border: 1px solid black;
  border-top: none;
}
</style>

<style scoped>
.cars__rows > :nth-child(even) {
  background-color: #ccc;
}

.cars__table--headers {
  border-top: 1px solid black;
}
</style>
