<template>
  <div>
    <h1>{{ detail }}</h1>
    <ul>
      <li v-for="item in items" :key="item.ability.name">
        {{ item.ability.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Abilities',

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
