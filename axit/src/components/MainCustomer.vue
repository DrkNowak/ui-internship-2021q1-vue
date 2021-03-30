<template>
  <section class="main__customer">
    <p class="main__paragraph main__paragraph--bubble">{{ getLorem(23) }}</p>
    <div class="main__user">
      <img :src="picture" alt="user avatar" class="main__avatar" />
      <div class="main__user-info">
        <h3 class="main__h3">{{ name }}</h3>
        <p class="main__paragraph">{{ position }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainCustomer',
  props: {
    name: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    picture: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.main__customer {
  .main__paragraph {
    &--bubble {
      position: relative;
      width: 73%;
      padding: 5% 3%;
      background-color: $bubbleGrey;
      border-radius: 3px;
      line-height: 18px;
      font-style: italic;
    }

    &--bubble::after {
      content: '';
      position: absolute;
      border-left: 6px solid $bubbleGrey;
      border-right: 6px solid transparent;
      border-top: 6px solid $bubbleGrey;
      border-bottom: 6px solid transparent;
      left: 15%;
      bottom: -12px;
    }

    &--bubble::before {
      content: '';
      position: absolute;
      border-left: 6px solid transparent;
      border-right: 6px solid $bubbleGrey;
      border-top: 6px solid $bubbleGrey;
      border-bottom: 6px solid transparent;
      left: 11%;
      bottom: -12px;
    }
  }
  .main__user {
    display: flex;
    margin: 8% 0 0 2%;

    .main__avatar {
      width: 18%;
    }
  }

  .main__user-info {
    margin: 3% 0 0 5%;

    .main__h3 {
      margin-bottom: 9%;
    }
  }
}
</style>
