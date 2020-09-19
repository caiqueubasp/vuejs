<template>
  <div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quae vitae at blanditiis velit ipsum voluptatem
      soluta alias est dicta harum, architecto libero enim! Quam dolorem aperiam molestias eos consequatur?
    </p>
    <hr />
    <app-home></app-home>
    <hr />

    <p v-for="item in 5" :key="item">{{ item }}</p>
  </div>
</template>

<script>
import Stock from "../stocks/Stock.vue";

import Home from "../Home.vue";

export default {
  components: {
    "app-stock": Stock,
    appHome: Home,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>
