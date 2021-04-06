<template>
  <main class="main-wrapper">
    <CNavHeader />
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
  }
};
</script>

<style scoped>
.main-wrapper {
  margin: 0 10%;
}

.nav-link {
  margin-right: 10px;
  color: #bbb;
  font-family: 'Squada One', cursive;
  text-decoration: none;
  text-transform: uppercase;
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
  height: 2px;
  width: 100%;
  background-color: #000;
}
</style>
