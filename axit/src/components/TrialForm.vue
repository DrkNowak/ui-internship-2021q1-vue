<template>
  <div class="hdr__form">
    <h3 class="form__hdr">
      {{ $t('trial_hdr') }}
      <span class="form__hdr--orange">{{ $t('free') }}</span>
      {{ $t('today') }}
    </h3>
    <form>
      <input type="text" placeholder="Name" class="form__input" />
      <input type="text" placeholder="Email" class="form__input" />
      <input
        type="text"
        placeholder="Password"
        class="form__input form__input--last"
      />
    </form>
    <CustomButton text="Get Started" class="form__submit" />
  </div>
</template>

<script>
export default {
  name: 'TrialForm'
};
</script>

<style lang="scss" scoped>
.hdr__form {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 360px;
  max-height: 360px;
  margin: 4% 0 0 17%;
  border-radius: 3px;
  background-color: $white;
  text-align: center;
  .form__hdr {
    width: 100%;
    margin-bottom: 7%;
    padding-top: 5%;
    padding-bottom: 5%;
    border-radius: 3px 3px 0px 0px;
    font-size: $hdrSmall;
    font-weight: 700;
    color: #333;
    background-color: $formgrey;
  }
  .form__hdr--orange {
    color: $orange;
    text-transform: uppercase;
  }
  .form__input {
    display: block;
    width: 47%;
    margin-bottom: 15%;
    margin-left: 15%;
    padding-left: 4%;
    padding-right: 10vw;
    line-height: 2;
    border: none;
    border-bottom: solid 1px $formInput;
    font-size: $paragraph;
    &::placeholder {
      color: $formInput;
    }
  }
  .form__input--last {
    margin-top: 15%;
    margin-bottom: 17%;
  }
  .form__submit {
    position: absolute;
    width: 100%;
    height: 15%;
    bottom: 0;
    left: 0;
    border: none;
    background-color: $orange;
    border-radius: 0;
  }
}
</style>
