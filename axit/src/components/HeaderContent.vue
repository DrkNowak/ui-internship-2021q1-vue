<template>
  <div class="hdr__content">
    <section class="hdr__wrapper">
      <article class="hdr__article">
        <h1 class="hdr__logo hdr__logo--big">ax<span>it</span></h1>
        <h2 class="hdr__h2">{{ $t('hdr_desc') }}</h2>
        <div class="hdr__line"></div>
        <p class="hdr__p">
          {{ getLorem(23) }}
        </p>
        <CustomButton :text="$t('download')" class="hdr__button--transparent" />
      </article>
      <TrialForm />
    </section>
  </div>
</template>

<script>
import TrialForm from '@/components/TrialForm.vue';

export default {
  name: 'HeaderContent',
  components: {
    TrialForm
  }
};
</script>

<style scoped lang="scss">
.hdr__content {
  width: 100%;
  background-image: url('../assets/images/header.png');
  background-color: rgba(0, 0, 0, 1);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  .hdr__logo--big {
    font-size: $hdrBig;
  }

  .hdr__wrapper {
    display: flex;
    padding: 7% 10% 10% 11%;
  }

  .hdr__article {
    width: 50%;
  }

  .hdr__h2 {
    margin-top: 2%;
    font-size: $hdrMedium;
    line-height: 3rem;
    font-weight: 300;
    font-family: $raleway;
    color: $white;
    text-transform: uppercase;
  }

  .hdr__line {
    width: 60px;
    height: 2px;
    margin-top: 4%;
    color: $white;
    border-bottom: $white solid 1px;
  }

  .hdr__p {
    margin-top: 7%;
    margin-bottom: 7%;
    width: 90%;
    line-height: 1.5rem;
    color: $transparentWhite;
    font-family: $raleway;
    font-weight: 100;
  }
  .hdr__button--transparent {
    color: $white;
    background-color: transparent;
    border: 2px solid $white;
    border-radius: 0;
  }
}
</style>
