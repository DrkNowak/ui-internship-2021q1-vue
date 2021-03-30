<template>
  <div class="main__wrapper">
    <section class="main__section">
      <h2 class="main__h2 main__h2--white">stylish axure design</h2>
      <div class="main__line main__line--white"></div>
      <p class="main__paragraph">
        Use the sections you need, remove the ones you don't. Create gorgeous
        prototypes faster than ever!
      </p>
      <CustomButton text="Download" class="main__button--white" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainStylish'
};
</script>

<style lang="scss" scoped>
.main__section {
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  padding: 5% 9%;
  background-image: url('../assets/images/stylish.png');
  background-color: rgba(0, 0, 0, 1);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  .main__h2 {
    font-size: $hdrMedium;
    font-family: $raleway;
    text-transform: uppercase;

    &--white {
      color: $white;
    }
  }

  .main__line {
    margin: 26px 0;

    &--white {
      border-color: $white;
    }
  }

  .main__paragraph {
    margin: 6px 0 36px 0;
    font-size: $stylishParagraph;
    font-family: $raleway;
    font-weight: 300;
  }

  .main__button--white {
    background-color: transparent;
    border: 2px solid $white;
    border-radius: 0;
  }
}
</style>
