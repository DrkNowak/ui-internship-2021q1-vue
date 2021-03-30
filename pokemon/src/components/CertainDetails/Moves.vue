<template>
  <div>
    <h1>{{ detail }}</h1>
    <ul class="Moves">
      <li v-for="item in items" :key="item.move.name">
        {{ item.move.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Moves',

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
