<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <li class="list-group-item" v-for="index in 5" v-bind:key="index">Server #{{ index }}</li>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p>Server Details are currently not updated</p>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      index: ["Server", "Bosta"],
    };
  },
};
</script>


<style scoped>
div {
  background: rgba(197, 255, 250, 0.8);
}

li {
  background: #4e4d4c;
  color: #fff;
  font-size: 2rem;
}
</style>