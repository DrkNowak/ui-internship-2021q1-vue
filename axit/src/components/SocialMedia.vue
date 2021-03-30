<template>
  <div class="social">
    <ul class="social__list">
      <li v-for="icon in icons" :key="icon.icon" class="social__list-el">
        <i :class="icon.icon" class="social__icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data() {
    return {
      icons: [
        { icon: 'fab fa-facebook-f' },
        { icon: 'fab fa-twitter' },
        { icon: 'fab fa-google-plus-g' },
        { icon: 'fab fa-pinterest' },
        { icon: 'fab fa-instagram' },
        { icon: 'fab fa-stumbleupon' },
        { icon: 'fas fa-rss' }
      ]
    };
  }
};
</script>

<style lang="scss">
.social {
  .social__list-el {
    display: inline-block;
    margin-right: 7%;
  }
  .social__icon {
    font-size: 3.5vw;
    color: $socialGrey;
  }
}
</style>
