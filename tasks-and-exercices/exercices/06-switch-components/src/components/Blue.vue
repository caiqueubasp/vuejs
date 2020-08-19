<template>
  <div>
    <p>Blue color has clicked {{ num }} times</p>
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
    this.num = num++;
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
  background-color: lightblue;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>
