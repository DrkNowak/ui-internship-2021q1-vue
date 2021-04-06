<template>
  <main class="main-wrapper">
    <CNavHeader :is-active="isClickable" />
    <nav v-if="$route.meta.display">
      <router-link
        v-for="{ name, path } in routes"
        :key="name"
        :to="path"
        class="nav-link"
        exact
        >{{ name }}</router-link
      >
    </nav>

    <slot />
  </main>
</template>

<script>
import { routes } from '@/router/index';
import CNavHeader from '@/components/CNavHeader';

export default {
  name: 'CNavContainer',

  components: {
    CNavHeader
  },

  data() {
    return {
      routes
    };
  },

  computed: {
    isClickable() {
      return this.$route.path === '/';
    }
  }
};
</script>

<style scoped>
.main-wrapper {
  margin: 0 10%;
}

.nav-link {
  text-decoration: none;
  text-transform: uppercase;
  color: #bbb;
  margin-right: 10px;
  font-family: 'Squada One', cursive;
}

.router-link-active {
  position: relative;
  color: #000;
}

.router-link-active::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  display: block;
  background-color: #000;
  height: 2px;
  width: 100%;
}
</style>
