<template>
  <div>
    <h1>{{ detail }}</h1>
    <ul class="Moves">
      <li v-for="item in items" :key="item.stat.name">
        {{ item.stat.name }} : {{ item.base_stat }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Stat',

  props: {
    detail: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.items {
  display: flex;
  flex-direction: column;
}
</style>
