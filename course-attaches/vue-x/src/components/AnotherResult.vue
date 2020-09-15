<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number os Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    mapGetters: {
      doubleCounter() {
        this.$store.state.doubleCounter;
      },
      stringCounter() {
        this.$store.state.stringCounter;
      },
    },
  },
};
</script>
