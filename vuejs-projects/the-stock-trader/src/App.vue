<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
      <div class="col-xs-12">
        <app-porra></app-porra>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Porra from "./components/stocks/Stock.vue";

export default {
  components: {
    appHeader: Header,
    appPorra: Porra,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style></style>
