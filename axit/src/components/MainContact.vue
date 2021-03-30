<template>
  <div class="main__wrapper">
    <section class="main__section">
      <h2 class="main__h2 main__h2--white">Contact Us</h2>
      <div class="main__line"></div>
      <p class="main__paragraph">
        {{ getLorem(8) }}
      </p>
      <form class="main__form">
        <div class="main__form-left">
          <input
            type="text"
            placeholder="Name"
            class="main__form-input"
            v-model="name"
          />
          <input
            type="text"
            placeholder="Email"
            class="main__form-input"
            v-model="email"
          />
          <input
            type="text"
            placeholder="Subject"
            class="main__form-input"
            v-model="subject"
          />
        </div>
        <div class="main__form-right">
          <textarea
            name="Message"
            cols="40"
            rows="5"
            class="main__form-input main__form-input-right"
            placeholder="Message"
            v-model="message"
          />
        </div>
      </form>
      <CustomButton
        @click.native="showMsg()"
        text="Send Message"
        class="main__button"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainContact',

  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  },

  methods: {
    showMsg() {
      console.log(
        `name: ${this.name}\n email: ${this.email}\n subject: ${this.subject}\n message: ${this.message}`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.main__section {
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  padding: 4% 9%;

  .main__h2 {
    font-size: $hdrMedium;
    font-family: $raleway;
    text-transform: uppercase;
  }

  .main__line {
    margin: 23px 0;
  }

  .main__paragraph {
    margin-top: 8px;
  }

  .main__button {
    width: 150px;
    height: 45px;
  }
}

.main__form {
  display: flex;
  width: 100%;
  margin: 7% 0 1% 0;

  .main__form-input {
    display: block;
    margin: 0 0 6% 4%;
    width: 37vw;
    line-height: 2;
    border: none;
    border-bottom: solid 1px $formInput;
    font-size: $paragraph;

    &::placeholder {
      color: $formInput;
      font-family: $raleway;
    }
  }

  .main__form-right {
    margin-left: 6%;

    .main__form-input-right {
      height: 81%;
    }
  }
}
</style>
