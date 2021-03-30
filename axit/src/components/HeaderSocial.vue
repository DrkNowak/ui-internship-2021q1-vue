<template>
  <div class="hdr__social">
    <article class="hdr__article">
      <h3 class="hdr__h3">Social Media</h3>
      <p class="hdr__p">
        {{ getLorem(12) }}
      </p>
    </article>
    <SocialMedia class="hdr__media" />
  </div>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue';

export default {
  name: 'HeaderSocial',
  components: {
    SocialMedia
  }
};
</script>

<style lang="scss" scoped>
.hdr__social {
  display: flex;
  align-items: center;
  padding: 1% 5% 1% 11%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.38);
  .hdr__article {
    width: 35%;
    .hdr__h3 {
      font-size: $hdrSmall;
      font-weight: 700;
      line-height: 2;
    }
    .hdr__p {
      font-size: $paragraph;
      line-height: 19px;
      color: $paragraphGrey;
    }
  }
  .hdr__media {
    width: 65%;
    margin-left: 4%;
  }
}
</style>
