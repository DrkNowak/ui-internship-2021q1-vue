<template>
  <div class="main__wrapper">
    <section class="main__section">
      <div class="main__button-group">
        <input type="radio" id="tab 1" name="tab" class="main__input" checked />
        <label for="tab 1" class="main__label main__label--1">tab 1</label>
        <input type="radio" id="tab 2" name="tab" class="main__input" />
        <label for="tab 2" class="main__label main__label--2">tab 2</label>
        <input type="radio" id="tab 3" name="tab" class="main__input" />
        <label for="tab 3" class="main__label main__label--3">tab 3</label>
      </div>
      <article class="main__article">
        <h3 class="main__h3">Tabs with soft transitioning effect.</h3>
        <p class="main__paragraph">
          {{ getLorem(36) }}
        </p>
        <p class="main__paragraph main__paragraph--last">
          {{ getLorem(12) }}
        </p>
        <CustomButton text="Download" class="main__button" />
      </article>
      <img class="main__gallery" src="../assets/images/city.png" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainTabs',
  components: {}
};
</script>

<style lang="scss" scoped>
.main__section {
  background-color: $bgcSwap;
  .main__button-group {
    width: 10%;
    margin-top: 4%;
    .main__label {
      display: flex;
      height: 113px;
      width: 114px;
      background-color: $inputblack;
      font-family: $openSans;
      align-items: center;
      justify-content: center;
      font-size: $buttonFontSize;
      font-weight: 600;
      text-transform: uppercase;
      color: $white;
    }
    .main__input {
      display: none;
    }

    .main__input:checked + .main__label {
      background-color: $orange;
    }

    .main__label--1 {
      border-radius: 3px 3px 0 0;
    }
    .main__label--2 {
      border-radius: 0;
    }
    .main__label--3 {
      border-radius: 0 0 3px 3px;
    }
  }
  .main__article {
    width: 45%;
    margin-top: 50px;
    margin-left: 30px;
    line-height: 20px;
    .main__h3 {
      margin-top: 7px;
    }
    .main__paragraph {
      margin-top: 10%;
    }
    .main__paragraph--last {
      margin-top: 4%;
      margin-bottom: 9%;
    }
    .main__button {
      height: 44px;
      width: 120px;
    }
  }
  .main__gallery {
    margin-top: 6%;
    max-width: 29%;
    max-height: 260px;
    object-fit: contain;
  }
}
</style>
