<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 2900 },
        { id: 3, name: "Apple", price: 521 },
        { id: 4, name: "Twitter", price: 54 },
      ],
    };
  },
  components: {
    AppStock: Stock,
  },
};
</script>
