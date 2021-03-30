<template>
  <div class="hdr__nav">
    <router-link to="/">
      <h2 class="hdr__logo">ax<span>it</span></h2>
    </router-link>

    <transition name="slide-fade">
      <nav v-if="menu" class="hdr__links">
        <router-link
          class="hdr__link"
          active-class="hdr__active"
          v-for="route in router"
          :key="route.name"
          :to="route.path"
          >{{ getLangProp(route.name) }}
        </router-link>
      </nav>
    </transition>
    <i
      @click="showMenu"
      class="fas fa-bars hdr__hamburger"
      :class="{ fas: menu, 'fa-times': menu }"
    ></i>
    <select
      class="hdr__select"
      v-model="$i18n.locale"
      @change="changeLang($event)"
    >
      <option value="en">English</option>
      <option value="pl">Polish</option>
    </select>
  </div>
</template>

<script>
import { routes } from '@/router/index.js';

const router = [...routes];

router.shift();

export default {
  name: 'HeaderNav',

  data() {
    return {
      router,
      menu: false
    };
  },

  methods: {
    showMenu() {
      this.menu = !this.menu;
    },

    changeLang(event) {
      localStorage.setItem('lang', event.target.value);
    },

    getLangProp(prop) {
      return this.$t(`nav.${prop.toLowerCase()}`);
    }
  }
};
</script>

<style scoped lang="scss">
.hdr__nav {
  position: relative;
  display: flex;
  height: 72px;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 0 7% 0 11%;

  .hdr__logo {
    font-size: $hdrMedium;
  }
  .hdr__links {
    margin-right: 1vw;

    .hdr__link {
      padding-left: 3.5vw;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.69);
    }

    .hdr__active {
      color: $orange;
    }
  }

  .hdr__hamburger {
    position: absolute;
    top: 39%;
    right: 5%;
    font-size: 20px;
    color: $transparentWhite;
  }

  .slide-fade-enter-active {
    @include transition(all 0.3s ease);
  }

  .slide-fade-leave-active {
    @include transition(all 0.3s cubic-bezier(1, 0.5, 0.8, 1));
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    @include transform(translateX(10px));
    opacity: 0;
  }

  .hdr__select {
    position: absolute;
    left: 20%;
  }
}
</style>
