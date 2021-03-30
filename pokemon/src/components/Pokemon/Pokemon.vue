<template>
  <li class="Pokemon">
    <router-link :to="pokemon">{{ pokemon }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'Pokemon',

  props: {
    pokemon: {
      type: String,
      default: ''
    },

    url: {
      type: String,
      default: ''
    }
  }
};
</script>
