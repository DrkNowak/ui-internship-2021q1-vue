<template>
  <div class="main__wrapper">
    <section class="main__section">
      <img src="../assets/images/subCity.png" class="main__photo" />
      <article class="main__article">
        <h3 class="main__h3">Sub list section</h3>
        <div class="main__line"></div>
        <p class="main__paragraph">
          {{ getLorem(23) }}
        </p>
        <ul class="main__list">
          <li class="main__list-item">
            <i class="fas fa-cloud-upload-alt main__icon"></i>
            <article class="main__sub-list-desc">
              <h4 class="main__h4">Title</h4>
              <p class="main__paragraph main__paragraph--list">
                {{ getLorem(12) }}
              </p>
            </article>
          </li>
          <li class="main__list-item">
            <i class="fas fa-cloud-download-alt main__icon"></i>
            <article class="main__sub-list-desc">
              <h4 class="main__h4">Title</h4>
              <p class="main__paragraph main__paragraph--list">
                {{ getLorem(23) }}
              </p>
            </article>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainSubList'
};
</script>

<style lang="scss" scoped>
.main__section {
  .main__photo {
    margin-top: 15px;
    margin-left: -27px;
  }
  .main__article {
    margin-top: 1%;
    margin-left: 14%;
  }
  .main__line {
    margin-top: 6%;
    margin-left: 1%;
  }
  .main__paragraph {
    margin-top: 5%;
    margin-left: 1%;
    line-height: 1.5;
  }
  .main__list-item {
    display: flex;
    width: 98%;
    margin-top: 9%;
    margin-left: 1%;
  }
  .main__icon {
    max-height: 40px;
    font-size: 15px;
    padding: 10px 10px 10px 8px;
    border: solid $orange 2px;
    border-radius: 50%;
    color: $orange;
  }
  .main__sub-list-desc {
    margin-left: 6%;
  }
  .main__h4 {
    font-size: $paragraph;
  }
  .main__paragraph--list {
    margin-top: 5px;
  }
}
</style>
