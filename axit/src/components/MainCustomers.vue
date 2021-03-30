<template>
  <div class="main__wrapper">
    <section class="main__section">
      <h2 class="main__h2">WHAT OUR CUSTOMERS ARE SAYING</h2>
      <div class="main__line"></div>
      <p class="main__paragraph">
        {{ getLorem(8) }}
      </p>
      <div class="main__customers-wrapper">
        <MainCustomer
          v-for="customer in customers"
          :key="customer.name"
          v-bind="customer"
        />
      </div>
    </section>
  </div>
</template>

<script>
import MainCustomer from '@/components/MainCustomer';

export default {
  name: 'MainCustomers',
  components: {
    MainCustomer
  },
  data() {
    return {
      customers: [
        {
          name: 'Jeremy H.',
          position: 'Manager',
          picture: require('@/assets/images/avatar.png')
        },
        {
          name: 'John S.',
          position: 'Freelancer',
          picture: require('@/assets/images/avatar.png')
        },
        {
          name: 'Susan W.',
          position: 'Photographer',
          picture: require('@/assets/images/avatar.png')
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
  padding: 7% 9% 0 9%;

  .main__h2 {
    font-size: $hdrMedium;
    font-family: $raleway;
    text-transform: uppercase;
  }

  .main__line {
    margin: 27px 0;
  }

  .main__customers-wrapper {
    padding: 5% 0;
    margin-left: 8%;
    width: 100%;
    display: flex;
  }
}
</style>
