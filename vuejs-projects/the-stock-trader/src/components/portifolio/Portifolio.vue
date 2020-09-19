<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock" :stock="stock"></app-stock>
    Hi
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({ stocks: "stockPortifolio" }),
  },
  components: {
    appStock: Stock,
  },
};
</script>
