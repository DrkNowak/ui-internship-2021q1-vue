<template>
  <main class="main-wrapper">
    <CNavHeader :is-active="isClickable" @click.native="returnToHomePage" />
    <nav v-if="isNavigation">
      <router-link
        v-for="{ name, path, meta } in routes"
        :key="name"
        :to="path"
        class="nav-link"
        exact
        @click.native="hideNavigation(meta.display)"
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
      routes,
      isNavigation: true
    };
  },

  computed: {
    isClickable() {
      return !this.isNavigation || this.$route.path !== '/';
    }
  },

  methods: {
    hideNavigation(display) {
      this.isNavigation = display;
    },

    returnToHomePage() {
      this.isNavigation = true;
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
