import { lorems } from '../common/lorem';
export default {
  methods: {
    getLorem(amount) {
      return lorems
        .split(' ')
        .splice(0, amount)
        .join(' ');
    }
  }
};
