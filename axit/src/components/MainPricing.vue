<template>
  <div class="main__wrapper">
    <section class="main__section">
      <h2 class="main__h2">pricing options</h2>
      <div class="main__line"></div>
      <p class="main__paragraph">
        {{ getLorem(8) }}
      </p>
      <div class="main__pricing-option-wrapper">
        <MainPricingOption
          v-for="program in programs"
          :key="program.membership"
          v-bind="program"
        />
      </div>
    </section>
  </div>
</template>

<script>
import MainPricingOption from '@/components/MainPricingOption';
export default {
  name: 'MainPricing',
  components: {
    MainPricingOption
  },
  data() {
    return {
      programs: [
        {
          membership: 'Basic',
          price: 0,
          subscription: 'Free for Life',
          space: '1 gb of space',
          bandwidth: '10 gb of bandwidth',
          websites: 3,
          customization: 'Basic',
          support: 'Email',
          mostPopular: false
        },
        {
          membership: 'Professional',
          price: 19,
          subscription: 'Monthly Payment',
          space: '10 gb of space',
          bandwidth: '50 gb of bandwidth',
          websites: 10,
          customization: 'Advanced',
          support: 'Email',
          mostPopular: true
        },
        {
          membership: 'Enterprise',
          price: 70,
          subscription: 'Monthly Payment',
          space: 'unlimited space',
          bandwidth: 'unlimited bandwith',
          websites: 100,
          customization: 'Advanced',
          support: '24/7 customer',
          mostPopular: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.main__section {
  flex-direction: column;
  align-items: center;
  padding: 6% 9% 0 9%;
  background-color: $bgcSwap;

  .main__h2 {
    font-size: $hdrMedium;
    font-family: $raleway;
    text-transform: uppercase;
  }

  .main__line {
    margin: 2% 0;
  }
  .main__pricing-option-wrapper {
    padding: 8% 2%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
