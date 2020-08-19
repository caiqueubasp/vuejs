<template>
  <div>
    The New

    <button @click="num++">Counter</button>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      num: 0
    };
  },
  destroyed() {
    console.log("Destroyed");
  },
  deactivated() {
    console.log("Deactiveted");
  },
  activated() {
    console.log("activeted");
  }
};
</script>
