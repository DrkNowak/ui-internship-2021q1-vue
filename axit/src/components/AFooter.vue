<template>
  <footer class="footer">
    <SocialMedia />
    <p class="footer__text">© {{ date }} Axure Themes</p>
  </footer>
</template>

<script>
import SocialMedia from './SocialMedia.vue';
export default {
  name: 'AFooter',
  components: {
    SocialMedia
  },
  data() {
    return {
      date: new Date().getUTCFullYear()
    };
  }
};
</script>

<style lang="scss">
.footer {
  height: 85px;
  margin-top: 21px;
  background-color: $black;
  display: flex;
  flex-direction: column;
  align-items: center;

  .social {
    width: 30%;
    margin: 24px 0 0 100px;

    .social__list-el {
      display: inline-block;
      margin-right: 7%;
    }

    .social__icon {
      font-size: 1.5vw;
      color: $socialGrey;
    }
  }

  .footer__text {
    margin-top: 15px;
    font-size: $footer;
    color: $descGrey;
  }
}
</style>
