<template>
  <div class="main__wrapper">
    <section class="main__section">
      <h2 class="main__h2">why this is awesome</h2>
      <div class="main__line"></div>
      <p class="main__paragraph">
        {{ getLorem(8) }}
      </p>
      <ul class="main__feature-list">
        <li
          v-for="article in articles"
          :key="article.header"
          class="main__list-item"
        >
          <i :class="[article.icon, article.classes]" class="main__icon"></i>
          <h3 class="main__h3">{{ article.header }}</h3>
          <p class="main__paragraph main__paragraph--u-icon">
            {{ getLorem(21) }}
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainAwesome',
  data() {
    return {
      articles: [
        {
          header: 'Thoughtful Design',
          icon: 'far fa-lightbulb',
          classes: 'main__icon--bulb'
        },
        {
          header: 'Well Crafted',
          icon: 'far fa-keyboard',
          classes: 'main__icon--keyboard'
        },
        {
          header: 'Easy to Customize',
          icon: 'fas fa-bolt',
          classes: 'main__icon--bolt'
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
  padding: 8% 9%;

  .main__h2 {
    font-size: $hdrMedium;
    font-family: $raleway;
    text-transform: uppercase;
  }

  .main__line {
    margin: 2% 0;
  }

  .main__feature-list {
    margin-top: 7%;
    display: flex;
  }

  .main__list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .main__icon {
    display: block;
    max-height: 40px;
    margin-top: 1%;
    border: solid $orange 2px;
    border-radius: 50%;
    color: $orange;

    &--bulb {
      font-size: 27px;
      padding: 20px 22px 44px 22px;
    }

    &--keyboard {
      font-size: 30px;
      padding: 20px 15px 44px 15px;
    }

    &--bolt {
      font-size: 29px;
      padding: 20px 22px 44px 22px;
    }
  }

  .main__h3 {
    margin-top: 8%;
  }

  .main__paragraph--u-icon {
    width: 97%;
    margin-top: 6%;
    line-height: 1.5;
  }
}
</style>
