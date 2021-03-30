<template>
  <section class="main__pricing-option">
    <h3 class="main__h3" :class="{ 'main__h3--margin': !mostPopular }">
      {{ membership }}
    </h3>
    <div class="main__price">
      <h1 class="main__h1"><span class="main__currency">$</span>{{ price }}</h1>
      <p class="main__desc">{{ subscription }}</p>
    </div>
    <div v-if="mostPopular" class="main__most-popular">
      <p class="main__paragraph">our most popular</p>
    </div>
    <div v-else class="main__most-popular main__most-popular--not"></div>
    <div class="main__spec">
      <p class="main__spec-p">{{ space }}</p>
      <p class="main__spec-p">{{ bandwidth }}</p>
      <p class="main__spec-p">{{ websites }} websites</p>
      <p class="main__spec-p">{{ customization }} customization</p>
      <p class="main__spec-p">wordpress integration</p>
      <p class="main__spec-p">{{ support }} support</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainPricingOption',
  props: {
    membership: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    subscription: {
      type: String,
      default: ''
    },
    space: {
      type: String,
      default: ''
    },
    bandwidth: {
      type: String,
      default: ''
    },
    websites: {
      type: Number,
      default: 3
    },
    customization: {
      type: String,
      default: ''
    },
    support: {
      type: String,
      default: ''
    },
    mostPopular: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.main__pricing-option {
  width: 31%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;

  .main__h3 {
    margin-bottom: 1px;
    padding: 5% 0 6% 0;
    color: $white;
    background-color: $inputblack;

    &--margin {
      margin-top: 10%;
    }
  }

  .main__price {
    background-color: $inputblack;

    .main__desc {
      margin-top: 4%;
      padding-bottom: 5%;
      color: $descGrey;
      font-size: 15px;
      font-style: italic;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }

  .main__h1 {
    padding: 2% 0;
    color: $white;
    font-weight: 700;
    background-color: $inputblack;
    font-size: 90px;
    font-family: $raleway;

    .main__currency {
      font-size: 34px;
      color: $white;
      font-family: $raleway;
    }
  }

  .main__most-popular {
    padding: 4% 0;
    background-color: $orange;
    p {
      color: $white;
      text-transform: uppercase;
    }
    &--not {
      padding: 1% 0;
    }
  }

  .main__spec {
    display: flex;
    flex-direction: column;
    align-items: center stretch;
    text-transform: uppercase;
    &-p {
      padding: 4% 0;
      color: $paragraphGrey;
      margin-bottom: 1px;
      background-color: $white;
      font-size: $paragraph;
    }
  }
}
</style>
