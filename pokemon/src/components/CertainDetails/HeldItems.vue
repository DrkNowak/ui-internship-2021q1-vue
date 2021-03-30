<template>
  <div>
    <h1>{{ detail }}</h1>
    <ul class="Held Items">
      <li v-for="item in items" :key="item.item.name">
        {{ item.item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeldItems',

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
