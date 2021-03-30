<template>
  <div class="main__wrapper">
    <section class="main__section">
      <article class="main__article">
        <h3 class="main__h3">Standard Picture Section</h3>
        <div class="main__line"></div>
        <p class="main__paragraph">
          {{ getLorem(36) }}
        </p>
        <p class="main__paragraph main__paragraph--last">
          {{ getLorem(12) }}
        </p>
      </article>
      <img src="../assets/images/standardPic.png" class="main__photo" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainStandardPic'
};
</script>

<style lang="scss" scoped>
.main__section {
  padding: 5% 10%;
  background-color: $bgcSwap;
  .main__article {
    margin: 40px 0 0 5px;
    .main__h3 {
      margin-left: 1%;
    }
    .main__line {
      margin: 5% 0 0 1%;
    }
    .main__paragraph {
      width: 33.8vw;
      margin: 5% 0 0 1%;
      line-height: 1.5;
    }
    .main__paragraph--last {
      width: 35vw;
      margin-top: 3%;
    }
  }
  .main__photo {
    margin: 1% 0 0 13%;
  }
}
</style>
