<template>
  <div>
    <h1>{{ detail }}</h1>
    <ul class="items">
      <li v-for="item in items" :key="item.version.name">
        {{ item.version.name }} {{ item.game_index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GameIndices',

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
